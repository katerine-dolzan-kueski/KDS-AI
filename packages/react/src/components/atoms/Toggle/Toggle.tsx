import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { cn } from '../../../lib/utils';
import { toggleRootStyles, toggleThumStyles } from './Toggle.styles';
import { ToggleProps } from './Toggle.types';

export const Toggle = React.forwardRef<React.ElementRef<typeof Switch.Root>, ToggleProps>(
  (
    {
      className,
      $disabled: disabled = false,
      $checked: checked = false,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    return (
      <Switch.Root
        className={cn(toggleRootStyles({ checked, disabled }), className)}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        <Switch.Thumb className={cn(toggleThumStyles({ disabled, checked }))} />
      </Switch.Root>
    );
  },
);

Toggle.displayName = 'Toggle';
