import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from './CircularProgress';
import README from '../../../../../../docs/components/atoms/circular-progress.md';

const meta: Meta<typeof CircularProgress> = {
  title: 'Kueski Design System/Atoms/CircularProgress',
  component: CircularProgress,
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
    $size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the circular progress',
      defaultValue: 'md',
    },
    $variant: {
      control: 'select',
      options: ['default', 'inverted'],
      description: 'Gradient variant - default (blue) or inverted (white)',
      defaultValue: 'default',
    },
    $speed: {
      control: { type: 'range', min: 0.5, max: 3, step: 0.1 },
      description: 'Animation speed in seconds',
      defaultValue: 1,
    },
    $visible: {
      control: 'boolean',
      description: 'Whether the circular progress is visible',
      defaultValue: true,
    },
    $show: {
      control: 'boolean',
      description: 'Whether to show the circular progress',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default circular progress (32px x 32px with exact Figma conic gradient)
export const Default: Story = {
  args: {
    $size: 'md', // 32px x 32px
    $speed: 1, // 1 second
    $visible: true,
    $show: true,
    $variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default circular progress with 32px × 32px size. Uses CSS conic-gradient that exactly matches the Figma design.',
      },
    },
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $size="xs" />
        <span className="text-xs text-text-and-icons-secondary">XS (12px)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $size="sm" />
        <span className="text-xs text-text-and-icons-secondary">SM (16px)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $size="md" />
        <span className="text-xs text-text-and-icons-secondary">MD (32px)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $size="lg" />
        <span className="text-xs text-text-and-icons-secondary">LG (40px)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $size="xl" />
        <span className="text-xs text-text-and-icons-secondary">XL (48px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All five available sizes of the circular progress component. Each size maintains the exact conic gradient proportions from the Figma design.',
      },
    },
  },
};

// Variant examples
export const Variants: Story = {
  render: () => (
    <div className="flex items-center space-x-16">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-8 rounded-lg bg-background-primary border border-border-primary">
          <CircularProgress $variant="default" $size="lg" />
        </div>
        <div className="text-center">
          <span className="text-sm font-medium text-text-and-icons-primary">Default (Blue)</span>
          <p className="text-xs text-text-and-icons-tertiary mt-1">For light backgrounds</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="p-8 rounded-lg bg-background-invert-primary border border-border-primary">
          <CircularProgress $variant="inverted" $size="lg" />
        </div>
        <div className="text-center">
          <span className="text-sm font-medium text-text-and-icons-primary">Inverted (White)</span>
          <p className="text-xs text-text-and-icons-tertiary mt-1">For dark backgrounds</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Two gradient variants: **default** uses blue gradient (var(--color-spinner-blue-*)) for light backgrounds, and **inverted** uses white gradient (var(--color-spinner-white-*)) for dark backgrounds. Both variants use the same precise conic gradient stops from Figma.',
      },
    },
  },
};

// Speed variants
export const Speeds: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $speed={2} />
        <span className="text-xs text-text-and-icons-secondary">Slow (2s)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $speed={1} />
        <span className="text-xs text-text-and-icons-secondary">Normal (1s)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress $speed={0.5} />
        <span className="text-xs text-text-and-icons-secondary">Fast (0.5s)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Different animation speeds: slower speeds (1.5-2s) for long processes, normal (1s) for typical loading, and faster (0.5-0.7s) for quick actions. The speed prop accepts any number between 0.5 and 3 seconds.',
      },
    },
  },
};

// Theme-aware example (responds to data-theme attribute)
export const ThemeAware: Story = {
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <p className="text-sm text-text-and-icons-secondary mb-4">Light Theme</p>
        <div className="p-8 rounded-lg bg-background-primary border border-border-primary flex justify-center items-center">
          <CircularProgress $variant="default" $size="lg" />
        </div>
      </div>
      <div>
        <p className="text-sm text-text-and-icons-secondary mb-4">Dark Theme</p>
        <div className="p-8 rounded-lg bg-background-invert-primary border border-border-primary flex justify-center items-center">
          <CircularProgress $variant="inverted" $size="lg" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'The component uses CSS variables from the design system that automatically adapt to theme changes. Variables like `--color-spinner-blue-0`, `--color-spinner-blue-100`, and `--color-spinner-blue-300` have different values in light vs dark themes (defined in `gradient-colors.css` with `[data-theme="dark"]` selector). Choose the appropriate variant based on your background color for optimal visibility.',
      },
    },
  },
};
