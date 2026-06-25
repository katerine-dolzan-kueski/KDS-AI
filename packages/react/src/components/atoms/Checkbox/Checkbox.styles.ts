import { cva } from 'class-variance-authority';

export const rootStyles = cva(
  [
    'flex items-center gap-[var(--spacing-x2)] cursor-pointer',
  ],
  {
    variants: {
      $disabled: {
        true: 'opacity-40 cursor-not-allowed',
        false: 'opacity-100',
      },
    },
    defaultVariants: {
      $disabled: false,
    },
  }
);

export const checkboxStyles = cva(
  [
    'text-[var(--color-text-and-icons-invert-primary)]',
    'peer h-[1.125rem] w-[1.125rem] shrink-0 rounded-[var(--radius-x1)] relative',
    // Border pseudo-element
    'before:content-[""] before:absolute before:inset-0',
    'before:rounded-[var(--radius-x1)] before:[border-width:var(--border-thick)]',
    'before:border-solid before:border-[var(--border)]',
    // Focus ring pseudo-element (expands outside the box)
    'outline-none',
    'after:content-[""] after:absolute after:-inset-1',
    'after:rounded-[var(--radius-x2)] after:[border-width:var(--border-thick)]',
    'after:border-solid after:border-[var(--color-stroke-brand)]',
    'after:opacity-0 focus:after:opacity-100 after:transition-all after:duration-200',
    'transition-colors duration-200',
  ],
  {
    variants: {
      $error: {
        true:  '[--border:var(--color-stroke-error)]  [--fill:var(--color-background-danger)]',
        false: '[--border:var(--color-stroke-secondary)] [--fill:var(--color-background-brand)]',
      },
      $checked: {
        true:          'bg-[var(--fill)] before:border-[var(--fill)]',
        false:         'bg-transparent enabled:hover:bg-[var(--color-states-hover)] enabled:active:bg-[var(--color-states-pressed)]',
        indeterminate: 'bg-[var(--fill)] before:border-[var(--fill)]',
      },
      $disabled: {
        true:  'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      $error:    false,
      $disabled: false,
    },
  }
);

export const labelStyles = cva([
  'typo-body-1 leading-none select-none',
  'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  'text-[var(--color-text-and-icons-primary)]',
]);

export const indicatorStyles = cva([
  'grid place-items-center text-current',
  '[&>*]:w-[var(--spacing-x3)] [&>*]:h-[var(--spacing-x3)]',
]);
