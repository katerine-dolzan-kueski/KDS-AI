import { cva } from 'class-variance-authority';

/**
 * Root <header> container.
 *
 * Height depends on type × onScroll:
 *   main   + !onScroll → 88px
 *   title  + !onScroll → 64px
 *   secondary (any)    → 48px
 *   any type + onScroll → 48px + bottom elevation shadow
 *
 * Horizontal padding and icon gap always use spacing tokens.
 */
export const navigationHeaderStyles = cva(
  [
    'flex w-full items-center',
    'bg-[var(--color-background-primary)]',
    'px-[var(--spacing-x5)]',
    'gap-[var(--spacing-x2)]',
  ],
  {
    variants: {
      $type: {
        main: '',
        title: '',
        // Secondary is always 48px regardless of onScroll
        secondary: 'h-[48px]',
      },
      $onScroll: {
        true: [
          'h-[48px]',
          // KDS elevation/2: two layered drop shadows using CSS custom properties
          '[filter:drop-shadow(0px_2px_2px_var(--shadows/6-percent,rgba(0,0,0,0.06)))_drop-shadow(0px_3px_3px_var(--shadows/3-percent,rgba(0,0,0,0.03)))]',
        ],
        false: '',
      },
    },
    compoundVariants: [
      // Full-height defaults (only when NOT on scroll)
      { $type: 'main', $onScroll: false, className: 'h-[88px]' },
      { $type: 'title', $onScroll: false, className: 'h-[64px]' },
    ],
    defaultVariants: {
      $type: 'main',
      $onScroll: false,
    },
  },
);

/**
 * Title text inside the header.
 *
 * Typography scale:
 *   main/title + !onScroll → typo-headline-1
 *   main/title + onScroll  → typo-body-1-emphasized (overrides via compound)
 *   secondary (any state)  → typo-body-1-emphasized
 *
 * Alignment:
 *   left     → default, text flows left
 *   centered → text-center (used with Secondary + centered layout)
 */
export const navigationHeaderTitleStyles = cva(
  [
    'min-w-0 flex-1',
    'text-[color:var(--color-text-and-icons-primary)]',
  ],
  {
    variants: {
      $type: {
        main: 'typo-headline-1',
        title: 'typo-headline-1',
        secondary: 'typo-body-1-emphasized',
      },
      $onScroll: {
        true: '',
        false: '',
      },
      $alignment: {
        left: '',
        centered: 'text-center',
      },
    },
    compoundVariants: [
      // On-scroll collapses both main and title to the smaller type scale
      { $type: 'main', $onScroll: true, className: 'typo-body-1-emphasized' },
      { $type: 'title', $onScroll: true, className: 'typo-body-1-emphasized' },
    ],
    defaultVariants: {
      $type: 'main',
      $onScroll: false,
      $alignment: 'left',
    },
  },
);

/**
 * Left icon wrapper.
 *
 * Size:
 *   main + !onScroll → 48px (decorative icon is larger on primary screens)
 *   everything else  → 32px
 */
export const navigationHeaderLeftIconStyles = cva('relative shrink-0', {
  variants: {
    $type: {
      main: 'size-[48px]',
      title: 'size-[32px]',
      secondary: 'size-[32px]',
    },
    $onScroll: {
      // On-scroll always collapses to 32px, even for main
      true: 'size-[32px]',
      false: '',
    },
  },
  compoundVariants: [
    // Main default is the only case where left icon is 48px
    { $type: 'main', $onScroll: false, className: 'size-[48px]' },
  ],
  defaultVariants: {
    $type: 'main',
    $onScroll: false,
  },
});

/**
 * Right icon wrapper — always 32px, no variants.
 */
export const navigationHeaderRightIconStyles = cva(
  'relative shrink-0 size-[32px]',
);
