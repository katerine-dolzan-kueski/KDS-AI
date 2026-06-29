import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationFlow } from './RegistrationFlow';
import { OnboardingScreen } from './OnboardingScreen';
import { CreateAccountScreen } from './CreateAccountScreen';
import { VerifyPhoneScreen } from './VerifyPhoneScreen';

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof RegistrationFlow> = {
  title: 'Flows/RegistrationFlow',
  component: RegistrationFlow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Three-step registration flow: Onboarding carousel → Create account (phone entry) → ' +
          'Verify phone (OTP). Screens slide horizontally. ' +
          'Provide `onVerifyCode` for API integration; throw on failure to surface an error state. ' +
          '`onRegistrationComplete` is called with `{ phone, code }` on success.',
      },
    },
  },
  argTypes: {
    initialStep: {
      control: 'select',
      options: ['onboarding', 'create-account', 'verify-phone'],
      description: 'Override the starting step (useful for dev/testing).',
      table: { defaultValue: { summary: 'onboarding' } },
    },
    onLogin:               { control: false },
    onDataProtection:      { control: false },
    onPasskey:             { control: false },
    onPrivacyPolicy:       { control: false },
    onTerms:               { control: false },
    onSendSms:             { control: false },
    onResend:              { control: false },
    onVerifyCode:          { control: false },
    onRegistrationComplete:{ control: false },
    onClose:               { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof RegistrationFlow>;

// ── Full flow ─────────────────────────────────────────────────────────────────

export const FullFlow: Story = {
  name: 'Full flow',
  args: {
    initialStep: 'onboarding',
    // Simulate a slow API call that always succeeds
    onVerifyCode: async () => {
      await new Promise((r) => setTimeout(r, 600));
    },
    onRegistrationComplete: ({ phone, code }) => {
      console.log('Registration complete', { phone, code });
    },
  },
};

// ── Screen: Onboarding ────────────────────────────────────────────────────────

export const Onboarding: Story = {
  name: 'Screen — Onboarding',
  render: () => (
    <OnboardingScreen
      onCreateAccount={() => console.log('onCreateAccount')}
      onLogin={() => console.log('onLogin')}
      onDataProtection={() => console.log('onDataProtection')}
    />
  ),
};

// ── Screen: Create account ────────────────────────────────────────────────────

export const CreateAccount: Story = {
  name: 'Screen — Create account',
  render: () => (
    <CreateAccountScreen
      onContinue={(phone) => console.log('onContinue', phone)}
      onPasskey={() => console.log('onPasskey')}
      onClose={() => console.log('onClose')}
      onPrivacyPolicy={() => console.log('onPrivacyPolicy')}
      onTerms={() => console.log('onTerms')}
    />
  ),
};

// ── Screen: Verify phone ──────────────────────────────────────────────────────

export const VerifyPhone: Story = {
  name: 'Screen — Verify phone',
  render: () => (
    <VerifyPhoneScreen
      phone="5512345678"
      onVerify={(code) => console.log('onVerify', code)}
      onSendSms={() => console.log('onSendSms')}
      onResend={() => console.log('onResend')}
      onBack={() => console.log('onBack')}
      onClose={() => console.log('onClose')}
    />
  ),
};

// ── Screen: Verify phone — error state ───────────────────────────────────────

export const VerifyPhoneError: Story = {
  name: 'Screen — Verify phone (error)',
  render: () => (
    <VerifyPhoneScreen
      phone="5512345678"
      errorMessage="Código incorrecto. Intenta de nuevo."
      onVerify={(code) => console.log('onVerify', code)}
      onSendSms={() => console.log('onSendSms')}
      onResend={() => console.log('onResend')}
      onBack={() => console.log('onBack')}
      onClose={() => console.log('onClose')}
    />
  ),
};

// ── Deep-link into a specific step ───────────────────────────────────────────

export const StartAtCreateAccount: Story = {
  name: 'Deep-link — Create account',
  args: {
    initialStep: 'create-account',
  },
};

export const StartAtVerifyPhone: Story = {
  name: 'Deep-link — Verify phone',
  args: {
    initialStep: 'verify-phone',
  },
};
