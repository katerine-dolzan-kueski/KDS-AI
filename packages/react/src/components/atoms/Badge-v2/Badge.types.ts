import React from 'react';

export type BadgeVariant =
  | 'brand'
  | 'success'
  | 'warning'
  | 'danger'
  | 'upsell'
  | 'neutral';

export type BadgeEmphasis = 'subtle' | 'default' | 'strong';

export type BadgeType = 'dot' | 'label' | 'count';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic colour intent. Default: 'brand' */
  $variant?: BadgeVariant;
  /** Visual weight. Default: 'default' */
  $emphasis?: BadgeEmphasis;
  /** Content type. Default: 'label' */
  $type?: BadgeType;
  /** Size controlling height, padding, and dot diameter. Default: 'md' */
  $size?: BadgeSize;
  /**
   * Overflow threshold for count type.
   * Renders `{$max}+` when children exceeds this value.
   * Default: 99
   */
  $max?: number;
  /**
   * Text label or count value. Not rendered for dot type.
   * For count type: pass a number as children.
   */
  children?: React.ReactNode;
}
