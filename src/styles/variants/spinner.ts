import { createVariants, VariantFunction } from './core';
import { ViewStyle } from 'react-native';
import { Theme } from '../theme';

// Spinner variant types
export type SpinnerVariant = 'default' | 'primary' | 'secondary' | 'destructive' | 'success' | 'warning';
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Spinner container variants
export const spinnerContainerVariants = createVariants({
  variant: {
    default: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    primary: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    secondary: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    destructive: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    success: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
    warning: (theme: Theme): ViewStyle => ({
      backgroundColor: 'transparent',
    }),
  } as Record<SpinnerVariant, VariantFunction<ViewStyle>>,

  size: {
    xs: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[1],
    }),
    sm: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[2],
    }),
    md: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[3],
    }),
    lg: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[4],
    }),
    xl: (theme: Theme): ViewStyle => ({
      padding: theme.spacing[6],
    }),
  } as Record<SpinnerSize, VariantFunction<ViewStyle>>,

  centered: (theme: Theme): ViewStyle => ({
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

// Spinner color variants
export const spinnerColorVariants = createVariants({
  variant: {
    default: (theme: Theme) => ({
      color: theme.colors.mutedForeground,
    }),
    primary: (theme: Theme) => ({
      color: theme.colors.primary,
    }),
    secondary: (theme: Theme) => ({
      color: theme.colors.secondary,
    }),
    destructive: (theme: Theme) => ({
      color: theme.colors.destructive,
    }),
    success: (theme: Theme) => ({
      color: theme.colors.success,
    }),
    warning: (theme: Theme) => ({
      color: theme.colors.warning,
    }),
  } as Record<SpinnerVariant, VariantFunction<{ color: string }>>,
});

// Spinner size variants
export const spinnerSizeVariants = createVariants({
  size: {
    xs: (theme: Theme) => ({
      size: theme.typography.fontSizes.sm,
    }),
    sm: (theme: Theme) => ({
      size: theme.typography.fontSizes.base,
    }),
    md: (theme: Theme) => ({
      size: theme.typography.fontSizes.lg,
    }),
    lg: (theme: Theme) => ({
      size: theme.typography.fontSizes.xl,
    }),
    xl: (theme: Theme) => ({
      size: theme.typography.fontSizes['2xl'],
    }),
  } as Record<SpinnerSize, VariantFunction<{ size: number }>>,
});

// Overlay variants for loading states
export const spinnerOverlayVariants = createVariants({
  type: {
    none: (): ViewStyle => ({}),
    light: (theme: Theme): ViewStyle => ({
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }),
    dark: (theme: Theme): ViewStyle => ({
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }),
    blur: (theme: Theme): ViewStyle => ({
      backgroundColor: theme.colors.background + '80', // 50% opacity
    }),
  },

  position: {
    relative: (): ViewStyle => ({
      position: 'relative',
    }),
    absolute: (): ViewStyle => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    }),
  },
});