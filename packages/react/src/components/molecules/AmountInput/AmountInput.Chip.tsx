import { useMemo } from 'react';
import { cn } from '../../../lib/utils';
import { chip } from './AmountInput.styles';
import { ChipProps } from './AmountInput.types';

const formatAmount = (amount: number) => `$${amount.toLocaleString('es-MX')}`;

export const Chip = ({
  $mode,
  $value,
  $min,
  $max,
  $locked = false,
  $error,
  $label,
}: ChipProps) => {

  const [text, variant] = useMemo((): [string, 'error' | 'label'] => {
    // Priority 1: Custom error
    if ($error) {
      return [$error, 'error'];
    }

    // Priority 2: Custom label
    if ($label) {
      return [$label, 'label'];
    }

    // Priority 3: Locked state
    if ($locked) {
      const message = $mode === 'loan' 
        ? 'Monto del prestamo'
        : 'Debes pagar el saldo total de tu recibo';
      return [message, 'label'];
    }

    // Priority 4: Value range validation
    if ($value !== null) {
      if ($value < $min) {
        return [`Monto mínimo: ${formatAmount($min)}`, 'error'];
      }
      if ($value > $max) {
        return [`Monto máximo: ${formatAmount($max)}`, 'error'];
      }
    }

    // Priority 5: No value provided
    if (!$value) {
      return [`Monto mínimo: ${formatAmount($min)}`, 'error'];
    }

    // Priority 6: Default range message
    const minFormatted = formatAmount($min);
    const maxFormatted = formatAmount($max);
    
    const message = $mode === 'loan'
      ? `Pide desde ${minFormatted} hasta ${maxFormatted}`
      : `Paga desde ${minFormatted} hasta ${maxFormatted}`;
    
    return [message, 'label'];
  }, [$error, $label, $locked, $mode, $value, $min, $max]);

  return (
    <span className={cn(chip({ variant }))}>
      {text}
    </span>
  );
};
