import { ReactNode } from 'react';

export interface StepperItemProps {
  className?: string;
  $icon: ReactNode | number;
  $hasPrev: boolean;
  $hasNext: boolean;
  $title?: string;
  $description?: string;
  $children?: ReactNode;
}

export interface StepperItemData {
  icon: ReactNode | number;
  title?: string;
  description?: string;
}

export interface StepperProps {
  className?: string;
  $items: StepperItemData[];
};

export interface ConnectorProps {
  $variant: 'fill' | 'space';
  $visible?: boolean;
}
