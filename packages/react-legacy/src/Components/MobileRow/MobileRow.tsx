import React from 'react';
import styled from 'styled-components';

import { spacing } from '../../theme/spacing';
import { breakpoint } from '../../theme/breakpoint';

const MobileRowWrapper = styled.div`
  width: 100%;

  @media ${breakpoint.bigTablet} {
    padding: 0;
  }
`;

const MobileRowScroll = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  min-height: 52px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 ${spacing.spacing06} 0 0;

  @media ${breakpoint.onlyPhone} {
    scrollbar-width: 0;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MobileRow: React.FC = ({ children }) => (
  <MobileRowWrapper>
    <MobileRowScroll>
      {children}
    </MobileRowScroll>
  </MobileRowWrapper>
);
