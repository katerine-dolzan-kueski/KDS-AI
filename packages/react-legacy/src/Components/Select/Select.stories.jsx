/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Select } from '../Select';
import { Text } from '../Text';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Divider } from '../Divider';

const Template = (args) => {
  const [result, setResult] = useState(null);
  const selected = args.$selected ?? result;
  return (
    <>
      <DesignSystemGlobals />
      <Text>
        Selection:
        <br />
        Label:
        {' '}
        {selected?.label}
        <br />
        Value:
        {' '}
        {selected?.value}
      </Text>
      <br />
      <Divider />
      <br />
      <Select {...args} $selected={selected} $onChange={setResult} name="test" />
    </>
  );
};

export const Default = Template.bind({});

export default {
  argTypes: {
    $error: {
      defaultValue: false,
      description: 'Mask the selector (and $helperText) in red',
      type: 'boolean',
    },
    $options: {
      defaultValue: 'Few',
      description: 'The options to display on the select',
      mapping: {
        Few: [
          {
            label: 'First Option',
            value: 'first-option',
          },
          {
            label: 'Second Option',
            value: 'second-option',
          },
        ],
        Form: [
          { label: 'No tengo historial', value: 1 },
          { label: 'No sé', value: 2 },
          { label: 'Mala', value: 3 },
          { label: 'Regular', value: 4 },
          { label: 'Buena', value: 5 },
        ],
        Many: [
          {
            label: 'First Option',
            value: 'first-option',
          },
          {
            label: 'Second Option',
            value: 'second-option',
          },
          {
            label: 'Third Option',
            value: 'third-option',
          },
          {
            label: 'Forth Option',
            value: 'forth-option',
          },
          {
            label: 'And so...',
            value: 'last-option',
          },
        ],
      },
      options: ['Many', 'Few', 'Form'],
    },
    $selected: {
      description: 'The selected options',
      mapping: {
        'And so...': {
          label: 'And so...',
          value: 'last-option',
        },
        'First Option': {
          label: 'First Option',
          value: 'first-option',
        },
        'Forth Option': {
          label: 'Forth Option',
          value: 'forth-option',
        },
        'Second Option': {
          label: 'Second Option',
          value: 'second-option',
        },
        'Third Option': {
          label: 'Third Option',
          value: 'third-option',
        },
      },
      options: ['First Option', 'Second Option', 'Third Option', 'Forth Option', 'And so...'],
    },
    disabled: {
      defaultValue: false,
      description: 'Selector is disabled',
      type: 'boolean',
    },
    helperText: {
      defaultValue: undefined,
      description: 'Informative text under the select element',
      type: 'string',
    },
    label: {
      defaultValue: undefined,
      description: 'The dropdown label',
      type: 'string',
    },
  },
  component: Select,
  title: 'OLD Design System/Components/Select',
};
