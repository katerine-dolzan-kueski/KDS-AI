import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BiometricsSystemPromptScreen } from './BiometricsSystemPromptScreen';

const meta: Meta<typeof BiometricsSystemPromptScreen> = {
  title: 'Kueski Design System/Organisms/BiometricsSystemPromptScreen',
  component: BiometricsSystemPromptScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Visual-only recreation of the Android OS biometric system prompt. Renders as a bottom sheet with a dark scrim. Not functional — use it as a UI mock layered over BiometricsScreen.',
      },
    },
  },
  argTypes: {
    $visible: {
      control: 'boolean',
      description: 'Toggle the slide-up animation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $visible: true,
    onCancel: () => console.log('cancel'),
  },
  decorators: [
    (Story) => (
      <div className="relative w-full" style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};

export const Hidden: Story = {
  args: {
    $visible: false,
    onCancel: () => console.log('cancel'),
  },
  decorators: Default.decorators,
};
