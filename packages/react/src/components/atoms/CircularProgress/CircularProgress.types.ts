export interface CircularProgressProps {
  /** Size of the spinner */
  $size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether the spinner is visible */
  $visible?: boolean;
  /** Custom class name */
  $className?: string;
  /** Animation speed in seconds */
  $speed?: number;
  /** Whether to show the spinner */
  $show?: boolean;
  /** Variant of the spinner - 'default' uses blue gradient, 'inverted' uses white gradient */
  $variant?: 'default' | 'inverted';
}

export interface CircularProgressSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface CircularProgressSpeed {
  [key: number]: string;
}
