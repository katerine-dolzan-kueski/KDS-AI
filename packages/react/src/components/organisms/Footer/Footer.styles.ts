import { cva } from 'class-variance-authority';

// ─── Root container ───────────────────────────────────────────────────────────

export const footerStyles = cva(
  [
    'w-full flex flex-col',
    'bg-[var(--color-background-primary)]',
  ],
  {
    variants: {
      $elevated: {
        true: [
          'shadow-[0_-2px_4px_var(--shadows/6-percent),0_-3px_6px_var(--shadows/3-percent)]',
        ],
        false: [],
      },
    },
    defaultVariants: {
      $elevated: false,
    },
  },
);

// ─── Caption zone (supporting text above buttons) ─────────────────────────────

export const footerCaptionStyles = cva([
  'w-full flex items-center justify-center',
  'px-[var(--spacing-x5)] pt-[var(--spacing-x4)]',
  'typo-meta',
  'text-[color:var(--color-text-and-icons-secondary)]',
  '[&_a]:underline [&_a]:text-[color:var(--color-text-and-icons-secondary)]',
  '[&_strong]:font-[var(--font-weight/semibold)]',
]);

// ─── Buttons zone ─────────────────────────────────────────────────────────────

export const footerButtonsStyles = cva(
  [
    'w-full',
    'px-[var(--spacing-x5)] py-[var(--spacing-x4)]',
  ],
  {
    variants: {
      $buttons: {
        'single': 'flex',
        'side-by-side': 'flex flex-row gap-[var(--spacing-x2)]',
        'stacked': 'flex flex-col gap-[var(--spacing-x2)]',
      },
    },
    defaultVariants: {
      $buttons: 'single',
    },
  },
);

export const footerPrimaryActionStyles = cva(
  [],
  {
    variants: {
      $buttons: {
        'single': 'flex-1',
        'side-by-side': 'flex-1',
        'stacked': 'w-full',
      },
    },
    defaultVariants: {
      $buttons: 'single',
    },
  },
);

export const footerSecondaryActionStyles = cva(
  [],
  {
    variants: {
      $buttons: {
        'single': 'hidden',
        'side-by-side': 'flex-1',
        'stacked': 'w-full',
      },
    },
    defaultVariants: {
      $buttons: 'side-by-side',
    },
  },
);

// ─── Badge zone (icon + link below buttons) ───────────────────────────────────

export const footerBadgeStyles = cva([
  'w-full flex flex-row items-center justify-center',
  'px-[var(--spacing-x5)] pb-[var(--spacing-x4)]',
  'gap-[var(--spacing-x2)]',
  'typo-body-2',
  'text-[color:var(--color-text-and-icons-secondary)]',
  '[&_a]:underline [&_a]:text-[color:var(--color-text-and-icons-secondary)]',
]);

// ─── System bar ───────────────────────────────────────────────────────────────

export const footerSystemBarStyles = cva([
  'relative w-full h-[24px] shrink-0',
]);
