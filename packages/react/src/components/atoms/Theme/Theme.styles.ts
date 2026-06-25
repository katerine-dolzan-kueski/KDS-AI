import { cva } from 'class-variance-authority';
import { ThemeVariant } from './Theme.types';

export const themeVariants = cva('text-text-and-icons-primary', {
  variants: {
    variant: {
      background: 'bg-background-primary',
      contents: 'contents',
    } satisfies Record<ThemeVariant, string>,
  },
});
