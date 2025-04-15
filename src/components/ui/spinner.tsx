import {ActivityIndicator, StyleSheet, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';

export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large' | number;
  /**
   * Color of the spinner
   * @default '#000000'
   */
  color?: string;
  /**
   * Additional styles for the container
   */
  containerStyle?: ViewStyle;
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
}

const sizeMap = {
  small: 24,
  medium: 36,
  large: 48,
};

const Spinner: FC<SpinnerProps> = ({
  size = 'medium',
  color = '#000000',
  containerStyle,
  centered = true,
  visible = true,
}) => {
  if (!visible) return null;

  const spinnerSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <View
      style={[
        styles.container,
        centered && styles.centered,
        containerStyle,
      ]}>
      <ActivityIndicator size={spinnerSize} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner; 