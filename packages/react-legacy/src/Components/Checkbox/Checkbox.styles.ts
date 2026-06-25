import styled, { css } from 'styled-components';

import { theme } from '../../theme';
import { CheckboxVariants } from './Checkbox.types';

const { color, radius, spacing } = theme;

export const CheckboxElement = styled.input`
  height: 1px;
  opacity: 0;
  position: absolute;
  width: 1px;
`;

export const CheckboxLabel = styled.label<CheckboxVariants>`${({ $square, $size = 'spacing06' }) => css`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  gap: 0.5rem;
  position: relative;

  &:has(input:focus-visible) {
    outline: 2px solid black;
  }

  input + i {
    background: none;
    border-style: solid;
    border-width: ${$square ? '2px' : '1px'};
    border-radius: ${$square ? radius.xs : radius.full};
    border-color: ${$square ? color.primary : color.iconDisabled};
    box-sizing: border-box;
    display: inline-flex;
    transition: backgroundColor 0.5s; 
    height: ${spacing[$size]};
    width: ${spacing[$size]};

    svg {
      height: 100%;
      width: 100%;
      path {
        fill: transparent;
      }
    }
  }

  input:checked + i {
    background-color: ${color.primary};
    border-color: ${color.iconInteraction};

    svg path {
      fill: ${color.white};
      width: 100%;
      height: 100%;
    }
  }

  input:disabled + i {
    background-color: ${color.background};
    border-color: ${color.divider};
  }

  input:checked:disabled + i {
    svg path {
      fill: ${color.divider};
    }
  }
`}`;

export const CheckboxContent = styled.span<{ $error?: boolean }>`
${({ $error }) => $error && css`
  color: ${color.danger};
`}`;
