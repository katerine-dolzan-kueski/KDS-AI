import { HTMLAttributes } from 'react';

export type BannerVariant = 'information' | 'success' | 'warning' | 'error' | 'upsell';

export interface BannerProps extends HTMLAttributes<HTMLElement> {
  /** Banner variant - determines color scheme and icon */
  $variant: BannerVariant;
  /** Close button click handler - when provided, close button is automatically shown */
  onClose?: () => void;
  /** Outline visibility - auto enables outline in dark mode, true/false for manual control */
  $outline?: boolean;
  /** Alternative mode - uses invert colors for dark backgrounds */
  $alternative?: boolean;

  /** Custom CSS class name */
  className?: string;
}

/**
 * Banner Icon Props
 */
export type BannerIconProps = HTMLAttributes<HTMLDivElement>;

/**
 * Banner Content Props
 */
export type BannerContentProps = HTMLAttributes<HTMLDivElement>;

/**
 * Banner Title Props
 */
export type BannerTitleProps = HTMLAttributes<HTMLHeadingElement>;

/**
 * Banner Description Props
 */
export type BannerBodyProps = HTMLAttributes<HTMLDivElement>;

/**
 * Banner Close Props
 */
export type BannerCloseProps = HTMLAttributes<HTMLButtonElement>;
