import { cva, VariantProps } from 'class-variance-authority';

export const gradientVariants = cva('aspect-square rounded-x3 w-full', {
  variants: {
    type: {
      'linear-to-t': 'bg-linear-to-t',
      'linear-to-tr': 'bg-linear-to-tr',
      'linear-to-r': 'bg-linear-to-r',
      'linear-to-br': 'bg-linear-to-br',
      'linear-to-b': 'bg-linear-to-b',
      'linear-to-bl': 'bg-linear-to-bl',
      'linear-to-l': 'bg-linear-to-l',
      'linear-to-tl': 'bg-linear-to-tl',
      'linear-45': 'bg-linear-45',
      radial: 'bg-radial',
      conic: 'bg-conic',
    },
    gradientName: {
      'gradient-shimmer': 'gradient-shimmer',
      'gradient-spinner-blue': 'gradient-spinner-blue',
      'gradient-spinner-white': 'gradient-spinner-white',

      'gradient-mirrored-shimmer': 'gradient-mirrored-shimmer',
      'gradient-mirrored-spinner-blue': 'gradient-mirrored-spinner-blue',
      'gradient-mirrored-spinner-white': 'gradient-mirrored-spinner-white',
    },
  },
  defaultVariants: {
    type: 'linear-to-r',
  },
});

export type GradientVariantsProps = VariantProps<typeof gradientVariants>;
