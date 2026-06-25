import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../lib/utils';
import { buttonVariants, buttonLinkVariants } from './Button.styles';
import { ButtonProps } from './Button.types';
import { useAccessibility } from '../../../hooks/useAccessibility';
import { CircularProgress } from '../CircularProgress/CircularProgress';

// Default loading icon as a constant to avoid recreation on every render
const DEFAULT_LOADING_ICON = <CircularProgress $variant="inverted" />;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  $loading: loading = false,
  $loadingText: loadingText,
  $fullWidth: fullWidth = false,
  $size: size = 'default',
  $variant: variant = 'primary',
  onClick,
  onKeyDown,
  $asChild: asChild = false,
  $as: Component = 'button',
  $loadingIcon: loadingIcon,
  $mode: mode = 'default',
  ...props
}, ref) => {
  // Use unified accessibility hook for keyboard and aria handling
  const { eventHandlers, accessibilityProps } = useAccessibility<HTMLButtonElement>({
    action: () => {
      if (ref && typeof ref !== 'function') {
        // Simulate a click when Enter/Space is pressed
        ref.current?.click();
      }
    },
    onKeyDown,
    'aria-label': props['aria-label'],
    loading,
    loadingText,
    children: props.children,
    busy: loading,
  });

  // Determine the component to render
  const Comp = asChild ? Slot : Component;

  // Determine which variant system to use based on mode
  const isLinkMode = mode === 'link';
  const baseStyles = isLinkMode
    ? buttonLinkVariants({ variant })
    : buttonVariants({ 
        size, 
        variant: variant === 'invert-primary' ? 'primary' : variant, 
        mode 
      });

  // Prepare common props
  const commonProps = {
    className: cn(baseStyles, fullWidth && '!w-full', className),
    ref,
    disabled: loading || props.disabled,
    type: 'button' as const,
    ...accessibilityProps,
    ...eventHandlers,
    ...props,
    onClick,
  };

  return (
    <Comp {...commonProps}>
      {asChild ? (
        // For asChild, render only the children (no loading state)
        props.children
      ) : (
        // For normal button, render loading state
        <>
          {loading && (loadingIcon || DEFAULT_LOADING_ICON)}
          {loading ? loadingText || props.children : props.children}
        </>
      )}
    </Comp>
  );
});

Button.displayName = 'Button';
