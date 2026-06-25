import type { Meta, StoryObj } from '@storybook/react';
import { PersonalInfoFlow } from './PersonalInfoFlow';

const meta: Meta<typeof PersonalInfoFlow> = {
  title: 'Flows/PersonalInfoFlow',
  component: PersonalInfoFlow,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full personal information registration flow. Orchestrates the PersonalInfoScreen and is designed to grow as more registration steps are added.',
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

type Story = StoryObj<typeof PersonalInfoFlow>;

export const Default: Story = {};
