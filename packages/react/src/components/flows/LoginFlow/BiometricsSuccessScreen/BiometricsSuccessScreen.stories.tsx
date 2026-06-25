import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BiometricsSuccessScreen } from './BiometricsSuccessScreen';

const meta: Meta<typeof BiometricsSuccessScreen> = {
  title: 'Kueski Design System/Organisms/BiometricsSuccessScreen',
  component: BiometricsSuccessScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Shown after the user successfully activates biometric login. Displays a celebratory illustration, confirmation copy, legal disclaimer, and a primary CTA button ("Entendido").',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onConfirm: () => console.log('confirmed'),
  },
};
