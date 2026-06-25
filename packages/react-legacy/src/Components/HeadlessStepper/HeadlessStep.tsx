import React, { useMemo } from 'react';
import { useHeadlessStepperContext } from './HeadlessStepper.context';
import { HeadlessStepProps, HeadlessStepRenderProps } from './HeadlessStepper.types';

export function HeadlessStep({ children, step }: HeadlessStepProps) {
  const { value } = useHeadlessStepperContext();

  const renderProps = useMemo<HeadlessStepRenderProps>(
    () => ({
      currentStep: value,
      isActive: value === step,
      isDone: value > step,
      step,
    }),
    [value],
  );

  return <>{children(renderProps)}</>;
}
