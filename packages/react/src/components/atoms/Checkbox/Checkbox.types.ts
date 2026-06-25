import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'checked' | 'onChange' | 'defaultChecked'> {
  children?: ReactNode;
  $error?: boolean;
  $checked: boolean | 'indeterminate';
  $onCheckedChange: (checked: boolean | 'indeterminate') => void;
}
