import { cva } from 'class-variance-authority';

export const labelStyles = cva([
  'flex-1',
  'typo-body-1 text-text-and-icons-secondary',
], {
  variants: {
    $variant: {
      discount: '',
      interest: '',
      total: 'typo-headline-3 text-text-and-icons-primary!',
      rate: '',
    },
  },
});

export const amountStyles = cva('', {
  variants: {
    $variant: {
      discount: 'text-text-and-icons-secondary',
      interest: 'text-text-and-icons-secondary',
      total: 'typo-headline-2! text-text-and-icons-primary',
      rate: 'text-text-and-icons-secondary',
    },
    $success: {
      true: 'text-text-and-icons-success',
    },
    $emphatized: {
      true: 'typo-body-1-emphasized',
      false: 'typo-body-1',
    },
    $hide: {
      true: 'opacity-0',
    },
  },
  compoundVariants: [
    {
      $variant: 'total',
      $emphatized: true,
      class: '',
    },
  ],
});

export const hiddableStyles = cva('', {
  variants: {
    $hide: {
      true: 'opacity-0',
    },
  },
});

export const crossedStyles = cva('typo-body-1 text-text-and-icons-tertiary line-through', {
  variants: {
    $hide: {
      true: 'opacity-0',
    },
  },
});

export const legalStyles = cva([
  'typo-meta text-text-and-icons-secondary',
  '[&>b]:typo-meta-emphasized',
  '[&>a]:underline',
]);
