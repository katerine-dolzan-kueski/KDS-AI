import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginScreen } from './LoginScreen';

const meta: Meta<typeof LoginScreen> = {
  title: 'Kueski Design System/Organisms/LoginScreen',
  component: LoginScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Login form with email + password fields. Primary CTA uses the brand blue button; "Crear cuenta" uses ghost-primary.',
      },
    },
  },
  argTypes: {
    $loading: {
      control: 'boolean',
      description: 'Put the submit button into a loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $loading: false,
    onClose: () => console.log('close'),
    onLogin: (email, password) => console.log('login', { email, password }),
    onCreateAccount: () => console.log('create account'),
    onForgotPassword: () => console.log('forgot password'),
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    $loading: true,
  },
};
