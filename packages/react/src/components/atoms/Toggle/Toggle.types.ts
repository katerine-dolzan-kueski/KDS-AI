import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import { VariantProps } from 'class-variance-authority';
import { toggleRootStyles } from './Toggle.styles';

export interface ToggleProps
  extends Omit<RadixSwitchProps, 'checked' | 'disabled'>,
    Omit<VariantProps<typeof toggleRootStyles>, 'checked' | 'disabled'> {
  /** Custom CSS class name */
  className?: string;
  /** Whether the toggle is disabled */
  $disabled?: boolean;
  /** Whether the toggle is checked */
  $checked?: boolean;
  /** Callback when toggle state changes */
  onCheckedChange?: (checked: boolean) => void;
}
