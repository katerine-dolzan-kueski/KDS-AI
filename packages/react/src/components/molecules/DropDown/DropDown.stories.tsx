/* eslint-disable no-alert */
import { Meta, StoryObj } from '@storybook/react-vite';
import { AddIcon, MoneyIcon, SearchIcon } from '../../atoms/Icons';
import DropDown from './DropDown';
import README from './DropDown.docs.md';
import { CircularProgress } from '../../atoms/CircularProgress';
import { DropDownProps } from './DropDown.types';

// Wrapper component for centered layout in Storybook
const DropDownWrapper = (props: DropDownProps) => {
  return (
    <div className="w-[calc(100vw-4rem)] sm:w-[412px]! sm:border sm:border-stroke-primary sm:border-dashed sm:p-4">
      <DropDown {...props} />
    </div>
  );
};

const meta: Meta<typeof DropDown> = {
  title: 'Kueski Design System/Molecules/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: README,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    $leadingIcon: { control: false },
  },
  args: {
    $onClick: () => console.log('$onClick'),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <DropDownWrapper {...args} />,
  args: {
    $label: 'Label',
    $secondaryLabel: 'secondary label',
    $leadingIcon: <MoneyIcon />,
    $isEmpty: false,
    $disabled: false,
    $placeholder: 'Placeholder',
    $helperText: 'Help text',
    $errorText: '',
    children: 'DropDown text',
  },
};

export const Placeholder: Story = {
  render: (args) => <DropDownWrapper {...args} />,
  args: {
    $label: 'Label',
    $secondaryLabel: 'secondary label',
    $leadingIcon: <MoneyIcon />,
    $isEmpty: true,
    $disabled: false,
    $placeholder: 'Placeholder',
    $helperText: 'Help text',
    $errorText: '',
    children: 'DropDown text',
  },
};

export const Error: Story = {
  render: (args) => <DropDownWrapper {...args} />,
  args: {
    $label: 'Label',
    $secondaryLabel: 'secondary label',
    $leadingIcon: <MoneyIcon />,
    $isEmpty: false,
    $disabled: false,
    $placeholder: 'Placeholder',
    $helperText: 'Help text',
    $errorText: 'Error text',
    children: 'DropDown text',
  },
};

export const ReadOnly: Story = {
  render: (args) => <DropDownWrapper {...args} />,
  args: {
    $label: 'Label',
    $secondaryLabel: 'secondary label',
    $leadingIcon: <MoneyIcon />,
    $isEmpty: false,
    $disabled: true,
    $placeholder: 'Placeholder',
    $helperText: 'Help text',
    $errorText: '',
    children: 'DropDown text',
  },
};

export const Customized: Story = {
  render: (args) => <DropDownWrapper {...args} />,
  args: {
    $label: 'Label',
    $secondaryLabel: 'secondary label',
    $leadingIcon: <SearchIcon />,
    $onLeadingClick: () => alert('Leading clicked'),
    $trailingIcon: <AddIcon />,
    $onTrailingClick: () => alert('Trailing clicked'),
    $isEmpty: false,
    $disabled: false,
    $placeholder: 'Placeholder',
    $helperText: 'Help text',
    $errorText: '',
    children: (
      <div className="flex items-center gap-4">
        <div>Custom content</div>
        <CircularProgress />
      </div>
    ),
  },
};