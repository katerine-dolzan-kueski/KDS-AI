export type CarouselStepperType = 'manual' | 'progress';
export type CarouselStepperSize = 'short' | 'wide';

export interface CarouselStepperProps {
  /** Interaction model: 'manual' for carousel pagination, 'progress' for sequential flows. */
  $type?: CarouselStepperType;
  /**
   * Indicator style.
   * 'short' renders dot/pill indicators (default).
   * 'wide' renders full-width bars — only valid with $type='progress', designed for dark backgrounds.
   */
  $size?: CarouselStepperSize;
  /** Total number of steps. Minimum 2. */
  steps: number;
  /** 0-indexed index of the current step. */
  activeStep: number;
  /** Appended to the container class list (Tailwind merge-safe). */
  className?: string;
}
