import { cva } from 'class-variance-authority';

/**
 * Banner Root Styles - Using design tokens
 */
export const bannerVariants = cva(
  ['flex items-start p-3 gap-2 !transition-none'],
  {
    variants: {
      $variant: {
        information: ['bg-background-brand-subtle border-stroke-brand'],
        success: ['bg-background-success-subtle border-stroke-success'],
        warning: ['bg-background-warning-subtle border-stroke-warning'],
        error: ['bg-background-danger-subtle border-stroke-error'],
        upsell: ['bg-background-upsell-subtle border-stroke-upsell'],
      },
      $outline: {
        true: ['border'],
        false: ['border-0'],
      },
    },
    defaultVariants: {
      $variant: 'information',
      $outline: false,
    },
  },
);

/**
 * Banner Alternative Root Styles - Using design tokens
 */
export const bannerAlternativeVariants = cva([
  'flex items-start p-3 gap-2',
  '!transition-none',
  'bg-background-invert-primary text-text-and-icons-invert-primary',
]);

/**
 * Banner Icon Styles - Using design tokens
 */
export const bannerIconVariants = cva([], {
  variants: {
    $variant: {
      information: 'text-stroke-brand',
      success: 'text-stroke-success',
      warning: 'text-stroke-warning',
      error: 'text-stroke-error',
      upsell: 'text-stroke-upsell',
    },
  },
  defaultVariants: {
    $variant: 'information',
  },
});

/**
 * BannerAlternative Icon Styles - Using design tokens
 */
export const bannerAlternativeIconVariants = cva([], {
  variants: {
    $variant: {
      information: 'text-text-and-icons-brand-on-invert',
      success: 'text-text-and-icons-success-on-invert',
      warning: 'text-text-and-icons-warning-on-invert',
      error: 'text-text-and-icons-danger-on-invert',
      upsell: '',
    },
  },
  defaultVariants: {
    $variant: 'information',
  },
});

/**
 * Banner Content Styles - Using design tokens
 */
export const bannerContentVariants = cva(
  ['flex-1 self-stretch inline-flex flex-col justify-start items-start'],
  {
    variants: {
      $alternative: {
        true: 'text-text-and-icons-invert-primary',
        false: 'text-and-icons-primary',
      },
    },
    defaultVariants: {
      $alternative: false,
    },
  },
);

/**
 * Banner Close Styles - Using design tokens
 */
export const bannerCloseVariants = cva(['cursor-pointer ml-3'], {
  variants: {
    $alternative: {
      true: 'text-stroke-invert',
      false: 'text-stroke-primary',
    },
  },
  defaultVariants: {
    $alternative: false,
  },
});

/**
 * Banner Title Styles - Using design tokens
 */
export const bannerTitleVariants = cva(['typo-body-2-emphasized'], {
  variants: {
    $alternative: {
      true: 'text-text-and-icons-invert-primary',
      false: 'text-text-and-icons-primary',
    },
  },
  defaultVariants: {
    $alternative: false,
  },
});

/**
 * Banner Body Styles - Using design tokens
 */
export const bannerBodyVariants = cva(['typo-body-2 text-text-and-icons-secondary'], {
  variants: {
    $alternative: {
      true: 'text-text-and-icons-invert-primary',
      false: 'text-text-and-icons-primary',
    },
  },
  defaultVariants: {
    $alternative: false,
  },
});
