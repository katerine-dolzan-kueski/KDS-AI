import { DayPicker } from 'react-day-picker';
import { datePickerClassNames } from './DatePicker.styles';
import Chevron from './DatePicker.Chevron';
import { formatters } from './DatePicker.formatters';
import { DatePickerProps } from './DatePicker.types';

export default function DatePicker({
  className,
  $selected,
  $onSelect,
  $disabledDates,
  $fromDate,
  $toDate,
  $dayPickerProps,
}: DatePickerProps) {
  return (
    <DayPicker
      {...$dayPickerProps}
      mode="single"
      className={className}
      selected={$selected || undefined}
      onSelect={$onSelect}
      disabled={[{ before: $fromDate, after: $toDate }, ...($disabledDates || [])]}
      weekStartsOn={0}
      formatters={formatters}
      components={{ Chevron }}
      classNames={{
        ...datePickerClassNames,
        ...$dayPickerProps?.classNames,
      }}
    />
  );
}
