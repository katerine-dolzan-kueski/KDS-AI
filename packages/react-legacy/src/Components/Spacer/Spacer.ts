import styled from 'styled-components';

import { withResponsive } from '../../hocs/withResponsive';

export const SpacerBase = styled.div``;

export const Spacer = withResponsive({ $size: 'spacing01' }, SpacerBase);
