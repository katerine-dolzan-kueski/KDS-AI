import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';
import { DividerThickness } from './Divider.types';
import README from './divider.md';

interface DividerStoryProps {
  $thickness?: DividerThickness | undefined;
  width?: string | undefined;
}

const meta: Meta<DividerStoryProps> = {
  title: 'Kueski Design System/Atoms/Divider',
  component: Divider,
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
    $thickness: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Thickness of the divider in dp',
    },
    width: {
      control: 'text',
      description: 'Width of the divider example: 600px, 50%, 100%',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Divider
        $thickness={args.$thickness}
        className={args.width ? `w-[${args.width}]` : undefined}
      />
    );
  },
  args: {
    $thickness: 'md',
    width: '472px',
  },
};

export const Thin: Story = {
  render: (args) => {
    return <Divider $thickness={args.$thickness} className="w-[472px]" />;
  },
  args: {
    $thickness: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Thin divider with 0.5px thickness (default).',
      },
    },
  },
};

export const Medium: Story = {
  render: (args) => {
    return <Divider $thickness={args.$thickness} className="w-[472px]" />;
  },
  args: {
    $thickness: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium divider with 1px thickness.',
      },
    },
  },
};

export const Thick: Story = {
  render: (args) => {
    return <Divider $thickness={args.$thickness} className="w-[472px]" />;
  },
  args: {
    $thickness: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Thick divider with 2px thickness.',
      },
    },
  },
};

export const ClassNamePrecedence: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">
          Custom min-width via className (800px)
        </h3>
        <Divider $thickness="md" className="w-[800px]" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">
          Custom min-width via className (200px)
        </h3>
        <Divider $thickness="md" className="w-[200px]" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates smart width handling',
      },
    },
  },
};

export const AllThicknesses: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">0.5px thickness</h3>
        <Divider $thickness="sm" className="w-[472px]" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">1px thickness</h3>
        <Divider $thickness="md" className="w-[472px]" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">2px thickness</h3>
        <Divider $thickness="lg" className="w-[472px]" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available thickness options.',
      },
    },
  },
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <h2 className="typo-headline-3 mb-2">Section 1</h2>
        <p className="text-gray-600">This is the first section of content.</p>
      </div>

      <Divider $thickness="md" className="w-[472px]" />

      <div>
        <h2 className="typo-headline-3 mb-2">Section 2</h2>
        <p className="text-gray-600">This is the second section of content.</p>
      </div>

      <Divider $thickness="lg" className="w-[472px]" />

      <div>
        <h2 className="typo-headline-3 mb-2">Section 3</h2>
        <p className="text-gray-600">This is the third section of content.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Divider used in a real context to separate content sections.',
      },
    },
  },
};
