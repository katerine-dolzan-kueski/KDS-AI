import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

export const itemStyles = cva([
  'w-[8.5rem] h-[6.5rem]',
  'flex flex-col items-start gap-x3 p-x3 rounded-x3 relative',
  'bg-background-brand-subtle',
  'outline-none border-0',
  'before:content-[""] before:absolute before:inset-0 before:rounded-x3 before:pointer-events-none',
  'before:bg-states-hover before:opacity-0 before:transition-all before:duration-200',
], {
  variants: {
    $loading: {
      true: '',
      false: [
        'cursor-pointer',
        'hover:before:opacity-100',
        'active:before:bg-states-pressed',
      ],
    },
  },
  defaultVariants: {
    $loading: false,
  },
});

export const itemChip = cn([
  'text-text-and-icons-brand typo-mini-emphasized relative z-10',
  'bg-background-primary rounded-x1 px-x1 py-half',
]);
