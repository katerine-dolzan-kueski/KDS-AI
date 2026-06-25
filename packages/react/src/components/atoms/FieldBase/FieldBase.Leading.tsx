import { cn } from '../../../lib/utils';
import { FieldBaseLeadingProps } from './FieldBase.types';
import { leading } from './FieldBase.styles';

export default function FieldBaseLeading({ children, $disabled, $onClick }: FieldBaseLeadingProps) {
  const className = cn(leading({ $disabled }));

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
