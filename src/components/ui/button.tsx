import React, {useRef} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
  Animated,
  TextStyle,
} from 'react-native';
import {COLORS, FONTS} from '../../styles/typography';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Spinner from './spinner';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * Function to call when button is pressed
   */
  onPress: () => void;
  /**
   * Button text content
   */
  title: string;
  /**
   * Visual style variant of the button
   * @default 'default'
   */
  variant?: ButtonVariant;
  /**
   * Size variant of the button
   * @default 'medium'
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
   * Node to render before the button text
   */
  leftNode?: React.ReactNode;
  /**
   * Node to render after the button text
   */
  rightNode?: React.ReactNode;
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
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  leftNode,
  rightNode,
  disableAnimation = false,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (disableAnimation) return;
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (disableAnimation) return;
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    (disabled || loading) && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${size}Text`],
    styles[`${variant}Text`],
    textStyle,
  ];

  const content = (
    <View style={styles.contentContainer}>
      {leftNode}
      <Text style={textStyles}>{title}</Text>
      {rightNode}
    </View>
  );

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={1}>
      <Animated.View
        style={[
          buttonStyles,
          {transform: [{scale: scaleAnim}]},
        ]}>
        {loading ? (
          <Spinner 
            size="small" 
            color={variant === 'light' ? COLORS.gray[800] : COLORS.white} 
          />
        ) : (
          content
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: responsiveHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.MEDIUM,
    paddingHorizontal: responsiveWidth(2),
  },
  // Button variants
  default: {
    backgroundColor: COLORS.gray[500],
  },
  primary: {
    backgroundColor: COLORS.blue[600],
  },
  secondary: {
    backgroundColor: COLORS.purple[600],
  },
  success: {
    backgroundColor: COLORS.green[600],
  },
  danger: {
    backgroundColor: COLORS.red[600],
  },
  warning: {
    backgroundColor: COLORS.yellow[600],
  },
  info: {
    backgroundColor: COLORS.blue[400],
  },
  light: {
    backgroundColor: COLORS.gray[100],
  },
  dark: {
    backgroundColor: COLORS.gray[800],
  },
  // Text colors for variants
  defaultText: {
    color: COLORS.white,
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.white,
  },
  successText: {
    color: COLORS.white,
  },
  dangerText: {
    color: COLORS.white,
  },
  warningText: {
    color: COLORS.white,
  },
  infoText: {
    color: COLORS.white,
  },
  lightText: {
    color: COLORS.gray[800],
  },
  darkText: {
    color: COLORS.white,
  },
  // Button sizes
  small: {
    paddingVertical: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(3),
  },
  medium: {
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(4),
  },
  large: {
    paddingVertical: responsiveHeight(1.6),
    paddingHorizontal: responsiveWidth(5),
  },
  // Text sizes
  smallText: {
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveFontSize(2.2),
  },
  mediumText: {
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveFontSize(2.4),
  },
  largeText: {
    fontSize: responsiveFontSize(2),
    lineHeight: responsiveFontSize(2.6),
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
