import { cva } from 'class-variance-authority';

/**
 * Card container styles.
 * Sets bg and optional border via $type.
 * Internal layout: flex-col with gap-x4 so header / divider / content / divider / footer
 * sit evenly spaced inside the p-x5 outer padding.
 */
export const cardStyles = cva(
  [
    'flex flex-col gap-x4',
    'rounded-x3',
    'p-x5',
  ],
  {
    variants: {
      $type: {
        primary: [
          'bg-[var(--color-background-primary)]',
          'border-[length:var(--border-thin)] border-[var(--color-stroke-tertiary)]',
        ],
        secondary: [
          'bg-[var(--color-background-secondary)]',
        ],
      },
    },
    defaultVariants: {
      $type: 'primary',
    },
  },
);

/** Thin horizontal rule rendered between header/content and content/footer. */
export const cardDividerClass =
  'h-px w-full shrink-0 border-none bg-[var(--color-stroke-tertiary)]';
