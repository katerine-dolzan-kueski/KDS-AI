import {
  layout,
  header,
  label as labelClass,
  secondaryLabel as secondaryLabelClass,
  footer,
  footerErrorIcon,
} from './FieldBase.styles';
import { ErrorCircleIcon } from '../Icons';
import { cn } from '../../../lib/utils';
import { FieldBaseLayoutProps } from './FieldBase.types';

export default function FieldBaseLayout({
  className,
  $label,
  $secondaryLabel,
  $error,
  $helperText,
  $errorText,
  children,
  ...restProps
}: FieldBaseLayoutProps) {
  const hasHeader = $label || $secondaryLabel;
  const footerText = $helperText || $errorText || '';

  return (
    <div className={cn(layout({ className }))} {...restProps}>
      {hasHeader && (
        <div className={cn(header())}>
          {$label && <span className={cn(labelClass())}>{$label}</span>}
          {$secondaryLabel && <span className={cn(secondaryLabelClass())}>{$secondaryLabel}</span>}
        </div>
      )}

      <div className="relative">
        {children}
      </div>

      {!!footerText && (
        <div className={cn(footer({ error: $error }))}>
          {$error && <ErrorCircleIcon className={cn(footerErrorIcon)} />}
          <div>{footerText}</div>
        </div>
      )}
    </div>
  );
}
