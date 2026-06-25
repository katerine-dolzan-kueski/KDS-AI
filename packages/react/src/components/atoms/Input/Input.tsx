'use client';

import { forwardRef, useId, useState, useCallback, type ChangeEvent } from 'react';
import { cn } from '@/utils/cn';
import {
  rootStyles,
  labelStyles,
  optionalStyles,
  fieldStyles,
  inputStyles,
  leadingSlotStyles,
  trailingSlotStyles,
  clearButtonStyles,
  footerStyles,
  helperTextStyles,
  charCountStyles,
} from './Input.styles';
import type { InputProps, InputType } from './Input.types';

// ── Internal icons ────────────────────────────────────────────────────────────
// Minimal inline SVGs so the component has zero runtime icon-library dependency.
// Replace with your KDS icon library as it becomes available.

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2.5" y="3.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 2v3M13.5 2v3M2.5 8h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconClear = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconLock = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="4" y="9" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconError = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Native input mode map ─────────────────────────────────────────────────────

const INPUT_MODE_MAP: Record<InputType, React.HTMLAttributes<HTMLInputElement>['inputMode']> = {
  text:    'text',
  phone:   'tel',
  date:    'text',
  payment: 'numeric',
  clabe:   'numeric',
};

// ── Component ─────────────────────────────────────────────────────────────────

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      // Design props
      $type = 'text',
      $error = false,
      $optional = false,
      $showCharCount = false,

      // Content
      label,
      helperText,
      errorMessage,
      leadingSlot,
      trailingSlot,

      // Phone shorthand
      countryFlag,
      countryCode,

      // Events
      onChange,
      onClear,

      // HTML attributes
      value = '',
      placeholder,
      maxLength,
      readOnly = false,
      disabled = false,
      className,

      ...htmlProps
    },
    ref,
  ) => {
    const id = useId();
    const [focused, setFocused] = useState(false);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
      },
      [onChange],
    );

    const handleFocus = useCallback(() => setFocused(true), []);
    const handleBlur  = useCallback(() => setFocused(false), []);

    // ── Derived state ───────────────────────────────────────────────────────
    const hasValue = String(value).length > 0;
    const showClear = focused && hasValue && !readOnly && !disabled;
    const showLock  = readOnly;

    // ── Leading slot resolution ─────────────────────────────────────────────
    const resolvedLeadingSlot = (() => {
      if (leadingSlot) return leadingSlot;
      if ($type === 'phone' && (countryFlag || countryCode)) {
        return (
          <span className="flex items-center gap-[var(--spacing-x1)] text-[var(--color-text-and-icons-secondary)] typo-body-1-regular">
            {countryFlag && <span>{countryFlag}</span>}
            {countryCode && <span>{countryCode}</span>}
          </span>
        );
      }
      if ($type === 'date') return <IconCalendar />;
      return null;
    })();

    // ── Trailing slot resolution ────────────────────────────────────────────
    const resolvedTrailingSlot = (() => {
      if (showLock) {
        return (
          <span className="text-[var(--color-text-and-icons-tertiary)]">
            <IconLock />
          </span>
        );
      }
      if (showClear) {
        return (
          <button
            type="button"
            aria-label="Borrar"
            onMouseDown={(e) => {
              // Prevent the input from losing focus on click
              e.preventDefault();
              onClear?.();
            }}
            className={clearButtonStyles()}
          >
            <IconClear />
          </button>
        );
      }
      if (trailingSlot && !focused) return trailingSlot;
      return null;
    })();

    // ── Footer content ──────────────────────────────────────────────────────
    const footerText = $error ? errorMessage : helperText;
    const showFooter = !!footerText || ($showCharCount && maxLength !== undefined);

    // ── Render ──────────────────────────────────────────────────────────────
    return (
      <div className={cn(rootStyles(), className)}>

        {/* Label row */}
        {label && (
          <label htmlFor={id} className={labelStyles()}>
            {label}
            {$optional && <span className={optionalStyles()}>(opcional)</span>}
          </label>
        )}

        {/* Field container */}
        <div
          className={fieldStyles({
            $error,
            $focused: focused,
            $readOnly: readOnly,
            $disabled: disabled,
          })}
        >
          {/* Leading slot */}
          {resolvedLeadingSlot && (
            <span className={leadingSlotStyles()}>
              {resolvedLeadingSlot}
            </span>
          )}

          {/* Native input */}
          <input
            ref={ref}
            id={id}
            inputMode={INPUT_MODE_MAP[$type]}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            readOnly={readOnly}
            disabled={disabled}
            aria-invalid={$error || undefined}
            aria-describedby={showFooter ? `${id}-footer` : undefined}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputStyles()}
            {...htmlProps}
          />

          {/* Trailing slot */}
          {resolvedTrailingSlot && (
            <span className={trailingSlotStyles()}>
              {resolvedTrailingSlot}
            </span>
          )}
        </div>

        {/* Footer row */}
        {showFooter && (
          <div id={`${id}-footer`} className={footerStyles()}>
            {footerText && (
              <span className={cn(
                helperTextStyles({ $error }),
                $error && 'flex items-center gap-[var(--spacing-x1)]',
              )}>
                {$error && <IconError />}
                {footerText}
              </span>
            )}
            {$showCharCount && maxLength !== undefined && (
              <span className={charCountStyles()}>
                {String(value).length}/{maxLength}
              </span>
            )}
          </div>
        )}

      </div>
    );
  },
);

Input.displayName = 'Input';
