'use client';

import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import {
  navigationHeaderStyles,
  navigationHeaderTitleStyles,
  navigationHeaderLeftIconStyles,
  navigationHeaderRightIconStyles,
} from './NavigationHeader.styles';
import type { NavigationHeaderProps } from './NavigationHeader.types';

/**
 * NavigationHeader — top-of-screen header bar.
 *
 * Three types: 'main' (primary screens, large default),
 * 'title' (secondary level, medium default), 'secondary' (sub-pages, always compact).
 *
 * Pass `$onScroll` from the page scroll listener to collapse the header
 * and reveal the elevation shadow.
 */
export const NavigationHeader = forwardRef<HTMLElement, NavigationHeaderProps>(
  (props, ref) => {
    // Destructure via cast to handle the discriminated union at runtime.
    // TypeScript enforces correctness at call sites via the union types.
    const {
      $type = 'main',
      $onScroll = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...rest
    } = props as NavigationHeaderProps & { $alignment?: 'left' | 'centered' };

    const $alignment =
      $type === 'secondary' ? (rest.$alignment ?? 'left') : 'left';

    // Remove $alignment from the spread so it never reaches the DOM.
    const { $alignment: _ignored, ...htmlProps } = rest as typeof rest & {
      $alignment?: string;
    };

    // For centered secondary, both icon slots are always rendered (even when
    // empty) to act as fixed-width spacers that keep the title truly centred.
    const isCentered = $type === 'secondary' && $alignment === 'centered';
    const showLeftSlot = Boolean(leftIcon) || isCentered;
    const showRightSlot = Boolean(rightIcon) || isCentered;

    return (
      <header
        ref={ref}
        className={cn(navigationHeaderStyles({ $type, $onScroll }), className)}
        {...htmlProps}
      >
        {showLeftSlot && (
          <div
            className={cn(
              navigationHeaderLeftIconStyles({ $type, $onScroll }),
              // Invisible placeholder keeps layout when no icon is passed
              !leftIcon && 'invisible',
            )}
            aria-hidden={!leftIcon}
          >
            {leftIcon}
          </div>
        )}

        {children && (
          <p
            className={navigationHeaderTitleStyles({
              $type,
              $onScroll,
              $alignment,
            })}
          >
            {children}
          </p>
        )}

        {showRightSlot && (
          <div
            className={cn(
              navigationHeaderRightIconStyles(),
              !rightIcon && 'invisible',
            )}
            aria-hidden={!rightIcon}
          >
            {rightIcon}
          </div>
        )}
      </header>
    );
  },
);

NavigationHeader.displayName = 'NavigationHeader';
