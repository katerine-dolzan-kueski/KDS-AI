import { cva } from 'class-variance-authority';

export const connectorStyles = cva([
  'flex-1',
  'border-l-(length:--border-thick)',
], {
  variants: {
    $visible: {
      true: 'border-stroke-tertiary-a50',
      false: 'border-transparent',
    },
    $variant: {
      fill: 'min-h-[var(--border-thick)]',
      space: 'min-h-x4 ml-[calc(var(--spacing-x4)-1px)]',
    },
  },
});

export const iconWrapperStyles = cva([
  'flex items-center justify-center',
], {
  variants: {
    $numeric: {
      true: 'w-x7 h-x7 m-[0.125rem] rounded-full bg-background-brand text-text-and-icons-always-white typo-numbers-2-emphasized',
      false: '[&>*]:w-x8 [&>*]:h-x8 text-text-and-icons-brand',
    },
  },
});
