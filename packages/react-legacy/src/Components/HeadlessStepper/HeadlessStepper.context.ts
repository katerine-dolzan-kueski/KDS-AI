import { createContext, useContext } from 'react';
import { HeadlessStepperState } from './HeadlessStepper.types';

const context = createContext<HeadlessStepperState>({ value: 0 });

export function useHeadlessStepperContext() {
  return useContext(context);
}

export const HeadlessStepperProvider = context.Provider;
