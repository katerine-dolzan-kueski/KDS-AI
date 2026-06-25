import { cva, type VariantProps } from 'class-variance-authority';

/**
 * ButtonGroup container styles
 * Provides flexible layouts with consistent spacing
 */
export const buttonGroupVariants = cva(
  // Base styles - flex container with gap
  'flex gap-3',
  {
    variants: {
      orientation: {
        // Horizontal: buttons side by side
        horizontal: 'flex-row items-center',
        // Vertical: buttons stacked (reversed so secondary appears below), always full width
        vertical: 'flex-col-reverse items-stretch w-full [&>*]:w-full',
        // Responsive: vertical on mobile (reversed), horizontal on desktop
        responsive: 'flex-col-reverse items-stretch sm:flex-row sm:items-center',
      },
      fullWidth: {
        // Full width: container and children take full width
        true: 'w-full [&>*]:w-full sm:[&>*]:flex-1',
        // Auto width: all buttons match the width of the largest one
        false: 'w-auto [&>*]:flex-1',
      },
    },
    compoundVariants: [
      // Vertical always full width, override fullWidth prop
      {
        orientation: 'vertical',
        class: 'w-full [&>*]:w-full',
      },
    ],
    defaultVariants: {
      orientation: 'responsive',
      fullWidth: true,
    },
  },
);

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
