import React, { forwardRef, ReactNode } from 'react';
import { KDSSpacing } from '../../theme/spacing';
import { Icon } from '../Icon';
import { InputHelper, InputLabel, InputProps } from '../Input';
import { concatTestId } from '../../utils/concatTestId';
import {
  RadioContainer, RadioContent, RadioEl, RadioIconContainer, RadioWrapper,
} from './Radio.styles';
import { Option } from '../Select/Select.model';

export interface RadioVariants extends InputProps {
  $box?: boolean;
  $size?: KDSSpacing;
  $options?: Option[];
  children?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioVariants>(({
  $box = false,
  $error,
  $options,
  $size,
  children,
  helperText,
  label,
  value,
  ...radioProps
}, ref) => {
  const radioOptions = $options ?? [{ label: children?.toString(), value }];
  const dataTestId = 'data-testid' in radioProps ? radioProps['data-testid'] as string : undefined;
  return (
    <>
      <InputLabel label={label} htmlFor={radioProps.id} />
      <RadioContainer $box={$box}>
        {radioOptions.map(option => (
          <RadioWrapper key={option.value?.toString() ?? option.label?.toString()} className={$box ? 'box' : ''}>
            <RadioEl
              ref={ref}
              value={option.value}
              {...radioProps}
              data-testid={concatTestId(dataTestId, option.value?.toString())}
            />
            <RadioIconContainer $size={$size}>
              <Icon name="Check" width={24} height={24} />
            </RadioIconContainer>
            <RadioContent $error={$error && !helperText}>
              {option.label}
            </RadioContent>
          </RadioWrapper>
        ))}
      </RadioContainer>
      <InputHelper text={helperText} $isError={$error} />
    </>
  );
});

Radio.defaultProps = {
  $box: undefined,
  $options: undefined,
  $size: undefined,
  children: undefined,
};
