import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva('flex gap-4', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    disabled: false,
  },
});

export const radioGroupOptionVariants = cva('flex items-center gap-3 cursor-pointer relative', {
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: 'cursor-pointer',
    },
    orientation: {
      horizontal: 'flex-1 justify-center min-w-0',
      vertical: 'items-start',
    },
  },
  defaultVariants: {
    disabled: false,
    orientation: 'vertical',
  },
});

export const radioGroupOptionLabelVariants = cva('text-sm font-medium text-text-primary');
