import styled, { css } from 'styled-components';

import { color } from '../../theme/color';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { parseTypography } from '../../utils';
import { MobileRow } from '../MobileRow';

interface ChipProps {
  $active?: boolean;
}

export const Chip = styled.button<ChipProps>`${({ $active = false }) => css`
  background: ${$active ? color.primaryBackground : color.background};
  border: 0 none;
  border-radius: ${radius.xl};
  color: ${$active ? color.primary : color.textSecondary};
  cursor: pointer;
  display: inline-block;
  padding: ${spacing.spacing03} ${spacing.spacing05};
  white-space: nowrap;

  ${parseTypography($active ? 'Text/Body/Medium/Bold' : 'Text/Body/Medium/Regular')}

  :focus-visible {
    outline: 2px solid ${color.black};
  }
`}`;

export const ChipSet = styled(MobileRow)``;
