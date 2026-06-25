import styled, { css, CSSProperties } from 'styled-components';

import { theme } from '../../theme';
import { parseResponsiveProp } from '../../hocs/withResponsive';
import { parseTypography } from '../../utils';

import { ResponsiveTableProps } from './Table.models';
import { Spacer } from '../Spacer';

const { color, elevation, radius, spacing } = theme;

export const TableRowDelimiter = styled.hr`
  background-color: ${color.background};
  border: 0 none;
  grid-column: 1/-1;
  height: 2px;
  margin: ${spacing.spacing05} 0;

  &:last-of-type {
    margin-bottom: 0 !important;
  }
`;

export const TableHeadDelimiter = styled(TableRowDelimiter)`
  background-color: ${color.divider};
`;

export const TableCell = styled.div<{ $align?: CSSProperties['textAlign'] }>`
  align-items: ${({ $align }) => $align ?? 'center'};
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 ${spacing.spacing06};
  text-align: center;

  ${parseTypography('Typography/Text/Body/Medium/Regular')}
`;

export const TableTitle = styled.div`
  align-items: center;
  background-color: ${color.background};
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;

  ${parseTypography('Typography/Text/Body/Medium/Bold')}
`;

export const Table = styled.div<ResponsiveTableProps>`${({
  $cols = '4', $padding = 'spacing05', $shadow, $symmetric,
}) => css`
  background: ${color.backgroundAlter};
  border: 1px solid ${color.background};
  border-bottom-width: 0;
  border-radius: ${radius.lg};
  box-shadow: ${$shadow ? elevation.card : 'none'};
  display: grid;
  grid-template-columns: repeat(${$cols}, ${$symmetric ? '1fr' : 'auto'});
  overflow-x: auto;
  overflow-y: hidden;

  ${Spacer} {
    grid-column: 1/-1;
  }

  ${parseResponsiveProp($padding, '', 'spacing', {
    formatter: (value: string) => `
      ${TableRowDelimiter} {
        margin: ${value} 0;
      }
    
      ${TableHeadDelimiter} {
        margin: 0 0 ${value};
      }
    
      ${TableTitle} {
        padding: ${value} .5rem;
      }
    `,
  })}
`}`;
