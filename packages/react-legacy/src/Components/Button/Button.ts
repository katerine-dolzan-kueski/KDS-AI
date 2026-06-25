import { theme } from '../../theme';
import { parseTypography } from '../../utils';
import styled, { css } from 'styled-components';

const {
  breakpoint,
  color,
  elevation,
  radius,
  spacing,
} = theme;

export enum KDSButton {
  PRIMARY,
  SECONDARY,
  GHOST,
  OUTLINE,
  LINK,
  TEXT,
  NAV,
}

export interface ButtonProps {
  $small?: boolean;
  $micro?: boolean;
  $type?: KDSButton;
  $noElevation?: boolean;
  $wide?: boolean;
}

const primaryButton = css`
  background-color: ${color.primary};
  border-color: ${color.primary};
  box-shadow: ${elevation.buttonNormal};
  color: ${color.textAlternate};

  &:disabled {
    background-color: ${color.secondaryLight};
    border-color: ${color.secondaryLight};
  }

  &:enabled {
    &:hover {
      background-color: ${color.primaryDark};
      border-color: ${color.primaryDark};
      box-shadow: ${elevation.buttonHover};
      translate: 0 -${spacing.spacing01};
    }
  }
`;

const ghostButton = css`
  color: ${color.textSecondary};

  &:enabled {
    &:hover {
      background-color: ${color.background};
      border-color: ${color.background};
    }

    &:active {
      background-color: transparent;
      border-color: transparent;
      color: ${color.textPrimary};
    }
  }
`;

const linkButton = css`
  color: ${color.primary};

  &:enabled {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const textButton = css`
  color: ${color.textPrimary};
  padding: 0;
  text-decoration: none;
`;

const secondaryButton = css`
  background-color: ${color.background};
  border-color: ${color.background};
  box-shadow: ${elevation.buttonNormal};
  color: ${color.textPrimary};

  &:enabled {
    &:hover {
      background-color: ${color.background};
      border-color: ${color.background};
      box-shadow: ${elevation.buttonHover};
      translate: 0 -${spacing.spacing01};
    }
  }
`;

const outlineButton = css`
  border-color: ${color.primary};
  color: ${color.primary};

  &:enabled {
    &:hover {
      background-color: ${color.primary};
      color: ${color.textAlternate};
    }

    &:active {
      background-color: transparent;
      border-color: ${color.primaryDark};
      color: ${color.primaryDark};
    }
  }
`;

const navButton = css`
  background: none;
  border: none;
  color: ${color.textSecondary};
  display: block;
  padding-left: 0px;
  padding-right: 0px;
  width: auto;
`;

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background: transparent;
  border: 2px solid transparent;
  border-radius: ${radius.full};
  cursor: pointer;
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: ${({ $small, $micro }) => {
    if ($micro) return spacing.spacing03;
    if ($small) return `${spacing.spacing03} ${spacing.spacing04}`;

    return `${spacing.spacing05} ${spacing.spacing06}`;
  }};
  transition: .3s;
  width: 100%;

  ${({ $small, $micro, $wide }) => {
    if ($small || $micro) return parseTypography('Typography/Text/Title/Small/Regular');
    if ($wide) return parseTypography('Typography/Text/Title/Medium/Medium');

    return parseTypography('Typography/Text/Title/Medium/Regular');
  }}

  ${({ $type }) => {
    switch ($type) {
      case KDSButton.SECONDARY:
        return secondaryButton;
      case KDSButton.GHOST:
        return ghostButton;
      case KDSButton.OUTLINE:
        return outlineButton;
      case KDSButton.LINK:
        return linkButton;
      case KDSButton.TEXT:
        return textButton;
      case KDSButton.NAV:
        return navButton;
      default:
        return primaryButton;
    }
  }}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    translate: 0 0;
  }

  &:enabled {
    &:active {
      box-shadow: none;
      transition: none;
      translate: 0 0;
    }

      &:focus-visible {
      border-color: ${color.textPrimary};
    }
  }

  ${({ $noElevation }) => ($noElevation ? 'box-shadow: none !important;' : '')}

  @media ${breakpoint.tablet} {
    width: ${({ $wide }) => ($wide ? '100%' : 'auto')};
  }
`;
