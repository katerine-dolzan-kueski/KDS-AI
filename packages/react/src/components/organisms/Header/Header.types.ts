import { type ReactNode, type RefObject } from 'react';
import { type PropsOf } from '../../../lib/types';

export interface HeaderProps extends PropsOf<'header'> {
  $variant: 'main' | 'title' | 'secondary';
  $align?: 'left' | 'center';
  $leading?: ReactNode;
  $trailing?: ReactNode;
  $anchor?: RefObject<HTMLElement> | string;
  $scrolled?: boolean;
  $scrolledClassNames?: string;
}
