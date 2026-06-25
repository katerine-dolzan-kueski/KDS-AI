import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

// #region Layout
export const layout = cva([
  'flex flex-col gap-y-1 w-full',
]);

export const header = cva([
  'flex items-center gap-x1',
]);

export const label = cva([
  'typo-body-2-emphasized text-text-and-icons-primary',
]);

export const secondaryLabel = cva([
  'typo-body-2 text-text-and-icons-tertiary',
]);

export const footer = cva([
  'flex gap-x1 items-center',
  'typo-meta text-text-and-icons-secondary',
], {
  variants: {
    error: {
      true: 'text-text-and-icons-danger!',
    },
  },
});

export const footerErrorIcon = cn('w-5 h-5 flex-shrink-0');
// #endregion Field

export const box = cva([
  // reuseable variables
  '[--radius:var(--radius-x3)]',

  // Box styles
  'relative flex-1 h-12 flex items-stretch rounded-[var(--radius)]',
  'transition-colors text-text-and-icons-secondary bg-background-primary',

  // Children styles
  '[&>*]:px-4 [&>*]:py-4 [&>*]:flex-1 [&>*]:max-w-full',
  '[&>*]:rounded-[var(--radius)] [&>*]:border-0 [&>*]:bg-transparent [&>*]:outline-none',
  '[&>*::placeholder]:text-text-and-icons-tertiary',
  '[&>*]:flex [&>*]:items-center',

  // Pseudo element styles (for border)
  'after:content-[""] after:absolute after:inset-0 after:pointer-events-none after:transition-colors',
  'after:border after:border-(length:--border-thin) after:border-stroke-secondary after:rounded-[var(--radius)]',
  'focus-within:after:border-(length:--border-thick) focus-within:after:border-stroke-brand',
], {
  variants: {
    $error: {
      true: 'after:border-(length:--border-thick)! after:border-stroke-error!',
    },
    $disabled: {
      true: [
        'bg-background-tertiary-cool! text-text-and-icons-tertiary! cursor-auto!',
        'after:border-stroke-secondary-a50',
      ],
    },
    $hasLeading: {
      true: '[&>*]:pl-[3.25rem]',
    },
    $hasTrailing: {
      true: '[&>*]:pr-[3.25rem]',
    },
    $isEmpty: {
      true: 'text-text-and-icons-tertiary!',
    },
  },
});

const decoratorBase = cn(
  'w-x6 h-x6 grid place-items-center absolute top-1/2 -translate-y-1/2 z-1',
  // if element is a "not disabled button"
  '[&:is(button):not(:disabled)]:cursor-pointer',
  // if not
  '[&:is(:not(button))]:pointer-events-none',

  // contained SVG
  '[&>svg]:max-w-6 [&>svg]:max-h-6',
);

function fieldDecorator(className: string = '') {
  return cva([
    decoratorBase,
    className,
  ], {
    variants: {
      $disabled: {
        true: 'text-text-and-icons-tertiary!',
      },
    },
  });
}

export const leading = fieldDecorator(cn('left-x4 text-text-and-icons-primary'));
export const trailing = fieldDecorator(cn('right-x4 text-text-and-icons-secondary'));
