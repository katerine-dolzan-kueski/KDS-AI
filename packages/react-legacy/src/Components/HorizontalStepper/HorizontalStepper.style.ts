import { theme } from '../../theme';
import { KDSSpacing } from '../../theme/spacing';
import { parseTypography } from '../../utils';

import styled, { css } from 'styled-components';

export const Line = styled.hr<{
  disabled?: boolean;
}>`
  border-top: 3px solid ${theme.color.primaryLight};
  width: 100%;

  ${({ disabled }) => css`
    ${disabled
    && `
      border-top-color: ${theme.color.secondaryLight};
      border-top-width: 1px;
    `};
  `}
`;

export const StepWrapper = styled.div<{
  $active?: boolean;
  isDone?: boolean;
}>`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing01};
  position: relative;

  /*Reset the next line after active dot */;
  ${({ $active }) => css`
    ${$active && `& + ${Line} {
      border-top-color: ${theme.color.secondaryLight};
      border-top-width: 1px;
    }`}
  `};
`;

export const Row = styled.div<{
  value?: number
}>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  overflow: visible;
  padding: ${theme.spacing.layout02};
  position: relative;

  //Delete last useless line in the horizontal stepper
  ${StepWrapper}:last-of-type + ${Line} {
    display: none;
  }
  //Add gradient before the active dot
  ${({ value }) => css`
    ${Line}:nth-of-type(${value}) {
      border-image: linear-gradient(90deg, ${theme.color.primaryLight} 39.47%, ${theme.color.secondaryLight} 100%) 1;
    }
  `}
`;

export const IconContainer = styled.div<{
  disabled?: boolean;
  $active?: boolean;
  size: KDSSpacing;
  isSubStep: boolean | undefined;
}>`
  ${({
    $active, disabled, size, isSubStep,
  }) => css`
    align-items: center;
    background-color: ${theme.color.primaryLight};
    border-radius: 50%;
    color: ${theme.color.white};
    display: flex;
    flex-shrink: 0;
    height: ${isSubStep ? theme.spacing.spacing03 : theme.spacing[size]};
    justify-content: center;
    width: ${isSubStep ? theme.spacing.spacing03 : theme.spacing[size]};
    z-index: 1;

    ${parseTypography('Typography/Text/Label/Small/Medium')}

    ${disabled && `background-color: ${theme.color.divider}`}
    ${$active && `background-color: ${theme.color.primaryLight}`}
  `}
`;

export const StepContent = styled.div<{
  disabled?: boolean;
  isDone?: boolean
}>`
  color: ${theme.color.primaryLight};
  position: absolute;
  top: 100%;
  translate: 0 ${theme.spacing.spacing01};
  ${parseTypography('Typography/Text/Label/Small/Bold')}
  ${({ disabled, isDone }) => css`
    color: ${disabled && theme.color.textSecondary};
    ${(disabled || isDone) && parseTypography('Typography/Text/Label/Small/Medium')}
  `};
`;
