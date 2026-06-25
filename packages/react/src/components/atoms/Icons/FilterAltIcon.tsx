import React from 'react';

interface FilterAltIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const FilterAltIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: FilterAltIconProps) => (
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
      d="M19.1025 22.0049C19.6067 22.0562 20 22.4823 20 23C20 23.5177 19.6067 23.9438 19.1025 23.9951L19 24H13C12.4477 24 12 23.5523 12 23C12 22.4477 12.4477 22 13 22H19L19.1025 22.0049Z"
      fill="currentColor"
    />{' '}
    <path
      d="M23.1025 15.0049C23.6067 15.0562 24 15.4823 24 16C24 16.5177 23.6067 16.9438 23.1025 16.9951L23 17H9C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15H23L23.1025 15.0049Z"
      fill="currentColor"
    />{' '}
    <path
      d="M27 8C27.5523 8 28 8.44772 28 9C28 9.55228 27.5523 10 27 10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H27Z"
      fill="currentColor"
    />
  </svg>
);

FilterAltIcon.displayName = 'FilterAltIcon';
