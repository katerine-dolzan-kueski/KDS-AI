import { cva } from 'class-variance-authority';

/**
 * Base button styles with comprehensive variants
 * Following Kueski Design System patterns and accessibility guidelines
 */
export const buttonVariants = cva(
  // Base styles - shared across all variants
  [
    'typo-body-2-emphasized whitespace-nowrap rounded-x2',
    'flex items-center justify-center w-fit',
    'enabled:cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed',
    'relative overflow-hidden focus-visible:!outline-[2px] focus-visible:!outline-offset-2 focus-visible:!outline-stroke-brand',
    'whitespace-normal break-all',
  ],
  {
    variants: {
      variant: {
        // Primary variant - main brand color
        primary: [
          'bg-background-brand !text-text-and-icons-always-white',
          'border-background-brand',
          'hover:bg-linear-brand active:bg-linear-pressed-brand focus-visible:bg-linear-brand',
          'disabled:disabled-button-brand',
        ],
        // Warning variant - caution actions
        warning: [
          'bg-background-warning !text-text-and-icons-always-white',
          'border-background-warning',
          'hover:bg-linear-warning active:bg-linear-pressed-warning focus-visible:bg-linear-warning',
          'disabled:disabled-button-warning',
        ],
        // Destructive variant - for dangerous actions
        destructive: [
          'bg-background-danger !text-text-and-icons-always-white',
          'border-background-danger',
          'hover:bg-linear-destructive active:bg-linear-pressed-destructive focus-visible:bg-linear-destructive',
          'disabled:disabled-button-destructive',
        ],
        // Success variant - positive actions
        success: [
          'bg-background-success !text-text-and-icons-always-white',
          'border-background-success',
          'hover:bg-linear-success active:bg-linear-pressed-success focus-visible:bg-linear-success',
          'disabled:disabled-button-success',
        ],
        // Upsell variant - promotional actions
        upsell: [
          'bg-background-upsell !text-text-and-icons-always-white',
          'border-background-upsell',
          'hover:bg-linear-upsell active:bg-linear-pressed-upsell focus-visible:bg-linear-upsell',
          'disabled:disabled-button-upsell',
        ],
        // Secondary variant - neutral actions
        secondary: [
          'bg-background-primary !text-text-and-icons-secondary',
          'outline outline-2 outline-offset-[-2px] outline-stroke-tertiary',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary focus-visible:bg-linear-secondary',
          'disabled:opacity-50',
        ],
        // Ghost primary variant - minimal style with brand color
        'ghost-primary': [
          'bg-transparent !text-text-and-icons-brand border-transparent',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary focus-visible:bg-linear-secondary',
          'disabled:opacity-50',
        ],
        // Ghost destructive variant - minimal style with destructive color
        'ghost-destructive': [
          'bg-transparent !text-text-and-icons-danger',
          'border-transparent',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary',
          'focus-visible:bg-linear-secondary disabled:opacity-50',
        ],
        // Translucent variant - semi-transparent background
        translucent: [
          'bg-background-invert-translucent !text-text-and-icons-always-white',
          'border-transparent backdrop-blur-[5px]',
          'hover:bg-linear-translucent active:bg-linear-pressed-translucent',
          'focus-visible:bg-linear-translucent disabled:opacity-50',
        ],
        // Opaque shadow variant - solid background with shadow
        'opaque-shadow': [
          'bg-background-primary !text-text-and-icons-secondary',
          'top-light-elevation-2 border-transparent',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary',
          'focus-visible:bg-linear-secondary disabled:opacity-50',
        ],
        // Opaque outline variant - solid background with outline
        'opaque-outline': [
          'bg-background-primary !text-text-and-icons-secondary',
          'outline-stroke-tertiary outline-[0.50px]',
          'hover:bg-linear-secondary active:bg-linear-pressed-secondary',
          'focus-visible:bg-linear-secondary disabled:opacity-50',
        ],
      },
      size: {
        sm: ['px-x3 py-x2', 'gap-1 [&_svg]:size-5'],
        default: ['px-x4 py-x3', 'gap-1  [&_svg]:size-5'],
        md: ['px-x4 py-x3', 'gap-1  [&_svg]:size-5'],
        lg: ['px-x5 py-x3 h-12', 'gap-2 rounded-x3 [&_svg]:size-6 typo-body-1-emphasized'],
      },
      mode: {
        default: [],
        icon: ['!h-fit'],
        alternative: ['!rounded-full !h-fit'],
      },
    },
    compoundVariants: [
      {
        mode: 'icon',
        size: 'sm',
        class: '!p-x2',
      },
      {
        mode: 'icon',
        size: 'md',
        class: '!p-x3',
      },
      {
        mode: 'icon',
        size: 'lg',
        class: '!p-x3',
      },
      {
        mode: 'alternative',
        size: 'sm',
        class: '!p-half [&_svg]:size-5',
      },
      {
        mode: 'alternative',
        size: 'md',
        class: '!p-x1 [&_svg]:size-6',
      },
      {
        mode: 'alternative',
        size: 'lg',
        class: '!p-x1 [&_svg]:size-10 !h-auto',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      mode: 'default',
    },
  },
);

export const buttonLinkVariants = cva(
  // Base styles - shared across all variants
  [
    'typo-body-2-emphasized whitespace-nowrap underline enabled:cursor-pointer disabled:cursor-not-allowed flex gap-1 items-center justify-center',
  ],
  {
    variants: {
      variant: {
        // Primary variant - main brand color
        primary: ['text-text-and-icons-brand-on-subtle'],
        // Warning variant - caution actions
        warning: ['text-text-and-icons-warning-on-subtle'],
        // Destructive variant - for dangerous actions
        destructive: ['text-text-and-icons-danger-on-subtle'],
        // Success variant - positive actions
        success: ['text-text-and-icons-success-on-subtle'],
        // Upsell variant - promotional actions
        upsell: ['text-text-and-icons-upsell-on-subtle'],
        // Secondary variant - neutral actions
        secondary: ['text-text-and-icons-secondary'],
        // Ghost primary variant - minimal style with brand color
        'ghost-primary': ['text-text-and-icons-brand'],
        // Ghost destructive variant - minimal style with destructive color
        'ghost-destructive': ['text-text-and-icons-danger'],
        // Translucent variant - semi-transparent background
        translucent: ['text-text-and-icons-always-white'],
        // Opaque shadow variant - solid background with shadow
        'opaque-shadow': ['text-text-and-icons-secondary'],
        // Opaque outline variant - solid background with outline
        'opaque-outline': ['text-text-and-icons-secondary'],
        // Link variant - text-only link style
        'invert-primary': ['text-text-and-icons-invert-primary'],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
