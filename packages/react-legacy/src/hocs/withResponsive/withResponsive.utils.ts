import { theme, AuroraTheme } from '../../theme';
import { breakpoint, KDSBreakpoint } from '../../theme/breakpoint';
import type { ResponsiveConfig } from './withResponsive.models';

export const responsiveToCSS = (
  prop: string,
  themeSpace?: keyof AuroraTheme,
  config: ResponsiveConfig = {},
) => <T extends string>(res: T) => {
  const {
    keyFormatter,
    valueFormatter,
    formatter,
  } = config;
  const [keyOrValuePlain, bp] = res.split(':').reverse() as [string, KDSBreakpoint];
  const keyOrValue = keyFormatter ? keyFormatter(keyOrValuePlain) : keyOrValuePlain;

  const themeProp = themeSpace ?? prop as keyof AuroraTheme;
  const dictionary = theme[themeProp] ?? null;
  const valuePlain: string = dictionary?.[(keyOrValue as keyof typeof dictionary)] ?? keyOrValue;
  const value = valueFormatter ? valueFormatter(valuePlain) : valuePlain;

  if (!bp) {
    return formatter ? formatter(value) : `${prop}: ${value};`;
  }

  return `@media ${breakpoint[bp]} {
    ${formatter ? formatter(value) : `${prop}: ${value};`}
  }`;
};

export function toMultiple<T>(oneOrMany: T | T[]) {
  return (oneOrMany instanceof Array ? oneOrMany : [oneOrMany]);
}

export function parseResponsiveProp(
  oneOrMany: string | string[],
  prop: string,
  themeProp?: keyof AuroraTheme,
  config?: ResponsiveConfig,
) {
  return toMultiple(oneOrMany)
    .map(responsiveToCSS(prop, themeProp, config))
    .join('\n');
}
