/* eslint-disable react/prop-types */
import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { CardInstructions } from './CardInstructions';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <CardInstructions {...args} />
  </>
);

export const Default = Template.bind({});

const props = {
  instructions: [
    {
      icon: 'Selfie',
      label: 'Se abrirá tu navegador y deberás aceptar el permiso para que accedamos a la cámara.',
    },
    {
      icon: 'PersonCircle',
      label:
        'Una vez que te tomes la selfie, Veriff nos ayudará con el proceso de validación de identidad.',
    },
  ],
  title: '¿Cómo funciona?',
};

Default.args = props;

export default {
  argTypes: props,
  component: CardInstructions,
  title: 'OLD Design System/Components/CardInstructions',
};
