import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';
import { CrossCircleFilledIcon } from '../Icons/CrossCircleFilledIcon';
import { CheckmarkIcon } from '../Icons/CheckmarkIcon';

const meta = {
  title: 'Kueski Design System/Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

const commonArgTypes = {
  $variant: {
    control: { type: 'select' },
    options: ['subtle', 'outline', 'strong'],
  },
  $size: {
    control: { type: 'select' },
    options: ['default', 'large'],
  },
  $color: {
    control: { type: 'select' },
    options: ['neutral', 'brand', 'success', 'error', 'warning', 'upsell'],
  },
  children: {
    control: { type: 'text' },
  },
} as const;

export const Configurable: Story = {
  argTypes: commonArgTypes,
  args: {
    children: 'Label',
    $variant: 'subtle',
    $size: 'default',
    $color: 'neutral',
  },
};

export const AllVariants: Story = {
  args: {} as any,
  render: () => (
    <div className="space-y-8">
      {/* Default Size */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Size</h3>
        <div className="space-y-4">
          {/* Neutral */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Neutral</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="neutral" $size="default">Label</Chip>
              <Chip $variant="outline" $color="neutral" $size="default">Label</Chip>
              <Chip $variant="strong" $color="neutral" $size="default">Label</Chip>
            </div>
          </div>
          
          {/* Brand */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Brand</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="brand" $size="default">Label</Chip>
              <Chip $variant="outline" $color="brand" $size="default">Label</Chip>
              <Chip $variant="strong" $color="brand" $size="default">Label</Chip>
            </div>
          </div>
          
          {/* Success */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Success</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="success" $size="default">Label</Chip>
              <Chip $variant="outline" $color="success" $size="default">Label</Chip>
              <Chip $variant="strong" $color="success" $size="default">Label</Chip>
            </div>
          </div>
          
          {/* Error */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Error</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="error" $size="default">Label</Chip>
              <Chip $variant="outline" $color="error" $size="default">Label</Chip>
              <Chip $variant="strong" $color="error" $size="default">Label</Chip>
            </div>
          </div>
          
          {/* Warning */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Warning</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="warning" $size="default">Label</Chip>
              <Chip $variant="outline" $color="warning" $size="default">Label</Chip>
              <Chip $variant="strong" $color="warning" $size="default">Label</Chip>
            </div>
          </div>
          
          {/* Upsell */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Upsell</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="upsell" $size="default">Label</Chip>
              <Chip $variant="outline" $color="upsell" $size="default">Label</Chip>
              <Chip $variant="strong" $color="upsell" $size="default">Label</Chip>
            </div>
          </div>
        </div>
      </div>

      {/* Large Size */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Size</h3>
        <div className="space-y-4">
          {/* Neutral */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Neutral</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="neutral" $size="large">Label</Chip>
              <Chip $variant="outline" $color="neutral" $size="large">Label</Chip>
              <Chip $variant="strong" $color="neutral" $size="large">Label</Chip>
            </div>
          </div>
          
          {/* Brand */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Brand</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="brand" $size="large">Label</Chip>
              <Chip $variant="outline" $color="brand" $size="large">Label</Chip>
              <Chip $variant="strong" $color="brand" $size="large">Label</Chip>
            </div>
          </div>
          
          {/* Success */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Success</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="success" $size="large">Label</Chip>
              <Chip $variant="outline" $color="success" $size="large">Label</Chip>
              <Chip $variant="strong" $color="success" $size="large">Label</Chip>
            </div>
          </div>
          
          {/* Error */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Error</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="error" $size="large">Label</Chip>
              <Chip $variant="outline" $color="error" $size="large">Label</Chip>
              <Chip $variant="strong" $color="error" $size="large">Label</Chip>
            </div>
          </div>
          
          {/* Warning */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Warning</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="warning" $size="large">Label</Chip>
              <Chip $variant="outline" $color="warning" $size="large">Label</Chip>
              <Chip $variant="strong" $color="warning" $size="large">Label</Chip>
            </div>
          </div>
          
          {/* Upsell */}
          <div className="flex items-center gap-8">
            <div className="w-16 text-right font-medium">Upsell</div>
            <div className="flex gap-4">
              <Chip $variant="subtle" $color="upsell" $size="large">Label</Chip>
              <Chip $variant="outline" $color="upsell" $size="large">Label</Chip>
              <Chip $variant="strong" $color="upsell" $size="large">Label</Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Decorated: Story = {
  argTypes: commonArgTypes,
  args: {
    children: 'Decorated',
    $variant: 'strong',
    $size: 'default',
    $color: 'neutral',
  },
  render: (args) => (
    <Chip {...args}>
      <CheckmarkIcon />
      {args.children}
      <CrossCircleFilledIcon />
    </Chip>
  ),
};
