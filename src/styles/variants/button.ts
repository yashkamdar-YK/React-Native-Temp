import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { createVariants, VariantFunction } from './core';
import { ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../theme';

// Button variant types (following shadcn naming)
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

// Button container variants
export const buttonContainerVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.primary,
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.primary,
    }),
    destructive: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.destructive,
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.destructive,
    }),
    outline: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.border,
    }),
    secondary: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.secondary,
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.secondary,
    }),
    ghost: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderWidth: theme.borders.widths.none,
      borderColor: 'transparent',
    }),
    link: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderWidth: theme.borders.widths.none,
      borderColor: 'transparent',
    }),
  } as Record<ButtonVariant, VariantFunction<ViewStyle>>,

  size: {
    sm: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      borderRadius: theme.borderRadius.md,
      minHeight: responsiveHeight(4.5),
    }),
    md: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      borderRadius: theme.borderRadius.md,
      minHeight: responsiveHeight(5.5),
    }),
    lg: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[8],
      paddingVertical: theme.spacing[3],
      borderRadius: theme.borderRadius.md,
      minHeight: responsiveHeight(6.5),
    }),
    icon: (theme: Theme): ViewStyle => ({
      width: responsiveHeight(5.5),
      height: responsiveHeight(5.5),
      paddingHorizontal: 0,
      paddingVertical: 0,
      borderRadius: theme.borderRadius.md,
    }),
  } as Record<ButtonSize, VariantFunction<ViewStyle>>,

  state: {
    default: (theme: Theme): ViewStyle => ({}),
    pressed: (theme: Theme): ViewStyle => ({
      opacity: 0.9,
    }),
    disabled: (theme: Theme): ViewStyle => ({
      opacity: 0.5,
    }),
    loading: (theme: Theme): ViewStyle => ({
      opacity: 0.8,
    }),
  },
});

// Button text variants
export const buttonTextVariants = createVariants({
  variant: {
    default: (theme: Theme): TextStyle => ({
      color: theme.colors.primaryForeground,
    }),
    destructive: (theme: Theme): TextStyle => ({
      color: theme.colors.destructiveForeground,
    }),
    outline: (theme: Theme): TextStyle => ({
      color: theme.colors.foreground,
    }),
    secondary: (theme: Theme): TextStyle => ({
      color: theme.colors.secondaryForeground,
    }),
    ghost: (theme: Theme): TextStyle => ({
      color: theme.colors.foreground,
    }),
    link: (theme: Theme): TextStyle => ({
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    }),
  } as Record<ButtonVariant, VariantFunction<TextStyle>>,

  size: {
    sm: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
    }),
    md: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.base,
      lineHeight: theme.typography.lineHeights.base,
    }),
    lg: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.lg,
      lineHeight: theme.typography.lineHeights.lg,
    }),
    icon: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.base,
      lineHeight: theme.typography.lineHeights.base,
    }),
  } as Record<ButtonSize, VariantFunction<TextStyle>>,

  base: (theme: Theme): TextStyle => ({
    fontFamily: theme.typography.fonts.medium,
    textAlign: 'center',
    includeFontPadding: false,
  }),
});

// Button hover/press variants (for enhanced interactions)
export const buttonInteractionVariants = createVariants({
  variant: {
    default: (theme: Theme) => ({
      hover: {
        backgroundColor: theme.colors.primary,
        opacity: 0.9,
      },
      pressed: {
        backgroundColor: theme.colors.primary,
        opacity: 0.8,
      },
    }),
    destructive: (theme: Theme) => ({
      hover: {
        backgroundColor: theme.colors.destructive,
        opacity: 0.9,
      },
      pressed: {
        backgroundColor: theme.colors.destructive,
        opacity: 0.8,
      },
    }),
    outline: (theme: Theme) => ({
      hover: {
        backgroundColor: theme.colors.accent,
      },
      pressed: {
        backgroundColor: theme.colors.accent,
        opacity: 0.8,
      },
    }),
    secondary: (theme: Theme) => ({
      hover: {
        backgroundColor: theme.colors.secondary,
        opacity: 0.8,
      },
      pressed: {
        backgroundColor: theme.colors.secondary,
        opacity: 0.7,
      },
    }),
    ghost: (theme: Theme) => ({
      hover: {
        backgroundColor: theme.colors.accent,
      },
      pressed: {
        backgroundColor: theme.colors.accent,
        opacity: 0.8,
      },
    }),
    link: (theme: Theme) => ({
      hover: {
        opacity: 0.8,
      },
      pressed: {
        opacity: 0.6,
      },
    }),
  } as Record<ButtonVariant, VariantFunction<any>>,
});