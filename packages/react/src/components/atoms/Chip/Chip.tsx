import { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import { type ChipProps } from './Chip.types';
import { chipStyles } from './Chip.styles';

export const Chip = forwardRef<HTMLElement, ChipProps>(function Chip(
  {
    $type = 'status',
    $variant = 'neutral',
    $emphasis = 'subtle',
    $size = 'sm',
    $selected = false,
    leadingIcon,
    trailingIcon,
    $selectionCounter,
    onDismiss,
    onClick,
    disabled,
    children,
    className,
    ...props
  },
  ref,
) {
  const classes = cn(
    chipStyles({ $type, $variant, $emphasis, $size, $selected }),
    className,
  );

  const content = (
    <>
      {leadingIcon && <span aria-hidden="true">{leadingIcon}</span>}
      <span>{children}</span>
      {$selectionCounter !== undefined && (
        <span
          aria-label={`${$selectionCounter} selected`}
          className="typo-mini rounded-max bg-[var(--color-background-invert-secondary)] text-[var(--color-text-and-icons-always-white)] px-half min-w-x3 text-center"
        >
          {$selectionCounter}
        </span>
      )}
      {(trailingIcon || onDismiss) && (
        <span
          aria-hidden={!onDismiss}
          role={onDismiss ? 'button' : undefined}
          tabIndex={onDismiss ? 0 : undefined}
          onClick={
            onDismiss
              ? (e) => {
                  e.stopPropagation();
                  onDismiss();
                }
              : undefined
          }
          onKeyDown={
            onDismiss
              ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onDismiss();
                  }
                }
              : undefined
          }
          className={cn(onDismiss && 'cursor-pointer')}
        >
          {trailingIcon}
        </span>
      )}
    </>
  );

  if ($type === 'filter') {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        role="checkbox"
        aria-checked={$selected}
        disabled={disabled}
        onClick={onClick}
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }

  return (
    <span
      ref={ref as React.Ref<HTMLSpanElement>}
      className={classes}
      {...(props as React.HTMLAttributes<HTMLSpanElement>)}
    >
      {content}
    </span>
  );
});

Chip.displayName = 'Chip';
