'use client';

import { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import { dividerVariants } from './Divider.styles';
import type { DividerProps } from './Divider.types';

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ $thickness = 'thin', className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn(dividerVariants({ $thickness }), className)}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
