import React from 'react';
import { cn } from '../../../lib/utils';
import { SpinnerProps } from './Spinner.types';
import { CircularProgress } from '../CircularProgress/CircularProgress';
import {
  spinnerContainerVariants,
  spinnerTitleVariants,
  spinnerSubtitleVariants,
} from './Spinner.styles';

export const Spinner: React.FC<SpinnerProps> = ({
  $title: title = 'Preparando tu solicitud',
  $subtitle: subtitle = 'Sin papeleos eternos, ¡lo juramos!',
  $size: size = 'md',
  $speed: speed = 1,
  $visible: visible = true,
  className,
  $titleClassName: titleClassName,
  $subtitleClassName: subtitleClassName,
  ...props
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={cn(spinnerContainerVariants(), className)} role="status" {...props}>
      {/* Circular Progress Spinner */}
      <CircularProgress
        $size={size}
        $speed={speed}
        $visible
        $show
        aria-label={props['aria-label']}
      />

      {/* Title and Subtitle */}
      <div className="flex flex-col justify-start items-center gap-1">
        <div className="flex justify-between items-center max-w-[240px]">
          <h3 className={cn(spinnerTitleVariants(), 'typo-headline-2', titleClassName)}>{title}</h3>
        </div>
        <p
          className={cn(
            spinnerSubtitleVariants(),
            'typo-body-1',
            '!text-text-and-icons-secondary',
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
