import React, {FC} from 'react';
import {Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONTS} from '../../styles/typography';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export type HeadingSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export interface HeadingProps {
  /**
   * The content of the heading
   */
  children: React.ReactNode;
  /**
   * Size variant of the heading
   * @default 'base'
   */
  size?: HeadingSize;
  /**
   * Color of the heading text
   * @default COLORS.gray[900]
   */
  color?: string;
  /**
   * Font weight of the heading
   * @default 'BOLD'
   */
  weight?: 'THIN' | 'LIGHT' | 'REGULAR' | 'MEDIUM' | 'SEMI_BOLD' | 'BOLD' | 'EXTRA_BOLD' | 'BLACK';
  /**
   * Additional styles for the heading text
   */
  style?: TextStyle;
  /**
   * Additional styles for the container
   */
  containerStyle?: ViewStyle;
  /**
   * Whether to center the heading
   * @default false
   */
  center?: boolean;
  /**
   * Number of lines to show before truncating
   * @default undefined (no truncation)
   */
  numberOfLines?: number;
}

const Heading: FC<HeadingProps> = ({
  children,
  size = 'base',
  color = COLORS.gray[900],
  weight = 'BOLD',
  style,
  containerStyle,
  center = false,
  numberOfLines,
}) => {
  const textStyles = [
    styles.text,
    styles[size],
    {color, fontFamily: FONTS[weight]},
    center && styles.center,
    style,
  ];

  return (
    <Text
      style={textStyles}
      numberOfLines={numberOfLines}
      {...containerStyle}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    lineHeight: responsiveFontSize(2.5),
  },
  center: {
    textAlign: 'center',
  },
  // Size variants with responsive font sizes
  xxs: {
    fontSize: responsiveFontSize(1.2),
    lineHeight: responsiveFontSize(1.6),
  },
  xs: {
    fontSize: responsiveFontSize(1.4),
    lineHeight: responsiveFontSize(1.8),
  },
  sm: {
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveFontSize(2),
  },
  base: {
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveFontSize(2.2),
  },
  lg: {
    fontSize: responsiveFontSize(2),
    lineHeight: responsiveFontSize(2.4),
  },
  xl: {
    fontSize: responsiveFontSize(2.2),
    lineHeight: responsiveFontSize(2.6),
  },
  '2xl': {
    fontSize: responsiveFontSize(2.4),
    lineHeight: responsiveFontSize(2.8),
  },
  '3xl': {
    fontSize: responsiveFontSize(2.6),
    lineHeight: responsiveFontSize(3),
  },
  '4xl': {
    fontSize: responsiveFontSize(2.8),
    lineHeight: responsiveFontSize(3.2),
  },
  '5xl': {
    fontSize: responsiveFontSize(3),
    lineHeight: responsiveFontSize(3.4),
  },
  '6xl': {
    fontSize: responsiveFontSize(3.2),
    lineHeight: responsiveFontSize(3.6),
  },
  '7xl': {
    fontSize: responsiveFontSize(3.4),
    lineHeight: responsiveFontSize(3.8),
  },
  '8xl': {
    fontSize: responsiveFontSize(3.6),
    lineHeight: responsiveFontSize(4),
  },
  '9xl': {
    fontSize: responsiveFontSize(3.8),
    lineHeight: responsiveFontSize(4.2),
  },
});

export default Heading; 