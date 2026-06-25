import React, { forwardRef } from 'react';
import { CustomInput, CustomInputWrapper } from '../Input/Input.style';
import { Text } from '../Text';
import { InputProps } from './Input.types';
import { InputLabel } from './InputLabel';
import { InputHelper } from './InputHelper';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label, helperText, $prefix, $suffix, $error, ...rest
  } = props;
  return (
    <>
      <InputLabel label={label} htmlFor={props.id} />
      <CustomInputWrapper>
        {$prefix ? <Text as="span" $format="Body/Large/Semi Bold">{$prefix}</Text> : null}
        <CustomInput $error={$error} type="text" ref={ref} {...rest} />
        {$suffix ? <Text as="span" $format="Body/Large/Semi Bold">{$suffix}</Text> : null}
      </CustomInputWrapper>
      <InputHelper text={helperText} $isError={$error} />
    </>
  );
});

Input.displayName = 'Input';

export default Input;
