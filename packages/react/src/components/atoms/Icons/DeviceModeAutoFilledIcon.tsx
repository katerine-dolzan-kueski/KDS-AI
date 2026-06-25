import React from 'react';

interface DeviceModeAutoFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const DeviceModeAutoFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: DeviceModeAutoFilledIconProps) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM6 16C6 10.4772 10.4772 6 16 6V26C10.4772 26 6 21.5228 6 16Z"
      fill="currentColor"
    />
  </svg>
);

DeviceModeAutoFilledIcon.displayName = 'DeviceModeAutoFilledIcon';
