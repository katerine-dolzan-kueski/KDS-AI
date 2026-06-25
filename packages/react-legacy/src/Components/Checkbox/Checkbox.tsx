import React, { forwardRef, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Icon } from '../Icon';
import { InputHelper, InputLabel } from '../Input';
import { CheckboxVariants } from './Checkbox.types';
import { CheckboxContent, CheckboxElement, CheckboxLabel } from './Checkbox.styles';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxVariants>(({
  $error,
  $square,
  $size,
  children,
  helperText,
  label,
  ...inputProps
}, ref) => {
  const id = useMemo(() => inputProps.id ?? uuidv4(), [inputProps.id]);
  return (
    <>
      <InputLabel label={label} htmlFor={inputProps.id} />
      <CheckboxLabel htmlFor={id} $square={$square} $size={$size}>
        <CheckboxElement id={id} {...inputProps} type="checkbox" ref={ref} />
        <i>
          <Icon name="Check" width={24} height={24} />
        </i>
        <CheckboxContent $error={$error && !helperText}>
          {children}
        </CheckboxContent>
      </CheckboxLabel>
      <InputHelper text={helperText} $isError={$error} />
    </>
  );
});
