'use client';

import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { ShieldCheckIcon } from '../../atoms/Icons/ShieldCheckIcon';
import type { DataProtectionBadgeProps } from './DataProtectionBadge.types';
import { rootStyles, iconStyles, labelStyles } from './DataProtectionBadge.styles';

const DEFAULT_LABEL = 'Cómo protegemos tus datos';

// ── Component ─────────────────────────────────────────────────────────────────

export const DataProtectionBadge = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  DataProtectionBadgeProps
>(({ label = DEFAULT_LABEL, className, href, onPress }, ref) => {
  const sharedContent = (
    <>
      <ShieldCheckIcon $width={16} $height={16} className={iconStyles()} />
      <span className={labelStyles()}>{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(rootStyles(), className)}
      >
        {sharedContent}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onPress}
      className={cn(rootStyles(), className)}
    >
      {sharedContent}
    </button>
  );
});

DataProtectionBadge.displayName = 'DataProtectionBadge';
