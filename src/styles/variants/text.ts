import { createVariants, VariantFunction } from './core';
import { TextStyle } from 'react-native';
import { Theme } from '../theme';

// Text variant types (following semantic naming)
export type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' 
  | 'subtitle1' | 'subtitle2' 
  | 'body1' | 'body2' 
  | 'caption' | 'overline'
  | 'small' | 'muted';

export type TextWeight = 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

// Text style variants
export const textVariants = createVariants({
  variant: {
    // Headings
    h1: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes['4xl'],
      lineHeight: theme.typography.lineHeights['4xl'],
      fontFamily: theme.typography.fonts.bold,
      color: theme.colors.foreground,
    }),
    h2: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes['3xl'],
      lineHeight: theme.typography.lineHeights['3xl'],
      fontFamily: theme.typography.fonts.bold,
      color: theme.colors.foreground,
    }),
    h3: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes['2xl'],
      lineHeight: theme.typography.lineHeights['2xl'],
      fontFamily: theme.typography.fonts.semiBold,
      color: theme.colors.foreground,
    }),
    h4: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.xl,
      lineHeight: theme.typography.lineHeights.xl,
      fontFamily: theme.typography.fonts.semiBold,
      color: theme.colors.foreground,
    }),
    
    // Subtitles
    subtitle1: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.lg,
      lineHeight: theme.typography.lineHeights.lg,
      fontFamily: theme.typography.fonts.medium,
      color: theme.colors.foreground,
    }),
    subtitle2: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.base,
      lineHeight: theme.typography.lineHeights.base,
      fontFamily: theme.typography.fonts.medium,
      color: theme.colors.foreground,
    }),
    
    // Body text
    body1: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.base,
      lineHeight: theme.typography.lineHeights.base,
      fontFamily: theme.typography.fonts.regular,
      color: theme.colors.foreground,
    }),
    body2: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
      fontFamily: theme.typography.fonts.regular,
      color: theme.colors.foreground,
    }),
    
    // Utility text
    caption: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
      fontFamily: theme.typography.fonts.regular,
      color: theme.colors.mutedForeground,
    }),
    overline: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.xs,
      lineHeight: theme.typography.lineHeights.xs,
      fontFamily: theme.typography.fonts.medium,
      color: theme.colors.mutedForeground,
      textTransform: 'uppercase',
      letterSpacing: 1,
    }),
    small: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.xs,
      lineHeight: theme.typography.lineHeights.xs,
      fontFamily: theme.typography.fonts.regular,
      color: theme.colors.foreground,
    }),
    muted: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.base,
      lineHeight: theme.typography.lineHeights.base,
      fontFamily: theme.typography.fonts.regular,
      color: theme.colors.mutedForeground,
    }),
  } as Record<TextVariant, VariantFunction<TextStyle>>,

  weight: {
    thin: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.thin,
    }),
    light: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.light,
    }),
    regular: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.regular,
    }),
    medium: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.medium,
    }),
    semibold: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.semiBold,
    }),
    bold: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.bold,
    }),
    extrabold: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.extraBold,
    }),
    black: (theme: Theme): TextStyle => ({
      fontFamily: theme.typography.fonts.black,
    }),
  } as Record<TextWeight, VariantFunction<TextStyle>>,

  align: {
    left: (): TextStyle => ({
      textAlign: 'left',
    }),
    center: (): TextStyle => ({
      textAlign: 'center',
    }),
    right: (): TextStyle => ({
      textAlign: 'right',
    }),
    justify: (): TextStyle => ({
      textAlign: 'justify',
    }),
  } as Record<TextAlign, VariantFunction<TextStyle>>,

  // Color variants for semantic meanings
  color: {
    default: (theme: Theme): TextStyle => ({
      color: theme.colors.foreground,
    }),
    muted: (theme: Theme): TextStyle => ({
      color: theme.colors.mutedForeground,
    }),
    primary: (theme: Theme): TextStyle => ({
      color: theme.colors.primary,
    }),
    secondary: (theme: Theme): TextStyle => ({
      color: theme.colors.secondary,
    }),
    destructive: (theme: Theme): TextStyle => ({
      color: theme.colors.destructive,
    }),
    success: (theme: Theme): TextStyle => ({
      color: theme.colors.success,
    }),
    warning: (theme: Theme): TextStyle => ({
      color: theme.colors.warning,
    }),
    info: (theme: Theme): TextStyle => ({
      color: theme.colors.info,
    }),
  },
});