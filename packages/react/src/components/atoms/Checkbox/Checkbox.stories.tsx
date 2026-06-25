import { Meta, StoryObj } from '@storybook/react-vite';
import { useState, useEffect } from 'react';
import { Checkbox, CheckboxProps } from '.';

const CheckboxWrapper = ({ $checked, $onCheckedChange, ...props }: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState<boolean | 'indeterminate'>($checked);

  useEffect(() => {
    setInternalChecked($checked);
  }, [$checked]);

  const handleChange = (checked: boolean | 'indeterminate') => {
    setInternalChecked(checked);
    $onCheckedChange?.(checked);
  };

  return (
    <Checkbox
      {...props}
      $checked={internalChecked}
      $onCheckedChange={handleChange}
    />
  );
};

const meta: Meta<CheckboxProps> = {
  title: 'Kueski Design System/Atoms/Checkbox',
  component: CheckboxWrapper,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    $checked: {
      control: {
        type: 'select',
      },
      options: [false, true, 'indeterminate'],
      description: 'The checked state of the checkbox',
      table: {
        type: { summary: 'boolean | "indeterminate"' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Unchecked: Story = {
  args: {
    $checked: false,
    $error: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    children: 'Checked state',
    $checked: true,
    $error: false,
    disabled: false,
  },
};

export const Indeterminate: Story = {
  args: {
    children: 'Indeterminate state',
    $checked: 'indeterminate',
    $error: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    $checked: false,
    $error: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: 'Disabled and checked',
    disabled: true,
    $checked: true,
    $error: false,
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    children: 'Disabled indeterminate',
    disabled: true,
    $checked: 'indeterminate',
    $error: false,
  },
};

export const Error: Story = {
  args: {
    children: 'Error state',
    $error: true,
    $checked: false,
    disabled: false,
  },
};

export const ErrorChecked: Story = {
  args: {
    children: 'Error checked',
    $error: true,
    $checked: true,
    disabled: false,
  },
};

export const ErrorIndeterminate: Story = {
  args: {
    children: 'Error indeterminate',
    $error: true,
    $checked: 'indeterminate',
    disabled: false,
  },
};
