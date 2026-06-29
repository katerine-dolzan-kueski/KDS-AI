import { type ReactNode } from 'react';

// ── Props ─────────────────────────────────────────────────────────────────────

export interface OTPInputProps {
  // ── Value ──────────────────────────────────────────────────────────────────

  /** Current code value (up to `length` characters). */
  value: string;

  /** Called on every keystroke with the updated value string. */
  onChange: (value: string) => void;

  /** Called when every box is filled. Receives the complete code string. */
  onComplete?: (value: string) => void;

  // ── Configuration ──────────────────────────────────────────────────────────

  /** Number of digit boxes to render. @default 6 */
  length?: number;

  // ── Display ────────────────────────────────────────────────────────────────

  /** Label shown above the boxes. @default 'Código de verificación' */
  label?: string;

  /** Help copy shown below boxes. Hidden when `$error` is true. */
  helperText?: string;

  /** Error copy with icon. Shown when `$error` is true. */
  errorMessage?: string;

  /**
   * Slot for a countdown timer or resend link rendered below the footer text.
   * Typically a `<ResendCountdown>` component or a plain `<button>`.
   */
  resendNode?: ReactNode;

  // ── Design state ($-prefixed) ──────────────────────────────────────────────

  /**
   * Puts all boxes in error styling and shows `errorMessage` instead of
   * `helperText`.
   * @default false
   */
  $error?: boolean;

  // ── Standard HTML ──────────────────────────────────────────────────────────

  /** Disables all inputs; applies 40% opacity. */
  disabled?: boolean;

  /** Makes all inputs read-only; hides the footer. */
  readOnly?: boolean;

  /** CSS class appended to the root wrapper element. */
  className?: string;

  /** ID for the root group element. */
  id?: string;
}
