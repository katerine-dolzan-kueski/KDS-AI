import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { cn } from '../../../lib/utils';
import { Radio } from '../Radio/Radio';
import {
  radioGroupVariants,
  radioGroupOptionVariants,
  radioGroupOptionLabelVariants,
} from './RadioGroup.styles';
import type { RadioGroupProps, RadioGroupOptionProps } from './RadioGroup.types';

interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('RadioGroupOption must be used within a RadioGroup');
  }
  return context;
};

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      $value: value,
      $onValueChange: onValueChange,
      $name: name,
      disabled = false,
      $orientation: orientation = 'vertical',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const contextValue: RadioGroupContextValue = useMemo(
      () => ({
        value,
        onValueChange,
        name,
        disabled,
        orientation,
      }),
      [value, onValueChange, name, disabled, orientation],
    );

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div ref={ref} className={cn('space-y-2', className)} {...props}>
          <div className={cn(radioGroupVariants({ orientation, disabled }))}>{children}</div>
        </div>
      </RadioGroupContext.Provider>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

export const RadioGroupOption = React.forwardRef<HTMLDivElement, RadioGroupOptionProps>(
  (
    {
      $value: value,
      $label: label,
      disabled = false,
      className,
      $radioClassName: radioClassName,
      $labelClassName: labelClassName,
      ...props
    },
    ref,
  ) => {
    const {
      value: selectedValue,
      onValueChange,
      name,
      disabled: groupDisabled,
      orientation,
    } = useRadioGroupContext();
    const isChecked = selectedValue === value;
    const isDisabled = disabled || groupDisabled;

    const handleChange = useCallback(() => {
      if (!isDisabled && onValueChange && selectedValue !== value) {
        onValueChange(value);
      }
    }, [isDisabled, onValueChange, value, selectedValue]);

    return (
      <div
        ref={ref}
        className={cn(radioGroupOptionVariants({ disabled: isDisabled, orientation }), className)}
        {...props}
      >
        <Radio
          checked={isChecked}
          disabled={isDisabled}
          $name={name}
          $value={value}
          onChange={handleChange}
          className={radioClassName}
        />
        <span className={cn(radioGroupOptionLabelVariants(), labelClassName)}>{label}</span>
      </div>
    );
  },
);

RadioGroupOption.displayName = 'RadioGroupOption';
