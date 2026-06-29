import { cva } from 'class-variance-authority';

// ── Root wrapper ──────────────────────────────────────────────────────────────

export const rootStyles = cva([
  'flex flex-col',
  'gap-[var(--spacing-x1)]',
]);

// ── Label ─────────────────────────────────────────────────────────────────────

export const labelStyles = cva([
  'typo-body-2-emphasized',
  'text-[var(--color-text-and-icons-primary)]',
  'select-none',
]);

// ── Box row ───────────────────────────────────────────────────────────────────

export const boxRowStyles = cva([
  'flex',
  'gap-[var(--spacing-x1)]',
]);

// ── Individual digit box ──────────────────────────────────────────────────────
// Driven by three independent variants: $focused (true/false), $error (true/false),
// and $readOnly (true/false). Compound variants resolve the correct border colour.

export const boxStyles = cva(
  [
    'flex items-center justify-center',
    'w-12 h-14',                                    // 48×56px fixed
    'rounded-[var(--radius-x3)]',
    'border-solid',
    'px-[var(--spacing-x4)]',
    'py-[var(--spacing-x3)]',
    'transition-colors duration-150',
    'relative',
  ],
  {
    variants: {
      $focused: {
        true:  '',
        false: '',
      },
      $error: {
        true:  '',
        false: '',
      },
      $readOnly: {
        true:  [
          'bg-[var(--color-background-tertiary)]',
          'cursor-default',
        ],
        false: [
          'bg-[var(--color-background-primary)]',
          'cursor-text',
        ],
      },
      $disabled: {
        true:  'opacity-40 cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      // ── Error state (highest priority — overrides focus) ──────────────────
      {
        $error:    true,
        $readOnly: false,
        className: [
          'border-[length:var(--border-thick)]',
          'border-[var(--color-stroke-error)]',
        ],
      },
      // ── Focused / active / typing (no error) ─────────────────────────────
      {
        $focused:  true,
        $error:    false,
        $readOnly: false,
        className: [
          'border-[length:var(--border-thick)]',
          'border-[var(--color-stroke-brand)]',
        ],
      },
      // ── Default / filled (not focused, no error) ─────────────────────────
      {
        $focused:  false,
        $error:    false,
        $readOnly: false,
        className: [
          'border-[length:var(--border-thin)]',
          'border-[var(--color-stroke-secondary)]',
        ],
      },
      // ── Read-only ─────────────────────────────────────────────────────────
      {
        $readOnly: true,
        className: [
          'border-[length:var(--border-thin)]',
          'border-[var(--color-stroke-tertiary)]',
        ],
      },
    ],
    defaultVariants: {
      $focused:  false,
      $error:    false,
      $readOnly: false,
      $disabled: false,
    },
  },
);

// ── Digit text ────────────────────────────────────────────────────────────────

export const digitStyles = cva(
  [
    'typo-passcode',
    'text-center',
    'select-none',
    'w-full',
  ],
  {
    variants: {
      $readOnly: {
        true:  'text-[var(--color-text-and-icons-tertiary)]',
        false: 'text-[var(--color-text-and-icons-primary)]',
      },
    },
    defaultVariants: {
      $readOnly: false,
    },
  },
);

// ── Cursor ────────────────────────────────────────────────────────────────────

export const cursorStyles = cva([
  'absolute',
  'w-[1.5px] h-6',
  'rounded-[1px]',
  'bg-[var(--color-text-and-icons-brand)]',
  'animate-[blink_1s_step-start_infinite]',
]);

// ── Hidden native input ───────────────────────────────────────────────────────

export const nativeInputStyles = cva([
  'absolute inset-0',
  'opacity-0',
  'w-full h-full',
  'cursor-text',
  'disabled:cursor-not-allowed',
]);

// ── Footer ────────────────────────────────────────────────────────────────────

export const footerStyles = cva([
  'flex flex-col',
  'gap-[var(--spacing-x5)]',
]);

// ── Helper text ───────────────────────────────────────────────────────────────

export const helperTextStyles = cva([
  'typo-meta',
  'text-[var(--color-text-and-icons-secondary)]',
]);

// ── Error row (icon + message) ────────────────────────────────────────────────

export const errorRowStyles = cva([
  'flex items-start',
  'gap-[var(--spacing-x1)]',
]);

export const errorIconStyles = cva([
  'shrink-0',
  'size-5',
  'text-[var(--color-text-and-icons-danger)]',
]);

export const errorMessageStyles = cva([
  'typo-body-2',
  'text-[var(--color-text-and-icons-danger)]',
]);

// ── Resend slot ───────────────────────────────────────────────────────────────

export const resendStyles = cva([
  'typo-body-1',
  'text-[var(--color-text-and-icons-tertiary)]',
]);
