import { ButtonHTMLAttributes, ElementType } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './Button.styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  $variant?: ButtonVariant;

  /** Custom CSS class name */
  className?: string;
  /** Button size variant */
  $size?: ButtonSize;
  /** Show loading state with spinner */
  $loading?: boolean;
  /** Loading text to display when loading is true */
  $loadingText?: string;
  /** Make the button full width */
  $fullWidth?: boolean;
  /** Render as a different element when true */
  $asChild?: boolean;
  /** Element type to render when asChild is true */
  $as?: ElementType;
  /** Button visual variant */
  $loadingIcon?: React.ReactNode;
  /** Type icon variant */
  $mode?: ButtonMode;
  'aria-label'?: string;
}

export type ButtonVariant =
  | 'primary'
  | 'warning'
  | 'destructive'
  | 'success'
  | 'upsell'
  | 'secondary'
  | 'ghost-primary'
  | 'ghost-destructive'
  | 'translucent'
  | 'opaque-shadow'
  | 'opaque-outline'
  | 'invert-primary';

export type ButtonMode = 'default' | 'icon' | 'alternative' | 'link' | null;

export type ButtonSize = 'default' | 'sm' | 'md' | 'lg' | null | undefined;
