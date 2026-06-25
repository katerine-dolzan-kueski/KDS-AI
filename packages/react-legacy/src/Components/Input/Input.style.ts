import { parseTypography } from '../../utils';
import { theme } from '../../theme';
import { spacing } from '../../theme/spacing';
import styled from 'styled-components';
import { InputProps } from './Input.types';

export const CustomInput = styled.input<InputProps>`
  background: none;
  border: 0 none;
  border-radius: 0;
  color: ${theme.color.textPrimary};
  outline: 0 none !important;
  padding: ${spacing.spacing04} 0 ;
  width: 100%;

  ${parseTypography('Typography/Text/Body/Large/Regular')};

  &::placeholder {
    color: ${theme.color.secondaryLight};
  }

  &:focus {
    color: ${theme.color.primary};
  }
`;

export const CustomInputWrapper = styled.label`
  align-items: center;
  border: 1px solid;
  border-color: ${(props: InputProps) => (props.$error ? theme.color.danger : theme.color.secondaryLight)};
  border-radius: ${theme.radius.sm};
  box-sizing: border-box;
  display: inline-flex;
  gap: ${spacing.spacing04};
  padding: 0 ${spacing.spacing04};
  white-space: nowrap;
  width: 100%;

  &:has(input:focus-visible) {
    border: 1px solid ${theme.color.primary};
  }

  &:has(input:disabled) {
    background-color: ${theme.color.background};
  }
`;
