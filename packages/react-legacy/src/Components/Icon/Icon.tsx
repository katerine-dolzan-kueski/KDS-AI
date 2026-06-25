import React from 'react';
import PropTypes from 'prop-types';
import * as icons from './Categories';

export const allIcons = {
  ...icons.filled,
  ...icons.flat,
  ...icons.outlined,
} as const;

export type IconName = keyof typeof allIcons;

type IconProps = React.SVGAttributes<SVGElement> & {
  name: IconName;
  fillColor?: string;
};

export const Icon: React.FC<IconProps> = ({
  height,
  name,
  fillColor,
  width,
  ...otherProps
}) => {
  const iconData = allIcons[name];

  const fillRule = iconData && 'fillRule' in iconData ? iconData.fillRule : undefined;
  const clipRule = iconData && 'clipRule' in iconData ? iconData.clipRule : undefined;
  const pathProps = iconData && 'pathProps' in iconData ? iconData.pathProps : {};

  if (!iconData) {
    return null;
  }

  return (
    <svg
      data-testid={`${name}-icon`}
      fill="none"
      height={height}
      viewBox={iconData.viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule={fillRule}
        clipRule={clipRule}
        d={iconData?.path}
        fill={fillColor}
        {...pathProps}
      />
    </svg>
  );
};

Icon.propTypes = {
  fillColor: PropTypes.string,
  height: PropTypes.number,
  name: PropTypes.oneOf(Object.keys(allIcons) as IconName[])
    .isRequired,
  width: PropTypes.number,
};

Icon.defaultProps = {
  fillColor: '#656B7C',
  height: 16,
  width: 16,
};
