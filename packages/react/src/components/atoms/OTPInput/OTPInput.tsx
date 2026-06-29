'use client';

import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  type ClipboardEvent,
  type KeyboardEvent,
} from 'react';
import { cn } from '@/utils/cn';
import type { OTPInputProps } from './OTPInput.types';
import {
  rootStyles,
  labelStyles,
  boxRowStyles,
  boxStyles,
  digitStyles,
  cursorStyles,
  nativeInputStyles,
  footerStyles,
  helperTextStyles,
  errorRowStyles,
  errorIconStyles,
  errorMessageStyles,
} from './OTPInput.styles';

// ── Error circle icon (inline SVG — matches KDS Icons "Navigation and UI/Error circle") ──

function ErrorCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Zm0 4.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 10 6.5Zm0 7a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
      />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export const OTPInput = forwardRef<HTMLDivElement, OTPInputProps>(
  (
    {
      value = '',
      onChange,
      onComplete,
      length = 6,
      label = 'Código de verificación',
      helperText,
      errorMessage,
      resendNode,
      $error = false,
      disabled = false,
      readOnly = false,
      className,
      id,
    },
    ref,
  ) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    // ── Helpers ───────────────────────────────────────────────────────────────

    const focusBox = useCallback((index: number) => {
      const clamped = Math.max(0, Math.min(index, length - 1));
      inputRefs.current[clamped]?.focus();
    }, [length]);

    // ── Handlers ──────────────────────────────────────────────────────────────

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
          e.preventDefault();
          if (value[index]) {
            // Clear current box
            const next = value.slice(0, index) + value.slice(index + 1);
            onChange(next);
          } else if (index > 0) {
            // Move to previous and clear it
            const next = value.slice(0, index - 1) + value.slice(index);
            onChange(next);
            focusBox(index - 1);
          }
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          focusBox(index - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          focusBox(index + 1);
        }
      },
      [value, onChange, focusBox],
    );

    const handleInput = useCallback(
      (raw: string, index: number) => {
        // Accept only digits
        const digits = raw.replace(/\D/g, '');
        if (!digits) return;

        const digit = digits[0];
        const chars = value.split('');
        chars[index] = digit;
        const next = chars.join('').slice(0, length);
        onChange(next);

        if (next.length === length) {
          onComplete?.(next);
        } else {
          focusBox(index + 1);
        }
      },
      [value, onChange, onComplete, length, focusBox],
    );

    const handlePaste = useCallback(
      (e: ClipboardEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '');
        if (!pasted) return;

        const chars = value.split('');
        pasted.split('').forEach((ch, i) => {
          if (index + i < length) chars[index + i] = ch;
        });
        const next = chars.join('').slice(0, length);
        onChange(next);

        if (next.length === length) {
          onComplete?.(next);
          focusBox(length - 1);
        } else {
          focusBox(Math.min(index + pasted.length, length - 1));
        }
      },
      [value, onChange, onComplete, length, focusBox],
    );

    // ── Derived state ─────────────────────────────────────────────────────────

    const showFooter = !readOnly;
    const showError  = $error && !!errorMessage;
    const showHelper = !$error && !!helperText;

    // ── Render ────────────────────────────────────────────────────────────────

    return (
      <div
        ref={ref}
        id={id}
        role="group"
        aria-label={label}
        aria-disabled={disabled || undefined}
        className={cn(rootStyles(), className)}
      >
        {/* Label */}
        <span id={id ? `${id}-label` : undefined} className={labelStyles()}>
          {label}
        </span>

        {/* Box row */}
        <div className={boxRowStyles()}>
          {Array.from({ length }, (_, i) => {
            const char      = value[i] ?? '';
            const isFocused = focusedIndex === i;
            const showCursor = isFocused && !char;

            return (
              <div
                key={i}
                className={boxStyles({
                  $focused:  isFocused,
                  $error,
                  $readOnly: readOnly,
                  $disabled: disabled,
                })}
              >
                {/* Digit display */}
                {char && (
                  <span className={digitStyles({ $readOnly: readOnly })}>
                    {char}
                  </span>
                )}

                {/* Blinking cursor when focused and empty */}
                {showCursor && <span className={cursorStyles()} aria-hidden="true" />}

                {/* Native input — visually hidden but receives focus + keyboard events */}
                {!readOnly && (
                  <input
                    ref={(el) => { inputRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={char}
                    disabled={disabled}
                    readOnly={readOnly}
                    aria-label={`Digit ${i + 1} of ${length}`}
                    autoComplete={i === 0 ? 'one-time-code' : 'off'}
                    className={nativeInputStyles()}
                    onFocus={() => setFocusedIndex(i)}
                    onBlur={() => setFocusedIndex(null)}
                    onChange={(e) => handleInput(e.target.value, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    onPaste={(e) => handlePaste(e, i)}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {showFooter && (showHelper || showError || resendNode) && (
          <div className={footerStyles()}>
            {/* Helper text (non-error) */}
            {showHelper && (
              <p className={helperTextStyles()}>{helperText}</p>
            )}

            {/* Error message */}
            {showError && (
              <div className={errorRowStyles()} role="alert">
                <ErrorCircleIcon className={errorIconStyles()} />
                <p className={errorMessageStyles()}>{errorMessage}</p>
              </div>
            )}

            {/* Resend slot */}
            {resendNode && (
              <div>{resendNode}</div>
            )}
          </div>
        )}
      </div>
    );
  },
);

OTPInput.displayName = 'OTPInput';
