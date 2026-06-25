import { parseResponsiveProp } from '../../hocs/withResponsive';
import { KDSColor } from '../../theme/color';
import styled, { css } from 'styled-components';

interface LinkProps {
  $color?: KDSColor;
  $underline?: boolean;
}

export const Link = styled.a<LinkProps>`${({
  $color = 'primary',
  $underline = false,
}) => css`
  text-decoration: ${$underline ? 'underline' : 'none'};

  ${parseResponsiveProp($color, 'color')};

  &:hover {
    text-decoration: underline;
  }
`};`;
