import { HTMLAttributes, ReactNode } from 'react';

export type Option = {
  label: string;
  value: string;
};

export interface SelectProps extends HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  label?: string;
  helperText?: ReactNode;
  $error?: boolean;
  $options?: Option[];
  $selected?: Option | null;
  $onChange?: (option: Option) => void;
  'data-testid'?: string;
}
