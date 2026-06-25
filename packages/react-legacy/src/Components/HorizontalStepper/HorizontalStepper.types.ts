import { KDSSpacing } from '../../theme/spacing';
import { ReactNode } from 'react';

export interface HorizontalStepProps {
  size?: KDSSpacing;
  step: number;
  icon?: ReactNode;
  children?: ReactNode;
  isSubStep?: boolean;
}

export interface HorizontalStepperProps {
  value?: number;
  children: ReactNode;
}

export interface HorizontalStepContentProps {
  isActive?: boolean;
  isDone: boolean;
}
