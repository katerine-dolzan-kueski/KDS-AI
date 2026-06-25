import React from 'react';
import {
  IconContainer,
  StepWrapper,
  StepContent,
  Line,
} from './HorizontalStepper.style';

import {
  HorizontalStepContentProps,
  HorizontalStepProps,
} from './HorizontalStepper.types';
import { HeadlessStep } from '../HeadlessStepper';

export function HorizontalStep({
  size = 'layout04',
  children,
  icon,
  step,
  isSubStep,
}: HorizontalStepProps) {
  return (
    <HeadlessStep step={step}>
      {({ isActive, isDone }: HorizontalStepContentProps) => (
        <>
          <StepWrapper $active={isActive} isDone={isDone}>
            <IconContainer
              disabled={!isActive && !isDone}
              $active={isActive}
              size={size}
              isSubStep={isSubStep}
            >
              {icon}
            </IconContainer>
            <StepContent disabled={!isActive && !isDone} isDone={isDone}>{children}</StepContent>
          </StepWrapper>
          <Line disabled={!isActive && !isDone} />
        </>
      )}
    </HeadlessStep>
  );
}
