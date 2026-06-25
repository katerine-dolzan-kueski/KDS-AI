import { cva } from 'class-variance-authority';

export const segmentedTabsRootStyles = cva(
  [
    'border-[length:var(--border-regular)] border-transparent p-[var(--border-regular)] flex flex-col items-stretch',
  ],
  {
    variants: {
      $size: {
        normal: 'rounded-x3',
        icon: 'rounded-x3',
        small: 'rounded-x2',
      },
    },
    defaultVariants: {
      $size: 'normal',
    },
  },
);

export const segmentedTabsContainerStyles = cva(
  [
    'overflow-hidden inline-flex rounded-[inherit] bg-background-tertiary flex-1',
    '[box-shadow:0px_0px_0px_var(--border-regular)_var(--color-stroke-tertiary)]',
  ],
  {
    variants: {
      $size: {
        normal: '[&>*]:h-12',
        small: '[&>*]:h-9',
        icon: '[&>*]:h-19',
      },
    },
    defaultVariants: {
      $size: 'normal',
    },
  },
);

export const segmentedTabsItemStyles = cva(
  [
    'flex-1 min-w-0 cursor-pointer rounded-[inherit] flex flex-col items-center justify-center gap-x1 outline-none overflow-hidden',
    '[&>svg]:size-[var(--spacing-x7)]',
    'transition-all duration-200 [&:not(:disabled)]:hover:bg-states-hover [&:not(:disabled)]:active:bg-states-pressed',
    'text-text-and-icons-primary disabled:text-text-and-icons-primary-a50',
    'disabled:text-text-and-icons-primary-a50 disabled:cursor-not-allowed disabled:bg-states-disabled',
  ],
  {
    variants: {
      $selected: {
        true: [
          'typo-body-2-emphasized bg-background-primary',
          '[&:not(:disabled)]:[box-shadow:inset_0px_0px_0px_var(--border-thick)_var(--color-stroke-brand)]',
        ],
        false: 'typo-body-2',
      },
    },
  },
);
