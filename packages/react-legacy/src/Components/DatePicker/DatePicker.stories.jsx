import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { DatePicker } from '../DatePicker';

const DefaultTemplate = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <DatePicker {...args} />
  </>
);

export const Default = DefaultTemplate.bind({});
export const Labeled = DefaultTemplate.bind({});
export const ErrorInput = DefaultTemplate.bind({});

Labeled.args = {
  label: 'Label',
  min: '2018-01-01',
  max: '2018-12-31',
};

ErrorInput.args = {
  label: 'Label',
  helperText: 'Something wrong happened',
  $error: true,
};

export default {
  argTypes: {
    label: {
      defaultValue: 'Label',
      description: 'It will show a label upper the input',
      type: 'string',
    },
    helperText: {
      defaultValue: 'Message',
      description: 'It will show a label under the input for instructions or errors',
      type: 'string',
    },
    $error: {
      defaultValue: false,
      description: 'It will change the style for error style',
      type: 'boolean',
    },
  },
  component: DatePicker,
  title: 'OLD Design System/Components/DatePicker',
};
