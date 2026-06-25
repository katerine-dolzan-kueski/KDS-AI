import React from 'react';

interface DeviceModeAutoIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const DeviceModeAutoIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: DeviceModeAutoIconProps) => (
  <svg
    width={$width}
    height={$height}
    className={$className}
    fill={$fill}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 16C24 20.4183 20.4183 24 16 24V8C20.4183 8 24 11.5817 24 16Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z"
      fill="currentColor"
    />
  </svg>
);

DeviceModeAutoIcon.displayName = 'DeviceModeAutoIcon';
