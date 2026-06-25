The DatePicker component provides a user-friendly interface for selecting dates, supporting a range of customization options such as disabling specific dates and restricting selectable ranges. It is designed to deliver a consistent and accessible date selection experience within the Kueski Design System.

## Features

- **Date Selection**: Allows users to pick a single date from a calendar interface
- **Range Restriction**: Use `$fromDate` and `$toDate` props to limit the selectable date range
- **Disable Specific Dates**: Pass an array of dates to `$disabledDates` to prevent selection of those days
- **Controlled Component**: Requires `$selected` and `$onSelect` props to operate; the selected date is managed externally
- **Consistent Design**: Follows Kueski Design System guidelines for a unified look and feel

## Usage

The DatePicker component can be customized using its props. Here is a basic example:

```tsx
import { DatePicker } from '@kueski-dev/kds/react';

<DatePicker
  $selected={selectedDate}
  $onSelect={setSelectedDate}
  $fromDate={new Date(2025, 9, 1)}
  $toDate={new Date(2025, 9, 31)}
  $disabledDates={[new Date(2025, 9, 10), new Date(2025, 9, 15)]}
/>;
```

## Props

### Core DatePicker Properties

| Prop              | Type                                | Default | Description                                                    |
| ----------------- | ----------------------------------- | ------- | -------------------------------------------------------------- |
| `$selected`       | `Date \| undefined`                 | `null`  | The currently selected date                                    |
| `$onSelect`       | `(date: Date \| undefined) => void` | —       | Callback when a date is selected                               |
| `$fromDate`       | `Date \| undefined`                 | -       | The earliest selectable date                                   |
| `$toDate`         | `Date \| undefined`                 | -       | The latest selectable date                                     |
| `$disabledDates`  | `Date[]`                            | -       | Array of dates to disable from selection                       |
| `$dayPickerProps` | `Partial<DayPickerProps>`           | `{}`    | Additional props to pass to the underlying DayPicker component |

## Example Use Cases

- **Loan Application Forms**: Allows users to select their date of birth or other relevant dates for credit applications.
- **Schedule Payments or Reminders**: Select dates to schedule payments, due date reminders, or automatic deposits.

## Notes

- The DatePicker component is designed to abstract all the logic needed for Kueski's business use cases. In most scenarios, you should not need to modify its internal behavior, However for exceptional requirements, you can use the `$dayPickerProps` prop to pass additional options directly to the underlying [react-day-picker](https://react-day-picker.js.org/) component. Refer to the [react-day-picker documentation](https://daypicker.dev/docs/customization) for a full list of available options.
- Use `$dayPickerProps` only if you have a use case not covered by the default DatePicker behavior. For most applications, the provided abstraction is sufficient and ensures consistency across Kueski products.
