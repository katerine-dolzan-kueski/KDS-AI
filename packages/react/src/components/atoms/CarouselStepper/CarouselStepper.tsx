'use client';

import { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import {
  stepperContainerStyles,
  shortStepStyles,
  wideStepTrackStyles,
  wideStepFillStyles,
} from './CarouselStepper.styles';
import type { CarouselStepperProps } from './CarouselStepper.types';

export const CarouselStepper = forwardRef<HTMLDivElement, CarouselStepperProps>(
  (
    { $type = 'manual', $size = 'short', steps, activeStep, className, ...props },
    ref,
  ) => {
    const isWide = $size === 'wide';

    return (
      <div
        ref={ref}
        role="group"
        aria-label={`Step ${activeStep + 1} of ${steps}`}
        className={cn(stepperContainerStyles({ $size }), className)}
        {...props}
      >
        {Array.from({ length: steps }, (_, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          if (isWide) {
            // Wide: full-width bars (progress + wide only)
            const state = isCompleted ? 'completed' : isActive ? 'active' : 'inactive';
            return (
              <div
                key={index}
                aria-current={isActive ? 'step' : undefined}
                className={wideStepTrackStyles({ state })}
              >
                {isActive && (
                  <div className={wideStepFillStyles} />
                )}
              </div>
            );
          }

          // Short: dots and pills
          let state: 'inactive' | 'active' | 'completed' | 'completed-progress';
          if (isActive) {
            state = 'active';
          } else if (isCompleted) {
            state = $type === 'progress' ? 'completed-progress' : 'completed';
          } else {
            state = 'inactive';
          }

          return (
            <div
              key={index}
              aria-current={isActive ? 'step' : undefined}
              className={shortStepStyles({ state })}
            />
          );
        })}
      </div>
    );
  },
);

CarouselStepper.displayName = 'CarouselStepper';
