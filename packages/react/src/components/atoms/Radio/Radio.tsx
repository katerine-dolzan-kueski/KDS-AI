import React, { useState, useCallback, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../lib/utils';
import {
  radioVariants,
  radioIndicatorVariants,
  radioDotVariants,
  radioLabelVariants,
} from './Radio.styles';
import { RadioProps, RadioIndicatorProps, RadioLabelProps } from './Radio.types';
import {
  RadioActivationEvent,
  createKeyboardActivationHandler,
  createUnifiedActivationHandler,
} from './Radio.utils';

export const Radio: React.FC<RadioProps> = ({
  disabled = false,
  checked = false,
  $value: value,
  $name: name,
  className,
  $asChild: asChild = false,
  children,
  onChange,
  onClick,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [internalChecked, setInternalChecked] = useState(checked);

  // Sync internal state with prop
  useEffect(() => {
    setInternalChecked(checked);
  }, [checked]);

  const handleActivation = useCallback(
    (event: RadioActivationEvent) => {
      if (disabled) return;
      event.preventDefault();
      onClick?.(event);
      const newChecked = true;
      setInternalChecked(newChecked);
      onChange?.(newChecked);
    },
    [disabled, onClick, onChange],
  );

  const handleClick = createUnifiedActivationHandler(handleActivation, disabled);
  const handleKeyboardActivation = createKeyboardActivationHandler(handleActivation, disabled);

  const handleMouseDown = useCallback(() => {
    if (disabled) return;
    setIsPressed(true);
  }, [disabled]);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);

  const handleFocus = useCallback(
    (event: React.FocusEvent) => {
      if (disabled) return;
      setIsFocused(true);
      onFocus?.(event);
    },
    [disabled, onFocus],
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent) => {
      setIsFocused(false);
      onBlur?.(event);
    },
    [onBlur],
  );

  // Determine current state - memoized to avoid recalculation
  const currentState = React.useMemo(() => {
    if (disabled) return 'inactive';
    if (isPressed) return 'pressed';
    if (isFocused) return 'focused';
    if (isHovered) return 'hover';
    return 'default';
  }, [disabled, isPressed, isFocused, isHovered]);

  const radioClasses = cn(
    radioVariants({
      state: currentState,
      checked: internalChecked,
      disabled,
    }),
    className,
  );

  const indicatorClasses = cn(
    radioIndicatorVariants({
      checked: internalChecked,
      disabled,
    }),
  );

  const dotClasses = cn(
    radioDotVariants({
      checked: internalChecked,
      disabled,
    }),
  );

  if (asChild) {
    return (
      <Slot
        className={radioClasses}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyboardActivation}
        role="radio"
        aria-checked={internalChecked}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  return (
    <div
      className={radioClasses}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyboardActivation}
      role="radio"
      aria-checked={internalChecked}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <input
        type="radio"
        value={value}
        name={name}
        checked={internalChecked}
        disabled={disabled}
        onChange={(_e) => {
          /* controlled by wrapper */
        }}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1} // Prevent focus on the hidden input
      />
      <div className={indicatorClasses}>
        <div className={dotClasses} />
      </div>
    </div>
  );
};

export const RadioIndicator: React.FC<RadioIndicatorProps> = ({
  checked = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 rounded-full transition-all duration-200 flex items-center justify-center',
        checked ? 'bg-background-brand' : 'bg-transparent',
        className,
      )}
      {...props}
    />
  );
};

export const RadioLabel: React.FC<RadioLabelProps> = ({
  children,
  disabled = false,
  className,
  onClick,
  ...props
}) => {
  const handleActivation = useCallback(() => {
    if (disabled) return;
    onClick?.();
  }, [disabled, onClick]);

  const handleKeyboardActivation = createKeyboardActivationHandler(
    () => handleActivation(),
    disabled,
  );

  return (
    <span
      className={cn(radioLabelVariants({ disabled }), className)}
      onClick={handleActivation}
      onKeyDown={handleKeyboardActivation}
      role="button"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </span>
  );
};
