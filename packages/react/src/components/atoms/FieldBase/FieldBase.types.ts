import { ReactNode, HTMLAttributes } from 'react';

export interface FieldBaseLayoutProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode;
  $label?: string;
  $secondaryLabel?: string;
  $error?: boolean;
  $helperText?: ReactNode;
  $errorText?: ReactNode;
}

export interface FieldBaseBoxProps {
  children: ReactNode;
  className?: string;
  $error?: boolean;
  $disabled?: boolean;
  $hasLeading?: boolean;
  $hasTrailing?: boolean;
  $isEmpty?: boolean;
}

export interface FieldBaseLeadingProps {
  children: ReactNode;
  $disabled?: boolean;
  $onClick?: () => void;
}

export interface FieldBaseTrailingProps {
  children: ReactNode;
  $disabled?: boolean;
  $onClick?: () => void;
}
