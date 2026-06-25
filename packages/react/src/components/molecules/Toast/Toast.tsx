import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import { Banner } from '../Banner';
import { InfoCircleFilledIcon } from '../../atoms/Icons';
import type {
  ToastCloseProps,
  ToastIconProps,
  ToastContentProps,
  ToastBodyProps,
  ToastProps,
} from './Toast.types';
import { Toaster, ToastBar } from 'react-hot-toast';

/**
 * Toast Root - Main toast component using Banner
 */
const ToastRoot = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      $variant = 'information',
      className,
      $duration: duration = 5000,
      children,
      $showPosition: showPosition = 'bottom-right',
      $hidePosition: hidePosition = 'bottom-center',
      $reverseOrder: reverseOrder = false,
      $gap: gap = 8,
      $toasterId: toasterId = 'default',
      onClose,
      ...props
    },
    ref,
  ) => {
    return (
      <Toaster
        position={showPosition}
        reverseOrder={reverseOrder}
        gutter={gap}
        toasterId={toasterId}
        toastOptions={{ duration }}
        {...props}
      >
        {(t) => (
          <ToastBar
            toast={t}
            position={hidePosition}
            style={{
              color: 'inherit',
              display: 'inline-block',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: 0,
              margin: 0,
              maxWidth: '100%',
            }}
          >
            {() => (
              <Banner
                ref={ref}
                $variant={$variant}
                $alternative
                className={cn('w-full', className)}
                onClose={() => {
                  onClose?.(t.id);
                }}
              >
                {children}
              </Banner>
            )}
          </ToastBar>
        )}
      </Toaster>
    );
  },
);

ToastRoot.displayName = 'Toast.Root';

/**
 * Toast Icon - Uses Banner.Icon
 */
const ToastIcon = forwardRef<HTMLDivElement, ToastIconProps>(({ className, ...props }, ref) => {
  return (
    <Banner.Icon ref={ref} className={className} {...props}>
      <InfoCircleFilledIcon className="w-5 h-5" />
    </Banner.Icon>
  );
});

ToastIcon.displayName = 'Toast.Icon';

/**
 * Toast Content - Uses Banner.Content
 */
const ToastContent = forwardRef<HTMLDivElement, ToastContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Banner.Content ref={ref} className={className} {...props}>
        {children}
      </Banner.Content>
    );
  },
);

ToastContent.displayName = 'Toast.Content';

/**
 * Toast Body - Uses Banner.Body
 */
const ToastBody = forwardRef<HTMLDivElement, ToastBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Banner.Body ref={ref} className={className} {...props}>
        {children}
      </Banner.Body>
    );
  },
);

ToastBody.displayName = 'Toast.Body';

/**
 * Toast Close - Uses Banner.Close
 */
const ToastClose = forwardRef<HTMLButtonElement, ToastCloseProps>(
  ({ className, ...props }, ref) => {
    return <Banner.Close ref={ref} className={className} {...props} />;
  },
);

ToastClose.displayName = 'Toast.Close';

/**
 * Toast Component System - Using Radix UI Toast with Banner alternative
 */
export const Toast = Object.assign(ToastRoot, {
  Icon: ToastIcon,
  Content: ToastContent,
  Body: ToastBody,
  Close: ToastClose,
});
