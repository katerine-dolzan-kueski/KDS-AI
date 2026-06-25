import { type PropsOf } from '../../../lib/types';

export interface FunnelLayoutDesktopHeaderProps extends PropsOf<'header'> {
  $onCancel: () => void;
  $leadingProps?: PropsOf<'svg'>;
  $trailingProps?: PropsOf<'button'>;
}

export interface FunnelLayoutPageHeaderProps extends PropsOf<'header'> {
  $onCancel: () => void;
  $closeButtonProps?: PropsOf<'button'>;
}
