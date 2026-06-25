import { cva } from 'class-variance-authority';

/**
 * Base chip styles shared by status and filter types.
 * CSS custom properties --chip-bg, --chip-text, --chip-border are resolved
 * per variant/emphasis via compound variants below.
 */
export const chipStyles = cva(
  [
    'inline-flex items-center gap-x1',
    'select-none whitespace-nowrap',
    '[&_svg]:shrink-0',
  ],
  {
    variants: {
      // ─── Type ───────────────────────────────────────────────────────────
      $type: {
        status: 'cursor-default',
        filter: [
          'cursor-pointer',
          'transition-colors',
          'hover:brightness-95',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
        ],
      },

      // ─── Variant (sets CSS custom props for colors) ──────────────────
      $variant: {
        neutral: [
          '[--chip-bg-subtle:var(--color-background-tertiary)]',
          '[--chip-text-subtle:var(--color-text-and-icons-secondary)]',
          '[--chip-border-outline:var(--color-stroke-secondary)]',
          '[--chip-bg-strong:var(--color-background-invert-secondary)]',
        ],
        brand: [
          '[--chip-bg-subtle:var(--color-background-brand-subtle)]',
          '[--chip-text-subtle:var(--color-text-and-icons-brand-on-subtle)]',
          '[--chip-border-outline:var(--color-stroke-brand)]',
          '[--chip-bg-strong:var(--color-background-brand)]',
        ],
        success: [
          '[--chip-bg-subtle:var(--color-background-success-subtle)]',
          '[--chip-text-subtle:var(--color-text-and-icons-success-on-subtle)]',
          '[--chip-border-outline:var(--color-stroke-success)]',
          '[--chip-bg-strong:var(--color-background-success)]',
        ],
        warning: [
          '[--chip-bg-subtle:var(--color-background-warning-subtle)]',
          '[--chip-text-subtle:var(--color-text-and-icons-warning-on-subtle)]',
          '[--chip-border-outline:var(--color-stroke-warning)]',
          '[--chip-bg-strong:var(--color-background-warning)]',
        ],
        danger: [
          '[--chip-bg-subtle:var(--color-background-danger-subtle)]',
          '[--chip-text-subtle:var(--color-text-and-icons-danger-on-subtle)]',
          '[--chip-border-outline:var(--color-stroke-error)]',
          '[--chip-bg-strong:var(--color-background-danger)]',
        ],
        upsell: [
          '[--chip-bg-subtle:var(--color-background-upsell-subtle)]',
          '[--chip-text-subtle:var(--color-text-and-icons-upsell-on-subtle)]',
          '[--chip-border-outline:var(--color-stroke-upsell)]',
          '[--chip-bg-strong:var(--color-background-upsell)]',
        ],
      },

      // ─── Emphasis ───────────────────────────────────────────────────────
      $emphasis: {
        subtle: [
          'bg-[var(--chip-bg-subtle)]',
          'text-[var(--chip-text-subtle)]',
        ],
        outline: [
          'bg-[var(--chip-bg-subtle)]',
          'text-[var(--chip-text-subtle)]',
          'border border-[var(--chip-border-outline)]',
          '[border-width:var(--border-thin)]',
        ],
        strong: [
          'bg-[var(--chip-bg-strong)]',
          'text-[var(--color-text-and-icons-always-white)]',
        ],
      },

      // ─── Size ────────────────────────────────────────────────────────────
      $size: {
        sm: 'typo-meta rounded-x2 px-x2 py-half [&_svg]:size-4',
        md: 'typo-body-2-emphasized rounded-x3 px-x3 py-x1 [&_svg]:size-5',
      },

      // ─── Filter selected ────────────────────────────────────────────────
      $selected: {
        true: '',
        false: '',
      },
    },

    compoundVariants: [
      // ─── Filter: override colors to neutral (filter ignores $variant) ──
      {
        $type: 'filter',
        $emphasis: 'subtle',
        $selected: false,
        className: [
          'bg-[var(--color-background-tertiary)]',
          'text-[var(--color-text-and-icons-secondary)]',
        ],
      },
      {
        $type: 'filter',
        $emphasis: 'outline',
        $selected: false,
        className: [
          'bg-[var(--color-background-primary)]',
          'text-[var(--color-text-and-icons-secondary)]',
          'border-[var(--color-stroke-secondary)]',
          '[border-width:var(--border-thin)]',
        ],
      },
      {
        $type: 'filter',
        $emphasis: 'subtle',
        $selected: true,
        className: [
          'bg-[var(--color-background-invert-secondary)]',
          'text-[var(--color-text-and-icons-always-white)]',
          'border-0',
        ],
      },
      {
        $type: 'filter',
        $emphasis: 'outline',
        $selected: true,
        className: [
          'bg-[var(--color-background-secondary)]',
          'text-[var(--color-text-and-icons-secondary)]',
          'border-[var(--color-stroke-brand)]',
          '[border-width:var(--border-regular)]',
        ],
      },
      // ─── Filter pill radius (overrides size-based radius) ───────────────
      {
        $type: 'filter',
        $size: 'sm',
        className: 'rounded-max py-x1',
      },
      {
        $type: 'filter',
        $size: 'md',
        className: 'rounded-max py-x2',
      },
    ],

    defaultVariants: {
      $type: 'status',
      $variant: 'neutral',
      $emphasis: 'subtle',
      $size: 'sm',
      $selected: false,
    },
  },
);
