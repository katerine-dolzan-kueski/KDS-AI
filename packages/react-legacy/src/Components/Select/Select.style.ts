import styled from 'styled-components';

import { parseTypography } from '../../utils';
import { color } from '../../theme/color';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';

import { SelectProps } from './Select.model';

export const SelectContainer = styled.div<SelectProps>`
  border: 1px solid;
  border-color: ${({ $error }) => ($error ? color.danger : color.secondaryLight)};
  border-radius: ${radius.sm};
  ${parseTypography('Typography/Text/Body/Large/Regular')};
  box-sizing: border-box;
  color: ${color.textPrimary};
  position: relative;
  width: 100%;

  &.disabled {
    background-color: ${color.background};
  }
`;
export const SelectHeader = styled.label`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  width: 100%;
`;

export const SelectPlaceholder = styled.span`
  color: ${color.secondaryLight};
`;

export const SelectListContainer = styled.div`
  position: absolute;
  width: 10.5em;
  width: 100%;
  z-index: 100;
`;

export const SelectList = styled.div`
  background: ${color.white};
  border: 0 solid ${color.secondaryLight};
  border-radius: ${radius.sm};
  box-sizing: border-box;
  cursor: pointer;
  margin: 0;
  max-height: 0;
  overflow: auto;
  padding: 0;
  transition: .3s;

  &.open {
    border-width: 1px;
    max-height: ${spacing.layout07};
  }
`;

export const ListItem = styled.label`
  cursor: pointer;
  display: block;
  list-style: none;
  padding: ${spacing.spacing03} ${spacing.spacing04};
  position: relative;

  &:hover, &:has(input:checked) {
    color: ${color.primaryLight};
    cursor: default;
  }

  input {
    opacity: 0;
    position: absolute;
  }
`;
