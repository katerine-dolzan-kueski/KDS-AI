import React from 'react';
import { cn } from '../../../lib/utils';
import { buttonGroupVariants } from './ButtonGroup.styles';
import type { ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, $orientation = 'responsive', $fullWidth, className, ...props }, ref) => {
    // Vertical orientation always uses full width
    // Responsive uses full width by default
    // Horizontal respects the $fullWidth prop
    const shouldUseFullWidth =
      $orientation === 'vertical' ? true : ($fullWidth ?? $orientation !== 'horizontal');

    return (
      <div
        ref={ref}
        className={cn(
          buttonGroupVariants({
            orientation: $orientation,
            fullWidth: shouldUseFullWidth,
          }),
          className,
        )}
        role="group"
        {...props}
      >
        {children}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
