import type { ReactNode } from 'react';
import type { PropsOf } from '../../../lib/types';

export interface SegmentedTabsProps extends PropsOf<'div'> {
  $size?: 'normal' | 'small' | 'icon';
}

export interface SegmentedTabsItemProps extends PropsOf<'button'> {
  $selected?: boolean;
  $text?: ReactNode;
  $icon?: ReactNode;
};
