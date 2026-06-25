import React from 'react';

/**
 * Button variants — controls visual style.
 *
 * `invert-primary` is only meaningful in `link` mode ($mode="link").
 * In all other modes it renders identically to `primary`.
 */
export type ButtonVariant =
  | 'primary'
  | 'warning'
  | 'destructive'
  | 'success'
  | 'upsell'
  | 'secondary'
  | 'ghost-primary'
  | 'ghost-destructive'
  | 'translucent'
  | 'opaque-shadow'
  | 'opaque-outline'
  | 'invert-primary';

/**
 * Button sizes.
 * `default` and `md` are aliases — identical padding/radius.
 * Prefer `md` in new code; `default` exists for backwards compatibility.
 */
export type ButtonSize = 'sm' | 'default' | 'md' | 'lg';

/**
 * Button interaction/layout modes.
 *
 * - `default`     Standard text + optional icon button.
 * - `icon`        Square icon-only button; padding is uniform.
 * - `alternative` Circular icon button; always full-radius.
 * - `link`        Removes background/border; renders as underlined inline text.
 *                 Use with `$variant` to control text colour.
 */
export type ButtonMode = 'default' | 'icon' | 'alternative' | 'link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant.
   * @default 'primary'
   */
  $variant?: ButtonVariant;

  /**
   * Controls padding and font size.
   * @default 'md'
   */
  $size?: ButtonSize;

  /**
   * Layout and interaction mode.
   * @default 'default'
   */
  $mode?: ButtonMode;

  /**
   * When true, shows a loading spinner and disables the button.
   * @default false
   */
  $loading?: boolean;

  /**
   * Text displayed in place of children while `$loading` is true.
   * Also used as `aria-label` during loading for screen-reader announcements.
   */
  $loadingText?: string;

  /**
   * Custom loading indicator. Replaces the default `<CircularProgress>`.
   */
  $loadingIcon?: React.ReactNode;

  /**
   * When true, stretches the button to 100% container width.
   * @default false
   */
  $fullWidth?: boolean;

  /**
   * Merges props onto the immediate child element instead of rendering a
   * wrapper `<button>`. The child must accept a `ref`. Cannot be combined
   * with `$as`.
   * @default false
   */
  $asChild?: boolean;

  /**
   * Override the root element. Useful for rendering as `<a>` or a router
   * `<Link>` without losing button styles.
   * Ignored when `$asChild` is true.
   * @default 'button'
   */
  $as?: React.ElementType;
}
