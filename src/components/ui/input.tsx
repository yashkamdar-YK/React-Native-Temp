import React, { useState, forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { cn } from '../../libs/cn';
import { useTheme } from '../../contexts/ThemeContext';
import {
  InputVariant,
  InputSize,
  InputState,
  inputContainerVariants,
  inputTextVariants,
  inputHelperTextVariants,
  inputIconVariants,
  applyVariants,
} from '../../styles/variants';

export type { InputVariant, InputSize };

export interface InputProps extends Omit<RNTextInputProps, 'style'> {
  /**
   * Visual variant of the input
   * @default 'default'
   */
  variant?: InputVariant;
  /**
   * Size of the input
   * @default 'md'
   */
  size?: InputSize;
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
   * Left component to render inside the input
   */
  leftComponent?: React.ReactNode;
  /**
   * Right component to render inside the input
   */
  rightComponent?: React.ReactNode;
}

const Input = forwardRef<RNTextInput, InputProps>(({
  variant = 'default',
  size = 'md',
  helperText,
  error,
  disabled = false,
  clearable = false,
  containerStyle,
  leftComponent,
  rightComponent,
  value,
  onChangeText,
  onFocus,
  onBlur,
  ...rest
}, ref) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = rest.secureTextEntry;

  // Determine current state
  const getCurrentState = (): InputState => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    if (isFocused) return 'focused';
    return 'default';
  };

  // Apply variants using the new system
  const containerVariantStyle = applyVariants(theme, inputContainerVariants.variant, variant);
  const containerSizeStyle = applyVariants(theme, inputContainerVariants.size, size);
  const containerStateStyle = applyVariants(theme, inputContainerVariants.state, getCurrentState());
  
  const textBaseStyle = inputTextVariants.base(theme);
  const textSizeStyle = applyVariants(theme, inputTextVariants.size, size);
  
  const helperBaseStyle = inputHelperTextVariants.base(theme);
  const helperErrorStyle = error ? inputHelperTextVariants.error(theme) : {};
  
  const iconBaseStyle = inputIconVariants.base(theme);
  const iconSizeStyle = applyVariants(theme, inputIconVariants.size, size);

  const handleClear = () => {
    if (onChangeText) {
      onChangeText('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const renderRightComponent = () => {
    if (isPassword) {
      return (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={[styles.iconContainer, { padding: theme.spacing[1] }]}>
          <Text style={[
            iconBaseStyle,
            iconSizeStyle,
            { fontSize: (iconSizeStyle.fontSize || 16) * 0.9 }
          ]}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      );
    }

    if (clearable && value && value.length > 0) {
      return (
        <TouchableOpacity
          onPress={handleClear}
          style={[styles.iconContainer, { padding: theme.spacing[1] }]}>
          <Text style={[iconBaseStyle, iconSizeStyle]}>✕</Text>
        </TouchableOpacity>
      );
    }

    return rightComponent;
  };

  return (
    <View>
      <View style={cn(
        styles.inputContainer,
        containerVariantStyle,
        containerSizeStyle,
        containerStateStyle,
        containerStyle
      )}>
        {leftComponent && (
          <View style={[styles.leftComponent, { marginRight: theme.spacing[2] }]}>
            {leftComponent}
          </View>
        )}
        <RNTextInput
          ref={ref}
          style={[
            styles.input,
            textBaseStyle,
            textSizeStyle,
            leftComponent ? { marginLeft: theme.spacing[2] } : undefined,
            (rightComponent || clearable || isPassword) ? { marginRight: theme.spacing[2] } : undefined,
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          placeholderTextColor={theme.colors.mutedForeground}
          secureTextEntry={isPassword && !showPassword}
          {...rest}
        />
        {renderRightComponent() && (
          <View style={[styles.rightComponent, { marginLeft: theme.spacing[2] }]}>
            {renderRightComponent()}
          </View>
        )}
      </View>
      {(helperText || error) && (
        <Text style={[helperBaseStyle, helperErrorStyle]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
});

Input.displayName = 'Input';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
  },
  leftComponent: {},
  rightComponent: {},
  iconContainer: {},
});

export default Input;