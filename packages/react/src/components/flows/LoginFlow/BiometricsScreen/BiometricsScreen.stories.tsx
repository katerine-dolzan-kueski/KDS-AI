import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BiometricsScreen } from './BiometricsScreen';

const meta: Meta<typeof BiometricsScreen> = {
  title: 'Kueski Design System/Organisms/BiometricsScreen',
  component: BiometricsScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Biometric authentication opt-in screen. "Activar" uses the success (green) button; "Ahora no" uses secondary (outlined).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => console.log('close'),
    onActivate: () => console.log('activate biometrics'),
    onSkip: () => console.log('skip biometrics'),
  },
};
