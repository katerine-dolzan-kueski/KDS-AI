import styled, { css } from 'styled-components';

import { elevation } from '../../theme/elevation';
import { withResponsive } from '../../hocs/withResponsive';
import { color } from '../../theme/color';
import { radius } from '../../theme/radius';

interface ContainerBoxBaseProps {
  $elevated?: boolean;
}

export const ContainerBoxBase = styled.div<ContainerBoxBaseProps>`${({
  $elevated = false,
}) => css`
  background: ${color.background};
  border-radius: ${radius.lg};
  box-shadow: ${$elevated ? elevation.buttonHover : 'none'};
`};`;

export const ContainerBox = withResponsive(
  {
    $air: '0',
    $background: 'background',
    $padding: 'spacing05',
  } as const,
  ContainerBoxBase,
);
