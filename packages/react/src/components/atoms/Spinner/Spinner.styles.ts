import { cva } from 'class-variance-authority';

export const spinnerContainerVariants = cva([
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
  'space-y-3',
  'p-8',
]);

export const spinnerTitleVariants = cva(['text-text-and-icons-primary', 'text-center']);

export const spinnerSubtitleVariants = cva(['text-text-and-icons-secondary', 'text-center']);
