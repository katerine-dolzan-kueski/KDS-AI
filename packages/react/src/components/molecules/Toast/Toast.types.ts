import { ReactNode } from 'react';
import {
  BannerBodyProps,
  BannerCloseProps,
  BannerContentProps,
  BannerIconProps,
  BannerProps,
} from '../Banner';
import { Toast, ToastPosition } from 'react-hot-toast';

export type ToastVariant = 'information' | 'success' | 'warning' | 'error';

export type UseToastProps = Partial<
  Pick<Toast, 'id' | 'duration' | 'position' | 'toasterId' | 'removeDelay'>
>;

export interface ToastProps extends Omit<BannerProps, '$variant' | 'onClose'> {
  /** Toast variant - determines color scheme and icon */
  $variant?: ToastVariant;
  /** Custom CSS class name */
  className?: string;
  /** Children components */
  children?: ReactNode;
  /** Duration in milliseconds before auto-close (0 = no auto-close) */
  $duration?: number;
  /** Position of the toast */
  $showPosition?: ToastPosition;
  /** Hide the toast */
  $hidePosition?: ToastPosition;
  /** Reverse the order of the toast */
  $reverseOrder?: boolean;
  /** Changes the gap between each toast. Defaults to 8 */
  $gap?: number;
  /** You can change the toasterId to have a different toaster instance. */
  $toasterId?: string;
  /** Callback when the toast is closed */
  onClose?: (toastId: string) => void;
}

export type ToastCloseProps = BannerCloseProps;

export type ToastIconProps = BannerIconProps;

export type ToastContentProps = BannerContentProps;

export type ToastBodyProps = BannerBodyProps;
