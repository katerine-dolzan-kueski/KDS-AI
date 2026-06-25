import { DropDownProps } from './DropDown.types';
import { ChevronBottomIcon } from '../../atoms/Icons';
import { FieldBase } from '../../atoms/FieldBase';

export default function DropDown({
  className,
  children,
  $label,
  $secondaryLabel,
  $leadingIcon,
  $onLeadingClick,
  $trailingIcon = <ChevronBottomIcon />,
  $onTrailingClick,
  $isEmpty,
  $placeholder,
  $helperText,
  $errorText,
  $disabled,
  $onClick,
  ...restProps
}: DropDownProps) {
  return (
    <FieldBase.Layout
      className={className}
      $label={$label}
      $secondaryLabel={$secondaryLabel}
      $error={!!$errorText}
      $helperText={$helperText}
      $errorText={$errorText}
      {...restProps}
    >
      {$leadingIcon && (
        <FieldBase.Leading $disabled={$disabled} $onClick={$onLeadingClick}>
          {$leadingIcon}
        </FieldBase.Leading>
      )}

      <FieldBase.Box
        $disabled={$disabled}
        $isEmpty={$isEmpty}
        $hasLeading={!!$leadingIcon}
        $hasTrailing={!!$trailingIcon}
        $error={!!$errorText}
      >
        <button type="button" className="[&:not(:disabled)]:cursor-pointer" disabled={$disabled} onClick={$onClick}>
          {$isEmpty ? (
            <div>
              {$placeholder}
            </div>
          ) : (
            children
          )}
        </button>
      </FieldBase.Box>

      {$trailingIcon && (
        <FieldBase.Trailing $disabled={$disabled} $onClick={$onTrailingClick}>
          {$trailingIcon}
        </FieldBase.Trailing>
      )}
    </FieldBase.Layout>
  );
}
