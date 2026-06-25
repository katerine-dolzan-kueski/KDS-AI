import React from 'react';

interface SortIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const SortIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: SortIconProps) => (
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
      d="M10.7071 27.7071C10.3166 28.0976 9.68342 28.0976 9.29289 27.7071L4.29289 22.7071C3.90237 22.3166 3.90237 21.6834 4.29289 21.2929C4.68342 20.9024 5.31658 20.9024 5.70711 21.2929L9 24.5858V5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V24.5858L14.2929 21.2929C14.6834 20.9024 15.3166 20.9024 15.7071 21.2929C16.0976 21.6834 16.0976 22.3166 15.7071 22.7071L10.7071 27.7071Z"
      fill="currentColor"
    />{' '}
    <path
      d="M13 17C13 16.4477 13.4477 16 14 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H14C13.4477 18 13 17.5523 13 17Z"
      fill="currentColor"
    />{' '}
    <path
      d="M13 13C13 12.4477 13.4477 12 14 12H23C23.5523 12 24 12.4477 24 13C24 13.5523 23.5523 14 23 14H14C13.4477 14 13 13.5523 13 13Z"
      fill="currentColor"
    />{' '}
    <path
      d="M13 9C13 8.44772 13.4477 8 14 8H27C27.5523 8 28 8.44772 28 9C28 9.55228 27.5523 10 27 10H14C13.4477 10 13 9.55228 13 9Z"
      fill="currentColor"
    />
  </svg>
);

SortIcon.displayName = 'SortIcon';
