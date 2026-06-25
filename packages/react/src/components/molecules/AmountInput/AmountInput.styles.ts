import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

export const root = cn('flex flex-col gap-x1 items-center');

export const inputContainer = cn('flex gap-x1 items-baseline self-stretch justify-center');

export const currency = cva('typo-headline-1', {
  variants: {
    variant: {
      normal: 'text-text-and-icons-primary',
      locked: 'text-text-and-icons-tertiary',
      empty: 'text-text-and-icons-tertiary-a50',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});

export const input = cva('border-none outline-none field-sizing-content typo-amount-1 caret-text-and-icons-brand', {
  variants: {
    disabled: {
      true: 'text-text-and-icons-tertiary placeholder:text-text-and-icons-tertiary cursor-not-allowed',
      false: 'text-text-and-icons-primary placeholder:text-text-and-icons-tertiary-a50',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const chip = cva([
  'typo-body-2 py-x1 px-x3 rounded-x3'
], {
  variants: {
    variant: {
      label: 'text-text-and-icons-primary bg-background-secondary-cool',
      error: 'text-text-and-icons-danger-on-subtle bg-background-danger-subtle',
    },
  },
});
