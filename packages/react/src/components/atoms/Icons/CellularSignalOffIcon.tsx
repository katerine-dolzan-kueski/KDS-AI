import React from 'react';

interface CellularSignalOffIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CellularSignalOffIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CellularSignalOffIconProps) => (
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
      d="M5.53676 8.15634C5.07082 7.85983 4.45273 7.99719 4.15622 8.46313C3.85971 8.92907 3.99707 9.54716 4.46301 9.84367L6.44149 11.1027C6.47383 11.1187 6.50563 11.1365 6.53676 11.1563L26.5583 23.8973C27.0101 24.1204 27.5668 23.9717 27.8435 23.5369C28.1401 23.0709 28.0027 22.4529 27.5368 22.1563L25 20.542V9C25 8.44772 24.5523 8 24 8C23.4477 8 23 8.44772 23 9V19.2693L21 17.9966V12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12V16.7239L17 15.4511V15C17 14.4477 16.5523 14 16 14C15.7016 14 15.4338 14.1307 15.2506 14.3379L5.53676 8.15634Z"
      fill="currentColor"
    />{' '}
    <path
      d="M21 22.7308L19 21.4581V23C19 23.5523 19.4477 24 20 24C20.5523 24 21 23.5523 21 23V22.7308Z"
      fill="currentColor"
    />{' '}
    <path
      d="M17 20.1854L15 18.9127V23C15 23.5523 15.4477 24 16 24C16.5523 24 17 23.5523 17 23V20.1854Z"
      fill="currentColor"
    />{' '}
    <path
      d="M11.9944 17L12.9086 17.5818C12.9673 17.709 13 17.8507 13 18V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V18C11 17.4496 11.4447 17.003 11.9944 17Z"
      fill="currentColor"
    />{' '}
    <path
      d="M8 20C8.55228 20 9 20.4477 9 21V23C9 23.5523 8.55228 24 8 24C7.44772 24 7 23.5523 7 23V21C7 20.4477 7.44772 20 8 20Z"
      fill="currentColor"
    />
  </svg>
);

CellularSignalOffIcon.displayName = 'CellularSignalOffIcon';
