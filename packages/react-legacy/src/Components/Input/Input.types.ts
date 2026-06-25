import { ReactNode } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $prefix?: ReactNode;
  $suffix?: ReactNode;
  label?: string;
  helperText?: ReactNode;
  $error?: boolean;
}
