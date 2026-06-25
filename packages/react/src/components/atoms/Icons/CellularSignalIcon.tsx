import React from 'react';

interface CellularSignalIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CellularSignalIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CellularSignalIconProps) => (
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
      d="M24 8C24.5523 8 25 8.44772 25 9V23C25 23.5523 24.5523 24 24 24C23.4477 24 23 23.5523 23 23V9C23 8.44772 23.4477 8 24 8Z"
      fill="currentColor"
    />{' '}
    <path
      d="M20 11C20.5523 11 21 11.4477 21 12V23C21 23.5523 20.5523 24 20 24C19.4477 24 19 23.5523 19 23V12C19 11.4477 19.4477 11 20 11Z"
      fill="currentColor"
    />{' '}
    <path
      d="M16 14C16.5523 14 17 14.4477 17 15V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V15C15 14.4477 15.4477 14 16 14Z"
      fill="currentColor"
    />{' '}
    <path
      d="M12 17C12.5523 17 13 17.4477 13 18V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V18C11 17.4477 11.4477 17 12 17Z"
      fill="currentColor"
    />{' '}
    <path
      d="M8 20C8.55228 20 9 20.4477 9 21V23C9 23.5523 8.55228 24 8 24C7.44772 24 7 23.5523 7 23V21C7 20.4477 7.44772 20 8 20Z"
      fill="currentColor"
    />
  </svg>
);

CellularSignalIcon.displayName = 'CellularSignalIcon';
