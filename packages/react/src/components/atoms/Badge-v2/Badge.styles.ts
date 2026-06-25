import { cva } from 'class-variance-authority';

// ─── Base ─────────────────────────────────────────────────────────────────────
// All badges: inline-flex, centred content, pill shape, non-interactive,
// font rendering from KDS typography tokens. No raw px/hex/rgb values.

export const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-[--radius-max]',
    'font-semibold leading-none select-none whitespace-nowrap',
    'transition-colors',
  ],
  {
    variants: {
      // ── $variant × $emphasis colour combinations ──────────────────────────

      variant: {
        brand:   '',
        success: '',
        warning: '',
        danger:  '',
        upsell:  '',
        neutral: '',
      },

      emphasis: {
        subtle:  '',
        default: '',
        strong:  '',
      },

      // ── $type ─────────────────────────────────────────────────────────────

      type: {
        dot:   'p-0',
        label: '',
        count: '',
      },

      // ── $size ─────────────────────────────────────────────────────────────

      size: {
        sm: '',
        md: '',
      },
    },

    // ── Compound: type × size ─────────────────────────────────────────────────

    compoundVariants: [
      // dot sizes — width = height for a circle
      {
        type: 'dot',
        size: 'sm',
        className: 'w-[--spacing-x2] h-[--spacing-x2] min-w-0',
      },
      {
        type: 'dot',
        size: 'md',
        className: 'w-[--spacing-x3] h-[--spacing-x3] min-w-0',
      },

      // label / count — sm
      {
        type: ['label', 'count'],
        size: 'sm',
        className: [
          'h-[--spacing-x4]',
          'min-w-[--spacing-x4]',
          'px-[--spacing-x1]',
          'typo-mini',
        ],
      },
      // label / count — md
      {
        type: ['label', 'count'],
        size: 'md',
        className: [
          'h-[--spacing-x5]',
          'min-w-[--spacing-x5]',
          'px-[--spacing-x2]',
          'typo-meta',
        ],
      },

      // ── Compound: variant × emphasis colour classes ───────────────────────

      // brand
      { variant: 'brand', emphasis: 'subtle',
        className: 'bg-[--color-background-brand-subtle] text-[--color-text-and-icons-brand-on-subtle]' },
      { variant: 'brand', emphasis: 'default',
        className: 'bg-[--color-background-brand] text-[--color-text-and-icons-always-white]' },
      { variant: 'brand', emphasis: 'strong',
        className: 'bg-[--color-background-brand] text-[--color-text-and-icons-always-white] ring-[--border-thick] ring-[--color-stroke-brand] ring-inset' },

      // success
      { variant: 'success', emphasis: 'subtle',
        className: 'bg-[--color-background-success-subtle] text-[--color-text-and-icons-success-on-subtle]' },
      { variant: 'success', emphasis: 'default',
        className: 'bg-[--color-background-success] text-[--color-text-and-icons-always-white]' },
      { variant: 'success', emphasis: 'strong',
        className: 'bg-[--color-background-success] text-[--color-text-and-icons-always-white] ring-[--border-thick] ring-[--color-stroke-success] ring-inset' },

      // warning
      { variant: 'warning', emphasis: 'subtle',
        className: 'bg-[--color-background-warning-subtle] text-[--color-text-and-icons-warning-on-subtle]' },
      { variant: 'warning', emphasis: 'default',
        className: 'bg-[--color-background-warning] text-[--color-text-and-icons-always-white]' },
      { variant: 'warning', emphasis: 'strong',
        className: 'bg-[--color-background-warning] text-[--color-text-and-icons-always-white] ring-[--border-thick] ring-[--color-stroke-warning] ring-inset' },

      // danger
      { variant: 'danger', emphasis: 'subtle',
        className: 'bg-[--color-background-danger-subtle] text-[--color-text-and-icons-danger-on-subtle]' },
      { variant: 'danger', emphasis: 'default',
        className: 'bg-[--color-background-danger] text-[--color-text-and-icons-always-white]' },
      { variant: 'danger', emphasis: 'strong',
        className: 'bg-[--color-background-danger] text-[--color-text-and-icons-always-white] ring-[--border-thick] ring-[--color-stroke-error] ring-inset' },

      // upsell
      { variant: 'upsell', emphasis: 'subtle',
        className: 'bg-[--color-background-upsell-subtle] text-[--color-text-and-icons-upsell-on-subtle]' },
      { variant: 'upsell', emphasis: 'default',
        className: 'bg-[--color-background-upsell] text-[--color-text-and-icons-always-white]' },
      { variant: 'upsell', emphasis: 'strong',
        className: 'bg-[--color-background-upsell] text-[--color-text-and-icons-always-white] ring-[--border-thick] ring-[--color-stroke-upsell] ring-inset' },

      // neutral
      { variant: 'neutral', emphasis: 'subtle',
        className: 'bg-[--color-background-secondary] text-[--color-text-and-icons-secondary]' },
      { variant: 'neutral', emphasis: 'default',
        className: 'bg-[--color-background-invert-tertiary] text-[--color-text-and-icons-always-white]' },
      { variant: 'neutral', emphasis: 'strong',
        className: 'bg-[--color-background-invert-primary] text-[--color-text-and-icons-always-white] ring-[--border-thick] ring-[--color-stroke-secondary] ring-inset' },
    ],

    defaultVariants: {
      variant:  'brand',
      emphasis: 'default',
      type:     'label',
      size:     'md',
    },
  },
);
