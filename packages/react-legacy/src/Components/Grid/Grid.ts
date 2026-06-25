import styled, { css } from 'styled-components';

import type { KDSResponsiveProp } from '../../theme/breakpoint';
import { parseResponsiveProp, withResponsive } from '../../hocs/withResponsive';

type Cols = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
interface GridProps {
  $cols?: KDSResponsiveProp<Cols>;
  $symetric?: boolean;
}

export const GridBase = styled.div<GridProps>`${({ $cols = '1', $symetric }) => css`
  align-items: center;
  display: grid;

  ${parseResponsiveProp($cols, 'grid-template-columns', undefined, {
    valueFormatter: value => `repeat(${value}, ${$symetric ? '1fr' : 'auto'})`,
  })};

  > *, > .col1 { grid-column: auto / span 1 }
  > .col2 { grid-column: auto / span 2 }
  > .col3 { grid-column: auto / span 3 }
  > .col4 { grid-column: auto / span 4 }
  > .col5 { grid-column: auto / span 5 }
  > .col6 { grid-column: auto / span 6 }
  > .col7 { grid-column: auto / span 7 }
  > .col8 { grid-column: auto / span 8 }
  > .col9 { grid-column: auto / span 9 }
  > .col10 { grid-column: auto / span 10 }
  > .col11 { grid-column: auto / span 11 }
  > .col12 { grid-column: auto / span 12 }
`}`;

export const Grid = withResponsive({
  $air: '0',
  $gap: 'spacing01',
}, GridBase);
