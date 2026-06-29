'use client';

import React, { forwardRef } from 'react';
import { cn } from '@kueski/react/utils/cn';
import type { FooterProps } from './Footer.types';
import {
  footerStyles,
  footerCaptionStyles,
  footerButtonsStyles,
  footerPrimaryActionStyles,
  footerSecondaryActionStyles,
  footerBadgeStyles,
  footerSystemBarStyles,
} from './Footer.styles';

const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      $buttons = 'single',
      $elevated = false,
      $systemBar = false,
      primaryAction,
      secondaryAction,
      caption,
      badge,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={cn(footerStyles({ $elevated }), className)}
        {...rest}
      >
        {/* Caption — supporting text / consent copy above buttons */}
        {caption && (
          <div className={footerCaptionStyles()}>
            {caption}
          </div>
        )}

        {/* Action zone */}
        <div className={footerButtonsStyles({ $buttons })}>
          <div className={footerPrimaryActionStyles({ $buttons })}>
            {primaryAction}
          </div>
          {secondaryAction && $buttons !== 'single' && (
            <div className={footerSecondaryActionStyles({ $buttons })}>
              {secondaryAction}
            </div>
          )}
        </div>

        {/* Badge — icon + link trust element below buttons */}
        {badge && (
          <div className={footerBadgeStyles()}>
            {badge}
          </div>
        )}

        {/* Android system navigation indicator */}
        {$systemBar && (
          <div className={footerSystemBarStyles()}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108px] h-[4px] rounded-[12px] bg-black" />
          </div>
        )}
      </footer>
    );
  },
);

Footer.displayName = 'Footer';

export { Footer };
