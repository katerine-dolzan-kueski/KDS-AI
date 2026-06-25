/* eslint-disable import/no-unresolved */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.js';
import { HomeIcon, ChevronBottomIcon, ChevronRightIcon } from '../Icons';
import { ButtonProps } from './Button.types.js';
import README from './button.md';

const ButtonDemo = ({
  $loading: loading = false,
  $loadingText: loadingText,
  $fullWidth: fullWidth = false,
  'aria-label': ariaLabel,
  $size: size = 'default',
  $variant: variant = 'primary',
  disabled,
  children,
  $mode: mode = 'default',
}: ButtonProps) => {
  const variants = ['translucent', 'opaque-shadow', 'opaque-outline'];
  const isAlternative = variant && variants?.includes(variant);

  if (mode === 'icon' && !isAlternative) {
    return (
      <Button
        $loading={loading}
        $loadingText={loadingText}
        $fullWidth={fullWidth}
        aria-label={ariaLabel}
        $size={size}
        $variant={variant}
        disabled={disabled}
        $mode="icon"
      >
        <HomeIcon />
      </Button>
    );
  }

  return (
    <>
      {isAlternative ? (
        <Button
          $loading={loading}
          $loadingText={loadingText}
          $fullWidth={fullWidth}
          aria-label={ariaLabel}
          $size={size}
          $variant={variant}
          disabled={disabled}
          $mode="alternative"
        >
          <HomeIcon />
        </Button>
      ) : (
        <Button
          $loading={loading}
          $loadingText={loadingText}
          $fullWidth={fullWidth}
          aria-label={ariaLabel}
          $size={size}
          $variant={variant}
          disabled={disabled}
          $mode={mode}
        >
          {children}
        </Button>
      )}
    </>
  );
};

const meta: Meta<typeof Button> = {
  title: 'Kueski Design System/Atoms/Button',
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
    $variant: {
      control: 'select',
      options: [
        'primary',
        'warning',
        'destructive',
        'success',
        'upsell',
        'secondary',
        'ghost-primary',
        'ghost-destructive',
        'translucent',
        'opaque-shadow',
        'opaque-outline',
      ],
      description: 'Visual variant of the button that determines its appearance',
    },
    $size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size (default is "md")',
    },
    $mode: {
      control: 'select',
      options: ['icon', 'default', 'link'],
      description:
        'Button mode - default (normal button), icon (icon only), or link (text only with brand color)',
    },
    $loading: {
      control: 'boolean',
      description: 'Shows loading state and disables the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    $loadingText: {
      control: 'text',
      description: 'Custom text for the loading state (falls back to children if not provided)',
    },
    children: {
      control: 'text',
      description: 'Button content - can include icons, text, or both',
    },
  },
  component: ButtonDemo,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Botón',
    $size: 'md',
    $variant: 'primary',
    $loading: false,
    disabled: false,
    $mode: 'default',
    $loadingText: 'processing...',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button $size="sm">Small</Button>
      <Button $size="default">Default</Button>
      <Button $size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The different available sizes for buttons.',
      },
    },
  },
};

// Icon-only sizes showcase
export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div>
        <div className="text-heading-4 mb-4">Small</div>
        <Button $variant="primary" $size="sm" $mode="icon" aria-label="Small icon">
          <HomeIcon />
        </Button>
      </div>
      <div>
        <div className="text-heading-4 mb-4">Medium</div>
        <Button $variant="primary" $size="md" $mode="icon" aria-label="Medium icon">
          <HomeIcon />
        </Button>
      </div>
      <div>
        <div className="text-heading-4 mb-4">Large</div>
        <Button $variant="primary" $size="lg" $mode="icon" aria-label="Large icon">
          <HomeIcon />
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons in all available sizes.',
      },
    },
  },
};

// Helper to render all button variants
const renderButtonVariants = ({
  id = '',
  size = 'lg',
  disabled = false,
}: {
  id?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled: boolean;
}) => {
  const standardVariants = [
    'primary',
    'warning',
    'destructive',
    'success',
    'upsell',
    'secondary',
    'ghost-primary',
    'ghost-destructive',
  ] as const;

  const alternativeVariants = ['translucent', 'opaque-shadow', 'opaque-outline'] as const;

  return (
    <>
      {/* Standard variants with text and icons */}
      {standardVariants.map((variant) => (
        <React.Fragment key={variant}>
          <Button id={`${id}-${variant}`} $variant={variant} $size={size} disabled={disabled}>
            <HomeIcon />
            Botón
            <ChevronBottomIcon />
          </Button>
          <Button
            id={`${id}-${variant}-icon`}
            $variant={variant}
            $size={size}
            $mode="icon"
            disabled={disabled}
          >
            <HomeIcon />
          </Button>
        </React.Fragment>
      ))}

      {/* Alternative variants (icon only) */}
      {alternativeVariants.map((variant) => (
        <Button
          id={`${id}-${variant}`}
          key={variant}
          $variant={variant}
          $size={size}
          $mode="alternative"
          disabled={disabled}
        >
          <HomeIcon />
        </Button>
      ))}
    </>
  );
};

// Disabled states
export const DisabledStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled Default</Button>
      <Button disabled $variant="secondary">
        Disabled Secondary
      </Button>
      <Button disabled $variant="destructive">
        <HomeIcon />
        Disabled Destructive
      </Button>
      <Button disabled>
        <HomeIcon />
        Disabled with Icon
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled states for different variants using pure composition.',
      },
    },
  },
};

// Full width
export const FullWidth: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Button $fullWidth>Full Width Default</Button>
      <Button $fullWidth $variant="secondary">
        Full Width Secondary
      </Button>
      <Button $fullWidth $loading>
        Full Width Loading
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons that take up the full available width.',
      },
    },
  },
};

// Loading with custom icon
export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button $loading $loadingText="Processing...">
        Submit
      </Button>
      <Button $loading $loadingIcon={<ChevronBottomIcon />} $variant="secondary">
        Loading with custom icon
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Loading states with custom loading icon using $loadingIcon prop. You can pass any React element as a loading indicator.',
      },
    },
  },
};

// Common use cases
export const CommonUseCases: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Call to Action */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Call to Action:</h4>
        <div className="flex gap-3">
          <Button $size="lg">
            Get Started
            <ChevronRightIcon />
          </Button>
          <Button $variant="secondary" $size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Form Actions */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Form Actions:</h4>
        <div className="flex gap-3">
          <Button>Submit</Button>
          <Button $variant="secondary">Cancel</Button>
          <Button $variant="destructive">
            <HomeIcon />
            Delete
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Navigation:</h4>
        <div className="flex gap-3">
          <Button $variant="ghost-primary" $size="sm">
            ← Back
          </Button>
          <Button $variant="ghost-primary">Skip this step</Button>
          <Button>
            Next Step
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of common use cases using pure composition pattern.',
      },
    },
  },
};

// All variants showcase
export const AllVariantsShowcase: Story = {
  render: () => (
    <div className="w-full p-5 overflow-x-auto">
      <div>
        <div className="space-y-3">
          {/* Large Size */}
          <div>
            <div className="text-heading-4 mb-4">Large</div>
            <div className="grid auto-cols-max grid-flow-col gap-4">
              {renderButtonVariants({ id: '', size: 'lg', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Active State</div>
            <div className="grid auto-cols-max grid-flow-col gap-4">
              {renderButtonVariants({ id: 'active', size: 'lg', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Focus State</div>
            <div className="grid auto-cols-max grid-flow-col gap-4">
              {renderButtonVariants({ id: 'focus', size: 'lg', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Disabled State</div>
            <div className="grid auto-cols-max grid-flow-col gap-4">
              {renderButtonVariants({ id: '', size: 'lg', disabled: true })}
            </div>
          </div>
        </div>

        <div className="space-y-3 mt-8">
          {/* Medium Size */}
          <div>
            <div className="text-heading-4 mb-4">Medium</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: '', size: 'md', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Active State</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: 'active', size: 'md', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Focus State</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: 'focus', size: 'md', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Disabled State</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: '', size: 'md', disabled: true })}
            </div>
          </div>
        </div>

        <div className="space-y-3 mt-8">
          {/* Small Size */}
          <div>
            <div className="text-heading-4 mb-4">Small</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: '', size: 'sm', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Active State</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: 'active', size: 'sm', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Focus State</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: 'focus', size: 'sm', disabled: false })}
            </div>
          </div>

          <div>
            <div className="text-body-sm text-gray-600 mb-2">Disabled State</div>
            <div className="grid auto-cols-max grid-flow-col gap-3">
              {renderButtonVariants({ id: '', size: 'sm', disabled: true })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    pseudo: {
      active: [
        '#active-primary',
        '#active-primary-icon',
        '#active-warning',
        '#active-warning-icon',
        '#active-destructive',
        '#active-destructive-icon',
        '#active-success',
        '#active-success-icon',
        '#active-upsell',
        '#active-upsell-icon',
        '#active-secondary',
        '#active-secondary-icon',
        '#active-ghost-primary',
        '#active-ghost-primary-icon',
        '#active-ghost-destructive',
        '#active-ghost-destructive-icon',
        '#active-translucent',
        '#active-opaque-shadow',
        '#active-opaque-outline',
      ],
      focusVisible: [
        '#focus-primary',
        '#focus-primary-icon',
        '#focus-warning',
        '#focus-warning-icon',
        '#focus-destructive',
        '#focus-destructive-icon',
        '#focus-success',
        '#focus-success-icon',
        '#focus-upsell',
        '#focus-upsell-icon',
        '#focus-secondary',
        '#focus-secondary-icon',
        '#focus-ghost-primary',
        '#focus-ghost-primary-icon',
        '#focus-ghost-destructive',
        '#focus-ghost-destructive-icon',
        '#focus-translucent',
        '#focus-opaque-shadow',
        '#focus-opaque-outline',
      ],
    },
    docs: {
      description: {
        story:
          'Comprehensive showcase of all button variants across different sizes (Large, Medium, Small) and interactive states (Default, Active, Focus, Disabled). Use the pseudo-states toolbar above to toggle interactive states on all buttons simultaneously. This demonstrates the complete button system with all 11 variants in both default and icon modes.',
      },
    },
  },
};

// Link Mode - Text only with brand colors
export const LinkMode: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="typo-headline-3 text-text-and-icons-primary mb-4">Link Mode - Text Only</h3>
        <p className="typo-body-2 text-text-and-icons-secondary mb-6">
          Link mode displays buttons as text-only elements with brand colors, no background, hover,
          or focus effects.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="typo-headline-4 text-text-and-icons-primary mb-3">Primary Variants</h4>
          <div className="flex flex-wrap gap-4">
            <Button $variant="primary" $mode="link">
              Primary Link
            </Button>
            <Button $variant="warning" $mode="link">
              Warning Link
            </Button>
            <Button $variant="destructive" $mode="link">
              Destructive Link
            </Button>
            <Button $variant="success" $mode="link">
              Success Link
            </Button>
            <Button $variant="upsell" $mode="link">
              Upsell Link
            </Button>
          </div>
        </div>

        <div>
          <h4 className="typo-headline-4 text-text-and-icons-primary mb-3">Secondary Variants</h4>
          <div className="flex flex-wrap gap-4">
            <Button $variant="secondary" $mode="link">
              Secondary Link
            </Button>
            <Button $variant="ghost-primary" $mode="link">
              Ghost Primary Link
            </Button>
            <Button $variant="ghost-destructive" $mode="link">
              Ghost Destructive Link
            </Button>
          </div>
        </div>

        <div>
          <h4 className="typo-headline-4 text-text-and-icons-primary mb-3">Alternative Variants</h4>
          <div className="flex flex-wrap gap-4">
            <Button $variant="translucent" $mode="link">
              Translucent Link
            </Button>
            <Button $variant="opaque-shadow" $mode="link">
              Opaque Shadow Link
            </Button>
            <Button $variant="opaque-outline" $mode="link">
              Opaque Outline Link
            </Button>
          </div>
        </div>

        <div>
          <h4 className="typo-headline-4 text-text-and-icons-primary mb-3">Disabled State</h4>
          <div className="flex flex-wrap gap-4">
            <Button $variant="primary" $mode="link" disabled>
              Disabled Primary Link
            </Button>
            <Button $variant="destructive" $mode="link" disabled>
              Disabled Destructive Link
            </Button>
            <Button $variant="secondary" $mode="link" disabled>
              Disabled Secondary Link
            </Button>
          </div>
        </div>

        <div>
          <h4 className="typo-headline-4 text-text-and-icons-primary mb-3">
            With Icons (Auto-adapts to Button Style)
          </h4>
          <p className="typo-body-3 text-text-and-icons-secondary mb-3">
            When icons are added to link mode, the button automatically uses normal button styles
            for better visual hierarchy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button $variant="primary" $mode="link">
              <HomeIcon className="w-4 h-4" />
              Home Link
            </Button>
            <Button $variant="destructive" $mode="link">
              <ChevronRightIcon className="w-4 h-4" />
              Delete Link
            </Button>
            <Button $variant="success" $mode="link">
              <ChevronBottomIcon className="w-4 h-4" />
              Success Link
            </Button>
          </div>
        </div>

        <div>
          <h4 className="typo-headline-4 text-text-and-icons-primary mb-3">
            Comparison: Text Only vs With Icons
          </h4>
          <div className="space-y-4">
            <div>
              <p className="typo-body-3 text-text-and-icons-secondary mb-2">
                Text Only (Link Style)
              </p>
              <div className="flex flex-wrap gap-4">
                <Button $variant="primary" $mode="link">
                  Primary Link
                </Button>
                <Button $variant="destructive" $mode="link">
                  Destructive Link
                </Button>
              </div>
            </div>
            <div>
              <p className="typo-body-3 text-text-and-icons-secondary mb-2">
                With Icons (Button Style)
              </p>
              <div className="flex flex-wrap gap-4">
                <Button $variant="primary" $mode="link">
                  <HomeIcon className="w-4 h-4" />
                  Primary Link
                </Button>
                <Button $variant="destructive" $mode="link">
                  Destructive Link
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Link mode displays buttons as text-only elements with brand colors. When icons are added, the button automatically adapts to use normal button styles for better visual hierarchy. Perfect for inline actions, navigation links, or subtle call-to-actions that don't need the visual weight of a full button.",
      },
    },
  },
};
