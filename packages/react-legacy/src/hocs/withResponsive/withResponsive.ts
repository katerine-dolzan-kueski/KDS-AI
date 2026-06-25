import styled, { CSSProperties, css } from 'styled-components';
import { ComponentType } from 'react';
import { AuroraTheme } from '../../theme';
import { parseTypography } from '../../utils';
import { KDSFont } from '../../theme/font';
import type {
  ResponsiveProp,
  ResponsivePropsDefaults,
  ResponsivePropsDiccionary,
  StyledResponsiveProps,
} from './withResponsive.models';
import { parseResponsiveProp } from './withResponsive.utils';

export const responsivePropsConfig: ResponsivePropsDiccionary = {
  $air: {
    config: { formatter: value => `margin-top: ${value}; margin-bottom: ${value};` },
    description: 'Adds margin at the top and bottom of the Component',
    prop: '',
    themeProp: 'spacing',
  },
  $align: {
    description: 'Text alignment',
    prop: 'text-align',
  },
  $background: {
    description: 'Sets a background-color',
    prop: 'background-color',
    themeProp: 'color',
  },
  $color: {
    description: 'Defines the font color',
    prop: 'color',
    themeProp: 'color',
  },
  $font: {
    config: { formatter: (value) => parseTypography(value as KDSFont) },
    description: 'Any Font Design Token to apply to text',
    prop: '', // Prop is set by the "formatter()" method
  },
  $gap: {
    description: 'Sets the Gap size for Grids and Flexboxes',
    prop: 'gap',
    themeProp: 'spacing',
  },
  $padding: {
    description: 'Plain padding',
    prop: 'padding',
    themeProp: 'spacing',
  },
  $size: {
    description: 'Defines the Component height',
    prop: 'height',
    themeProp: 'spacing',
  },
  $width: {
    description: 'Defines the Component width',
    prop: 'width',
    themeProp: 'spacing',
  },
};

export function withResponsive<T extends object, R extends ResponsivePropsDefaults>(
  responsiveProps: R,
  Component: ComponentType<T>,
) {
  return styled(Component) <StyledResponsiveProps<typeof responsiveProps> & T>`
    ${
  (props) => css`
        ${Object.entries(responsiveProps).map(([prop, defaultValue]) => {
    const propValue = props[prop as ResponsiveProp];
    const propConfig = responsivePropsConfig[(prop as ResponsiveProp)];
    const propFinalValue = propValue ?? defaultValue;

    const { prop: propName, themeProp, config } = propConfig;

    return parseResponsiveProp(
      propFinalValue,
            propName as keyof AuroraTheme | keyof CSSProperties,
            themeProp,
            config,
    );
  }).join('\n')}
      `
}
  `;
}
