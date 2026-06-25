import { type ReactNode, type ButtonHTMLAttributes, type HTMLAttributes } from 'react';

export type ChipType = 'status' | 'filter';
export type ChipVariant = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'upsell';
export type ChipEmphasis = 'subtle' | 'outline' | 'strong';
export type ChipSize = 'sm' | 'md';

interface ChipBaseProps {
  /** Visual content type: non-interactive status label or interactive filter toggle. */
  $type?: ChipType;
  /** Semantic colour role. Applies to status chips only; filter chips are always neutral. */
  $variant?: ChipVariant;
  /** Visual weight. */
  $emphasis?: ChipEmphasis;
  /** Size. Controls padding, border-radius, and typography. */
  $size?: ChipSize;
  /** Icon rendered before the label. */
  leadingIcon?: ReactNode;
  /** Icon rendered after the label. */
  trailingIcon?: ReactNode;
  /** Required label text. */
  children: ReactNode;
  /** Appended to generated class list (Tailwind merge-safe). */
  className?: string;
}

interface StatusChipProps extends ChipBaseProps, HTMLAttributes<HTMLSpanElement> {
  $type?: 'status';
  $selected?: never;
  $selectionCounter?: never;
  disabled?: never;
  onClick?: never;
  onDismiss?: () => void;
}

interface FilterChipProps extends ChipBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  $type: 'filter';
  /** Selected toggle state. */
  $selected?: boolean;
  /** Shows a selection count indicator alongside the label. */
  $selectionCounter?: number;
  /** Disables the toggle interaction. */
  disabled?: boolean;
  /** Toggle handler. */
  onClick?: () => void;
  /** Callback for trailing dismiss action. */
  onDismiss?: () => void;
}

export type ChipProps = StatusChipProps | FilterChipProps;
