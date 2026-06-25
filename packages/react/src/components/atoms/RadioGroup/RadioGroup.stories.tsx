import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupOption } from './RadioGroup';
import README from '../../../../../../docs/components/atoms/radio-group.md';

const meta: Meta<typeof RadioGroup> = {
  title: 'Kueski Design System/Atoms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: README,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    $orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the radio options',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the entire radio group is disabled',
    },
    $value: {
      control: { type: 'text' },
      description: 'The currently selected value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('credit-card');

    return (
      <RadioGroup {...args} $value={value} $onValueChange={setValue}>
        <RadioGroupOption $value="credit-card" $label="Credit Card" />
        <RadioGroupOption $value="debit-card" $label="Debit Card" />
        <RadioGroupOption $value="paypal" $label="PayPal" />
      </RadioGroup>
    );
  },
};

export const Horizontal: Story = {
  args: {
    $orientation: 'horizontal',
  },
  render: (args) => {
    const [value, setValue] = React.useState('medium');

    return (
      <div className="space-y-4">
        <RadioGroup {...args} $value={value} $onValueChange={setValue}>
          <RadioGroupOption $value="small" $label="Small" />
          <RadioGroupOption $value="medium" $label="Medium" />
          <RadioGroupOption $value="large" $label="Large" />
        </RadioGroup>
        <div className="p-3 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Selected:</strong> {value} | <strong>Note:</strong> In horizontal orientation,
            options are displayed in a row with equal width
          </p>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    $value: 'option1',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupOption $value="option1" $label="Option 1" />
      <RadioGroupOption $value="option2" $label="Option 2" />
      <RadioGroupOption $value="option3" $label="Option 3" />
    </RadioGroup>
  ),
};

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('option1');

    return (
      <div className="space-y-4">
        <RadioGroup {...args} $value={value} $onValueChange={setValue}>
          <RadioGroupOption $value="option1" $label="Option 1" />
          <RadioGroupOption $value="option2" $label="Option 2" />
          <RadioGroupOption $value="option3" $label="Option 3" />
        </RadioGroup>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Selected value:</strong> {value}
          </p>
        </div>
      </div>
    );
  },
};

export const MutuallyExclusive: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-4">
        <RadioGroup {...args} $value={value} $onValueChange={setValue}>
          <RadioGroupOption $value="credit-card" $label="Credit Card" />
          <RadioGroupOption $value="debit-card" $label="Debit Card" />
          <RadioGroupOption $value="paypal" $label="PayPal" />
          <RadioGroupOption $value="bank-transfer" $label="Bank Transfer" />
        </RadioGroup>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Current selection:</strong> {value || 'None selected'}
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Notice how selecting a new option automatically deselects the previous one
          </p>
        </div>
      </div>
    );
  },
};

// New stories showcasing customization features
export const CustomStyling: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-6">
        <RadioGroup {...args} $value={value} $onValueChange={setValue} className="space-y-4">
          <RadioGroupOption
            $value="large"
            $label="Large Radio Button"
            className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          />
          <RadioGroupOption
            $value="styled-label"
            $label="Styled Label Text"
            className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          />
          <RadioGroupOption
            $value="custom-dot"
            $label="Custom Dot Color"
            className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          />
          <RadioGroupOption
            $value="container"
            $label="Custom Container"
            className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          />
        </RadioGroup>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Selected:</strong> {value || 'None'} | <strong>Note:</strong> Each option
            demonstrates different styling capabilities using className
          </p>
        </div>
      </div>
    );
  },
};

export const IndividualDisabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('option1');

    return (
      <div className="space-y-4">
        <RadioGroup {...args} $value={value} $onValueChange={setValue}>
          <RadioGroupOption $value="option1" $label="Available Option" />
          <RadioGroupOption $value="option2" $label="Disabled Option" disabled />
          <RadioGroupOption $value="option3" $label="Another Available Option" />
          <RadioGroupOption $value="option4" $label="Another Disabled Option" disabled />
        </RadioGroup>
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Disabled options cannot be selected and appear grayed out
          </p>
        </div>
      </div>
    );
  },
};
