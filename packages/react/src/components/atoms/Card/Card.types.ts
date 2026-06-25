import { type ElementType, type ReactNode, type HTMLAttributes } from 'react';

export type CardType = 'primary' | 'secondary';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Surface colour and border style. */
  $type?: CardType;
  /** Content rendered in the header slot. A divider appears below it when other slots are present. */
  header?: ReactNode;
  /** Content rendered in the main content slot. */
  children: ReactNode;
  /** Content rendered in the footer slot. A divider appears above it. */
  footer?: ReactNode;
  /** Rendered HTML element. Use 'article' or 'section' for semantic HTML. */
  as?: ElementType;
  /** Appended to generated class list (Tailwind merge-safe). */
  className?: string;
}
