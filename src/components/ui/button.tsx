import React, { useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
  Animated,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import {
  ButtonVariant,
  ButtonSize,
  buttonContainerVariants,
  buttonTextVariants,
  applyVariants,
} from '../../styles/variants';

export type { ButtonVariant, ButtonSize };

export interface ButtonProps {
  /**
   * Function to call when button is pressed
   */
  onPress: () => void;
  /**
   * Button text content
   */
  title?: string;
  /**
   * Visual style variant of the button
   * @default 'default'
   */
  variant?: ButtonVariant;
  /**
   * Size variant of the button
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether to show loading spinner
   * @default false
   */
  loading?: boolean;
  /**
   * Additional styles for the button container
   */
  style?: ViewStyle;
  /**
   * Additional styles for the button text
   */
  textStyle?: TextStyle;
  /**
   * Custom children to render instead of title
   */
  children?: React.ReactNode;
  /**
   * Whether to disable the scale animation
   * @default false
   */
  disableAnimation?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  children,
  disableAnimation = false,
}) => {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Apply variants using the new system
  const containerVariantStyle = applyVariants(theme, buttonContainerVariants.variant, variant);
  const containerSizeStyle = applyVariants(theme, buttonContainerVariants.size, size);
  
  const textBaseStyle = buttonTextVariants.base(theme);
  const textVariantStyle = applyVariants(theme, buttonTextVariants.variant, variant);
  const textSizeStyle = applyVariants(theme, buttonTextVariants.size, size);

  const handlePressIn = () => {
    if (disableAnimation || disabled || loading) return;
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (disableAnimation || disabled || loading) return;
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const getSpinnerColor = () => {
    switch (variant) {
      case 'outline':
      case 'ghost':
      case 'link':
        return theme.colors.foreground;
      case 'secondary':
        return theme.colors.secondaryForeground;
      case 'destructive':
        return theme.colors.destructiveForeground;
      default:
        return theme.colors.primaryForeground;
    }
  };

  const isDisabled = disabled || loading;
  
  const containerStyle = [
    styles.button,
    containerVariantStyle,
    containerSizeStyle,
    isDisabled && { opacity: 0.5 },
    style,
  ];

  const finalTextStyle = [
    textBaseStyle,
    textVariantStyle,
    textSizeStyle,
    textStyle,
  ];

  const content = children || (
    <View style={styles.contentContainer}>
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={getSpinnerColor()}
          style={{ marginRight: title ? theme.spacing[2] : 0 }}
        />
      ) : null}
      {title && !loading && (
        <Text style={finalTextStyle}>{title}</Text>
      )}
      {title && loading && (
        <Text style={[finalTextStyle, { marginLeft: theme.spacing[2] }]}>{title}</Text>
      )}
    </View>
  );

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={1}>
      <Animated.View
        style={[
          containerStyle,
          !disableAnimation && { transform: [{ scale: scaleAnim }] },
        ]}>
        {children ? children : content}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;