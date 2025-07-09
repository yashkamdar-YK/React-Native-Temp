import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Typography from './typography';
import {
  CardVariant,
  CardSize,
  cardContainerVariants,
  cardHeaderVariants,
  cardContentVariants,
  cardFooterVariants,
  applyVariants,
} from '../../styles/variants';

export type { CardVariant, CardSize };

export interface CardProps extends TouchableOpacityProps {
  /**
   * Visual variant of the card
   * @default 'default'
   */
  variant?: CardVariant;
  /**
   * Size variant of the card
   * @default 'md'
   */
  size?: CardSize;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Additional styles for the card container
   */
  style?: ViewStyle;
  /**
   * Whether the card should be pressable
   * @default false
   */
  pressable?: boolean;
  /**
   * Function to call when card is pressed (only if pressable is true)
   */
  onPress?: () => void;
  /**
   * Whether to disable the press animation
   * @default false
   */
  disableAnimation?: boolean;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  size = 'md',
  children,
  style,
  pressable = false,
  onPress,
  disableAnimation = false,
  ...rest
}) => {
  const { theme } = useTheme();

  // Apply variants using the new system
  const containerBaseStyle = cardContainerVariants.base(theme);
  const containerVariantStyle = applyVariants(theme, cardContainerVariants.variant, variant);
  const containerSizeStyle = applyVariants(theme, cardContainerVariants.size, size);

  const cardStyle = [
    styles.card,
    containerBaseStyle,
    containerVariantStyle,
    containerSizeStyle,
    style,
  ];

  if (pressable && onPress) {
    return (
      <TouchableOpacity
        style={cardStyle}
        onPress={onPress}
        activeOpacity={disableAnimation ? 1 : 0.8}
        {...rest}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={cardStyle}>
      {children}
    </View>
  );
};

// Card Header component
export interface CardHeaderProps {
  /**
   * Header content
   */
  children: React.ReactNode;
  /**
   * Size variant (inherits from parent Card if not specified)
   * @default 'md'
   */
  size?: CardSize;
  /**
   * Additional styles
   */
  style?: ViewStyle;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  size = 'md',
  style,
}) => {
  const { theme } = useTheme();

  const headerBaseStyle = cardHeaderVariants.base(theme);
  const headerSizeStyle = applyVariants(theme, cardHeaderVariants.size, size);

  return (
    <View style={[
      styles.header,
      headerBaseStyle,
      headerSizeStyle,
      style,
    ]}>
      {children}
    </View>
  );
};

// Card Content component
export interface CardContentProps {
  /**
   * Content
   */
  children: React.ReactNode;
  /**
   * Size variant (inherits from parent Card if not specified)
   * @default 'md'
   */
  size?: CardSize;
  /**
   * Additional styles
   */
  style?: ViewStyle;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  size = 'md',
  style,
}) => {
  const { theme } = useTheme();

  const contentBaseStyle = cardContentVariants.base(theme);
  const contentSizeStyle = applyVariants(theme, cardContentVariants.size, size);

  return (
    <View style={[
      styles.content,
      contentBaseStyle,
      contentSizeStyle,
      style,
    ]}>
      {children}
    </View>
  );
};

// Card Footer component
export interface CardFooterProps {
  /**
   * Footer content
   */
  children: React.ReactNode;
  /**
   * Size variant (inherits from parent Card if not specified)
   * @default 'md'
   */
  size?: CardSize;
  /**
   * Additional styles
   */
  style?: ViewStyle;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  size = 'md',
  style,
}) => {
  const { theme } = useTheme();

  const footerBaseStyle = cardFooterVariants.base(theme);
  const footerSizeStyle = applyVariants(theme, cardFooterVariants.size, size);

  return (
    <View style={[
      styles.footer,
      footerBaseStyle,
      footerSizeStyle,
      style,
    ]}>
      {children}
    </View>
  );
};

// Card Title component for convenience
export interface CardTitleProps {
  /**
   * Title text
   */
  children: React.ReactNode;
  /**
   * Additional styles
   */
  style?: ViewStyle;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  style,
}) => (
  <Typography variant="h3" weight="semibold" style={style}>
    {children}
  </Typography>
);

// Card Description component for convenience
export interface CardDescriptionProps {
  /**
   * Description text
   */
  children: React.ReactNode;
  /**
   * Additional styles
   */
  style?: ViewStyle;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  style,
}) => (
  <Typography variant="body2" color="muted" style={style}>
    {children}
  </Typography>
);

const styles = StyleSheet.create({
  card: {
    // Base styles handled by variants
  },
  header: {
    // Base styles handled by variants
  },
  content: {
    // Base styles handled by variants
  },
  footer: {
    // Base styles handled by variants
  },
});

export default Card;