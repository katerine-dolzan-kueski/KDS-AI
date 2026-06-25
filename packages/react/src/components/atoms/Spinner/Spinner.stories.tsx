import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';
import README from '../../../../../../docs/components/atoms/spinner.md';

const meta: Meta<typeof Spinner> = {
  title: 'Kueski Design System/Atoms/Spinner',
  component: Spinner,
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
    $title: {
      control: 'text',
      description: 'Main title text',
      defaultValue: 'Preparando tu solicitud',
    },
    $subtitle: {
      control: 'text',
      description: 'Subtitle text',
      defaultValue: 'Sin papeleos eternos, ¡lo juramos!',
    },
    $size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the spinner',
      defaultValue: 'md',
    },
    $speed: {
      control: { type: 'range', min: 0.5, max: 3, step: 0.1 },
      description: 'Animation speed in seconds',
      defaultValue: 1,
    },
    $visible: {
      control: 'boolean',
      description: 'Whether the spinner is visible',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default spinner with title and subtitle
export const Default: Story = {
  args: {
    $title: 'Preparando tu solicitud',
    $subtitle: 'Sin papeleos eternos, ¡lo juramos!',
    $size: 'md',
    $speed: 1,
    $visible: true,
    'aria-label': 'Loading...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default spinner with title and subtitle, matching the design from the image.',
      },
    },
  },
};

// Speed variants
export const Speeds: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <div className="flex flex-col items-center space-y-2">
        <Spinner
          $speed={2}
          $title="Preparando tu solicitud"
          $subtitle="Sin papeleos eternos, ¡lo juramos!"
        />
        <span className="text-xs text-text-and-icons-secondary">Slow (2s)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Spinner
          $speed={1}
          $title="Preparando tu solicitud"
          $subtitle="Sin papeleos eternos, ¡lo juramos!"
        />
        <span className="text-xs text-text-and-icons-secondary">Normal (1s)</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Spinner
          $speed={0.5}
          $title="Preparando tu solicitud"
          $subtitle="Sin papeleos eternos, ¡lo juramos!"
        />
        <span className="text-xs text-text-and-icons-secondary">Fast (0.5s)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different animation speeds of the spinner component.',
      },
    },
  },
};

// Custom text variants
export const CustomText: Story = {
  render: () => (
    <div className="space-y-8">
      <Spinner $title="Procesando pago" $subtitle="Esto puede tomar unos segundos" />
      <Spinner $title="Verificando datos" $subtitle="Revisando tu información" />
      <Spinner $title="Generando respuesta" $subtitle="Casi terminamos" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text combinations for various loading states.',
      },
    },
  },
};

// Custom styling variants
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8">
      <Spinner
        $title="Custom Title"
        $subtitle="Custom subtitle"
        $titleClassName="text-text-and-icons-brand font-bold"
        $subtitleClassName="!text-text-and-icons-brand italic"
      />
      <Spinner
        $title="Large Title"
        $subtitle="Small subtitle"
        $titleClassName="text-text-and-icons-danger"
        $subtitleClassName="!text-text-and-icons-danger"
      />
      <Spinner
        $title="Centered Title"
        $subtitle="Left aligned subtitle"
        $titleClassName="text-center"
        $subtitleClassName="text-left"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of custom styling using $titleClassName and $subtitleClassName props.',
      },
    },
  },
};
