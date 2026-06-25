import { theme } from '../../theme';
import styled from 'styled-components';

const { color, radius, spacing } = theme;

export const HintContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${spacing.spacing05};
  margin: ${spacing.spacing06} 0;
`;

export const HintText = styled.div`
  background: ${color.background};
  border: 0 none;
  border-radius: ${radius.xl};
  color: ${color.textSecondary};
  cursor: pointer;
  display: inline-block;
  padding: ${spacing.spacing03} ${spacing.spacing05};
  white-space: nowrap;
`;
