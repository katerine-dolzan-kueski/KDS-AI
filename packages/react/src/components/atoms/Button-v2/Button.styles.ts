import { cva } from 'class-variance-authority';

/**
 * Primary button style system using CVA.
 *
 * Fixes vs Button v1:
 * - `invert-primary` variant is fully specified here (no silent remap to `primary`).
 * - `icon` mode + `default`/`md` size compound variant added (was missing).
 * - Trailing double-space removed from `default`/`md` size class strings.
 * - `alternative` mode base classes extracted; compound variants cover sm/md/lg explicitly.
 */
export const buttonVariants = cva(
  [
    'typo-body-2-emphasized whitespace-nowrap rounded-x2',
    'flex items-center justify-center w-fit',
    'enabled:cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed',
    'relative overflow-hidden',
    'focus-visible:!outline-[2px] focus-visible:!outline-offset-2 focus-visible:!outline-stroke-brand',
    'whitespace-normal break-all',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-background-brand !text-text-and-icons-always-white border-background-brand',
          'hover:bg-linear-brand active:bg-linear-pressed-brand focus-visible:bg-linear-brand',
          'disabled:disabled-button-brand',
        ],
        warning: [
          'bg-background-warning !text-text-and-icons-always-white border-background-warning',
          'hover:bg-linear-warning active:bg-linear-pressed-warning focus-visible:bg-linear-warning',
          'disabled:disabled-button-warning',
        ],
        destructive: [
          'bg-background-danger !text-text-and-icons-always-white border-background-danger',
          'hover:bg-linear-destructive active:bg-linear-pressed-destructive focus-visible:bg-linear-destructive',
          'disabled:disabled-button-destructive',
        ],
        success: [
          'bg-background-success !text-text-and-icons-always-white border-background-success',
          'hover:bg-linear-success active:bg-linear-pressed-success focus-visible:bg-linear-success',
          'disabled:disabled-button-success',
        ],
        upsell: [
          'bg-background-upsell !text-text-and-icons-always-white border-background-upsell',
          'hover:bg-linear-upsell active:bg-linear-pressed-upsell focus-visible:bg-linear-upsell',
          'disabled:disabled-button-upsell',
        ],
        secondary: [
          'bg-background-primary !text-text-and-icons-secondary',
          'outline outline-2 outline-offset-[-2px] outline-stroke-tertiary',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary focus-visible:bg-linear-secondary',
          'disabled:opacity-50',
        ],
        'ghost-primary': [
          'bg-transparent !text-text-and-icons-brand border-transparent',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary focus-visible:bg-linear-secondary',
          'disabled:opacity-50',
        ],
        'ghost-destructive': [
          'bg-transparent !text-text-and-icons-danger border-transparent',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary focus-visible:bg-linear-secondary',
          'disabled:opacity-50',
        ],
        translucent: [
          'bg-background-invert-translucent !text-text-and-icons-always-white border-transparent backdrop-blur-[5px]',
          'hover:bg-linear-translucent active:bg-linear-pressed-translucent focus-visible:bg-linear-translucent',
          'disabled:opacity-50',
        ],
        'opaque-shadow': [
          'bg-background-primary !text-text-and-icons-secondary border-transparent top-light-elevation-2',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary focus-visible:bg-linear-secondary',
          'disabled:opacity-50',
        ],
        'opaque-outline': [
          'bg-background-primary !text-text-and-icons-secondary outline-stroke-tertiary outline-[0.50px]',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary focus-visible:bg-linear-secondary',
          'disabled:opacity-50',
        ],
        /**
         * `invert-primary` — intended for use on dark/brand backgrounds.
         * Only available in `link` mode via `buttonLinkVariants`; in button
         * modes it renders as white text on a transparent background so it
         * remains visible on dark surfaces.
         *
         * If you need a solid inverted button, use `translucent` instead.
         */
        'invert-primary': [
          'bg-transparent !text-text-and-icons-always-white border-transparent',
          'hover:bg-linear-translucent active:bg-linear-pressed-translucent focus-visible:bg-linear-translucent',
          'disabled:opacity-50',
        ],
      },
      size: {
        sm: ['px-x3 py-x2', 'gap-1 [&_svg]:size-5'],
        // `default` is an alias for `md`; prefer `md` in new code.
        default: ['px-x4 py-x3', 'gap-1 [&_svg]:size-5'],
        md: ['px-x4 py-x3', 'gap-1 [&_svg]:size-5'],
        lg: ['px-x5 py-x3 h-12', 'gap-2 rounded-x3 [&_svg]:size-6 typo-body-1-emphasized'],
      },
      mode: {
        default: [],
        icon: ['!h-fit'],
        alternative: ['!rounded-full !h-fit'],
        // `link` mode is handled by `buttonLinkVariants`; this entry is a
        // no-op placeholder so CVA accepts the value without warnings.
        link: [],
      },
    },
    compoundVariants: [
      // --- icon mode: square padding overrides per size ---
      { mode: 'icon', size: 'sm',      class: '!p-x2' },
      { mode: 'icon', size: 'default', class: '!p-x3' },
      { mode: 'icon', size: 'md',      class: '!p-x3' },
      { mode: 'icon', size: 'lg',      class: '!p-x3' },

      // --- alternative mode: circular padding overrides per size ---
      { mode: 'alternative', size: 'sm',      class: '!p-half [&_svg]:size-5' },
      { mode: 'alternative', size: 'default', class: '!p-x1 [&_svg]:size-6' },
      { mode: 'alternative', size: 'md',      class: '!p-x1 [&_svg]:size-6' },
      { mode: 'alternative', size: 'lg',      class: '!p-x1 [&_svg]:size-10 !h-auto' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      mode: 'default',
    },
  },
);

/**
 * Link-mode button styles.
 * Use when `$mode="link"`. Renders as underlined inline text with no background.
 * Supports all standard variants plus `invert-primary` (white text for dark surfaces).
 */
export const buttonLinkVariants = cva(
  [
    'typo-body-2-emphasized whitespace-nowrap underline',
    'enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
    'flex gap-1 items-center justify-center',
  ],
  {
    variants: {
      variant: {
        primary:           ['text-text-and-icons-brand-on-subtle'],
        warning:           ['text-text-and-icons-warning-on-subtle'],
        destructive:       ['text-text-and-icons-danger-on-subtle'],
        success:           ['text-text-and-icons-success-on-subtle'],
        upsell:            ['text-text-and-icons-upsell-on-subtle'],
        secondary:         ['text-text-and-icons-secondary'],
        'ghost-primary':   ['text-text-and-icons-brand'],
        'ghost-destructive':['text-text-and-icons-danger'],
        translucent:       ['text-text-and-icons-always-white'],
        'opaque-shadow':   ['text-text-and-icons-secondary'],
        'opaque-outline':  ['text-text-and-icons-secondary'],
        'invert-primary':  ['text-text-and-icons-invert-primary'],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
