import React from 'react';
import { HorizontalStepper, HorizontalStep } from '../HorizontalStepper';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <HorizontalStepper {...args}>
      <HorizontalStep step={0} icon={1} size="layout02">
        Cuenta
      </HorizontalStep>
      <HorizontalStep step={1} isSubStep />
      <HorizontalStep step={2} isSubStep />
      <HorizontalStep step={3} icon={2} size="layout02">
        Registro
      </HorizontalStep>
      <HorizontalStep step={4} isSubStep />
      <HorizontalStep step={5} isSubStep />
      <HorizontalStep step={6} icon={3} size="layout02">
        Verificación
      </HorizontalStep>
    </HorizontalStepper>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    value: {
      defaultValue: 0,
      description: 'Set current step',
      type: 'number',
    },
  },
  component: HorizontalStepper,
  title: 'OLD Design System/Components/HorizontalStepper',
};
