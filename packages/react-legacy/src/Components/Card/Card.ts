import styled from 'styled-components';

import { elevation } from '../../theme/elevation';
import { radius } from '../../theme/radius';
import { withResponsive } from '../../hocs/withResponsive';
import { KDSBreakpoint, breakpoint } from '../../theme/breakpoint';

interface CardBaseProps {
  $only?: KDSBreakpoint;
}

export const CardBase = styled.div<CardBaseProps>`
  @media ${({ $only }) => ($only ? breakpoint[$only] : 'all')} {
    border-radius: ${radius.lg};
    box-shadow: ${elevation.card};
    overflow: hidden;
  }
`;

export const Card = withResponsive(
  {
    $air: '0',
    $background: 'backgroundAlter',
    $padding: 'spacing06',
  } as const,
  CardBase,
);
