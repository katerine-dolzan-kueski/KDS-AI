import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';
import README from '../../../../../../docs/components/atoms/button-group.md';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Kueski Design System/Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: README,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    $orientation: {
      control: 'select',
      options: ['horizontal', 'vertical', 'responsive'],
      description: 'Layout orientation',
      table: {
        defaultValue: { summary: 'responsive' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// Default story - Two buttons with composition pattern
export const Default: Story = {
  render: ({ $orientation, $fullWidth }) => (
    <div className="w-full max-w-md mx-auto">
      <ButtonGroup $orientation={$orientation} $fullWidth={$fullWidth}>
        <Button $variant="secondary">Cancel</Button>
        <Button $variant="primary">Save Changes</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    args: {
      $orientation: 'vertical',
    },
    docs: {
      description: {
        story:
          'Default responsive layout with two buttons. Horizontal on desktop, vertical on mobile.',
      },
    },
  },
};

// Primary action variants
export const PrimaryVariants: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600 mb-2">Primary (default)</p>
          <ButtonGroup>
            <Button $variant="secondary">Cancel</Button>
            <Button $variant="primary">Continue</Button>
          </ButtonGroup>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Success</p>
          <ButtonGroup>
            <Button $variant="secondary">Cancel</Button>
            <Button $variant="success">Confirm</Button>
          </ButtonGroup>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Destructive</p>
          <ButtonGroup>
            <Button $variant="secondary">Keep</Button>
            <Button $variant="destructive">Delete</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Different primary button variants. Now you have full control over each button variant.',
      },
    },
  },
};

// Three buttons - showcasing composition flexibility
export const ThreeButtons: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-600 mb-2">Three action levels</p>
        <ButtonGroup>
          <Button $variant="ghost-primary">Cancel</Button>
          <Button $variant="secondary">Save Draft</Button>
          <Button $variant="primary">Publish</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Destructive with options</p>
        <ButtonGroup>
          <Button $variant="secondary">Cancel</Button>
          <Button $variant="secondary">Archive</Button>
          <Button $variant="destructive">Delete</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composition pattern allows any number of buttons - not limited to 2! Perfect for complex workflows.',
      },
    },
  },
};

// Horizontal orientation
export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto">
      <ButtonGroup $orientation="horizontal">
        <Button $variant="secondary">Cancel</Button>
        <Button $variant="primary">Save</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Always horizontal layout with equal-width buttons.',
      },
    },
  },
};

// Vertical orientation
export const Vertical: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto">
      <ButtonGroup $orientation="vertical">
        <Button $variant="secondary" $fullWidth>
          Cancel
        </Button>
        <Button $variant="primary" $fullWidth>
          Confirm Action
        </Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Always vertical layout with full-width buttons. Great for mobile-first designs.',
      },
    },
  },
};

// Loading states
export const WithLoadingState: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false);

    const handleSave = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

    return (
      <div className="w-full max-w-md mx-auto">
        <ButtonGroup>
          <Button $variant="secondary" disabled={loading}>
            Cancel
          </Button>
          <Button
            $variant="primary"
            $loading={loading}
            $loadingText="Saving..."
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </ButtonGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons with loading state. Full control over each button behavior.',
      },
    },
  },
};

// Different button sizes
export const DifferentSizes: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600 mb-2">Small</p>
          <ButtonGroup>
            <Button $variant="secondary" $size="sm">
              Cancel
            </Button>
            <Button $variant="primary" $size="sm">
              Save
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Default</p>
          <ButtonGroup>
            <Button $variant="secondary">Cancel</Button>
            <Button $variant="primary">Save</Button>
          </ButtonGroup>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Large</p>
          <ButtonGroup>
            <Button $variant="secondary" $size="lg">
              Cancel
            </Button>
            <Button $variant="primary" $size="lg">
              Save
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with different sizes. Each button can have its own size.',
      },
    },
  },
};

// Edge cases - single button, many buttons
export const EdgeCases: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-600 mb-2">Single button (still works!)</p>
        <ButtonGroup>
          <Button $variant="primary">Single Action</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Four buttons</p>
        <ButtonGroup $orientation="horizontal">
          <Button $variant="secondary">Cancel</Button>
          <Button $variant="secondary">Save Draft</Button>
          <Button $variant="secondary">Preview</Button>
          <Button $variant="primary">Publish</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Mixed variants</p>
        <ButtonGroup>
          <Button $variant="secondary" $size="sm">
            Cancel
          </Button>
          <Button $variant="secondary">Save</Button>
          <Button $variant="primary" $size="lg">
            Publish
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge cases showing flexibility: single button, 4+ buttons, mixed sizes. Composition pattern handles it all!',
      },
    },
  },
};
