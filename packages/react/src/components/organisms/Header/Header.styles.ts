import { cn } from '../../../lib';
import { cva } from 'class-variance-authority';

export const headerStyles = cva([
  // Base header styles
  'sticky top-0 z-10 flex items-center gap-x-2 w-full',
  'text-text-and-icons-primary bg-background-primary',
  'transition-all duration-300',
], {
  variants: {
    $align: {
      left: 'justify-start',
      center: 'justify-center',
      stretch: 'justify-start [&>*]:flex-1',
    },
    $isScrolled: {
      true: [
        'top-light-elevation-2',
        'py-x2! h-[3rem]!',
      ],
      false: [
      ],
    },
    $variant: {
      main: 'p-x5 h-[5.5rem]',
      title: 'px-x5 py-x4 h-[4rem]',
      secondary: 'px-x5 py-x2 h-[3rem]',
    },
  },
});

export const leadingStyles = cva([
  'shrink-0 text-text-and-icons-secondary flex',
  '[&>*]:w-[var(--icon-size)] [&>*]:h-[var(--icon-size)] [&>*]:transition-all [&>*]:duration-300',
  '[&>*>svg]:w-[var(--icon-size)] [&>*>svg]:h-[var(--icon-size)] [&>*>svg]:transition-all [&>*>svg]:duration-300',
], {
  variants: {
    $large: {
      true: '[--icon-size:3rem]',
      false: '[--icon-size:2rem]',
    },
    $isScrolled: {
      true: '[--icon-size:2rem]!',
      false: '',
    },
  },
  defaultVariants: {
    $large: false,
  },
});

export const trailingStyles = cn([
  leadingStyles(),
  'text-text-and-icons-primary',
  'ml-auto',
]);

export const titleStyles = cva([
  'flex-1 transition-all duration-300',
], {
  variants: {
    $align: {
      left: 'text-left',
      center: 'text-center',
    },
    $variant: {
      main: 'typo-headline-1',
      title: 'typo-headline-2',
      secondary: 'typo-body-1-emphasized',
    },
    $isScrolled: {
      true: 'typo-body-1-emphasized!',
      false: '',
    },
  },
});
