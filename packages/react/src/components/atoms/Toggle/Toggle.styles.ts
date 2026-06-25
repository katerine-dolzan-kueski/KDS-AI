import { cva } from 'class-variance-authority';

export const toggleRootStyles = cva(
  [
    'group flex items-center shrink-0 cursor-pointer rounded-full border-2 p-1',
    'border-stroke-secondary w-10 h-6 transition-all bg-background-tertiary text-stroke-secondary',
    'hover:bg-states-hover dark:ring-offset-background-tertiary dark:bg-background-transparent',
    'focus:outline-none focus:ring-2 focus:ring-stroke-brand focus:ring-offset-2',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-brand focus-visible:ring-offset-2 ',
    'active:bg-states-pressed outline-2 outline-offset-[-2px] active:pl-0 active:pr-0.5',
  ],
  {
    variants: {
      checked: {
        true: [
          'bg-background-brand border-background-brand',
          'text-background-brand justify-end border-0',
          'hover:bg-background-brand',
          'before:bg-states-hover before:opacity-0 hover:before:opacity-100',
          'active:bg-background-brand dark:bg-background-brand',
        ],
      },
      disabled: {
        true: [
          'disabled:data-[state=checked]:text-transparent disabled:data-[state=checked]:bg-background-brand/40',
          'disabled:data-[state=checked]:border-none border-stroke-secondary-a50/40',
          'text-stroke-secondary-a50/40 pointer-events-none bg-states-disabled',
        ],
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

export const toggleThumStyles = cva(
  [
    'pointer-events-none rounded-full bg-text-and-icons-secondary',
    'transition-all duration-200 ease-in-out w-4 h-4',
    'group-active:w-5 group-active:h-5 group-active:bg-background-invert-tertiary',
    'group-hover:bg-background-invert-tertiary group-hover:opacity-90',
  ],
  {
    variants: {
      checked: {
        true: [
          'bg-background-primary group-hover:bg-background-tertiary group-active:bg-background-tertiary',
          'dark:group-focus:bg-background-tertiary',
          'dark:group-focus-visible:bg-background-tertiary',
        ],
      },
      disabled: {
        true: [
          'bg-background-invert-tertiary/40 pointer-events-none',
          'data-[state=checked]:bg-background-primary/40',
        ],
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);
