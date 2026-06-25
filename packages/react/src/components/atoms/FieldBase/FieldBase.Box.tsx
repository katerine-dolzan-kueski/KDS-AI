import { FieldBaseBoxProps } from './FieldBase.types';
import { box } from './FieldBase.styles';
import { cn } from '../../../lib/utils';

export default function FieldBaseBox({
  className,
  $error,
  $disabled,
  children,
  $hasLeading,
  $hasTrailing,
  $isEmpty,
}: FieldBaseBoxProps) {
  return (
    <div className={cn(box({ className, $error, $disabled, $hasLeading, $hasTrailing, $isEmpty }))}>
      {children}
    </div>
  );
}
