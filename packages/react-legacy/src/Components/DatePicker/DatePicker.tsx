import React, { forwardRef } from 'react';
import { InputProps } from '../Input/Input.types';
import { Input } from '../Input';

const DatePicker = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input type="date" {...props} ref={ref} />
));

DatePicker.displayName = 'DatePicker';

export default DatePicker;
