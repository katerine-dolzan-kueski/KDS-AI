import { useState, useMemo } from 'react';
import { cn } from '../../../lib/utils';
import { AmountInputProps } from './AmountInput.types';
import { root, input, inputContainer, currency } from './AmountInput.styles';
import { LockOnFilledIcon } from '../../atoms/Icons';
import { useHandlers } from './AmountInput.handlers';
import { Chip } from './AmountInput.Chip';
import { Button } from '../../atoms';

export const AmountInput = ({
  className,
  $placeholder,
  $value,
  $label,
  $error,
  $locked,
  $min,
  $max,
  $mode, 
  $onChange,
  $maxLength = 5,
  $editText = 'Editar',
  ...inputProps
}: AmountInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const formattedValue = $value?.toLocaleString('es-MX') ?? ''; // formated value like "5,400"
  const formattedPlaceholder = $placeholder?.toLocaleString('es-MX') ?? '';

  const variant = useMemo(() => {
    if ($locked) {
      return 'locked';
    } if (typeof $value === 'number') {
      return 'normal';
    } 
    return 'empty';
  }, [$locked, $value]);

  const { handleKeyDown, handleInput, handlePaste, handleFocus, handleBlur } = useHandlers({ 
    $onChange, 
    $maxLength,
    setIsFocused,
    $min,
    $max
  });

  const showButton = !isFocused && !$locked;
  const chars = formattedValue.length || formattedPlaceholder.length || 1;

  return (
    <label className={cn(root, className)}>
      <div className={cn(inputContainer)}>
        <div className={cn(currency({ variant }))}>$</div>
        <input 
          {...inputProps}
          style={{ width: `${chars}ch`, ...inputProps.style }}
          inputMode='numeric'
          placeholder={formattedPlaceholder}
          className={cn(input({ disabled: $locked }))}
          value={formattedValue}
          disabled={$locked}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onPaste={handlePaste}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {$locked && <LockOnFilledIcon className="text-text-and-icons-tertiary" />}
      </div>
      <Chip 
        $mode={$mode}
        $value={$value ?? null}
        $min={$min}
        $max={$max}
        $locked={$locked}
        $error={$error}
        $label={$label}
      />
      {showButton && (
        <Button $variant="ghost-primary" $asChild>
          <span>
            {$editText}
          </span>
        </Button>
      )}
    </label>
  );
}
