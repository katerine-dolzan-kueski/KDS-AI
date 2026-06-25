import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Input } from '../Input';

const DefaultTemplate = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Input {...args} />
  </>
);

export const Default = DefaultTemplate.bind({});
export const Labeled = DefaultTemplate.bind({});
export const ErrorInput = DefaultTemplate.bind({});

Labeled.args = {
  label: 'Label',
};

ErrorInput.args = {
  $error: true,
  helperText: <p>Something wrong happened</p>,
  label: 'Label',
};

export default {
  argTypes: {
    $error: {
      defaultValue: false,
      description: 'It will change the style for error style',
      type: 'boolean',
    },
    $prefix: {
      defaultValue: undefined,
      description: 'A prefix for the input',
      type: 'string',
    },
    $suffix: {
      defaultValue: undefined,
      description: 'A suffix for the input',
      type: 'string',
    },
    disabled: {
      defaultValue: false,
      description: 'Disabled',
      type: 'boolean',
    },
    helperText: {
      defaultValue: 'Message',
      description: 'It will show a label under the input for instructions or errors',
      type: 'string',
    },
    label: {
      defaultValue: 'Label',
      description: 'It will show a label upper the input',
      type: 'string',
    },
  },
  component: Input,
  title: 'OLD Design System/Components/Input',
};
