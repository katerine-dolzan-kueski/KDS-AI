'use client';

import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { avatarContainerStyles, avatarIconStyles } from './Avatar.styles';
import type { AvatarProps } from './Avatar.types';

/** Generic user silhouette icon — used for icon mode and blank photo state. */
const UserIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4Z" />
  </svg>
);

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      $visual = 'icon',
      $iconSize = 'lg',
      $showBorder = false,
      $borderColor = 'default',
      src,
      alt = '',
      className,
      ...props
    },
    ref,
  ) => {
    const showImage = ($visual === 'photo' || $visual === 'logo') && !!src;
    const showIcon = $visual === 'icon' || (!src && $visual !== 'logo');
    const showLogoBlank = $visual === 'logo' && !src;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={alt || undefined}
        style={{ backgroundColor: 'var(--avatar-bg)' } as React.CSSProperties}
        className={cn(
          avatarContainerStyles({ $visual, $showBorder, $borderColor }),
          className,
        )}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {showImage && (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            draggable={false}
          />
        )}
        {(showIcon || showLogoBlank) && (
          <UserIcon
            className={avatarIconStyles({ $visual: showLogoBlank ? 'logo' : $visual, $iconSize })}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
