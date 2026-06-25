import { type ReactNode, type InputHTMLAttributes } from 'react';

// ── Union types ───────────────────────────────────────────────────────────────

/** Contextual input type — determines leading slot defaults and keyboard mode. */
export type InputType = 'text' | 'phone' | 'date' | 'payment' | 'clabe';

// ── Props ─────────────────────────────────────────────────────────────────────

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  // ── Design props ($-prefixed) ─────────────────────────────────────────────

  /**
   * Contextual input type. Determines the native inputMode, leading slot
   * default content (phone), and any type-specific behaviour (date picker).
   * @default 'text'
   */
  $type?: InputType;

  /**
   * When true switches the container to error-token styling and renders
   * `errorMessage` instead of `helperText` in the footer.
   */
  $error?: boolean;

  /**
   * Appends "(opcional)" next to the label in `--color-text-and-icons-tertiary`.
   */
  $optional?: boolean;

  /**
   * Shows `value.length / maxLength` right-aligned in the footer row.
   * Requires `maxLength` to be set.
   */
  $showCharCount?: boolean;

  // ── Content ───────────────────────────────────────────────────────────────

  /** Text rendered as a `<label>` linked to the input. */
  label?: string;

  /** Help text shown below the field when `$error` is false. */
  helperText?: string;

  /** Error message shown below the field (with error icon) when `$error` is true. */
  errorMessage?: string;

  /**
   * Content for the leading slot (left side of the container).
   * Required for `phone` (use `countryFlag` + `countryCode` shorthand instead),
   * `payment`, and `clabe` types where no default icon is provided.
   */
  leadingSlot?: ReactNode;

  /**
   * Content for the trailing slot (right side of the container).
   * Visible only in default and filled states.
   * In active/typing states the clear (×) button replaces it automatically.
   * In read-only state the lock icon replaces it automatically.
   */
  trailingSlot?: ReactNode;

  // ── Phone-specific shorthands ─────────────────────────────────────────────

  /** Country flag emoji shown in the leading slot when `$type='phone'`. e.g. `'🇲🇽'` */
  countryFlag?: string;

  /** Country dial code shown in the leading slot when `$type='phone'`. e.g. `'+52'` */
  countryCode?: string;

  // ── Events ────────────────────────────────────────────────────────────────

  /**
   * Called with the new string value on every keystroke.
   * Replaces the native `onChange` signature for ergonomics.
   */
  onChange?: (value: string) => void;

  /** Called when the user taps the clear (×) button that appears during active/typing. */
  onClear?: () => void;

  // ── Standard HTML overrides ───────────────────────────────────────────────

  /** CSS class appended to the root `<div>` wrapper. */
  className?: string;
}
