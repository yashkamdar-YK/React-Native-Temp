import { createVariants, VariantFunction } from './core';
import { ViewStyle } from 'react-native';
import { Theme } from '../theme';

// Card variant types (following shadcn naming)
export type CardVariant = 'default' | 'outlined' | 'elevated' | 'ghost';
export type CardSize = 'sm' | 'md' | 'lg';

// Card container variants
export const cardContainerVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.card,
      borderWidth: theme.borders.widths.thin,
      borderColor: theme.colors.border,
    }),
    outlined: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.card,
      borderWidth: theme.borders.widths.thick,
      borderColor: theme.colors.border,
    }),
    elevated: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.card,
      borderWidth: theme.borders.widths.none,
      borderColor: 'transparent',
      ...theme.shadows.lg,
    }),
    ghost: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
      borderWidth: theme.borders.widths.none,
      borderColor: 'transparent',
    }),
  } as Record<CardVariant, VariantFunction<ViewStyle>>,

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
  } as Record<CardSize, VariantFunction<ViewStyle>>,

  base: (theme: Theme): ViewStyle => ({
    overflow: 'hidden',
  }),
});

// Card header variants
export const cardHeaderVariants = createVariants({
  size: {
    sm: (theme: Theme): ViewStyle => ({
      marginBottom: theme.spacing[2],
    }),
    md: (theme: Theme): ViewStyle => ({
      marginBottom: theme.spacing[3],
    }),
    lg: (theme: Theme): ViewStyle => ({
      marginBottom: theme.spacing[4],
    }),
  } as Record<CardSize, VariantFunction<ViewStyle>>,

  base: (theme: Theme): ViewStyle => ({
    flexDirection: 'column',
  }),
});

// Card content variants
export const cardContentVariants = createVariants({
  size: {
    sm: (theme: Theme): ViewStyle => ({
      gap: theme.spacing[2],
    }),
    md: (theme: Theme): ViewStyle => ({
      gap: theme.spacing[3],
    }),
    lg: (theme: Theme): ViewStyle => ({
      gap: theme.spacing[4],
    }),
  } as Record<CardSize, VariantFunction<ViewStyle>>,

  base: (theme: Theme): ViewStyle => ({
    flex: 1,
  }),
});

// Card footer variants
export const cardFooterVariants = createVariants({
  size: {
    sm: (theme: Theme): ViewStyle => ({
      marginTop: theme.spacing[2],
      paddingTop: theme.spacing[2],
      borderTopWidth: theme.borders.widths.thin,
      borderTopColor: theme.colors.border,
    }),
    md: (theme: Theme): ViewStyle => ({
      marginTop: theme.spacing[3],
      paddingTop: theme.spacing[3],
      borderTopWidth: theme.borders.widths.thin,
      borderTopColor: theme.colors.border,
    }),
    lg: (theme: Theme): ViewStyle => ({
      marginTop: theme.spacing[4],
      paddingTop: theme.spacing[4],
      borderTopWidth: theme.borders.widths.thin,
      borderTopColor: theme.colors.border,
    }),
  } as Record<CardSize, VariantFunction<ViewStyle>>,

  base: (theme: Theme): ViewStyle => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
});