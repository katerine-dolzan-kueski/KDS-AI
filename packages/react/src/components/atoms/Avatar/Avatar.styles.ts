import { cva } from 'class-variance-authority';

/**
 * Avatar container styles.
 * Sets bg token via $visual, and optional border via $showBorder + $borderColor.
 * Container is always 48×48 (`size-x6`), circular (`rounded-max`).
 */
export const avatarContainerStyles = cva(
  [
    'relative inline-flex items-center justify-center shrink-0',
    'size-x6',
    'rounded-max',
    'overflow-hidden',
  ],
  {
    variants: {
      $visual: {
        icon: '[--avatar-bg:var(--color-background-tertiary)]',
        photo: '[--avatar-bg:var(--color-background-tertiary)]',
        logo: '[--avatar-bg:var(--color-background-invert-secondary)]',
      },
      $showBorder: {
        true: 'ring-border-thin',
        false: '',
      },
      $borderColor: {
        default: '[--avatar-ring:var(--color-stroke-secondary)]',
        brand: '[--avatar-ring:var(--color-stroke-brand)]',
      },
    },
    compoundVariants: [
      {
        $showBorder: true,
        $borderColor: 'default',
        className: 'ring-[var(--color-stroke-secondary)]',
      },
      {
        $showBorder: true,
        $borderColor: 'brand',
        className: 'ring-[var(--color-stroke-brand)]',
      },
    ],
    defaultVariants: {
      $visual: 'icon',
      $showBorder: false,
      $borderColor: 'default',
    },
  },
);

/**
 * Icon fill colour. Switches based on background ($visual).
 * `icon` and `photo` (blank) → secondary icon
 * `logo` → always-white icon
 */
export const avatarIconStyles = cva('', {
  variants: {
    $visual: {
      icon: 'text-[var(--color-text-and-icons-secondary)]',
      photo: 'text-[var(--color-text-and-icons-secondary)]',
      logo: 'text-[var(--color-text-and-icons-always-white)]',
    },
    $iconSize: {
      sm: 'size-[20px]',
      lg: 'size-[32px]',
    },
  },
  defaultVariants: {
    $visual: 'icon',
    $iconSize: 'lg',
  },
});
