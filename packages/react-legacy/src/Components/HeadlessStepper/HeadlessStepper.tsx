import React from 'react';

import { HeadlessStepperProvider } from './HeadlessStepper.context';
import {
  HeadlessStepperProps,
  HeadlessStepperState,
} from './HeadlessStepper.types';

export function HeadlessStepper({ children, value = 0 }: HeadlessStepperProps) {
  const context: HeadlessStepperState = {
    value,
  };

  return (
    <HeadlessStepperProvider value={context}>
      {children}
    </HeadlessStepperProvider>
  );
}
