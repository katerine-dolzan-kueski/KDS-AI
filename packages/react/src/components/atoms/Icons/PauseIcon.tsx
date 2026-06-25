import React from 'react';

interface PauseIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PauseIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PauseIconProps) => (
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
      d="M10 6C8.34315 6 7 7.34315 7 9V23C7 24.6569 8.34315 26 10 26H12C13.6569 26 15 24.6569 15 23V9C15 7.34315 13.6569 6 12 6H10ZM9 9C9 8.44772 9.44772 8 10 8H12C12.5523 8 13 8.44772 13 9V23C13 23.5523 12.5523 24 12 24H10C9.44772 24 9 23.5523 9 23V9Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 6C18.3431 6 17 7.34315 17 9V23C17 24.6569 18.3431 26 20 26H22C23.6569 26 25 24.6569 25 23V9C25 7.34315 23.6569 6 22 6H20ZM19 9C19 8.44772 19.4477 8 20 8H22C22.5523 8 23 8.44772 23 9V23C23 23.5523 22.5523 24 22 24H20C19.4477 24 19 23.5523 19 23V9Z"
      fill="currentColor"
    />
  </svg>
);

PauseIcon.displayName = 'PauseIcon';
