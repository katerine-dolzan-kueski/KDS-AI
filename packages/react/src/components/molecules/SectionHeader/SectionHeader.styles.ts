import { cva } from 'class-variance-authority';

export const sectionHeaderStyles = cva([
  'flex flex-col gap-x1',
], {
  variants: {
    $alignment: {
      left: 'text-left',
      centered: 'text-center',
    },
  },
});


export const headingStyles = cva([
  'font-semibold text-text-and-icons-primary',
], {
  variants: {
    $size: {
      h1: 'typo-headline-1',
      h2: 'typo-headline-2', 
      h3: 'typo-headline-3',
      h4: 'typo-body-1-emphasized',
    },
  },
});

export const trailingActionStyles = cva([
  'shrink-0',
  '[&_svg]:w-x6 [&_svg]:h-x6', 
  '[&>button]:flex [&>button]:items-center [&>button]:gap-x1',
  '[&>button]:typo-body-2 [&>button]:text-text-and-icons-brand',
  '[&>button]:cursor-pointer',
]);
