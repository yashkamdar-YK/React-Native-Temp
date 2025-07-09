import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { createVariants, VariantFunction } from './core';
import { ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../theme';

// Input variant types
export type InputVariant = 'default' | 'filled' | 'outlined' | 'ghost';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'focused' | 'error' | 'disabled';

// Container style variants
export const inputContainerVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.background,
    }),
    filled: (theme: Theme): ViewStyle => ({
      borderWidth: theme.borders.widths.none,
      backgroundColor: theme.colors.muted,
    }),
    outlined: (theme: Theme): ViewStyle => ({
      borderWidth: theme.borders.widths.thick,
      borderColor: theme.colors.ring,
      backgroundColor: 'transparent',
    }),
    ghost: (theme: Theme): ViewStyle => ({
      borderWidth: theme.borders.widths.none,
      backgroundColor: 'transparent',
    }),
  } as Record<InputVariant, VariantFunction<ViewStyle>>,

  size: {
    sm: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      borderRadius: theme.borderRadius.md,
      minHeight: responsiveHeight(5),
    }),
    md: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      borderRadius: theme.borderRadius.lg,
      minHeight: responsiveHeight(6),
    }),
    lg: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[5],
      paddingVertical: theme.spacing[4],
      borderRadius: theme.borderRadius.xl,
      minHeight: responsiveHeight(7),
    }),
  } as Record<InputSize, VariantFunction<ViewStyle>>,

  state: {
    default: (theme: Theme): ViewStyle => ({}),
    focused: (theme: Theme): ViewStyle => ({
      borderColor: theme.colors.ring,
      shadowColor: theme.colors.ring,
      ...theme.shadows.sm,
    }),
    error: (theme: Theme): ViewStyle => ({
      borderColor: theme.colors.destructive,
      shadowColor: theme.colors.destructive,
      ...theme.shadows.sm,
    }),
    disabled: (theme: Theme): ViewStyle => ({
      opacity: 0.5,
      backgroundColor: theme.colors.muted,
    }),
  } as Record<InputState, VariantFunction<ViewStyle>>,
});

// Text input style variants
export const inputTextVariants = createVariants({
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
  } as Record<InputSize, VariantFunction<TextStyle>>,

  base: (theme: Theme): TextStyle => ({
    color: theme.colors.foreground,
    fontFamily: theme.typography.fonts.regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
  }),
});

// Helper text variants
export const inputHelperTextVariants = createVariants({
  base: (theme: Theme): TextStyle => ({
    fontSize: theme.typography.fontSizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.mutedForeground,
    marginTop: theme.spacing[2],
    includeFontPadding: false,
  }),
  
  error: (theme: Theme): TextStyle => ({
    color: theme.colors.destructive,
  }),
});

// Icon variants
export const inputIconVariants = createVariants({
  size: {
    sm: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.sm,
    }),
    md: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.base,
    }),
    lg: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.lg,
    }),
  } as Record<InputSize, VariantFunction<TextStyle>>,

  base: (theme: Theme): TextStyle => ({
    color: theme.colors.mutedForeground,
    includeFontPadding: false,
    textAlignVertical: 'center',
  }),
});