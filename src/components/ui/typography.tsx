import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import {
  TextVariant,
  TextWeight,
  TextAlign,
  textVariants,
  applyVariants,
} from '../../styles/variants';

export type { TextVariant, TextWeight, TextAlign };

export interface TypographyProps extends Omit<RNTextProps, 'style'> {
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Visual variant of the text
   * @default 'body1'
   */
  variant?: TextVariant;
  /**
   * Font weight override
   */
  weight?: TextWeight;
  /**
   * Text alignment
   */
  align?: TextAlign;
  /**
   * Color variant for semantic meanings
   */
  color?: keyof typeof textVariants.color;
  /**
   * Whether to truncate text with ellipsis
   * @default false
   */
  truncate?: boolean;
  /**
   * Custom style override
   */
  style?: RNTextProps['style'];
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  weight,
  align,
  color = 'default',
  truncate = false,
  style,
  ...rest
}) => {
  const { theme } = useTheme();

  // Apply variants using the new system
  const variantStyle = applyVariants(theme, textVariants.variant, variant);
  const weightStyle = weight ? applyVariants(theme, textVariants.weight, weight) : {};
  const alignStyle = align ? applyVariants(theme, textVariants.align, align) : {};
  const colorStyle = applyVariants(theme, textVariants.color, color);

  const finalStyle = [
    styles.text,
    variantStyle,
    weightStyle,
    alignStyle,
    colorStyle,
    truncate && styles.truncate,
    style,
  ];

  return (
    <RNText
      style={finalStyle}
      numberOfLines={truncate ? 1 : undefined}
      {...rest}>
      {children}
    </RNText>
  );
};

// Convenient component aliases for common use cases
export const Heading1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h1" {...props} />
);

export const Heading2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h2" {...props} />
);

export const Heading3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h3" {...props} />
);

export const Heading4: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h4" {...props} />
);

export const Subtitle: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="subtitle1" {...props} />
);

export const Body: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body1" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
);

export const Muted: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="muted" {...props} />
);

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
  truncate: {
    overflow: 'hidden',
  },
});

export default Typography;