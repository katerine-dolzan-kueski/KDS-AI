'use client';

import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '../../../lib/utils';
import { checkboxStyles, labelStyles, indicatorStyles, rootStyles } from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';
import { CheckmarkEmphasisIcon, MinusEmphasisIcon } from '../Icons';

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      children,
      $error = false,
      $checked,
      $onCheckedChange,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <label className={cn(rootStyles({ $disabled: disabled }), className)}>
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(checkboxStyles({ $error, $checked, $disabled: disabled }))}
          checked={$checked}
          onCheckedChange={$onCheckedChange}
          disabled={disabled}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn(indicatorStyles())}>
            {$checked === 'indeterminate' && <MinusEmphasisIcon />}
            {$checked === true && <CheckmarkEmphasisIcon />}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {children && (
          <span className={cn(labelStyles())}>
            {children}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
