/* eslint-disable react/prop-types */
import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { ErrorMessage as Error, Message, SuccessMessage as Success } from './Message';

const TemplateError = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Error {...args} />
  </>
);

export const ErrorMessage = TemplateError.bind({});

const TemplateSuccess = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Success {...args} />
  </>
);
export const SuccessMessage = TemplateSuccess.bind({});

const props = {
  buttonLabel: 'Continuar',
  description: 'Intentalo de nuevo',
  full: true,
  // eslint-disable-next-line no-alert
  onContinue: () => alert('Callback'),
  title: 'Ocurrio un error',
};

ErrorMessage.args = {
  buttonLabel: 'Continuar',
  description: 'Intentalo de nuevo',
  full: true,
  // eslint-disable-next-line no-alert
  onContinue: () => alert('Callback'),
  title: 'Ocurrio un error',
};
SuccessMessage.args = {
  buttonLabel: 'Continuar',
  description: 'Registro concluido',
  full: true,
  // eslint-disable-next-line no-alert
  onContinue: () => alert('Callback'),
  title: 'Completado',
};

export default {
  argTypes: props,
  component: Message,
  title: 'OLD Design System/Components/Message',
};
