/* eslint-disable react/prop-types */
import React from 'react';
import { Radio } from '../Radio';
import { Spacer } from '../Spacer';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { spacing } from '../../theme/spacing';

const Template = (args) => (
  <>
    <DesignSystemGlobals />
    <Radio {...args} name="test">Sample Radio</Radio>
    <Spacer $size="spacing04" />
    <Radio {...args} name="test">Sample Radio</Radio>
  </>
);
const Template2 = (args) => (
  <>
    <DesignSystemGlobals />
    <Radio {...args} name="test" />
  </>
);

export const Default = Template.bind({});
export const WithOptions = Template2.bind({});

WithOptions.args = {
  $options: [
    { label: 'First option', value: 'first' },
    { label: 'Second option', value: 'second' },
    { label: 'Third option', value: 'third' },
    { label: 'Forth option', value: 'forth' },
    { label: 'Fifth option', value: 'fifth' },
  ],
};

export default {
  argTypes: {
    $box: {
      defaultValue: false,
      description: 'Box display',
      type: 'boolean',
    },
    $error: {
      defaultValue: false,
      description: 'It will change the style for error style',
      type: 'boolean',
    },
    $size: {
      control: 'select',
      defaultValue: 'spacing06',
      description: 'Checkbox size',
      options: Object.keys(spacing),
      type: 'string',
    },
    disabled: {
      defaultValue: false,
      description: 'Any other native HTML props for Input element are valid',
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
  component: Radio,
  title: 'OLD Design System/Components/Radio',
};
