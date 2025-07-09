import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const fontFamilies = {
  thin: 'Poppins-Thin',
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
  black: 'Poppins-Black',
};

export const baseColors = {
  // Grayscale
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  // Primary colors
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  // Status colors
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
};

export const lightTheme = {
  colors: {
    // Base colors
    background: '#ffffff',
    foreground: '#020617',

    // Card colors
    card: '#ffffff',
    cardForeground: '#020617',

    // Popover colors
    popover: '#ffffff',
    popoverForeground: '#020617',

    // Primary colors
    primary: '#1e40af',
    primaryForeground: '#f8fafc',

    // Secondary colors
    secondary: '#f1f5f9',
    secondaryForeground: '#0f172a',

    // Muted colors
    muted: '#f1f5f9',
    mutedForeground: '#64748b',

    // Accent colors
    accent: '#f1f5f9',
    accentForeground: '#0f172a',

    // Destructive colors
    destructive: '#ef4444',
    destructiveForeground: '#f8fafc',

    // Success colors
    success: '#22c55e',
    successForeground: '#f0fdf4',

    // Warning colors
    warning: '#f59e0b',
    warningForeground: '#fffbeb',

    // Border and input colors
    border: '#e2e8f0',
    input: '#e2e8f0',
    ring: '#3b82f6',

    info: '#3b82f6',
    infoForeground: '#eff6ff',

    surface: '#ffffff',
    surfaceForeground: '#020617',

    tooltip: '#1f2937',
    tooltipForeground: '#f9fafb',

    selection: '#dbeafe',
    selectionForeground: '#1e40af',

    // Chart colors
    chart: {
      1: '#3b82f6',
      2: '#22c55e',
      3: '#f59e0b',
      4: '#ef4444',
      5: '#8b5cf6',
    },

    // Full color palettes
    ...baseColors,
  },

  // Typography
  typography: {
    fontSizes: {
      xs: responsiveFontSize(1.5), // ~12px on standard screen
      sm: responsiveFontSize(1.8), // ~14px
      base: responsiveFontSize(2), // ~16px
      lg: responsiveFontSize(2.2), // ~18px
      xl: responsiveFontSize(2.5), // ~20px
      '2xl': responsiveFontSize(3), // ~24px
      '3xl': responsiveFontSize(3.8), // ~30px
      '4xl': responsiveFontSize(4.5), // ~36px
    },
    fontFamilies,
    fontWeights: {
      thin: '100',
      light: '300',
      normal: '400', // regular
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fonts: {
      thin: fontFamilies.thin,
      light: fontFamilies.light,
      regular: fontFamilies.regular,
      medium: fontFamilies.medium,
      semiBold: fontFamilies.semiBold,
      bold: fontFamilies.bold,
      extraBold: fontFamilies.extraBold,
      black: fontFamilies.black,
    },
    lineHeights: {
      xs: responsiveFontSize(2), // ~16px
      sm: responsiveFontSize(2.5), // ~20px
      base: responsiveFontSize(3), // ~24px
      lg: responsiveFontSize(3.5), // ~28px
      xl: responsiveFontSize(3.5), // ~28px
      '2xl': responsiveFontSize(4), // ~32px
      '3xl': responsiveFontSize(4.5), // ~36px
      '4xl': responsiveFontSize(5), // ~40px
    },
  },

  // Spacing
  spacing: {
    0: 0,
    1: responsiveWidth(1), // ~4px
    2: responsiveWidth(2), // ~8px
    3: responsiveWidth(3), // ~12px
    4: responsiveWidth(4), // ~16px
    5: responsiveWidth(5), // ~20px
    6: responsiveWidth(6), // ~24px
    7: responsiveWidth(7), // ~28px
    8: responsiveWidth(8), // ~32px
    9: responsiveWidth(9), // ~36px
    10: responsiveWidth(10), // ~40px
    12: responsiveWidth(12), // ~48px
    16: responsiveWidth(16), // ~64px
    20: responsiveWidth(20), // ~80px
    24: responsiveWidth(24), // ~96px
  },

  // Border radius
  borderRadius: {
    none: 0,
    sm: responsiveWidth(0.5), // ~2px
    default: responsiveWidth(1), // ~4px
    md: responsiveWidth(1.5), // ~6px
    lg: responsiveWidth(2), // ~8px
    xl: responsiveWidth(3), // ~12px
    '2xl': responsiveWidth(4), // ~16px
    '3xl': responsiveWidth(6), // ~24px
    full: 9999,
  },

  // Shadows
  shadows: {
    sm: {
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    default: {
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    md: {
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 3,
    },
    lg: {
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 0.15,
      shadowRadius: 15,
      elevation: 4,
    },
  },

  transitions: {
    fast: 150,
    normal: 200,
    slow: 300,
    slower: 500,
  },
  easings: {
    default: 'ease',
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  borders: {
    widths: {
      none: 0,
      thin: 1,
      thick: 2,
      thicker: 4,
    },
    styles: {
      solid: 'solid',
      dashed: 'dashed',
      dotted: 'dotted',
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    // Base colors
    background: '#020617',
    foreground: '#f8fafc',

    // Card colors
    card: '#020617',
    cardForeground: '#f8fafc',

    // Popover colors
    popover: '#020617',
    popoverForeground: '#f8fafc',

    // Primary colors
    primary: '#f8fafc',
    primaryForeground: '#1e40af',

    // Secondary colors
    secondary: '#1e293b',
    secondaryForeground: '#f8fafc',

    // Muted colors
    muted: '#1e293b',
    mutedForeground: '#94a3b8',

    // Accent colors
    accent: '#1e293b',
    accentForeground: '#f8fafc',

    // Destructive colors
    destructive: '#7f1d1d',
    destructiveForeground: '#f8fafc',

    // Success colors
    success: '#14532d',
    successForeground: '#f0fdf4',

    // Warning colors
    warning: '#92400e',
    warningForeground: '#fffbeb',

    // Border and input colors
    border: '#1e293b',
    input: '#1e293b',
    ring: '#3b82f6',

    info: '#60a5fa',
    infoForeground: '#1e3a8a',
    
    surface: '#0f172a',
    surfaceForeground: '#f8fafc',
    
    tooltip: '#f8fafc',
    tooltipForeground: '#1f2937',
    
    selection: '#1e40af',
    selectionForeground: '#dbeafe',

    // Chart colors
    chart: {
      1: '#60a5fa',
      2: '#4ade80',
      3: '#fbbf24',
      4: '#f87171',
      5: '#a78bfa',
    },

    // Full color palettes (same as light)
    ...baseColors,
  },
};

export type Theme = typeof lightTheme;
export type ColorScale = typeof baseColors.gray;
export type ThemeColors = typeof lightTheme.colors;
export type FontSizes = keyof typeof lightTheme.typography.fontSizes;
export type Spacing = keyof typeof lightTheme.spacing;
export type BorderRadius = keyof typeof lightTheme.borderRadius;