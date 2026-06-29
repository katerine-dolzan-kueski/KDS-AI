import { type ReactNode, type HTMLAttributes } from 'react';

export type NavigationHeaderType = 'main' | 'title' | 'secondary';
export type NavigationHeaderAlignment = 'left' | 'centered';

interface NavigationHeaderBaseProps {
  /** Visual type — controls height, icon size, and title scale. */
  $type?: NavigationHeaderType;
  /** Collapsed state — reduces height to 48px and adds a bottom elevation shadow. */
  $onScroll?: boolean;
  /** Icon rendered in the left slot. */
  leftIcon?: ReactNode;
  /** Icon rendered in the right slot. */
  rightIcon?: ReactNode;
  /** The screen title. */
  children?: ReactNode;
  /** Appended to the generated class list (Tailwind merge-safe). */
  className?: string;
}

/**
 * Main and Title types: no alignment prop — title always flows left.
 */
interface MainOrTitleProps
  extends NavigationHeaderBaseProps,
    HTMLAttributes<HTMLElement> {
  $type?: 'main' | 'title';
  /**
   * $alignment is not applicable for 'main' or 'title' types.
   * TypeScript will flag accidental use.
   */
  $alignment?: never;
}

/**
 * Secondary type: supports optional alignment ('left' | 'centered').
 */
interface SecondaryProps
  extends NavigationHeaderBaseProps,
    HTMLAttributes<HTMLElement> {
  $type: 'secondary';
  /** Title alignment. Defaults to 'left'. */
  $alignment?: NavigationHeaderAlignment;
}

export type NavigationHeaderProps = MainOrTitleProps | SecondaryProps;
