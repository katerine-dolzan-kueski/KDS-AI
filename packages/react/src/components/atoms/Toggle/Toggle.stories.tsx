import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';
import { ToggleProps } from './Toggle.types';
import README from './toggle.md';

const ToggleDemo = (props: ToggleProps) => {
  return <Toggle {...props} />;
};

const meta: Meta<typeof Toggle> = {
  title: 'Kueski Design System/Atoms/Toggle',
  component: ToggleDemo,
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
    $checked: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is checked',
    },
    $disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Checked: Story = {
  args: {
    $checked: true,
  },
};

export const Disabled: Story = {
  args: {
    $checked: false,
    $disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    $checked: true,
    $disabled: true,
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Toggle $checked={false} aria-label="Enable notifications" />
        <label htmlFor="notifications" className="text-sm">
          Enable notifications
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Toggle $checked aria-label="Dark mode" />
        <label htmlFor="dark-mode" className="text-sm">
          Dark mode
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Toggle $checked={false} $disabled aria-label="Auto-save" />
        <label htmlFor="auto-save" className="text-sm text-gray-400">
          Auto-save (disabled)
        </label>
      </div>
    </div>
  ),
};
