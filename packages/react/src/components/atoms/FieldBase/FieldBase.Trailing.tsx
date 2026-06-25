import { cn } from '../../../lib/utils';
import { FieldBaseTrailingProps } from './FieldBase.types';
import { trailing } from './FieldBase.styles';

export default function FieldBaseTrailing({ children, $disabled, $onClick }: FieldBaseTrailingProps) {
  const className = cn(trailing({ $disabled }));

  if ($onClick) {
    return (
      <button
        type="button"
        className={className}
        disabled={$disabled}
        onClick={$onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}
