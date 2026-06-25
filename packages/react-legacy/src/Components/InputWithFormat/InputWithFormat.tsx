import React, { ChangeEvent, useState, forwardRef, useCallback } from 'react';
import { Input } from '../Input';
import { InputWithFormatProps } from './InputWithFormat.types';

export const InputWithFormat = forwardRef<HTMLInputElement, InputWithFormatProps>(({
  value,
  onChange,
  formatter,
  ...inputProps
}, ref) => {
  const [inputValue, setInputValue] = useState(value ?? '');
  const onChangeWithFormat = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value: typedValue } } = event;
    const valueWithFormat = formatter ? formatter(typedValue) : typedValue;

    setInputValue((prevValue) => {
      if (prevValue !== valueWithFormat) onChange?.(event);
      return valueWithFormat;
    });
  }, [formatter]);

  return (
    <Input ref={ref} onChange={onChangeWithFormat} value={inputValue} {...inputProps} />
  );
});

InputWithFormat.displayName = 'InputWithFormat';
