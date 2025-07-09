import React from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Typography from './typography';
import {
  SpinnerVariant,
  SpinnerSize,
  spinnerContainerVariants,
  spinnerColorVariants,
  spinnerSizeVariants,
  spinnerOverlayVariants,
  applyVariants,
} from '../../styles/variants';

export type { SpinnerVariant, SpinnerSize };

export interface SpinnerProps {
  /**
   * Visual variant of the spinner
   * @default 'default'
   */
  variant?: SpinnerVariant;
  /**
   * Size variant of the spinner
   * @default 'md'
   */
  size?: SpinnerSize;
  /**
   * Custom color override (overrides variant color)
   */
  color?: string;
  /**
   * Loading text to display below spinner
   */
  label?: string;
  /**
   * Whether the spinner should be centered in its container
   * @default true
   */
  centered?: boolean;
  /**
   * Whether the spinner should be visible
   * @default true
   */
  visible?: boolean;
  /**
   * Additional styles for the container
   */
  containerStyle?: ViewStyle;
  /**
   * Additional styles for the text label
   */
  labelStyle?: ViewStyle;
  /**
   * Whether to show as overlay (covers entire parent)
   * @default false
   */
  overlay?: boolean;
  /**
   * Overlay type when overlay is true
   * @default 'light'
   */
  overlayType?: 'none' | 'light' | 'dark' | 'blur';
  /**
   * Custom overlay styles
   */
  overlayStyle?: ViewStyle;
}

const Spinner: React.FC<SpinnerProps> = ({
  variant = 'default',
  size = 'md',
  color,
  label,
  centered = true,
  visible = true,
  containerStyle,
  labelStyle,
  overlay = false,
  overlayType = 'light',
  overlayStyle,
}) => {
  const { theme } = useTheme();

  if (!visible) return null;

  // Apply variants using the new system
  const containerVariantStyle = applyVariants(theme, spinnerContainerVariants.variant, variant);
  const containerSizeStyle = applyVariants(theme, spinnerContainerVariants.size, size);
  const centeredStyle = centered ? spinnerContainerVariants.centered(theme) : {};
  
  const colorStyle = applyVariants(theme, spinnerColorVariants.variant, variant);
  const sizeStyle = applyVariants(theme, spinnerSizeVariants.size, size);
  
  // Use custom color if provided, otherwise use variant color
  const spinnerColor = color || colorStyle.color;
  const spinnerSize = sizeStyle.size;

  const containerStyles = [
    styles.container,
    containerVariantStyle,
    containerSizeStyle,
    centeredStyle,
    containerStyle,
  ];

  const labelStyles = [
    styles.label,
    { 
      color: spinnerColor,
      marginTop: theme.spacing[2],
    },
    labelStyle,
  ];

  const spinnerContent = (
    <View style={containerStyles}>
      <ActivityIndicator 
        size={spinnerSize} 
        color={spinnerColor} 
      />
      {label && (
        <Typography 
          variant="caption" 
          style={labelStyles}>
          {label}
        </Typography>
      )}
    </View>
  );

  // Return overlay version if requested
  if (overlay) {
    const overlayPositionStyle = spinnerOverlayVariants.position.absolute();
    const overlayTypeStyle = applyVariants(theme, spinnerOverlayVariants.type, overlayType);
    
    return (
      <View style={[
        styles.overlay,
        overlayPositionStyle,
        overlayTypeStyle,
        centeredStyle,
        overlayStyle,
      ]}>
        {spinnerContent}
      </View>
    );
  }

  return spinnerContent;
};

// Loading Overlay Component for full-screen loading
export interface LoadingOverlayProps extends Omit<SpinnerProps, 'overlay'> {
  /**
   * Whether the loading overlay is visible
   * @default false
   */
  loading?: boolean;
  /**
   * Loading message to display
   */
  message?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  loading = false,
  message = 'Loading...',
  variant = 'primary',
  size = 'lg',
  overlayType = 'blur',
  ...props
}) => {
  if (!loading) return null;

  return (
    <Spinner
      {...props}
      variant={variant}
      size={size}
      label={message}
      overlay={true}
      overlayType={overlayType}
      visible={loading}
    />
  );
};

// Inline Spinner for buttons and small spaces
export interface InlineSpinnerProps extends Omit<SpinnerProps, 'centered' | 'overlay' | 'label'> {
  /**
   * Spacing to add around the spinner
   * @default 'sm'
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md';
}

export const InlineSpinner: React.FC<InlineSpinnerProps> = ({
  spacing = 'sm',
  size = 'sm',
  ...props
}) => {
  const { theme } = useTheme();
  
  const spacingMap = {
    none: 0,
    xs: theme.spacing[1],
    sm: theme.spacing[2],
    md: theme.spacing[3],
  };

  return (
    <Spinner
      {...props}
      size={size}
      centered={false}
      containerStyle={{
        margin: spacingMap[spacing],
        ...props.containerStyle,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // Base styles handled by variants
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    includeFontPadding: false,
  },
});

export default Spinner;