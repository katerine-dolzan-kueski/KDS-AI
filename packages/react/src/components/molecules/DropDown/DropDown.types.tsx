import { ReactNode, HTMLAttributes } from 'react';

export interface DropDownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  $disabled?: boolean;

  // header props
  $label?: string;
  $secondaryLabel?: string;
  
  // field props
  $leadingIcon?: ReactNode;
  $onLeadingClick?(): void;
  $trailingIcon?: ReactNode;
  $onTrailingClick?(): void;
  $placeholder?: string;
  $isEmpty?: boolean;
  $onClick: () => void;

  // footer props
  $helperText?: string;
  $errorText?: string | null | false;
}
