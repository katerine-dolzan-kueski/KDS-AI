import React, { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { BottomSheet } from './BottomSheet';
import { Button, DatePicker } from '../../../index';

const meta: Meta<typeof BottomSheet> = {
  title: 'Kueski Design System/Molecules/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    $isOpen: {
      control: 'boolean',
      description: 'Determines if the BottomSheet is open or closed.',
    },
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = React.useState(context.args.$isOpen);

      useEffect(() => {
        setIsOpen(context.args.$isOpen);
      }, [context.args.$isOpen]);

      const handleClose = () => setIsOpen(false);

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Open Bottom Sheet</Button>
          <BottomSheet
            $isOpen={isOpen}
            $onClose={handleClose}
            className="p-x5 pt-0"
          >
            <Story />
          </BottomSheet>
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selection, setSelection] = React.useState<Date | undefined>(undefined);

    const today = new Date();
    const thirtyDaysLater = new Date();
    thirtyDaysLater.setDate(today.getDate() + 30);

    const handleDateSelect = (date: Date | undefined) => {
      setSelection(date);
    };

    return (
      <div>
        <div className="typo-headline-2">
          Fecha límite de pago
        </div>
        <div className="typo-body-1 text-text-and-icons-secondary">
          Selecciona la fecha que más se adapte a ti.
        </div>
        <DatePicker
          $fromDate={today}
          $toDate={thirtyDaysLater}
          $selected={selection}
          $onSelect={handleDateSelect}
          $disabledDates={[]}
        />
      </div>
    );
  },
  args: {
    $isOpen: false,
  },
};
