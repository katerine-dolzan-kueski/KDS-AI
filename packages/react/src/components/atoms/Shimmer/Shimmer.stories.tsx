import { Meta, StoryObj } from '@storybook/react-vite';
import { Shimmer } from './Shimmer';
import README from '../../../../../../docs/components/atoms/shimmer.md';

const meta: Meta<typeof Shimmer> = {
  title: 'Kueski Design System/Atoms/Shimmer',
  component: Shimmer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: README,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => <Shimmer className="h-6 w-24" />,
};

export const Profile: Story = {
  render: () => (
    <div className="flex items-center">
      <Shimmer className="h-26 w-26 rounded-full!" />
      <div className="ml-4 flex flex-col">
        <Shimmer className="h-6 w-44" />
        <Shimmer className="mt-2 h-6 w-32" />
      </div>
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <div className="flex flex-col">
      <Shimmer className="h-44 w-full" />
      <div className="mt-4 flex flex-col">
        <Shimmer className="h-6 w-44" />
        <Shimmer className="mt-2 h-6 w-32" />
      </div>
    </div>
  ),
};
