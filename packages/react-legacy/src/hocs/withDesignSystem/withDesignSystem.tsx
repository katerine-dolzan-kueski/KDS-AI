import React, { type ComponentType } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import { DesignSystemGlobals } from './DesignSystemGlobals';

type withDesignSystemHoC = <P extends object>(
  Component: ComponentType<P>
) => (props: P) => React.JSX.Element

export const withDesignSystem: withDesignSystemHoC = Component => props => (
  <ThemeProvider theme={theme}>
    <DesignSystemGlobals />
    <Component {...props} />
  </ThemeProvider>
);
