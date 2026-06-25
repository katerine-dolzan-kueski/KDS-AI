import { ReactNode } from 'react';

export interface RadioGroupProps {
  /**
   * The value of the selected radio button
   */
  $value?: string;
  /**
   * Callback fired when the selection changes
   */
  $onValueChange?: (value: string) => void;
  /**
   * The name attribute for the radio group
   */
  $name?: string;
  /**
   * Whether the radio group is disabled
   */
  disabled?: boolean;
  /**
   * The orientation of the radio group
   */
  $orientation?: 'horizontal' | 'vertical';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * The radio options
   */
  children: ReactNode;
}

export interface RadioGroupOptionProps {
  /**
   * The value of this radio option
   */
  $value: string;
  /**
   * The label for this radio option
   */
  $label: string;
  /**
   * Whether this radio option is disabled
   */
  disabled?: boolean;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Additional CSS classes for the radio button
   */
  $radioClassName?: string;
  /**
   * Additional CSS classes for the label
   */
  $labelClassName?: string;
}
