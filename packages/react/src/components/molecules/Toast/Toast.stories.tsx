import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from './Toast';
import { useToast } from './useToast';
import { Button, ButtonGroup } from '../../atoms';
import { cn } from '../../../lib';
import README from './toast.md';

const meta: Meta = {
  title: 'Kueski Design System/Molecules/Toast',
  component: Toast,
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
      options: ['information', 'success', 'warning', 'error'],
      description: 'Toast variant - determines color scheme and icon',
    },
    $duration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-close (0 = no auto-close)',
    },
    $showPosition: {
      control: 'select',
      options: [
        'top-right',
        'top-center',
        'top-left',
        'bottom-right',
        'bottom-center',
        'bottom-left',
      ],
      description: 'Position of the toast',
    },
    $hidePosition: {
      control: 'select',
      options: [
        'top-right',
        'top-center',
        'top-left',
        'bottom-right',
        'bottom-center',
        'bottom-left',
      ],
      description: 'Position of the toast',
    },
    $reverseOrder: {
      control: 'boolean',
      description: 'Reverse the order of the toast',
    },
    $gap: {
      control: 'number',
      description: 'Gap between each toast',
    },
    $showCloseButton: {
      control: 'boolean',
      description: 'Show/hide the close button',
    },
    $showCTAButton: {
      control: 'boolean',
      description: 'Show/hide the CTA button',
    },
    $CTAText: {
      control: 'text',
      description: 'Text for the CTA button',
    },
    $contentText: {
      control: 'text',
      description: 'Text for the content',
    },
    $toastWidth: {
      control: 'text',
      description: 'Toast width - controls the container width (e.g., "300px", "50%")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive Controls
 */
export const Controls: Story = {
  args: {
    $duration: 5000,
    $variant: 'information',
    $showPosition: 'bottom-right',
    $hidePosition: 'bottom-center',
    $reverseOrder: false,
    $gap: 8,
    $showCloseButton: true,
    $showCTAButton: true,
    $CTAText: 'Learn more',
    $contentText: 'Quick message for feedback in 1 to 3 lines, or <100 characters.',
    $toastWidth: '372px',
  },
  render: (args) => {
    const { showToast, dismissToast } = useToast();

    return (
      <div className="space-y-4">
        <Button onClick={() => showToast()}>Show Toast</Button>

        <Toast
          $variant={args.$variant}
          onClose={(id) => dismissToast(id)}
          $duration={args.$duration}
          $showPosition={args.$showPosition}
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  Primary action
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>
      </div>
    );
  },
};

/**
 * Information Toast
 */
export const Information: Story = {
  args: {
    $duration: 5000,
    $variant: 'information',
    $showPosition: 'bottom-right',
    $hidePosition: 'bottom-center',
    $reverseOrder: false,
    $gap: 8,
    $showCloseButton: true,
    $showCTAButton: false,
    $contentText: 'Mensaje rápido para recibir feedback de 1 a 3 líneas, o <100 caracteres.',
    $toastWidth: '372px',
  },
  render: (args) => {
    const { showToast, dismissToast } = useToast();

    return (
      <div className="space-y-4">
        <Button onClick={() => showToast()}>Show Information Toast</Button>
        <p className="text-sm text-gray-600">
          Click the button to show an information toast in the bottom-right corner.
        </p>

        <Toast
          $variant={args.$variant}
          onClose={(id) => dismissToast(id)}
          $duration={args.$duration}
          $showPosition={args.$showPosition}
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  Primary action
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>
      </div>
    );
  },
};

/**
 * Success Toast
 */
export const Success: Story = {
  args: {
    $duration: 5000,
    $variant: 'success',
    $showPosition: 'bottom-right',
    $hidePosition: 'bottom-center',
    $reverseOrder: false,
    $gap: 8,
    $showCloseButton: true,
    $showCTAButton: false,
    $contentText: 'Operation completed successfully.',
    $toastWidth: '372px',
  },
  render: (args) => {
    const { showToast, dismissToast } = useToast();

    return (
      <div className="space-y-4">
        <Button onClick={() => showToast()}>Show Success Toast</Button>
        <p className="text-sm text-gray-600">
          Click the button to show a success toast in the bottom-right corner.
        </p>

        <Toast
          $variant={args.$variant}
          onClose={(id) => dismissToast(id)}
          $duration={args.$duration}
          $showPosition={args.$showPosition}
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  Primary action
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>
      </div>
    );
  },
};

/**
 * Warning Toast
 */
export const Warning: Story = {
  args: {
    $duration: 5000,
    $variant: 'warning',
    $showPosition: 'bottom-right',
    $hidePosition: 'bottom-center',
    $reverseOrder: false,
    $gap: 8,
    $showCloseButton: true,
    $showCTAButton: false,
    $contentText: 'Mensaje rápido para recibir feedback de 1 a 3 líneas, o <100 caracteres.',
    $toastWidth: '372px',
  },
  render: (args) => {
    const { showToast, dismissToast } = useToast();

    return (
      <div className="space-y-4">
        <Button onClick={() => showToast()}>Show Warning Toast</Button>
        <p className="text-sm text-gray-600">
          Click the button to show a warning toast in the bottom-right corner.
        </p>

        <Toast
          $variant={args.$variant}
          onClose={(id) => dismissToast(id)}
          $duration={args.$duration}
          $showPosition={args.$showPosition}
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  Primary action
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>
      </div>
    );
  },
};

/**
 * Error Toast
 */
export const Error: Story = {
  args: {
    $duration: 5000,
    $variant: 'error',
    $showPosition: 'bottom-right',
    $hidePosition: 'bottom-center',
    $reverseOrder: false,
    $gap: 8,
    $showCloseButton: true,
    $showCTAButton: false,
    $contentText: 'Mensaje rápido para recibir feedback de 1 a 3 líneas, o <100 caracteres.',
    $toastWidth: '372px',
  },
  render: (args) => {
    const { showToast, dismissToast } = useToast();

    return (
      <div className="space-y-4">
        <Button onClick={() => showToast()}>Show Error Toast</Button>
        <p className="text-sm text-gray-600">
          Click the button to show an error toast in the bottom-right corner.
        </p>

        <Toast
          $variant={args.$variant}
          onClose={(id) => dismissToast(id)}
          $duration={args.$duration}
          $showPosition={args.$showPosition}
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  Primary action
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>
      </div>
    );
  },
};

/**
 * With CTA Button
 */
export const WithCTAButton: Story = {
  args: {
    $duration: 5000,
    $variant: 'information',
    $showPosition: 'bottom-right',
    $hidePosition: 'bottom-center',
    $reverseOrder: false,
    $gap: 8,
    $showCloseButton: true,
    $showCTAButton: true,
    $CTAText: 'Learn more',
    $contentText: 'Quick message for feedback in 1 to 3 lines, or <100 characters.',
    $toastWidth: '372px',
  },
  render: (args) => {
    const { showToast, dismissToast } = useToast();

    return (
      <div className="space-y-4">
        <Button onClick={() => showToast()}>Show Toast with CTA</Button>
        <p className="text-sm text-gray-600">Click the button to show a toast with a CTA button.</p>

        <Toast
          $variant={args.$variant}
          onClose={(id) => dismissToast(id)}
          $duration={args.$duration}
          $showPosition={args.$showPosition}
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  {args.$CTAText}
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>
      </div>
    );
  },
};

/**
 * Multiple Toaster Instances
 */
export const MultipleToasters: Story = {
  args: {
    $duration: 5000,
    $showPosition: 'bottom-right',
    $hidePosition: 'bottom-center',
    $reverseOrder: false,
    $gap: 8,
    $showCloseButton: true,
    $showCTAButton: false,
    $contentText: 'Mensaje rápido para recibir feedback de 1 a 3 líneas, o <100 caracteres.',
    $toastWidth: '372px',
  },
  render: (args) => {
    const { showToast, dismissToast } = useToast();

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Button
            onClick={() =>
              showToast({
                toasterId: 'primary',
              })
            }
          >
            Show Toast in Primary Instance
          </Button>
          <p className="text-sm text-gray-600">
            This toast will display in the primary instance (toasterId: 'primary').
          </p>
        </div>

        {/* Primary Toaster Instance */}
        <Toast
          $variant="information"
          onClose={(id) => dismissToast(id, 'primary')}
          $duration={args.$duration}
          $showPosition={args.$showPosition}
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          $toasterId="primary"
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  Primary action
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>

        <div className="space-y-2">
          <Button
            onClick={() =>
              showToast({
                toasterId: 'secondary',
              })
            }
          >
            Show Toast in Secondary Instance
          </Button>
          <p className="text-sm text-gray-600">
            This toast will display in a secondary instance (toasterId: 'secondary').
          </p>
        </div>

        {/* Secondary Toaster Instance */}
        <Toast
          $variant="success"
          onClose={(id) => dismissToast(id, 'secondary')}
          $duration={args.$duration}
          $showPosition="bottom-center"
          $hidePosition={args.$hidePosition}
          $reverseOrder={args.$reverseOrder}
          $gap={args.$gap}
          $toasterId="secondary"
          className={cn(`w-[${args.$toastWidth}]`)}
        >
          <Toast.Icon />
          <Toast.Content>
            <Toast.Body>{args.$contentText}</Toast.Body>
            {args.$showCTAButton && (
              <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
                <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
                  Primary action
                </Button>
              </ButtonGroup>
            )}
          </Toast.Content>
          {args.$showCloseButton && <Toast.Close />}
        </Toast>

        <div className="space-y-2 border-t pt-4">
          <p className="text-sm font-medium text-gray-900">Important Notes:</p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>
              Each Toast must have a unique{' '}
              <code className="bg-gray-100 px-1 py-0.5 rounded">toasterId</code>
            </li>
            <li>Instances work independently</li>
            <li>You can have multiple toasters in different screen positions</li>
            <li>Toasts in each instance will stack according to their position configuration</li>
          </ul>
        </div>
      </div>
    );
  },
};
