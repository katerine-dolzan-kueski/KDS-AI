import { CSSProperties } from 'styled-components';

import { KDSSpacing } from '../../theme/spacing';
import { KDSColor } from '../../theme/color';
import { KDSResponsive, KDSResponsiveProp } from '../../theme/breakpoint';
import { KDSFont, KDSFontHeading, KDSFontSize, KDSFontText, KDSFontWeight } from '../../theme/font';
import { AuroraTheme } from '../../theme';

/**
 * Workaround to IntelliSense mergin `StringUnion | string` as `string`
 */
type AnyString = (string & NonNullable<unknown>);

export type TextDesignToken = `${KDSFontText}/${KDSFontSize}/${KDSFontWeight}`
export type HeaderDesignToken = `${KDSFontHeading}/${KDSFontSize}/${KDSFontWeight}`

export interface ResponsiveConfig {
  keyFormatter?: (key: string) => string;
  valueFormatter?: (value: string) => string;
  formatter?: (value: string) => string;
}

interface ResponsivePropConfig {
  config?: ResponsiveConfig,
  description: string,
  prop: string,
  themeProp?: keyof AuroraTheme,
}

type ResponsivePropMap = {
  $air: KDSSpacing,
  $align: Exclude<CSSProperties['textAlign'], undefined>,
  $background: KDSColor,
  $color: KDSColor,
  $font: KDSFont,
  $gap: KDSSpacing,
  $padding: KDSSpacing,
  $size: KDSSpacing,
  $width: KDSSpacing,
}

export type ResponsiveProp = keyof ResponsivePropMap;

export type ResponsivePropsDiccionary = {
  [key in ResponsiveProp]: ResponsivePropConfig;
};

export type ResponsivePropsDefaults = {
  [P in ResponsiveProp]?: KDSResponsive<ResponsivePropMap[P]> | AnyString;
}

export type StyledResponsiveProps<T extends object> = {
  [P in keyof T]?: P extends keyof ResponsivePropMap
  ? KDSResponsiveProp<ResponsivePropMap[P]>
  : never;
}

