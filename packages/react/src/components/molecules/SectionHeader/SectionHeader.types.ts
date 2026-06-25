import { type ReactNode } from 'react';
import { type PropsOf } from '../../../lib/types';

export type SectionHeaderSize = 'h1' | 'h2' | 'h3' | 'h4';
export type SectionHeaderAlignment = 'left' | 'centered';

export interface SectionHeaderProps extends PropsOf<'div'> {
  $title: string;
  $trailing?: ReactNode;
  children?: ReactNode;
  $size?: SectionHeaderSize;
  $alignment?: SectionHeaderAlignment;
}
