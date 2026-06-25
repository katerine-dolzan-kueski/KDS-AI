import type { Meta, StoryObj } from '@storybook/react';
import { PersonalInfoScreen } from './PersonalInfoScreen';

const meta: Meta<typeof PersonalInfoScreen> = {
  title: 'Flows/PersonalInfoFlow/PersonalInfoScreen',
  component: PersonalInfoScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Registration step "Queremos conocerte" (default: Paso 2 de 5). Contains name fields, sex selector, date of birth, place of birth, and phone number.',
      },
    },
  },
  argTypes: {
    $step: { control: { type: 'number', min: 1, max: 10 } },
    $totalSteps: { control: { type: 'number', min: 1, max: 10 } },
    onBack: { action: 'onBack' },
    onClose: { action: 'onClose' },
    onContinue: { action: 'onContinue' },
    onDataProtection: { action: 'onDataProtection' },
  },
  args: {
    $step: 2,
    $totalSteps: 5,
  },
};

export default meta;

type Story = StoryObj<typeof PersonalInfoScreen>;

export const Default: Story = {};

export const StepOne: Story = {
  args: {
    $step: 1,
    $totalSteps: 5,
  },
};

export const LastStep: Story = {
  args: {
    $step: 5,
    $totalSteps: 5,
  },
};
