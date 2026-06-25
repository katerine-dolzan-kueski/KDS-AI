import styled from 'styled-components';
import { theme } from '../../theme';

const { color, spacing } = theme;

export const CardRow = styled.div`
  align-items: center;
  display: flex;
  gap: ${spacing.spacing05};
  justify-content: center;
  width: 100%;
  > svg {
    min-height: ${spacing.layout03};
    min-width: ${spacing.layout03};
  }
  > p {
    width: 100%;
  }
`;

export const SpacerLine = styled.div`
  border-left: 2px solid ${color.secondaryLight};
  height: ${spacing.spacing05};
  margin-left: ${spacing.spacing05};
`;
