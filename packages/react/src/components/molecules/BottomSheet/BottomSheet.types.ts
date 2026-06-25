import { HTMLAttributes, ReactNode } from 'react';

export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  /** Determines if the BottomSheet is open or closed. */
  $isOpen: boolean;
  /** Callback function to be called when the BottomSheet is closed. */
  $onClose: () => void;
  children: ReactNode;
  className?: string;
}
