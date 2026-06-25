import { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeBehaviour } from './Theme.types';
import { Theme } from './Theme';
import Button from '../Button';

const meta: Meta<typeof Theme> = {
  title: 'Kueski Design System/Atoms/Theme',
  component: Theme,
  parameters: {
    layout: 'centered',
    manualTheme: true,
    controls: {
      include: ['$mode'],
    },
  },
  argTypes: {
    $mode: {
      control: { type: 'select' },
      options: ['light', 'dark', 'auto'] satisfies ThemeBehaviour[],
      description: 'Theme mode configuration',
    },
  },
  args: {
    $variant: 'background',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function Children() {
  return (
    <div className="flex flex-col gap-2 p-4 w-full items-stretch">
      <Button $fullWidth $variant="primary">
        brand color
      </Button>

      <Button $fullWidth $variant="destructive">
        danger color
      </Button>

      <Button $fullWidth $variant="success">
        success color
      </Button>

      <Button $fullWidth $variant="upsell">
        upsell color
      </Button>

      <Button $fullWidth $variant="warning">
        warning color
      </Button>

      <div className="bg-linear-to-r gradient-shimmer p-2 px-4 rounded-x2 text-center">
        gradient-shimmer
      </div>

      <div className="bg-linear-to-r gradient-spinner-blue p-2 px-4 rounded-x2 text-center">
        gradient-spinner-blue
      </div>

      <div className="bg-linear-to-r gradient-spinner-white p-2 px-4 rounded-x2 text-center">
        gradient-spinner-white
      </div>
    </div>
  );
}

export const Light: Story = {
  args: {
    $mode: 'light',
    children: <Children />,
  },
};

export const Dark: Story = {
  args: {
    $mode: 'dark',
    children: <Children />,
  },
};
