import { ReactNode } from 'react';

export interface HeadlessStepperState {
  value: number;
}

export interface HeadlessStepperProps {
  children: ReactNode;
  value?: number;
}

export interface HeadlessStepRenderProps {
  step: number;
  currentStep: number;
  isDone: boolean;
  isActive: boolean;
}

export interface HeadlessStepProps {
  step: number;
  children: (props: HeadlessStepRenderProps) => ReactNode;
}
