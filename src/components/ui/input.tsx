import React, {FC, useState} from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '../../styles/typography';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export interface InputProps extends Omit<RNTextInputProps, 'style'> {
  /**
   * Label text for the input
   */
  label?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether to show a clear button when text is entered
   * @default false
   */
  clearable?: boolean;
  /**
   * Custom styles for the input container
   */
  containerStyle?: ViewStyle;
  /**
   * Custom styles for the input field
   */
  inputStyle?: TextStyle;
  /**
   * Custom styles for the label
   */
  labelStyle?: TextStyle;
  /**
   * Custom styles for the helper text
   */
  helperTextStyle?: TextStyle;
  /**
   * Custom styles for the error text
   */
  errorTextStyle?: TextStyle;
  /**
   * Left component to render inside the input
   */
  leftComponent?: React.ReactNode;
  /**
   * Right component to render inside the input
   */
  rightComponent?: React.ReactNode;
  /**
   * Whether the input has a border
   * @default true
   */
  bordered?: boolean;
  /**
   * Border radius of the input
   * @default 8
   */
  borderRadius?: number;
  /**
   * Background color of the input
   * @default COLORS.white
   */
  backgroundColor?: string;
  /**
   * Border color of the input
   * @default COLORS.gray[300]
   */
  borderColor?: string;
  /**
   * Border color when the input is focused
   * @default COLORS.blue[500]
   */
  focusBorderColor?: string;
  /**
   * Border color when the input has an error
   * @default COLORS.red[500]
   */
  errorBorderColor?: string;
  /**
   * Text color of the input
   * @default COLORS.gray[900]
   */
  textColor?: string;
  /**
   * Placeholder text color
   * @default COLORS.gray[400]
   */
  placeholderTextColor?: string;
  /**
   * Font size of the input text
   * @default responsiveFontSize(1.8)
   */
  fontSize?: number;
  /**
   * Font family of the input text
   * @default FONTS.REGULAR
   */
  fontFamily?: string;
}

const Input: FC<InputProps> = ({
  label,
  helperText,
  error,
  disabled = false,
  clearable = false,
  containerStyle,
  inputStyle,
  labelStyle,
  helperTextStyle,
  errorTextStyle,
  leftComponent,
  rightComponent,
  bordered = true,
  borderRadius = 8,
  backgroundColor = COLORS.white,
  borderColor = COLORS.gray[300],
  focusBorderColor = COLORS.blue[500],
  errorBorderColor = COLORS.red[500],
  textColor = COLORS.gray[900],
  placeholderTextColor = COLORS.gray[400],
  fontSize = responsiveFontSize(1.8),
  fontFamily = FONTS.REGULAR,
  value,
  onChangeText,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = rest.secureTextEntry;

  const handleClear = () => {
    if (onChangeText) {
      onChangeText('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getBorderColor = () => {
    if (error) return errorBorderColor;
    if (isFocused) return focusBorderColor;
    return borderColor;
  };

  const renderRightComponent = () => {
    if (isPassword) {
      return (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}>
          <Text style={styles.iconText}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      );
    }

    if (clearable && value && value.length > 0) {
      return (
        <TouchableOpacity
          onPress={handleClear}
          style={styles.iconContainer}>
          <Text style={styles.iconText}>✕</Text>
        </TouchableOpacity>
      );
    }

    return rightComponent;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            {color: error ? COLORS.red[500] : COLORS.gray[700]},
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          bordered && {
            borderWidth: 1,
            borderColor: getBorderColor(),
            borderRadius,
          },
          {backgroundColor},
          disabled && styles.disabled,
        ]}>
        {leftComponent && (
          <View style={styles.leftComponent}>{leftComponent}</View>
        )}
        <RNTextInput
          style={[
            styles.input,
            {
              color: textColor,
              fontSize,
              fontFamily,
            },
            leftComponent ? styles.inputWithLeft : null,
            (rightComponent || clearable || isPassword) ? styles.inputWithRight : null,
            inputStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={!disabled}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isPassword && !showPassword}
          {...rest}
        />
        {renderRightComponent() && (
          <View style={styles.rightComponent}>
            {renderRightComponent()}
          </View>
        )}
      </View>
      {(helperText || error) && (
        <Text
          style={[
            styles.helperText,
            error ? styles.errorText : null,
            helperTextStyle,
            error && errorTextStyle,
          ]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(2),
  },
  label: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: FONTS.MEDIUM,
    marginBottom: responsiveHeight(0.5),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
  },
  input: {
    flex: 1,
    padding: 0,
  },
  inputWithLeft: {
    marginLeft: responsiveWidth(2),
  },
  inputWithRight: {
    marginRight: responsiveWidth(2),
  },
  leftComponent: {
    marginRight: responsiveWidth(1),
  },
  rightComponent: {
    marginLeft: responsiveWidth(1),
  },
  iconContainer: {
    padding: responsiveWidth(1),
  },
  iconText: {
    fontSize: responsiveFontSize(1.6),
    color: COLORS.gray[500],
  },
  helperText: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: FONTS.REGULAR,
    color: COLORS.gray[500],
    marginTop: responsiveHeight(0.5),
  },
  errorText: {
    color: COLORS.red[500],
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Input; 