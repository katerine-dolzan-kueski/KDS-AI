import { type ImgHTMLAttributes } from 'react';

export type AvatarVisual = 'icon' | 'photo' | 'logo';
export type AvatarIconSize = 'sm' | 'lg';
export type AvatarBorderColor = 'default' | 'brand';

export interface AvatarProps extends ImgHTMLAttributes<HTMLDivElement> {
  /** Content mode: icon silhouette, photo, or logo. */
  $visual?: AvatarVisual;
  /** Icon size. Only applies when `$visual='icon'`. */
  $iconSize?: AvatarIconSize;
  /** Renders an outline stroke around the container. */
  $showBorder?: boolean;
  /** Stroke colour. Only visible when `$showBorder` is true. */
  $borderColor?: AvatarBorderColor;
  /** Image URL. Used for `$visual='photo'` and `$visual='logo'`. */
  src?: string;
  /** Alt text for the image. Required when `src` is provided. */
  alt?: string;
  /** Appended to generated class list (Tailwind merge-safe). */
  className?: string;
}
