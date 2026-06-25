import { parseResponsiveProp } from '../../hocs/withResponsive';
import { KDSResponsiveProp } from '../../theme/breakpoint';
import styled, { CSSProperties, css } from 'styled-components';

interface DisplayProps {
  $on?: KDSResponsiveProp<Exclude<CSSProperties['display'], undefined>>;
}

export const Display = styled.div<DisplayProps>`${({ $on }) => css`
  display: initial;
  ${$on ? parseResponsiveProp($on, 'display') : ''};
`}`;
