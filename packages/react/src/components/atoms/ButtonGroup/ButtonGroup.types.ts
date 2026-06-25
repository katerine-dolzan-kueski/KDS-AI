import { ReactNode } from 'react';
import { type PropsOf } from '../../../lib/types';

export interface ButtonGroupProps extends PropsOf<'div'> {
  /**
   * Button components to render inside the group
   * Compose any number of Button components with full control
   */
  children: ReactNode;

  /**
   * Layout orientation - affects how buttons are arranged
   * - 'horizontal': Side by side
   * - 'vertical': Stacked
   * - 'responsive': Horizontal on desktop (sm+), vertical on mobile (full width)
   * @default 'responsive'
   */
  $orientation?: 'horizontal' | 'vertical' | 'responsive';

  /**
   * Whether buttons should take full width of container
   * @default false for horizontal, true for vertical/responsive
   */
  $fullWidth?: boolean;

  /**
   * Additional CSS classes for the button group container
   */
  className?: string;
}
