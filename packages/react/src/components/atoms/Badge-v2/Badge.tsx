import React from 'react';
import { cn } from '../../../utils/cn';
import { badgeVariants } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

/**
 * Badge — non-interactive contextual indicator.
 *
 * Communicates status, category, or quantity. Appears floating over
 * a tile/icon or inline in a layout. Uses the KDS token contract defined
 * in badge.docs.md — no raw hex, rgb, or px values in this file.
 *
 * @example
 * // Dot — status indicator (always provide aria-label)
 * <Badge $type="dot" $variant="danger" aria-label="Unread notifications" />
 *
 * @example
 * // Label
 * <Badge $variant="success" $emphasis="subtle">Active</Badge>
 *
 * @example
 * // Count with overflow (renders "99+" when value > $max)
 * <Badge $type="count" $variant="brand">{128}</Badge>
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      $variant = 'brand',
      $emphasis = 'default',
      $type = 'label',
      $size = 'md',
      $max = 99,
      children,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    // ── Resolve displayed content ──────────────────────────────────────────
    const content = resolveContent($type, $max, children);

    // ── Warn in development if dot is missing aria-label ──────────────────
    if (process.env.NODE_ENV !== 'production' && $type === 'dot' && !ariaLabel) {
      console.warn(
        '[KDS Badge] $type="dot" has no visible text. Provide aria-label to describe the status.',
      );
    }

    return (
      <span
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        className={cn(
          badgeVariants({
            variant:  $variant,
            emphasis: $emphasis,
            type:     $type,
            size:     $size,
          }),
          className,
        )}
        {...props}
      >
        {content}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function resolveContent(
  type: BadgeProps['$type'],
  max: number,
  children: React.ReactNode,
): React.ReactNode {
  if (type === 'dot') return null;

  if (type === 'count') {
    const value = typeof children === 'number' ? children : Number(children);
    if (!Number.isNaN(value) && value > max) return `${max}+`;
  }

  return children;
}
