import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { color } from '../../theme/color';
import styled, { css } from 'styled-components';
import { parseTypography } from '../../utils';
import { TagProps, tagVariants } from './Tag.models';

export const TagIcon = styled.span`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-grow: 0;
`;

export const Tag = styled.label.attrs(() => ({
  tabIndex: 0,
})) <TagProps>`${({ $variant = 'main' }) => css`
  align-items: flex-start;
  background: ${tagVariants[$variant].background};
  border-radius: ${radius.sm};
  color: ${tagVariants[$variant].icon} !important;
  display: inline-flex;
  gap: ${spacing.spacing03};
  justify-content: center;
  padding: ${spacing.spacing01} ${spacing.spacing03};
  position: relative;

  ${parseTypography('Typography/Text/Body/Small/Regular')}

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  :focus-visible {
    outline: 2px solid ${color.black};
  }

  > :not(${TagIcon}) {
    flex-grow: 1;
  }
`};`;
