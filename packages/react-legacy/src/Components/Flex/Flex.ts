import styled from 'styled-components';
import { theme } from '../../theme';

const { breakpoint, spacing } = theme;

export const FullPageCentered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
`;

export const FlexWrapper = styled.div<{ $wide?: boolean; $maxWidth?: string }>`
  align-items: start;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${({ $maxWidth }) => $maxWidth ?? '30.875rem'};
  padding: ${({ $wide }) => ($wide ? '0' : `${spacing.layout05} ${spacing.layout02} 0`)};
  width: 100%;
  @media ${breakpoint.onlyPhone} {
    padding: ${({ $wide }) => ($wide ? '0' : `${spacing.layout01} ${spacing.layout02}`)};
    justify-content: space-between;
  }
`;

export const FlexColumnCentered = styled.div<{ $wide?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: ${({ $wide }) => ($wide ? '100%' : 'auto')};
`;
