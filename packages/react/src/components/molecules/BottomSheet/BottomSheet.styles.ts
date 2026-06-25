import { cva } from 'class-variance-authority';

export const sheetStyles = cva([
  'rounded-t-3xl bg-white shadow-s15 transform transition-transform duration-300 ease-out max-h-full max-w-full',
  'flex flex-col',
  // modal aspect for md
  'md:p-18 md:rounded-x3 md:inset',
  'md:transition-opacity',
], {
    variants: {
      $isOpen: {
        true: 'translate-y-0 md:opacity-100',
        false: 'translate-y-full md:translate-y-0 md:opacity-0',
      },
    },
    defaultVariants: {
      $isOpen: false,
    },
  },
);

export const positionerStyles = cva(['fixed inset-0 z-40 flex flex-col justify-end overscroll-none', 'md:items-center md:justify-center'], {
    variants: {
      $isOpen: {
        true: 'pointer-events-auto',
        false: 'pointer-events-none',
      },
    },
    defaultVariants: {
      $isOpen: false,
    },
  },
);

export const backdropStyles = cva([
  'absolute inset-0 bg-black/80 bg-background-invert-translucent overflow-hidden',
  'transition-opacity duration-300 ease-out',
], {
    variants: {
      $isOpen: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      $isOpen: false,
    },
  },
);
