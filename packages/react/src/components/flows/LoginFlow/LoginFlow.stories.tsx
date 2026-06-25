import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginFlow } from './LoginFlow';

const meta: Meta<typeof LoginFlow> = {
  title: 'Kueski Design System/Organisms/LoginFlow',
  component: LoginFlow,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Four-step authentication flow: (1) LoginScreen → (2) BiometricsScreen → (3) Android OS fingerprint prompt overlay → (4) BiometricsSuccessScreen. Tap "Iniciar sesión" to advance, then "Activar" to see the system prompt, "Cancelar" to dismiss it and go to success.',
      },
    },
  },
  argTypes: {
    initialStep: {
      control: 'radio',
      options: ['login', 'biometrics', 'android-prompt', 'success'],
      description: 'Override the starting screen (useful for development)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialStep: 'login',
    onLoginClose: () => console.log('login closed'),
    onCreateAccount: () => console.log('create account'),
    onForgotPassword: () => console.log('forgot password'),
    onBiometricsActivate: () => console.log('biometrics activate tapped'),
    onBiometricsSkip: () => console.log('biometrics skipped'),
    onSuccess: () => console.log('flow complete'),
  },
};

export const StartOnBiometrics: Story = {
  name: 'Start on Biometrics screen',
  args: {
    ...Default.args,
    initialStep: 'biometrics',
  },
};

export const StartOnAndroidPrompt: Story = {
  name: 'Start on Android Prompt',
  args: {
    ...Default.args,
    initialStep: 'android-prompt',
  },
};

export const StartOnSuccess: Story = {
  name: 'Start on Success screen',
  args: {
    ...Default.args,
    initialStep: 'success',
  },
};
