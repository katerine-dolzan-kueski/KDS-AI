import styled, { css } from 'styled-components';

import { KDSColor, color } from '../../theme/color';
import { radius } from '../../theme/radius';
import { withResponsive } from '../../hocs/withResponsive';

interface HeaderCardProps {
  $background?: KDSColor;
}

export const HeaderCardBase = styled.header<HeaderCardProps>`${({ $background }) => css`
    background: ${$background ?? color.background};
    border-radius: 0 0 ${radius.xl} ${radius.xl};
    overflow: hidden;
    position: relative;
`}`;

export const HeaderCardTag = styled.footer`
  margin-top: -0.75rem;
  text-align: center;
`;

export const HeaderCard = withResponsive(
  {
    $padding: 'spacing06',
  } as const,
  HeaderCardBase,
);
