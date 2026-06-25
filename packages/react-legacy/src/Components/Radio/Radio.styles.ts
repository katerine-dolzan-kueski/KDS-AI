import styled, { css } from 'styled-components';
import { color } from '../../theme/color';
import { radius } from '../../theme/radius';
import { KDSSpacing, spacing } from '../../theme/spacing';
import { parseTypography } from '../../utils';

export const RadioEl = styled.input.attrs({ type: 'radio' } as {
  type: React.HTMLInputTypeAttribute;
})`
  height: 1px;
  opacity: 0;
  position: absolute;
  width: 1px;
`;

export const RadioContent = styled.span<{ $error?: boolean }>`
  ${parseTypography('Text/Body/Medium/Regular')}
  ${({ $error }) => $error && css`
    color: ${color.danger};
  `}
`;

export const RadioIconContainer = styled.i<{ $size?: KDSSpacing }>`${({ $size = 'spacing06' }) => css`
  background: ${color.background};
  border: 1px solid ${color.secondaryLight};
  border-radius: ${radius.full};
  display: inline-flex;
  height: ${spacing[$size]};
  width: ${spacing[$size]};

  svg {
    height: 100%;
    width: 100%;
    path {
      fill: transparent;
    }
  }
`}`;

export const RadioWrapper = styled.label`
  align-items: center;
  color: ${color.secondaryDark};
  cursor: pointer;
  display: inline-flex;
  gap: ${spacing.spacing03};
  position: relative;
  
  &:has(input:focus-visible) {
    outline: 2px solid black;
  }

  &.box {
    background-color: ${color.white};
    border: 1px solid ${color.dividerLight};
    border-radius: ${radius.sm};
    padding: ${spacing.spacing04} ${spacing.spacing06};
  
    &:has(input:checked) {
      background-color: ${color.infoBackground};
      border-color: ${color.infoBackground};
      
      ${RadioContent} {
        color: ${color.infoLight};
  
        ${parseTypography('Text/Body/Medium/Bold')}
      }
    }
  
    &:has(input:disabled) {
      background-color: ${color.background};
      border-color: ${color.background};

      ${RadioContent} {
        color: ${color.secondaryDark};
      }
    }

    ${RadioIconContainer} {
      display: none;
    }
  }

  :has(input:checked) {
    ${RadioIconContainer} {
      background: ${color.primary};
      border-color: ${color.primary};
      path {
        fill: ${color.white};
      }
    }
  }

  &:has(input:disabled) {
    ${RadioIconContainer} {
      background-color: ${color.background};
      border-color: ${color.background};
    }
    cursor: not-allowed;
    
    ${RadioContent} {
      color: ${color.secondary};
    }
  }
`;

export const RadioContainer = styled.div<{ $box?: boolean }>`${({ $box }) => css`
  display: flex;
  flex-direction: ${$box ? 'row' : 'column'};
  flex-wrap: wrap;
  gap: ${spacing.spacing06};
`}`;
