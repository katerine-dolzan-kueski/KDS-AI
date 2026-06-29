import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OTPInput } from './index';

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof OTPInput> = {
  title: 'Atoms/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'OTPInput renders a labelled row of individual digit boxes for entering a one-time password or ' +
          'verification code. Each box accepts exactly one digit; focus advances automatically on entry ' +
          'and retreats on deletion. Supports paste, keyboard navigation, error state, and a read-only ' +
          'confirmation mode. See `OTPInput.docs.md` for the full token and anatomy spec.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Current code value (up to `length` characters).',
      table: { defaultValue: { summary: "''" } },
    },
    length: {
      control: { type: 'number', min: 4, max: 8 },
      description: 'Number of digit boxes. Supported range: 4–8.',
      table: { defaultValue: { summary: '6' } },
    },
    label: {
      control: 'text',
      description: 'Label shown above the boxes.',
      table: { defaultValue: { summary: "'Código de verificación'" } },
    },
    helperText: {
      control: 'text',
      description: 'Instructional copy below boxes. Hidden when `$error` is true.',
    },
    errorMessage: {
      control: 'text',
      description: 'Error copy with icon. Shown when `$error` is true.',
    },
    $error: {
      control: 'boolean',
      description: 'Puts all boxes in error styling and shows `errorMessage`.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all inputs and applies 40% opacity.',
      table: { defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes all inputs read-only and hides the footer.',
      table: { defaultValue: { summary: 'false' } },
    },
    resendNode: {
      control: false,
      description: 'Slot for a countdown timer or resend link.',
    },
    onChange: { control: false },
    onComplete: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

// ── Controlled wrapper ────────────────────────────────────────────────────────

function Controlled(props: Omit<React.ComponentProps<typeof OTPInput>, 'value' | 'onChange'>) {
  const [value, setValue] = useState('');
  return <OTPInput {...props} value={value} onChange={setValue} />;
}

// ── Default ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: 'Código de verificación',
    helperText: 'Revisa tu WhatsApp o SMS',
    length: 6,
    $error: false,
    disabled: false,
    readOnly: false,
  },
};

// ── With helper text ──────────────────────────────────────────────────────────

export const WithHelperText: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: 'Código de verificación',
    helperText: 'Revisa tu WhatsApp o SMS para el código de 6 dígitos.',
  },
};

// ── Error state ───────────────────────────────────────────────────────────────

export const Error: Story = {
  name: 'Error',
  render: ({ $error, errorMessage, resendNode, ...args }) => {
    const [value, setValue] = useState('703196');
    return (
      <OTPInput
        {...args}
        value={value}
        onChange={setValue}
        $error={$error}
        errorMessage={errorMessage}
        resendNode={resendNode}
      />
    );
  },
  args: {
    label: 'Código de verificación',
    $error: true,
    errorMessage: 'Código incorrecto. Intenta de nuevo.',
    resendNode: (
      <span style={{ color: 'var(--color-text-and-icons-brand)', cursor: 'pointer', fontSize: '16px', lineHeight: '24px' }}>
        Reenviar código
      </span>
    ),
  },
};

// ── Filled (all digits entered) ───────────────────────────────────────────────

export const Filled: Story = {
  render: (args) => {
    const [value, setValue] = useState('703196');
    return <OTPInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Código de verificación',
    helperText: 'Revisa tu WhatsApp o SMS',
  },
};

// ── Read-only ─────────────────────────────────────────────────────────────────

export const ReadOnly: Story = {
  name: 'Read-only',
  render: (args) => (
    <OTPInput {...args} value="703196" onChange={() => {}} readOnly />
  ),
  args: {
    label: 'Código enviado a +52 •••• 4821',
  },
};

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: 'Código de verificación',
    helperText: 'Revisa tu WhatsApp o SMS',
    disabled: true,
  },
};

// ── Custom length (4-digit PIN) ───────────────────────────────────────────────

export const FourDigit: Story = {
  name: '4-Digit PIN',
  render: (args) => <Controlled {...args} />,
  args: {
    label: 'PIN',
    length: 4,
    helperText: 'Ingresa tu PIN de 4 dígitos',
  },
};

// ── With resend slot ──────────────────────────────────────────────────────────

export const WithResend: Story = {
  name: 'With Resend Countdown',
  render: (args) => <Controlled {...args} />,
  args: {
    label: 'Código de verificación',
    helperText: 'Revisa tu WhatsApp o SMS',
    resendNode: (
      <span style={{ color: 'var(--color-text-and-icons-tertiary)', fontSize: '16px', lineHeight: '24px' }}>
        Reenviar código en 00:42
      </span>
    ),
  },
};

// ── All states overview ───────────────────────────────────────────────────────

export const AllStates: Story = {
  name: 'All States',
  render: () => {
    const [defaultVal, setDefault] = useState('');
    const [filledVal]              = useState('703196');
    const [errorVal]               = useState('703196');
    const [roVal]                  = useState('703196');
    const [disabledVal]            = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '400px' }}>
        <OTPInput
          value={defaultVal}
          onChange={setDefault}
          label="Default"
          helperText="Revisa tu WhatsApp o SMS"
        />
        <OTPInput
          value={filledVal}
          onChange={() => {}}
          label="Filled"
          helperText="Revisa tu WhatsApp o SMS"
        />
        <OTPInput
          value={errorVal}
          onChange={() => {}}
          label="Error"
          $error
          errorMessage="Código incorrecto. Intenta de nuevo."
        />
        <OTPInput
          value={roVal}
          onChange={() => {}}
          label="Read-only"
          readOnly
        />
        <OTPInput
          value={disabledVal}
          onChange={() => {}}
          label="Disabled"
          helperText="Revisa tu WhatsApp o SMS"
          disabled
        />
      </div>
    );
  },
};
