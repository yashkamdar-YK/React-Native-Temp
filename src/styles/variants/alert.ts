import { createVariants, VariantFunction } from './core';
import { ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../theme';

// Alert variant types
export type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info' | 'outline' | 'ghost';
export type AlertSize = 'sm' | 'md' | 'lg';

// Alert container variants
export const alertContainerVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.card,
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.border,
      borderLeftWidth: theme.borders.widths.thick,
      borderLeftColor: theme.colors.primary,
    }),
    destructive: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.destructive + '10',
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.destructive + '30',
      borderLeftWidth: theme.borders.widths.thick,
      borderLeftColor: theme.colors.destructive,
    }),
    success: (theme: Theme): ViewStyle => ({
      backgroundColor: '#10b98110',
      borderWidth: theme.borders.widths.thin,
      borderColor: '#10b98130',
      borderLeftWidth: theme.borders.widths.thick,
      borderLeftColor: '#10b981',
    }),
    warning: (theme: Theme): ViewStyle => ({
      backgroundColor: '#f59e0b10',
      borderWidth: theme.borders.widths.thin,
      borderColor: '#f59e0b30',
      borderLeftWidth: theme.borders.widths.thick,
      borderLeftColor: '#f59e0b',
    }),
    info: (theme: Theme): ViewStyle => ({
      backgroundColor: '#3b82f610',
      borderWidth: theme.borders.widths.thin,
      borderColor: '#3b82f630',
      borderLeftWidth: theme.borders.widths.thick,
      borderLeftColor: '#3b82f6',
    }),
    outline: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.border,
      borderLeftWidth: theme.borders.widths.thick,
      borderLeftColor: theme.colors.primary,
    }),
    ghost: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderWidth: theme.borders.widths.none,
      borderColor: 'transparent',
      borderLeftWidth: theme.borders.widths.none,
      borderLeftColor: 'transparent',
    }),
  } as Record<AlertVariant, VariantFunction<ViewStyle>>,

  size: {
    sm: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[3],
      borderRadius: theme.borderRadius.md,
    }),
    md: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[4],
      borderRadius: theme.borderRadius.lg,
    }),
    lg: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[6],
      borderRadius: theme.borderRadius.xl,
    }),
  } as Record<AlertSize, VariantFunction<ViewStyle>>,
});

// Alert title variants
export const alertTitleVariants = createVariants({
  variant: {
    default: (theme: Theme): TextStyle => ({
      color: theme.colors.foreground,
    }),
    destructive: (theme: Theme): TextStyle => ({
      color: theme.colors.destructive,
    }),
    success: (theme: Theme): TextStyle => ({
      color: '#10b981',
    }),
    warning: (theme: Theme): TextStyle => ({
      color: '#f59e0b',
    }),
    info: (theme: Theme): TextStyle => ({
      color: '#3b82f6',
    }),
    outline: (theme: Theme): TextStyle => ({
      color: theme.colors.foreground,
    }),
    ghost: (theme: Theme): TextStyle => ({
      color: theme.colors.foreground,
    }),
  } as Record<AlertVariant, VariantFunction<TextStyle>>,

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
  } as Record<AlertSize, VariantFunction<TextStyle>>,

  base: (theme: Theme): TextStyle => ({
    fontFamily: theme.typography.fonts.semiBold,
    includeFontPadding: false,
  }),
});

// Alert description variants
export const alertDescriptionVariants = createVariants({
  variant: {
    default: (theme: Theme): TextStyle => ({
      color: theme.colors.mutedForeground,
    }),
    destructive: (theme: Theme): TextStyle => ({
      color: theme.colors.destructive + 'cc',
    }),
    success: (theme: Theme): TextStyle => ({
      color: '#10b981cc',
    }),
    warning: (theme: Theme): TextStyle => ({
      color: '#f59e0bcc',
    }),
    info: (theme: Theme): TextStyle => ({
      color: '#3b82f6cc',
    }),
    outline: (theme: Theme): TextStyle => ({
      color: theme.colors.mutedForeground,
    }),
    ghost: (theme: Theme): TextStyle => ({
      color: theme.colors.mutedForeground,
    }),
  } as Record<AlertVariant, VariantFunction<TextStyle>>,

  size: {
    sm: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.xs,
      lineHeight: theme.typography.lineHeights.xs,
    }),
    md: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
    }),
    lg: (theme: Theme): TextStyle => ({
      fontSize: theme.typography.fontSizes.base,
      lineHeight: theme.typography.lineHeights.base,
    }),
  } as Record<AlertSize, VariantFunction<TextStyle>>,

  base: (theme: Theme): TextStyle => ({
    fontFamily: theme.typography.fonts.regular,
    includeFontPadding: false,
  }),
});

// Alert icon variants
export const alertIconVariants = createVariants({
  variant: {
    default: (theme: Theme) => ({
      color: theme.colors.primary,
    }),
    destructive: (theme: Theme) => ({
      color: theme.colors.destructive,
    }),
    success: (theme: Theme) => ({
      color: '#10b981',
    }),
    warning: (theme: Theme) => ({
      color: '#f59e0b',
    }),
    info: (theme: Theme) => ({
      color: '#3b82f6',
    }),
    outline: (theme: Theme) => ({
      color: theme.colors.primary,
    }),
    ghost: (theme: Theme) => ({
      color: theme.colors.mutedForeground,
    }),
  } as Record<AlertVariant, VariantFunction<{ color: string }>>,

  size: {
    sm: (theme: Theme) => ({
      size: theme.typography.fontSizes.base,
    }),
    md: (theme: Theme) => ({
      size: theme.typography.fontSizes.lg,
    }),
    lg: (theme: Theme) => ({
      size: theme.typography.fontSizes.xl,
    }),
  } as Record<AlertSize, VariantFunction<{ size: number }>>,
});

// Alert Dialog variants
export const alertDialogContainerVariants = createVariants({
  size: {
    sm: (theme: Theme): ViewStyle => ({
      maxWidth: 320,
      padding: theme.spacing[4],
      borderRadius: theme.borderRadius.lg,
    }),
    md: (theme: Theme): ViewStyle => ({
      maxWidth: 400,
      padding: theme.spacing[6],
      borderRadius: theme.borderRadius.xl,
    }),
    lg: (theme: Theme): ViewStyle => ({
      maxWidth: 500,
      padding: theme.spacing[8],
      borderRadius: theme.borderRadius.xl,
    }),
  } as Record<AlertSize, VariantFunction<ViewStyle>>,

  base: (theme: Theme): ViewStyle => ({
    backgroundColor: theme.colors.card,
    borderWidth: theme.borders.widths.thin,
    borderColor: theme.colors.border,
    ...theme.shadows.lg,
  }),
});

// Alert Dialog actions variants
export const alertDialogActionsVariants = createVariants({
  size: {
    sm: (theme: Theme): ViewStyle => ({
      marginTop: theme.spacing[4],
      gap: theme.spacing[2],
    }),
    md: (theme: Theme): ViewStyle => ({
      marginTop: theme.spacing[6],
      gap: theme.spacing[3],
    }),
    lg: (theme: Theme): ViewStyle => ({
      marginTop: theme.spacing[8],
      gap: theme.spacing[4],
    }),
  } as Record<AlertSize, VariantFunction<ViewStyle>>,

  base: (theme: Theme): ViewStyle => ({
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }),
});
