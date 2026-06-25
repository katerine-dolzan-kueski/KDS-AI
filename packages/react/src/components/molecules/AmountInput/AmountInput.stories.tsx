import { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { AmountInput } from './AmountInput';
import { AmountInputProps, AmountInputValue } from './AmountInput.types';
import README from './AmountInput.docs.md';

const AmountInputWrapper = ({ $value, $onChange, ...restProps }: AmountInputProps) => {
  const [value, setValue] = useState<AmountInputValue>($value ?? null);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    setValue($value ?? null);
  }, [$value]);

  const handleChange = (newValue: AmountInputValue, isValidValue: boolean) => {
    setValue(newValue);
    setIsValid(isValidValue);
    $onChange?.(newValue, isValidValue);
  };

  return (
    <div className="w-[calc(100vw-4rem)] sm:w-[412px]! sm:border sm:border-stroke-primary sm:border-dashed sm:p-4 flex flex-col">
      <AmountInput {...restProps} $value={value} $onChange={handleChange} className="self-center" />
      <div className="text-sm text-text-and-icons-primary">
        <div>Current value: {value === null ? 'null' : value}</div>
        {isValid !== null && <div>Is valid: {isValid ? 'true' : 'false'}</div>}
      </div>
    </div>
  );
};

const meta: Meta<typeof AmountInput> = {
  title: 'Kueski Design System/Molecules/AmountInput',
  component: AmountInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: README,
      },
    },
  },
  argTypes: {
    $mode: {
      control: {
        type: 'select',
      },
      options: ['loan', 'payment'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $placeholder: '',
    $label: '',
    $error: '',
    $locked: false,
    $min: 500,
    $max: 15000,
    $maxLength: 5,
    $editText: 'Editar',
  },
};

export const Empty: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $value: undefined,
    $placeholder: 1000,
    $label: '',
    $error: '',
    $locked: false,
    $min: 500,
    $max: 15000,
    $maxLength: 5,
    $editText: 'Editar',
  },
};

export const Locked: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $value: 5400,
    $placeholder: 1000,
    $label: '',
    $error: '',
    $locked: true,
    $min: 500,
    $max: 15000,
    $maxLength: 5,
    $editText: 'Editar',
  },
};

export const BelowMinimum: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $value: 50,
    $placeholder: 1000,
    $label: '',
    $error: '',
    $locked: false,
    $min: 100,
    $max: 10000,
    $maxLength: 5,
    $editText: 'Editar',
  },
};

export const AboveMaximum: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $value: 15000,
    $placeholder: 1000,
    $label: '',
    $error: '',
    $locked: false,
    $min: 100,
    $max: 10000,
    $maxLength: 5,
    $editText: 'Editar',
  },
};

export const CustomChipMessage: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $value: 5000,
    $placeholder: 1000,
    $label: 'Este es un mensaje personalizado para el chip',
    $error: '',
    $locked: false,
    $min: 500,
    $max: 15000,
    $maxLength: 5,
    $editText: 'Editar',
  },
};

export const CustomChipError: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $value: 7500,
    $placeholder: 1000,
    $label: '',
    $error: 'Este es un mensaje de error personalizado',
    $locked: false,
    $min: 500,
    $max: 15000,
    $maxLength: 5,
    $editText: 'Editar',
  },
};

export const CustomEditButton: Story = {
  render: (args) => <AmountInputWrapper {...args} />,
  args: {
    $mode: 'loan',
    $value: 3000,
    $placeholder: 1000,
    $label: '',
    $error: '',
    $locked: false,
    $min: 500,
    $max: 15000,
    $maxLength: 5,
    $editText: 'Modificar valor',
  },
};
