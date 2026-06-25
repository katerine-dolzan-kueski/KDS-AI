import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { ButtonGroup, Button } from '../../atoms';
import { WebIcon } from '../../atoms/Icons';
import README from './banner.md';

const meta: Meta = {
  title: 'Kueski Design System/Molecules/Banner',
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
    bannerWidth: {
      control: 'text',
      description: 'Banner width - controls the container width (e.g., "300px", "50%")',
    },
    $variant: {
      control: 'select',
      options: ['information', 'success', 'warning', 'error', 'upsell'],
      description: 'Banner variant - determines color scheme and icon',
    },
    $outline: {
      control: 'boolean',
      description:
        'Outline visibility - true enables outline with variant color, false disables outline',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show/hide the banner icon',
    },
    showTitle: {
      control: 'boolean',
      description: 'Show/hide the banner title',
    },
    showDescription: {
      control: 'boolean',
      description: 'Show/hide the banner description',
    },
    showPrimaryAction: {
      control: 'boolean',
      description: 'Show/hide the primary action button',
    },
    showSecondaryAction: {
      control: 'boolean',
      description: 'Show/hide the secondary action button',
    },
    primaryActionText: {
      control: 'text',
      description: 'Text for the primary action button',
    },
    secondaryActionText: {
      control: 'text',
      description: 'Text for the secondary action button',
    },
    titleText: {
      control: 'text',
      description: 'Text for the banner title',
    },
    descriptionText: {
      control: 'text',
      description: 'Text for the banner description',
    },
    buttonGroupFullWidth: {
      control: 'boolean',
      description: 'Make the button group take full width',
    },
    buttonGroupCustomWidth: {
      control: 'text',
      description: 'Custom width for the button group (e.g., "300px", "50%")',
    },
    buttonGroupMaxWidth: {
      control: 'text',
      description: 'Maximum width for the button group (e.g., "400px", "80%")',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show/hide the close button',
    },
    className: {
      control: 'text',
      description: 'Custom className for the Banner',
    },
    $alternative: {
      control: 'boolean',
      description: 'Use alternative mode styles',
    },
  },
  args: {
    bannerWidth: '372px',
    $variant: 'information',
    $outline: false,
    showIcon: true,
    showTitle: true,
    showDescription: true,
    showPrimaryAction: true,
    showSecondaryAction: true,
    showCloseButton: true,
    primaryActionText: 'Primary Action',
    secondaryActionText: 'Secondary Action',
    titleText: 'Interactive Banner',
    descriptionText: 'Use the controls below to change the banner variant and behavior.',
    buttonGroupFullWidth: true,
    buttonGroupCustomWidth: '200px',
    buttonGroupMaxWidth: '200px',
    $alternative: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Banner - Interactive controls
export const Default: Story = {
  render: (args) => {
    return (
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        onClose={() => console.log('Banner closed')}
        style={{ maxWidth: args.bannerWidth }}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>{args.titleText || 'Interactive Banner'}</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              {args.descriptionText ||
                'Use the controls below to change the banner variant and behavior.'}
            </Banner.Body>
          )}
          <ButtonGroup
            $orientation="horizontal"
            className={`pt-3 gap-3 flex-wrap ${
              args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                ? ''
                : `w-[${args.buttonGroupCustomWidth}]`
            } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
          >
            {args.showPrimaryAction && (
              <Button $variant="primary" $size="sm">
                {args.primaryActionText}
              </Button>
            )}
            {args.showSecondaryAction && (
              <Button $variant="primary" $mode="link" $size="sm">
                {args.secondaryActionText}
              </Button>
            )}
          </ButtonGroup>
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    );
  },
};

// Information Banner - Basic usage
export const Information: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>{args.titleText || 'Information Banner'}</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              {args.descriptionText || 'This is an information banner with brand colors.'}
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 flex-wrap ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="primary" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="primary" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    $variant: 'information',
  },
};

// Success Banner - Basic usage
export const Success: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>{args.titleText || 'Success Banner'}</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              {args.descriptionText || 'This is a success banner with green colors.'}
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 flex-wrap ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="success" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="success" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    $variant: 'success',
  },
};

// Warning Banner - Basic usage
export const Warning: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>{args.titleText || 'Warning Banner'}</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              {args.descriptionText || 'This is a warning banner with warning colors.'}
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 flex-wrap ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="warning" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="warning" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    $variant: 'warning',
  },
};

// Error Banner - Basic usage
export const Error: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>{args.titleText || 'Error Banner'}</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              {args.descriptionText || 'This is an error banner with error colors.'}
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 flex-wrap ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="destructive" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="destructive" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    $variant: 'error',
  },
};

// Upsell Banner - With upsell colors
export const Upsell: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>{args.titleText || 'Upsell Banner'}</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              {args.descriptionText || 'This is an upsell banner with upsell colors.'}
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 flex-wrap ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="upsell" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="upsell" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    $variant: 'upsell',
  },
};

// Banner without icon
export const WithoutIcon: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        <Banner.Content>
          {args.showTitle && <Banner.Title>Banner without icon</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              This banner doesn't have an icon, showing only content and actions.
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 flex-wrap ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="primary" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="primary" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    showIcon: false,
    $variant: 'information',
  },
};

// Banner without title
export const WithoutTitle: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showDescription && (
            <Banner.Body>
              This banner doesn't have a title, showing only description and actions.
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="success" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="success" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    showTitle: false,
    $variant: 'success',
  },
};

// Banner without description
export const WithoutDescription: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>Banner without description</Banner.Title>}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button $variant="warning" $size="sm">
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button $variant="warning" $mode="link" $size="sm">
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    showDescription: false,
    $variant: 'warning',
  },
};

// Banner without buttons
export const WithoutButtons: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $outline={args.$outline}
        $alternative={args.$alternative}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>Banner without buttons</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              This banner doesn't have action buttons, showing only content.
            </Banner.Body>
          )}
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    showPrimaryAction: false,
    showSecondaryAction: false,
    $variant: 'error',
  },
};

// Banner without close button
export const WithoutCloseButton: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner $variant={args.$variant} $outline={args.$outline} className={args.className}>
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>Banner without close button</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              This banner doesn't have a close button, showing only content and actions.
            </Banner.Body>
          )}
          {(args.showPrimaryAction || args.showSecondaryAction) && (
            <ButtonGroup
              $orientation="horizontal"
              className={`pt-3 gap-3 ${
                args.buttonGroupFullWidth || !args.buttonGroupCustomWidth
                  ? ''
                  : `w-[${args.buttonGroupCustomWidth}]`
              } ${args.buttonGroupMaxWidth ? `max-w-[${args.buttonGroupMaxWidth}]` : ''}`}
            >
              {args.showPrimaryAction && (
                <Button
                  $variant="upsell"
                  $size="sm"
                  className="whitespace-normal break-words text-left"
                >
                  {args.primaryActionText}
                </Button>
              )}
              {args.showSecondaryAction && (
                <Button
                  $variant="upsell"
                  $mode="link"
                  $size="sm"
                  className="whitespace-normal break-words text-left"
                >
                  {args.secondaryActionText}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Banner.Content>
      </Banner>
    </div>
  ),
  args: {
    showCloseButton: false,
    $variant: 'upsell',
  },
};

// Banner without buttons and without close button
export const WithoutButtonsAndClose: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner $variant={args.$variant} $outline={args.$outline} className={args.className}>
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>Banner without buttons and close button</Banner.Title>}
          {args.showDescription && (
            <Banner.Body>
              This banner doesn't have action buttons or a close button, showing only content.
            </Banner.Body>
          )}
        </Banner.Content>
      </Banner>
    </div>
  ),
  args: {
    showPrimaryAction: false,
    showSecondaryAction: false,
    showCloseButton: false,
    $variant: 'information',
  },
};

// Alternative mode stories
export const AlternativeMode: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $alternative
        $outline={args.$outline}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        {args.showIcon && <Banner.Icon />}
        <Banner.Content>
          {args.showTitle && <Banner.Title>Información</Banner.Title>}
          <ButtonGroup $orientation="horizontal" className="pt-3 justify-baseline flex-wrap">
            <Button
              $mode="link"
              $size="sm"
              className="text-text-and-icons-invert-primary !flex-none"
            >
              Action
            </Button>
          </ButtonGroup>
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    $alternative: true,
    $variant: 'information',
  },
};

// Custom icon stories
export const CustomIcon: Story = {
  render: (args) => (
    <div style={{ maxWidth: args.bannerWidth }}>
      <Banner
        $variant={args.$variant}
        $alternative
        $outline={args.$outline}
        onClose={() => console.log('Banner closed')}
        className={args.className}
      >
        <Banner.Icon>
          <WebIcon className="w-5 h-5" />
        </Banner.Icon>
        <Banner.Content>
          <Banner.Title>Custom Icon</Banner.Title>
          <Banner.Body>
            This banner uses a custom icon instead of the default variant icon.
          </Banner.Body>
        </Banner.Content>
        {args.showCloseButton && <Banner.Close />}
      </Banner>
    </div>
  ),
  args: {
    $alternative: true,
    $variant: 'information',
  },
};
