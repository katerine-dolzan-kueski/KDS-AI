import React from 'react';
import { RadioActivationEvent } from './Radio.utils';

export interface RadioProps {
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Whether the radio button is checked */
  checked?: boolean;
  /** Value of the radio button */
  $value?: string;
  /** Name of the radio group */
  $name?: string;
  /** Custom class name */
  className?: string;
  /** Whether to show as child (polymorphic) */
  $asChild?: boolean;
  /** Children content */
  children?: React.ReactNode;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Click handler - accepts both mouse and keyboard events */
  onClick?: (event: RadioActivationEvent) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent) => void;
}

export interface RadioIndicatorProps {
  /** Whether the radio button is checked */
  checked?: boolean;
  /** Custom class name */
  className?: string;
}

export interface RadioLabelProps {
  /** Label content */
  children: React.ReactNode;
  /** Whether the label is disabled */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export type RadioState = 'default' | 'hover' | 'pressed' | 'focused' | 'inactive';
