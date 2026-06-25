import { cva } from 'class-variance-authority';

// ── Root wrapper ─────────────────────────────────────────────────────────────

export const rootStyles = cva([
  'flex flex-col',
  'gap-[var(--spacing-x1)]',
]);

// ── Label row ─────────────────────────────────────────────────────────────────

export const labelStyles = cva([
  'typo-meta',
  'text-[var(--color-text-and-icons-secondary)]',
  'select-none',
]);

export const optionalStyles = cva([
  'typo-meta',
  'text-[var(--color-text-and-icons-tertiary)]',
  'ml-[var(--spacing-x1)]',
]);

// ── Field container ───────────────────────────────────────────────────────────
// Sets --input-border as a local CSS custom property so compound variants
// can reference a single variable name regardless of state.

export const fieldStyles = cva(
  [
    'flex items-center',
    'rounded-[var(--radius-x3)]',
    'border-[length:var(--border-regular)]',
    'border-solid',
    'px-[var(--spacing-x4)]',
    'py-[var(--spacing-x3)]',
    'gap-[var(--spacing-x2)]',
    'transition-colors duration-150',
    'w-full',
  ],
  {
    variants: {
      $error: {
        true:  '',
        false: '',
      },
      $focused: {
        true:  '',
        false: '',
      },
      $readOnly: {
        true:  [
          'bg-[var(--color-background-tertiary)]',
          'border-[var(--color-stroke-tertiary)]',
          'cursor-default',
        ],
        false: 'bg-[var(--color-background-primary)] cursor-text',
      },
      $disabled: {
        true:  'opacity-40 cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      // Active / typing (focused, no error, not readonly)
      {
        $focused: true,
        $error:   false,
        $readOnly: false,
        className: 'border-[var(--color-stroke-brand)]',
      },
      // Default / filled (not focused, no error, not readonly)
      {
        $focused: false,
        $error:   false,
        $readOnly: false,
        className: 'border-[var(--color-stroke-secondary)]',
      },
      // Error (overrides both focused and unfocused)
      {
        $error:    true,
        $readOnly: false,
        className: 'border-[var(--color-stroke-error)]',
      },
    ],
    defaultVariants: {
      $error:    false,
      $focused:  false,
      $readOnly: false,
      $disabled: false,
    },
  },
);

// ── Input element ─────────────────────────────────────────────────────────────

export const inputStyles = cva([
  'flex-1 min-w-0',
  'bg-transparent',
  'outline-none',
  'typo-body-1-regular',
  'text-[var(--color-text-and-icons-primary)]',
  'placeholder:text-[var(--color-text-and-icons-tertiary)]',
  'read-only:cursor-default',
  'disabled:cursor-not-allowed',
]);

// ── Leading slot ──────────────────────────────────────────────────────────────

export const leadingSlotStyles = cva([
  'flex items-center shrink-0',
  'text-[var(--color-text-and-icons-secondary)]',
  'typo-body-1-regular',
]);

// ── Trailing slot ─────────────────────────────────────────────────────────────

export const trailingSlotStyles = cva([
  'flex items-center shrink-0',
]);

// ── Clear button ──────────────────────────────────────────────────────────────

export const clearButtonStyles = cva([
  'flex items-center justify-center',
  'text-[var(--color-text-and-icons-secondary)]',
  'hover:text-[var(--color-text-and-icons-primary)]',
  'cursor-pointer',
  'rounded-full',
  'transition-colors duration-150',
  'outline-none',
  'focus:ring-2 focus:ring-[var(--color-stroke-brand)]',
]);

// ── Footer row ────────────────────────────────────────────────────────────────

export const footerStyles = cva([
  'flex items-start justify-between',
  'gap-[var(--spacing-x2)]',
]);

export const helperTextStyles = cva(
  [
    'typo-meta',
    'flex-1',
  ],
  {
    variants: {
      $error: {
        true:  'text-[var(--color-text-and-icons-danger)]',
        false: 'text-[var(--color-text-and-icons-tertiary)]',
      },
    },
    defaultVariants: {
      $error: false,
    },
  },
);

export const charCountStyles = cva([
  'typo-meta',
  'text-[var(--color-text-and-icons-tertiary)]',
  'shrink-0',
  'tabular-nums',
]);
