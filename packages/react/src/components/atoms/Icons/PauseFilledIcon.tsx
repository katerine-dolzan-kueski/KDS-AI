import React from 'react';

interface PauseFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PauseFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PauseFilledIconProps) => (
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
      d="M10 6C8.34315 6 7 7.34315 7 9V23C7 24.6569 8.34315 26 10 26H12C13.6569 26 15 24.6569 15 23V9C15 7.34315 13.6569 6 12 6H10Z"
      fill="currentColor"
    />{' '}
    <path
      d="M20 6C18.3431 6 17 7.34315 17 9V23C17 24.6569 18.3431 26 20 26H22C23.6569 26 25 24.6569 25 23V9C25 7.34315 23.6569 6 22 6H20Z"
      fill="currentColor"
    />
  </svg>
);

PauseFilledIcon.displayName = 'PauseFilledIcon';
