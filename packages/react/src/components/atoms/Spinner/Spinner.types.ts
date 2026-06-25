import { type PropsOf } from '../../../lib/types';

export interface SpinnerProps extends PropsOf<'div'> {
  /** Title text to display */
  $title?: string;
  /** Subtitle text to display */
  $subtitle?: string;
  /** Size of the spinner */
  $size?: 'sm' | 'md' | 'lg';
  /** Animation speed in seconds */
  $speed?: number;
  /** Whether the spinner is visible */
  $visible?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom class name for title */
  $titleClassName?: string;
  /** Custom class name for subtitle */
  $subtitleClassName?: string;
}

export interface SpinnerSize {
  sm: string;
  md: string;
  lg: string;
}

export interface SpinnerSpeed {
  [key: number]: string;
}
