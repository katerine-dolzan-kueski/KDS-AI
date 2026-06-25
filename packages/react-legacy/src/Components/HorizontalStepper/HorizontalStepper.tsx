import React from 'react';
import { HeadlessStepper } from '../HeadlessStepper';
import { Row } from './HorizontalStepper.style';
import { HorizontalStepperProps } from './HorizontalStepper.types';

export function HorizontalStepper({ children, value }: HorizontalStepperProps) {
  return (
    <HeadlessStepper value={value}>
      <Row value={value}>
        {children}
      </Row>
    </HeadlessStepper>
  );
}

HorizontalStepper.defaultProps = {
  value: Infinity,
};
