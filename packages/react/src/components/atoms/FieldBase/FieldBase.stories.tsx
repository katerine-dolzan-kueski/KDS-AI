/* eslint-disable no-alert */
import { Meta, StoryObj } from '@storybook/react-vite';
import { FieldBase } from '.';
import { AddCircleIcon, ChevronBottomIcon, ClockIcon, MoneyIcon, SearchIcon } from '../Icons';
import README from './FieldBase.docs.md';

const meta: Meta = {
  title: 'Kueski Design System/Atoms/FieldBase',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: README,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[calc(100vw-4rem)] sm:w-[400px] flex justify-stretch">
        <Story />
      </div>
    ),
  ],
};

export default meta;

interface DefaultFieldBaseProps {
  $label?: string;
  $secondaryLabel?: string;
  $error?: boolean;
  $disabled?: boolean;
  $helperText?: string;
  $errorText?: string;
}

function DefaultFieldBase({
  $label,
  $secondaryLabel,
  $error,
  $disabled,
  $helperText,
  $errorText,
}: DefaultFieldBaseProps) {
  return (
    <FieldBase.Layout
      $label={$label}
      $secondaryLabel={$secondaryLabel}
      $error={$error}
      $disabled={$disabled}
      $helperText={$helperText}
      $errorText={$errorText}
    >
      <FieldBase.Box $error={$error} $disabled={$disabled}>
        <input type="text" name="example" disabled={$disabled} placeholder="Example input content" />
      </FieldBase.Box>
    </FieldBase.Layout>
  );
}

export const Default: StoryObj<typeof DefaultFieldBase> = {
  render: (props) => <DefaultFieldBase {...props} />,
  args: {
    $label: 'Field Label',
    $secondaryLabel: 'Secondary Label',
    $helperText: 'This is some helper text.',
    $error: false,
    $disabled: false,
    $errorText: 'This is an error message.',
  },
};

function FieldBaseWithIcons({
  $label,
  $secondaryLabel,
  $error,
  $disabled,
  $helperText,
  $errorText,
}: DefaultFieldBaseProps) {
  return (
    <FieldBase.Layout
      $label={$label}
      $secondaryLabel={$secondaryLabel}
      $error={$error}
      $disabled={$disabled}
      $helperText={$helperText}
      $errorText={$errorText}
    >
      <FieldBase.Leading $disabled={$disabled}>
        <SearchIcon />
      </FieldBase.Leading>

      <FieldBase.Box $error={$error} $disabled={$disabled} $hasLeading $hasTrailing>
        <input type="text" name="example" disabled={$disabled} placeholder="Example input content" />
      </FieldBase.Box>

      <FieldBase.Trailing $disabled={$disabled}>
        <AddCircleIcon />
      </FieldBase.Trailing>
    </FieldBase.Layout>
  );
}

export const WithIcons: StoryObj<typeof FieldBaseWithIcons> = {
  render: (props) => <FieldBaseWithIcons {...props} />,
  args: {
    $label: 'Field Label',
    $secondaryLabel: 'Secondary Label',
    $helperText: 'This is some helper text.',
    $error: false,
    $disabled: false,
    $errorText: 'This is an error message.',
  },
};

function FieldBaseWithButtons({
  $label,
  $secondaryLabel,
  $error,
  $disabled,
  $helperText,
  $errorText,
}: DefaultFieldBaseProps) {
  return (
    <FieldBase.Layout
      $label={$label}
      $secondaryLabel={$secondaryLabel}
      $error={$error}
      $disabled={$disabled}
      $helperText={$helperText}
      $errorText={$errorText}
    >
      <FieldBase.Leading $disabled={$disabled} $onClick={() => alert('leading clicked')}>
        <MoneyIcon />
      </FieldBase.Leading>

      <FieldBase.Box $error={$error} $disabled={$disabled} $hasLeading $hasTrailing>
        <input type="text" disabled={$disabled} name="example" placeholder="Example input content" />
      </FieldBase.Box>

      <FieldBase.Trailing $disabled={$disabled} $onClick={() => alert('trailing clicked')}>
        <ClockIcon />
      </FieldBase.Trailing>
    </FieldBase.Layout>
  );
}

export const WithButtons: StoryObj<typeof FieldBaseWithButtons> = {
  render: (props) => <FieldBaseWithButtons {...props} />,
  args: {
    $label: 'Field Label',
    $secondaryLabel: 'Secondary Label',
    $helperText: 'This is some helper text.',
    $error: false,
    $disabled: false,
    $errorText: 'This is an error message.',
  },
};

function FieldBaseCustomBoxElement({
  $label,
  $secondaryLabel,
  $error,
  $disabled,
  $helperText,
  $errorText,
}: DefaultFieldBaseProps) {
  return (
    <FieldBase.Layout
      $label={$label}
      $secondaryLabel={$secondaryLabel}
      $error={$error}
      $disabled={$disabled}
      $helperText={$helperText}
      $errorText={$errorText}
    >
      <FieldBase.Box $error={$error} $disabled={$disabled} $hasTrailing>
        <button type="button" disabled={$disabled} className="[&:not(:disabled)]:cursor-pointer">
          {'I\'am a <button> element'}
        </button>
      </FieldBase.Box>

      <FieldBase.Trailing $disabled={$disabled} $onClick={() => alert('trailing clicked')}>
        <ChevronBottomIcon />
      </FieldBase.Trailing>
    </FieldBase.Layout>
  );
}

export const CustomBoxElement: StoryObj<typeof FieldBaseCustomBoxElement> = {
  render: (props) => <FieldBaseCustomBoxElement {...props} />,
  args: {
    $label: 'Field Label',
    $secondaryLabel: 'Secondary Label',
    $helperText: 'This is some helper text.',
    $error: false,
    $disabled: false,
    $errorText: 'This is an error message.',
  },
};
