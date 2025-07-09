import { createVariants, VariantFunction } from './core';
import { ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../theme';

// Accordion variant types
export type AccordionVariant = 'default' | 'bordered' | 'separated' | 'ghost';
export type AccordionSize = 'sm' | 'md' | 'lg';

// Accordion container variants
export const accordionContainerVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.card,
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.lg,
    }),
    bordered: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.card,
      borderWidth: theme.borders.widths.thick,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.lg,
    }),
    separated: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.card,
      borderWidth: theme.borders.widths.none,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing[3],
      ...theme.shadows.sm,
    }),
    ghost: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderWidth: theme.borders.widths.none,
      borderRadius: theme.borderRadius.none,
    }),
  } as Record<AccordionVariant, VariantFunction<ViewStyle>>,

  size: {
    sm: (theme: Theme): ViewStyle => ({
      borderRadius: theme.borderRadius.md,
    }),
    md: (theme: Theme): ViewStyle => ({
      borderRadius: theme.borderRadius.lg,
    }),
    lg: (theme: Theme): ViewStyle => ({
      borderRadius: theme.borderRadius.xl,
    }),
  } as Record<AccordionSize, VariantFunction<ViewStyle>>,
});

// Header variants
export const accordionHeaderVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    bordered: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.muted,
    }),
    separated: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    ghost: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderBottomWidth: theme.borders.widths.thin,
      borderBottomColor: theme.colors.border,
    }),
  } as Record<AccordionVariant, VariantFunction<ViewStyle>>,

  size: {
    sm: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      minHeight: theme.spacing[10],
    }),
    md: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      minHeight: theme.spacing[12],
    }),
    lg: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[6],
      paddingVertical: theme.spacing[4],
      minHeight: theme.spacing[16],
    }),
  } as Record<AccordionSize, VariantFunction<ViewStyle>>,

  state: {
    default: (theme: Theme): ViewStyle => ({}),
    expanded: (theme: Theme): ViewStyle => ({
      borderBottomWidth: theme.borders.widths.thin,
      borderBottomColor: theme.colors.border,
    }),
    hover: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.accent,
    }),
  },
});

// Content variants
export const accordionContentVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    bordered: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.background,
    }),
    separated: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    ghost: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
  } as Record<AccordionVariant, VariantFunction<ViewStyle>>,

  size: {
    sm: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      paddingTop: 0,
    }),
    md: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      paddingTop: 0,
    }),
    lg: (theme: Theme): ViewStyle => ({
      paddingHorizontal: theme.spacing[6],
      paddingVertical: theme.spacing[4],
      paddingTop: 0,
    }),
  } as Record<AccordionSize, VariantFunction<ViewStyle>>,
});

// Title text variants
export const accordionTitleVariants = createVariants({
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
  } as Record<AccordionSize, VariantFunction<TextStyle>>,

  base: (theme: Theme): TextStyle => ({
    fontFamily: theme.typography.fonts.semiBold,
    color: theme.colors.foreground,
    includeFontPadding: false,
  }),
});

// Icon variants
export const accordionIconVariants = createVariants({
  size: {
    sm: (theme: Theme) => ({
      size: theme.typography.fontSizes.base,
      color: theme.colors.mutedForeground,
    }),
    md: (theme: Theme) => ({
      size: theme.typography.fontSizes.lg,
      color: theme.colors.mutedForeground,
    }),
    lg: (theme: Theme) => ({
      size: theme.typography.fontSizes.xl,
      color: theme.colors.mutedForeground,
    }),
  } as Record<AccordionSize, VariantFunction<{ size: number; color: string }>>,

  state: {
    default: (theme: Theme) => ({
      color: theme.colors.mutedForeground,
    }),
    expanded: (theme: Theme) => ({
      color: theme.colors.foreground,
    }),
  },
});