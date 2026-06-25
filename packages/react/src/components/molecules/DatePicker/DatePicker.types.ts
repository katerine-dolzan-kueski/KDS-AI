import { DayPickerProps } from 'react-day-picker';

export interface DatePickerProps {
  // Custom class name for the root element
  className?: string;

  // Currently selected date
  $selected?: Date | null;

  // Callback when a date is selected
  $onSelect: (date: Date | undefined) => void;

  // Dates to disable from selection
  $disabledDates?: Date[];

  // Earliest selectable date
  $fromDate: Date;

  // Latest selectable date
  $toDate: Date;

  // Additional props for the underlying DayPicker
  $dayPickerProps?: Partial<DayPickerProps>;
}
