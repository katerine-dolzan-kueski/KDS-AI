export type AmountInputValue = number | null;

export type AmountInputMode = 'loan' | 'payment';

export interface AmountInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Custom CSS class name for styling the root element */
  className?: string;
  /** Required callback fired when the input value changes. Provides the new value and validation status */
  $onChange: (value: AmountInputValue, isValid: boolean) => void;
  /** Current numeric value of the input */
  $value?: AmountInputValue;
  /** Placeholder number displayed when input is empty (automatically formatted) */
  $placeholder?: number;
  /** CAUTION: Custom informational message that overrides automatic validation messages */
  $label?: string;
  /** CAUTION: Custom error message that overrides all automatic validation and messages */
  $error?: string;
  /** Disables the input and shows a lock icon when true */
  $locked?: boolean;
  /** Minimum allowed value */
  $min: number;
  /** Maximum allowed value */
  $max: number;
  /** Mode for chip display */
  $mode: AmountInputMode;
  /** Maximum length for the input (default: 5 digits, supports up to 99,999) */
  $maxLength?: number;
  /** Text displayed in the edit button when input is not focused and not locked */
  $editText?: string;
}

export interface ChipProps {
  $mode: AmountInputMode;
  $value: AmountInputValue;
  $min: number;
  $max: number;
  $locked?: boolean;
  $error?: string;
  $label?: string;
}
