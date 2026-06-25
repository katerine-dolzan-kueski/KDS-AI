import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioLabel } from './Radio';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import README from '../../../../../../docs/components/atoms/radio.md';

const meta: Meta<typeof Radio> = {
  title: 'Kueski Design System/Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: README,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
      defaultValue: false,
    },
    $value: {
      control: 'text',
      description: 'Value of the radio button',
    },
    $name: {
      control: 'text',
      description: 'Name of the radio group',
    },
    $asChild: {
      control: 'boolean',
      description: 'Whether to render as child element',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default radio button
export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    $value: 'option1',
    $name: 'example',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default radio button with fixed 28x28px size and standard styling.',
      },
    },
  },
};

// With labels
export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Radio $value="email" $name="contact" />
        <RadioLabel>Email notifications</RadioLabel>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with descriptive labels for better user experience.',
      },
    },
  },
};

// Disabled states
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Radio $value="enabled" $name="disabled-example" />
        <RadioLabel>Enabled option</RadioLabel>
      </div>
      <div className="flex items-center space-x-3">
        <Radio $value="disabled-unchecked" $name="disabled-example" disabled />
        <RadioLabel disabled>Disabled unchecked</RadioLabel>
      </div>
      <div className="flex items-center space-x-3">
        <Radio $value="disabled-checked" $name="disabled-example" checked disabled />
        <RadioLabel disabled>Disabled checked</RadioLabel>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Radio buttons in disabled states showing both unchecked and checked disabled options.',
      },
    },
  },
};

// Polymorphic rendering
export const Polymorphic: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Radio $asChild $value="button-radio" $name="polymorphic" checked>
          <button
            type="button"
            aria-label="Custom button radio"
            className="relative w-6 h-6 border-2 border-border-brand rounded-full flex items-center justify-center bg-background-primary hover:bg-background-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-border-brand focus:ring-offset-2"
          />
        </Radio>
        <RadioLabel className="ml-2">Custom button element</RadioLabel>
      </div>
      <div className="flex items-center space-x-3">
        <Radio $asChild $value="div-radio" $name="polymorphic2">
          <div
            role="button"
            aria-label="Custom div radio"
            tabIndex={0}
            className="relative w-6 h-6 border-2 border-border-primary rounded-full flex items-center justify-center bg-background-primary cursor-pointer hover:border-border-brand transition-colors"
          />
        </Radio>
        <RadioLabel className="ml-2">Custom div element</RadioLabel>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of polymorphic rendering using `$asChild` prop. When `$asChild={true}`, the Radio component merges its props with the child element instead of rendering its own wrapper. The child element must be a single React element that accepts className, onClick, and other props.',
      },
    },
  },
};

// Event handling
export const EventHandling: Story = {
  render: () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const [selectedValue, setSelectedValue] = React.useState('');

    const addEvent = (event: string) => {
      setEvents((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${event}`]);
    };

    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Event Handling</h3>
          <RadioGroup $value={selectedValue} $onValueChange={setSelectedValue}>
            <div className="flex items-center space-x-3">
              <Radio
                $value="option1"
                $name="events"
                onChange={() => addEvent('Option 1 changed')}
                onClick={() => addEvent('Option 1 clicked')}
                onFocus={() => addEvent('Option 1 focused')}
                onBlur={() => addEvent('Option 1 blurred')}
              />
              <RadioLabel>Option 1</RadioLabel>
            </div>
            <div className="flex items-center space-x-3">
              <Radio
                $value="option2"
                $name="events"
                onChange={() => addEvent('Option 2 changed')}
                onClick={() => addEvent('Option 2 clicked')}
                onFocus={() => addEvent('Option 2 focused')}
                onBlur={() => addEvent('Option 2 blurred')}
              />
              <RadioLabel>Option 2</RadioLabel>
            </div>
          </RadioGroup>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2">Event Log:</h4>
          <div className="space-y-1">
            {events.length === 0 ? (
              <p className="text-sm text-gray-500">
                No events yet. Try interacting with the radio buttons.
              </p>
            ) : (
              events.map((event) => (
                <p key={event} className="text-sm text-gray-700">
                  {event}
                </p>
              ))
            )}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all available event handlers: onChange, onClick, onFocus, and onBlur.',
      },
    },
  },
};
