import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  Animated,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import {
  AlertVariant,
  AlertSize,
  alertContainerVariants,
  alertTitleVariants,
  alertDescriptionVariants,
  alertIconVariants,
  applyVariants,
} from '../../styles/variants';

// Try to import Reanimated, fallback to regular Animated if not available
let ReanimatedModule: any;
let useSharedValue: any;
let useAnimatedStyle: any;
let withTiming: any;
let withSpring: any;
let Easing: any;

try {
  ReanimatedModule = require('react-native-reanimated');
  useSharedValue = ReanimatedModule.useSharedValue;
  useAnimatedStyle = ReanimatedModule.useAnimatedStyle;
  withTiming = ReanimatedModule.withTiming;
  withSpring = ReanimatedModule.withSpring;
  Easing = ReanimatedModule.Easing;
} catch (e) {
  console.warn('react-native-reanimated is not properly configured. Using fallback animation.');
  ReanimatedModule = null;
}

export type { AlertVariant, AlertSize };

export interface AlertProps {
  /**
   * Visual variant of the alert
   * @default 'default'
   */
  variant?: AlertVariant;
  /**
   * Size of the alert
   * @default 'md'
   */
  size?: AlertSize;
  /**
   * Alert title text
   */
  title?: string;
  /**
   * Alert description text
   */
  description?: string;
  /**
   * Custom icon to display
   */
  icon?: React.ReactNode;
  /**
   * Whether to show default icon based on variant
   * @default true
   */
  showIcon?: boolean;
  /**
   * Custom styles for the alert container
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Custom children to render instead of title/description
   */
  children?: React.ReactNode;
  /**
   * Whether to animate the alert entrance
   * @default true
   */
  animated?: boolean;
  /**
   * Accessibility label for the alert
   */
  accessibilityLabel?: string;
}

export interface AlertIconProps {
  variant: AlertVariant;
  size: AlertSize;
  color: string;
  iconSize: number;
}

export interface AlertTitleProps {
  children: React.ReactNode;
  variant: AlertVariant;
  size: AlertSize;
  style?: StyleProp<TextStyle>;
}

export interface AlertDescriptionProps {
  children: React.ReactNode;
  variant: AlertVariant;
  size: AlertSize;
  style?: StyleProp<TextStyle>;
}

// Default icons for each variant
const getDefaultIcon = (variant: AlertVariant): string => {
  switch (variant) {
    case 'destructive':
      return '⚠️';
    case 'success':
      return '✅';
    case 'warning':
      return '⚡';
    case 'info':
      return 'ℹ️';
    case 'outline':
    case 'ghost':
    case 'default':
    default:
      return '💡';
  }
};

// Alert Icon Component
export const AlertIcon: React.FC<AlertIconProps> = ({
  variant,
  size,
  color,
  iconSize,
}) => {
  const defaultIcon = getDefaultIcon(variant);
  
  return (
    <Text style={[{ color, fontSize: iconSize }, styles.icon]}>
      {defaultIcon}
    </Text>
  );
};

// Alert Title Component
export const AlertTitle: React.FC<AlertTitleProps> = ({
  children,
  variant,
  size,
  style,
}) => {
  const { theme } = useTheme();
  
  const titleBaseStyle = alertTitleVariants.base(theme);
  const titleVariantStyle = applyVariants(theme, alertTitleVariants.variant, variant);
  const titleSizeStyle = applyVariants(theme, alertTitleVariants.size, size);
  
  return (
    <Text
      style={[titleBaseStyle, titleVariantStyle, titleSizeStyle, style]}
      accessibilityRole="text"
      accessibilityLabel={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Text>
  );
};

// Alert Description Component
export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  children,
  variant,
  size,
  style,
}) => {
  const { theme } = useTheme();
  
  const descriptionBaseStyle = alertDescriptionVariants.base(theme);
  const descriptionVariantStyle = applyVariants(theme, alertDescriptionVariants.variant, variant);
  const descriptionSizeStyle = applyVariants(theme, alertDescriptionVariants.size, size);
  
  return (
    <Text
      style={[descriptionBaseStyle, descriptionVariantStyle, descriptionSizeStyle, style]}
      accessibilityRole="text"
      accessibilityLabel={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Text>
  );
};

// Main Alert Component
const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  size = 'md',
  title,
  description,
  icon,
  showIcon = true,
  style,
  children,
  animated = true,
  accessibilityLabel,
}) => {
  const { theme } = useTheme();
  
  // Animation values - use Reanimated if available, otherwise use regular Animated
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;
  const scale = useRef(new Animated.Value(0.95)).current;
  
  // Reanimated values (if available)
  const reanimatedOpacity = ReanimatedModule ? useSharedValue(0) : null;
  const reanimatedTranslateY = ReanimatedModule ? useSharedValue(10) : null;
  const reanimatedScale = ReanimatedModule ? useSharedValue(0.95) : null;
  
  // Apply variants
  const containerVariantStyle = applyVariants(theme, alertContainerVariants.variant, variant);
  const containerSizeStyle = applyVariants(theme, alertContainerVariants.size, size);
  
  const iconVariantStyle = applyVariants(theme, alertIconVariants.variant, variant);
  const iconSizeStyle = applyVariants(theme, alertIconVariants.size, size);
  
  // Animation effect
  useEffect(() => {
    if (animated) {
      if (ReanimatedModule && reanimatedOpacity && reanimatedTranslateY && reanimatedScale) {
        // Use Reanimated
        reanimatedOpacity.value = withTiming(1, {
          duration: 300,
          easing: Easing.out(Easing.cubic),
        });
        reanimatedTranslateY.value = withSpring(0, {
          damping: 15,
          stiffness: 200,
        });
        reanimatedScale.value = withSpring(1, {
          damping: 15,
          stiffness: 200,
        });
      } else {
        // Use regular Animated
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(translateY, {
            toValue: 0,
            tension: 200,
            friction: 15,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            tension: 200,
            friction: 15,
            useNativeDriver: true,
          }),
        ]).start();
      }
    } else {
      if (ReanimatedModule && reanimatedOpacity && reanimatedTranslateY && reanimatedScale) {
        reanimatedOpacity.value = 1;
        reanimatedTranslateY.value = 0;
        reanimatedScale.value = 1;
      } else {
        opacity.setValue(1);
        translateY.setValue(0);
        scale.setValue(1);
      }
    }
  }, [animated]);
  
  // Animated styles
  const reanimatedStyle = ReanimatedModule && useAnimatedStyle ? useAnimatedStyle(() => ({
    opacity: reanimatedOpacity?.value || 1,
    transform: [
      { translateY: reanimatedTranslateY?.value || 0 },
      { scale: reanimatedScale?.value || 1 },
    ],
  })) : null;
  
  const regularAnimatedStyle = {
    opacity,
    transform: [
      { translateY },
      { scale },
    ],
  };
  
  // Determine if we should show an icon
  const shouldShowIcon = showIcon && (icon || variant !== 'ghost');
  
  const renderContent = () => {
    if (children) {
      return children;
    }
    
    return (
      <View style={styles.content}>
        {title && (
          <AlertTitle variant={variant} size={size}>
            {title}
          </AlertTitle>
        )}
        {description && (
          <AlertDescription 
            variant={variant} 
            size={size}
            style={title ? { marginTop: theme.spacing[1] } : undefined}
          >
            {description}
          </AlertDescription>
        )}
      </View>
    );
  };
  
  const AnimatedComponent = ReanimatedModule ? ReanimatedModule.default.View : Animated.View;
  const animatedStyle = ReanimatedModule && animated ? reanimatedStyle : (animated ? regularAnimatedStyle : {});
  
  return (
    <AnimatedComponent
      style={[
        styles.container,
        containerVariantStyle,
        containerSizeStyle,
        animatedStyle,
        style,
      ]}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={accessibilityLabel || title}
    >
      {shouldShowIcon && (
        <View style={[styles.iconContainer, { marginRight: theme.spacing[3] }]}>
          {icon || (
            <AlertIcon
              variant={variant}
              size={size}
              color={iconVariantStyle.color}
              iconSize={iconSizeStyle.size}
            />
          )}
        </View>
      )}
      {renderContent()}
    </AnimatedComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 24,
  },
  icon: {
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});

export default Alert;