import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'w-6 h-6', // 28px x 28px fixed size
    'rounded-full',
    'border-2',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'cursor-pointer',
    'select-none',
  ],
  {
    variants: {
      state: {
        default: '',
        hover: '',
        pressed: '',
        focused: '',
        inactive: '',
      },
      checked: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    compoundVariants: [
      // Unselected states - background-primary, border changes by state
      {
        checked: false,
        state: 'default',
        disabled: false,
        class: 'bg-background-primary border-stroke-secondary',
      },
      {
        checked: false,
        state: 'hover',
        disabled: false,
        class: 'bg-states-hover border-stroke-hover',
      },
      {
        checked: false,
        state: 'pressed',
        disabled: false,
        class: 'bg-states-pressed border-stroke-brand', // Dark subtle overlay on press
      },
      {
        checked: false,
        state: 'focused',
        disabled: false,
        class: 'bg-background-primary border-stroke-brand focus:ring-2 focus:ring-stroke-brand',
      },
      {
        checked: false,
        state: 'inactive',
        disabled: true,
        class: 'bg-background-primary border-stroke-disabled',
      },
      // Selected states - background-brand (thick blue ring), inner dot background-brand
      {
        checked: true,
        state: 'default',
        disabled: false,
        class: 'border-background-brand', // Thick blue ring
      },
      {
        checked: true,
        state: 'hover',
        disabled: false,
        class: 'bg-states-hover border-background-brand',
      },
      {
        checked: true,
        state: 'pressed',
        disabled: false,
        class: 'bg-states-pressed border-background-brand', // Dark subtle overlay on press
      },
      {
        checked: true,
        state: 'focused',
        disabled: false,
        class: 'border-background-brand focus:ring-2 focus:ring-stroke-brand',
      },
      {
        checked: true,
        state: 'inactive',
        disabled: true,
        class: 'border-background-brand opacity-50',
      },
    ],
    defaultVariants: {
      state: 'default',
      checked: false,
      disabled: false,
    },
  },
);

export const radioIndicatorVariants = cva(
  [
    'absolute',
    'inset-0',
    'rounded-full',
    'transition-all',
    'duration-200',
    'flex',
    'items-center',
    'justify-center',
  ],
  {
    variants: {
      checked: {
        true: 'bg-transparent', // Transparent background for the indicator container
        false: 'bg-transparent',
      },
      disabled: {
        true: 'opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

// Inner dot - smaller circle inside the blue ring
export const radioDotVariants = cva(
  [
    'w-3 h-3', // 12px x 12px - smaller than the outer ring
    'rounded-full',
    'transition-all',
    'duration-200',
    'bg-background-primary', // White background to create the inner circle effect
  ],
  {
    variants: {
      checked: {
        true: 'bg-background-brand ', // White inner circle when selected
        false: 'bg-transparent',
      },
      disabled: {
        true: 'opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

export const radioLabelVariants = cva(
  ['text-sm', 'font-medium', 'cursor-pointer', 'select-none', 'transition-colors', 'duration-200'],
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
