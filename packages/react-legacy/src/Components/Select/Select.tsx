import React, { forwardRef, MouseEvent, useCallback, useRef, useState } from 'react';
import { Icon } from '../Icon';
import { theme } from '../../theme';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useThrottling } from '../../hooks/useThrottling';
import { InputHelper, InputLabel } from '../Input';
import { useA11yEvents } from '../../hooks/useA11yEvents';
import { concatTestId } from '../../utils/concatTestId';
import {
  ListItem,
  SelectContainer,
  SelectHeader,
  SelectList,
  SelectListContainer,
  SelectPlaceholder,
} from './Select.style';
import { SelectProps } from './Select.model';

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    $error,
    disabled,
    label,
    helperText,
    $options,
    $selected,
    $onChange,
    'data-testid': testId,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const listContainer = useRef<HTMLDivElement>(null);
  const [localValue, setLocalValue] = useState($selected);
  const selectedValue = $selected ?? localValue;
  const dataTestId = 'data-testid' in rest ? rest['data-testid'] as string : undefined;
  const isDisabled = disabled || !$options?.length;

  const canToggle = useThrottling();
  const toggle = useCallback(
    () => !isDisabled && canToggle() && setIsOpen(prev => !prev),
    [isDisabled],
  );
  const close = useCallback(() => setIsOpen(prev => prev && canToggle() && false), []);

  const onOptionClicked = (event: MouseEvent<HTMLInputElement>) => {
    const optionElement = event.target as HTMLInputElement;
    const elementValue = optionElement.value;
    const option = $options?.find(({ value }) => String(value) === String(elementValue));
    if ($onChange && option) $onChange(option);
    else setLocalValue(option);
    setIsOpen(false);
  };

  const selectAccesibleProps = useA11yEvents<HTMLLabelElement>(toggle);

  useClickOutside(listContainer, close);

  return (
    <>
      <InputLabel label={label} htmlFor={props.id} />
      <SelectContainer data-testid={testId} $error={$error} className={isDisabled ? 'disabled' : ''}>
        <SelectHeader {...selectAccesibleProps}>
          {selectedValue?.label || (
            <SelectPlaceholder>Elige una opción</SelectPlaceholder>
          )}
          {!isDisabled && (
            <Icon
              name={isOpen ? 'ArrowUp' : 'ArrowDown'}
              height={20}
              width={20}
              color={theme.color.iconSecondary}
            />
          )}
        </SelectHeader>
        <SelectListContainer ref={listContainer}>
          <SelectList className={isOpen ? 'open' : ''} tabIndex={-1}>
            {!isDisabled && $options?.map((option) => (
              <ListItem
                key={option.value}
                data-testid={`option-${option.value}`}
              >
                <input
                  ref={ref}
                  type="radio"
                  value={option.value}
                  {...rest}
                  onClick={onOptionClicked}
                  data-testid={concatTestId(dataTestId, option.value?.toString())}
                />
                {option.label}
              </ListItem>
            ))}
          </SelectList>
        </SelectListContainer>
      </SelectContainer>
      <InputHelper text={helperText} $isError={$error} />
    </>
  );
});

Select.displayName = 'Select';

export default Select;
