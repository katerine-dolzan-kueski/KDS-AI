import { AmountInputProps, AmountInputValue } from './AmountInput.types';

const extractNumbers = (text: string): string => {
  return text.replace(/[^0-9]/g, '');
};

const parseValue = (text: string, maxLength: number = 5): AmountInputValue => {
  const numbersOnly = extractNumbers(text);
  if (numbersOnly === '') return null;
  
  // Limit the length of the number string
  const limitedNumbers = numbersOnly.slice(0, maxLength);
  return parseInt(limitedNumbers, 10);
};

const validateValue = (
  value: AmountInputValue, 
  min: number, 
  max: number
): boolean => {
  // if null, is valid (empty state)
  if (value === null) return true;
  
  return value >= min && value <= max;
};

export interface UseHandlersConfig {
  $onChange: AmountInputProps['$onChange'];
  $maxLength: number;
  setIsFocused: (isFocused: boolean) => void;
  $min: number;
  $max: number;
}

export function useHandlers({ $onChange, $maxLength, setIsFocused, $min, $max }: UseHandlersConfig) {
  // only allow numbers (and special keys)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isCtrlKey = event.ctrlKey || event.metaKey;
    const isNumberKey = /^[0-9]$/.test(event.key);
    
    // ctrl+A, ctrl+C, ctrl+V, ctrl+X
    if (isCtrlKey && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())) {
      return;
    }
    
    // Check for maxLength
    if (isNumberKey) {
      const target = event.target as HTMLInputElement;
      const currentValue = extractNumbers(target.value);
      if (currentValue.length >= $maxLength) {
        event.preventDefault();
        return;
      }
    }
    
    // Block any key that's not a number or allowed key
    const allowedKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End', 'Tab', 'Enter', 'Escape'
    ];
    if (!isNumberKey && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const newValue = parseValue(target.value, $maxLength);
    const isValid = validateValue(newValue, $min, $max);
    $onChange(newValue, isValid);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    const newValue = parseValue(pastedText, $maxLength);
    const isValid = validateValue(newValue, $min, $max);
    $onChange(newValue, isValid);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return {
    handleKeyDown,
    handleInput,
    handlePaste,
    handleFocus,
    handleBlur
  };
}
