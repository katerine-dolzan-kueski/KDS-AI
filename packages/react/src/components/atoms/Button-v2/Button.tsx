import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../lib/utils';
import { buttonVariants, buttonLinkVariants } from './Button.styles';
import { ButtonProps } from './Button.types';
import { useAccessibility } from '../../../hooks/useAccessibility';
import { CircularProgress } from '../CircularProgress/CircularProgress';

/**
 * Default loading indicator — memoised constant so it is never recreated.
 * Override per-instance with `$loadingIcon`.
 */
const DEFAULT_LOADING_ICON = <CircularProgress $variant="inverted" />;

/**
 * Button — v2
 *
 * Changes vs v1:
 * - `invert-primary` no longer silently remaps to `primary`. It now renders
 *   with its own style (white text on transparent bg) via `buttonVariants`.
 * - `onClick` is no longer spread twice. It is applied once, after `...props`,
 *   so the consumer's handler is always honoured.
 * - `$asChild` + loading: documented explicitly — loading state is NOT
 *   forwarded when `$asChild` is true because Slot merges onto the child
 *   element; callers must manage loading appearance on the child themselves.
 * - `ButtonMode` includes `link` as a first-class value in both types and
 *   styles; no runtime string comparison required.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      $loading: loading = false,
      $loadingText: loadingText,
      $fullWidth: fullWidth = false,
      $size: size = 'md',
      $variant: variant = 'primary',
      $asChild: asChild = false,
      $as: Component = 'button',
      $loadingIcon: loadingIcon,
      $mode: mode = 'default',
      onClick,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const { eventHandlers, accessibilityProps } = useAccessibility<HTMLButtonElement>({
      action: () => {
        if (ref && typeof ref !== 'function') {
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

    const Comp = asChild ? Slot : Component;

    // In link mode, drop all background/border styles and use underlined text.
    const isLinkMode = mode === 'link';
    const baseStyles = isLinkMode
      ? buttonLinkVariants({ variant })
      : buttonVariants({ size, variant, mode });

    const commonProps = {
      className: cn(baseStyles, fullWidth && '!w-full', className),
      ref,
      disabled: loading || props.disabled,
      type: 'button' as const,
      ...accessibilityProps,
      ...eventHandlers,
      ...props,
      // `onClick` is applied last so it always takes precedence over anything
      // spread from `props` or `eventHandlers`.
      onClick,
    };

    return (
      <Comp {...commonProps}>
        {asChild ? (
          /**
           * $asChild: Slot merges all commonProps onto the immediate child,
           * so `disabled` and `aria-busy` ARE propagated. The loading spinner
           * is not rendered here — children pass through as-is. Add a spinner
           * to the child directly if visual feedback is needed.
           */
          props.children
        ) : (
          <>
            {loading && (loadingIcon || DEFAULT_LOADING_ICON)}
            {loading ? (loadingText ?? props.children) : props.children}
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
