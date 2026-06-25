import React from 'react';

interface DirectionsIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const DirectionsIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: DirectionsIconProps) => (
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
      d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16ZM18.1 9.20001C17.797 8.97274 17.3916 8.93619 17.0528 9.10558C16.714 9.27497 16.5 9.62123 16.5 10V12L15.1615 12C14.6343 12 14.1795 12 13.805 12.0306C13.4096 12.0629 13.0164 12.1342 12.638 12.327C12.0735 12.6146 11.6146 13.0735 11.327 13.638C11.1342 14.0164 11.0629 14.4096 11.0306 14.805C11 15.1796 11 15.6343 11 16.1615L11 22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V16.2C13 15.6235 13.0008 15.2512 13.0239 14.9678C13.0461 14.6962 13.0838 14.5955 13.109 14.546C13.2049 14.3579 13.3578 14.2049 13.546 14.109C13.5955 14.0838 13.6962 14.0461 13.9678 14.0239C14.2512 14.0008 14.6234 14 15.2 14H16.5V16C16.5 16.3788 16.714 16.725 17.0528 16.8944C17.3916 17.0638 17.797 17.0273 18.1 16.8L22.1 13.8C22.3518 13.6112 22.5 13.3148 22.5 13C22.5 12.6852 22.3518 12.3889 22.1 12.2L18.1 9.20001Z"
      fill="currentColor"
    />
  </svg>
);

DirectionsIcon.displayName = 'DirectionsIcon';
