import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import DatePicker from './DatePicker';
import { DatePickerProps } from './DatePicker.types';
import README from './DatePicker.docs.md';

function dayAt(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

interface DatePickerWrapperProps extends Omit<DatePickerProps, '$selected' | '$onSelect'> {
  initialSelectedDate?: Date | undefined;
}

const DatePickerWrapper: React.FC<DatePickerWrapperProps> = ({
  initialSelectedDate,
  $disabledDates,
  $fromDate,
  $toDate,
  $dayPickerProps,
  ...rest
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialSelectedDate);

  const handleSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    console.log('$onSelect:', date);
  };

  return (
    <DatePicker
      $selected={selectedDate}
      $onSelect={handleSelect}
      $disabledDates={$disabledDates}
      $fromDate={$fromDate}
      $toDate={$toDate}
      $dayPickerProps={$dayPickerProps}
      {...rest}
    />
  );
};

const meta: Meta<typeof DatePicker> = {
  title: 'Kueski Design System/Molecules/DatePicker',
  component: DatePicker,
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
    $fromDate: {
      control: { type: 'date' },
      description: 'From date',
    },
    $toDate: {
      control: { type: 'date' },
      description: 'To date',
    },
  },
  args: {
    $fromDate: dayAt(-7),
    $toDate: dayAt(7),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DatePickerWrapper
      {...args}
      initialSelectedDate={dayAt(2)}
    />
  ),
};

export const WithDisabledDates: Story = {
  render: (args) => (
    <DatePickerWrapper
      {...args}
      initialSelectedDate={dayAt(7)}
      $disabledDates={[dayAt(-6), dayAt(-4), dayAt(2), dayAt(4), dayAt(6)]}
    />
  ),
  args: {
    $fromDate: dayAt(-7),
    $toDate: dayAt(7),
  },
};

export const DisabledToday: Story = {
  render: (args) => (
    <DatePickerWrapper
      {...args}
      initialSelectedDate={dayAt(2)}
      $disabledDates={[new Date()]}
    />
  ),
  args: {
    $fromDate: dayAt(-3),
    $toDate: dayAt(3),
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <DatePickerWrapper
      {...args}
      initialSelectedDate={dayAt(2)}
      $disabledDates={[]}
    />
  ),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    $fromDate: dayAt(-10),
    $toDate: dayAt(10),
  },
};
