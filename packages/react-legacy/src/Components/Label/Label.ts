import styled, { css } from 'styled-components';

import { KDSVariableColor } from '../../theme/color';
import { KDSResponsiveProp } from '../../theme/breakpoint';
import { parseResponsiveProp } from '../../hocs/withResponsive';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { parseTypography } from '../../utils';

interface LabelProps {
  $color?: KDSResponsiveProp<KDSVariableColor>;
  $border?: boolean;
}

export const Label = styled.i<LabelProps>`
  ${({ $color = 'primary', $border = false }) => css`
    border-radius: ${radius.sm};
    border-style: solid;
    border-width: ${$border ? '1px' : '0'};
    display: inline-block;
    padding: ${spacing.spacing02} ${spacing.spacing03};
    text-transform: uppercase;

    ${parseTypography('Typography/Text/Label/Medium/Bold')}

    ${parseResponsiveProp($color, 'color')};
    ${parseResponsiveProp($color, 'background-color', 'color', {
      valueFormatter: (value) => `color-mix(in lab, ${value} 15%, white)`,
    })};
    ${parseResponsiveProp($color, 'border-color', 'color')};
  `}
`;
