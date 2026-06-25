import { InputProps } from '../Input';

export interface InputWithFormatProps extends InputProps {
  formatter?: (value: string) => string;
}
