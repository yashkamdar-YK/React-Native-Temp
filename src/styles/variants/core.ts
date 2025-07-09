import { Theme } from "../theme";

// Base variant function type
export type VariantFunction<T = any> = (theme: Theme) => T;

// Core variant generator utility
export function createVariants<T extends Record<string, any>>(
  variants: T
): T {
  return variants;
}

// Utility to apply variants
export function applyVariants<T>(
  theme: Theme,
  variants: Record<string, VariantFunction<T>>,
  selectedVariant: string
): T {
  const variantFn = variants[selectedVariant];
  if (!variantFn) {
    throw new Error(`Variant "${selectedVariant}" not found`);
  }
  return variantFn(theme);
}