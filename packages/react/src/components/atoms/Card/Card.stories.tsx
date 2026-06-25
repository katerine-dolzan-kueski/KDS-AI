import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './index';
import { Button } from '../Button';
import README from './card.md';
import type { CardProps } from './Card.types';

/**
 * Props interface for CardStory component
 * Extends CardProps and adds Storybook-specific properties
 */
interface CardStoryProps extends CardProps {
  /**
   * Whether to apply responsive padding to the card content
   * Used only for Storybook testing and demonstration purposes
   * @default true
   */
  $withPadding?: boolean;
}

const CardStory = ({ children, $withPadding = true, ...props }: CardStoryProps) => {
  return (
    <Card {...props}>
      <div className={$withPadding ? 'p-x4 sm:p-x5 md:p-x6' : ''}>{children}</div>
    </Card>
  );
};

const meta: Meta<CardStoryProps> = {
  title: 'Kueski Design System/Atoms/Card',
  component: CardStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: README,
      },
    },
  },
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'base', 'elevated'],
      description: 'Card variant style',
    },
    $size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'auto'],
      description: 'Card size',
    },
    children: {
      control: { type: 'text' },
      description: 'Card content',
    },
    $withPadding: {
      control: { type: 'boolean' },
      description: 'Enable responsive padding (p-x4 sm:p-x5 md:p-x6) only for testing',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardStoryProps>;

// Basic Card Story
export const Default: Story = {
  args: {
    $variant: 'primary',
    $size: 'auto',
    children: (
      <span className="typo-body-1">
        Your browser will open and you must accept permission for us to access the camera.
      </span>
    ),
    $withPadding: true,
  },
};

// Secondary Variant
export const Secondary: Story = {
  args: {
    $variant: 'secondary',
    $size: 'auto',
    children: (
      <div className="p-x4 sm:p-x5 md:p-x6">
        <span className="typo-body-1">
          Due date: 28 feb 2025\nLoan amount: $1,400.00\nTotal interest: $410.20\nTotal to pay:
          $1,810.20
        </span>
      </div>
    ),
  },
};

// Card with CTA Button
export const WithCTA: Story = {
  args: {
    $variant: 'primary',
    $size: 'auto',
    children: (
      <div className="p-x4 sm:p-x5 md:p-x6">
        <div className="mb-x3">
          <span className="typo-headline-3">Content to your liking...</span>
        </div>
        <div className="mb-x4">
          <span className="typo-body-1">
            Your information has been saved correctly. You can review the details in your profile or
            edit them at any time. If you need help, consult our support section.
          </span>
        </div>
        <div className="flex justify-end">
          <Button variant="primary" size="md">
            Button
          </Button>
        </div>
      </div>
    ),
  },
};

// Small Size
export const Small: Story = {
  args: {
    $variant: 'primary',
    $size: 'sm',
    children: (
      <div className="p-x4">
        <div className="mb-x2">
          <span className="typo-headline-3">Quick info</span>
        </div>
        <div>
          <span className="typo-body-1">Brief information here.</span>
        </div>
      </div>
    ),
  },
};

// Large Size
export const Large: Story = {
  args: {
    $variant: 'primary',
    $size: 'lg',
    children: (
      <div className="p-x6">
        <div className="mb-x4">
          <span className="typo-headline-3">Detailed information</span>
        </div>
        <div className="mb-x4">
          <span className="typo-body-1">
            This is a larger card with more space for detailed content and information.
          </span>
        </div>
        <div className="flex justify-end">
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    ),
  },
};

// Auto/Adaptive Size
export const Auto: Story = {
  args: {
    $variant: 'primary',
    $size: 'auto',
    children: (
      <div className="p-x4 sm:p-x5 md:p-x6">
        <div className="mb-x3">
          <span className="typo-headline-3">Responsive Adaptive Card</span>
        </div>
        <div>
          <span className="typo-body-1">
            This card adapts to its content size automatically and is fully responsive. It will
            adjust its padding and layout based on screen size.
          </span>
        </div>
      </div>
    ),
  },
};

// Responsive Auto Cards
export const ResponsiveAuto: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
      <Card $variant="primary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x2">
            <span className="typo-headline-3">Short Card</span>
          </div>
          <div>
            <span className="typo-body-1">Brief content.</span>
          </div>
        </div>
      </Card>
      <Card $variant="secondary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x2">
            <span className="typo-headline-3">Medium Length Card</span>
          </div>
          <div>
            <span className="typo-body-1">
              This card has medium length content that demonstrates how the auto size adapts to
              different content lengths while remaining responsive.
            </span>
          </div>
        </div>
      </Card>
      <Card $variant="primary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x2">
            <span className="typo-headline-3">Long Content Card</span>
          </div>
          <div className="mb-x3">
            <span className="typo-body-1">
              This is a much longer card with extensive content that shows how the auto size handles
              varying amounts of text while maintaining proper responsive behavior across different
              screen sizes and breakpoints.
            </span>
          </div>
          <div className="flex justify-end">
            <Button variant="primary" size="sm">
              Action
            </Button>
          </div>
        </div>
      </Card>
    </div>
  ),
};
// Empty Card (Placeholder)
export const Empty: Story = {
  args: {
    $variant: 'primary',
    $size: 'auto',
    children: (
      <div className="p-x4 sm:p-x5 md:p-x6">
        <div className="text-center text-text-and-icons-tertiary">
          <p className="typo-body-1">Empty card container</p>
          <p className="typo-body-2">This can serve as a placeholder for any content</p>
        </div>
      </div>
    ),
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card $variant="primary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x2">
            <span className="typo-headline-3">Primary Card</span>
          </div>
          <div>
            <span className="typo-body-1">This is a primary variant card.</span>
          </div>
        </div>
      </Card>
      <Card $variant="secondary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x2">
            <span className="typo-headline-3">Secondary Card</span>
          </div>
          <div>
            <span className="typo-body-1">This is a secondary variant card.</span>
          </div>
        </div>
      </Card>
      <Card $variant="primary" $size="sm">
        <div className="p-x4">
          <div className="mb-x2">
            <span className="typo-headline-3">Small Card</span>
          </div>
          <div>
            <span className="typo-body-1">This is a small size card.</span>
          </div>
        </div>
      </Card>
      <Card $variant="primary" $size="lg">
        <div className="p-x6">
          <div className="mb-x2">
            <span className="typo-headline-3">Large Card</span>
          </div>
          <div>
            <span className="typo-body-1">This is a large size card with more space.</span>
          </div>
        </div>
      </Card>
      <Card $variant="primary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x2">
            <span className="typo-headline-3">Auto Card</span>
          </div>
          <div>
            <span className="typo-body-1">This card adapts to its content size automatically.</span>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// Cards Example
export const ExamplesCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card $variant="primary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x3">
            <span className="typo-headline-3">Button Group Example</span>
          </div>
          <div className="mb-x4">
            <span className="typo-body-1">
              This card demonstrates the use of Button components in different configurations.
            </span>
          </div>
          <div className="flex gap-x2">
            <Button variant="secondary" size="sm">
              Cancel
            </Button>
            <Button variant="primary" size="sm">
              Confirm
            </Button>
          </div>
        </div>
      </Card>
      <Card $variant="secondary" $size="auto">
        <div className="p-x4 sm:p-x5 md:p-x6">
          <div className="mb-x3">
            <span className="typo-headline-3">Multiple Actions</span>
          </div>
          <div className="mb-x4">
            <span className="typo-body-1">
              This card shows how to organize multiple action buttons in a card footer.
            </span>
          </div>
          <div className="flex gap-x2">
            <Button variant="secondary" size="sm">
              Edit
            </Button>
            <Button variant="secondary" size="sm">
              Share
            </Button>
            <Button variant="primary" size="sm">
              Save
            </Button>
          </div>
        </div>
      </Card>
    </div>
  ),
};
