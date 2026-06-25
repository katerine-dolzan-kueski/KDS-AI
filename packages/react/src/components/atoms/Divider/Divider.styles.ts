import { cva } from 'class-variance-authority';

export const dividerVariants = cva(
  ['block w-full border-0 bg-[var(--color-text-and-icons-tertiary-a50)]'],
  {
    variants: {
      $thickness: {
        thin:    'h-[var(--border-thin)]',
        regular: 'h-[var(--border-regular)]',
        thick:   'h-[var(--border-thick)]',
      },
    },
    defaultVariants: {
      $thickness: 'thin',
    },
  }
);
