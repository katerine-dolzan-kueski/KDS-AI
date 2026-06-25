import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface BottomSheetModalActionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  'data-testid'?: string;
}

export interface BottomSheetModalProps {
  acceptButtonProps?: BottomSheetModalActionsProps;
  cancelButtonProps?: BottomSheetModalActionsProps;
  description?: string | ReactNode;
  $isMini?: boolean;
  onClose: () => void;
  open: boolean;
  title?: string;
  $hideCloseIcon?: boolean;
  children?: ReactNode;
}
