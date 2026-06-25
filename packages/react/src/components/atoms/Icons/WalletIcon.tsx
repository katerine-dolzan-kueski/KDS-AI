import React from 'react';

interface WalletIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const WalletIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: WalletIconProps) => (
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
      d="M22 8.16225C22 6.79713 20.6626 5.83319 19.3675 6.26488L11.1622 9H22V8.16225ZM6 17.5V12C6 11.4477 6.44772 11 7 11H24C25.1046 11 26 11.8954 26 13V23C26 24.1046 25.1046 25 24 25H7C6.44772 25 6 24.5523 6 24V17.5ZM4 11.4415V12V17.5V24C4 25.6569 5.34314 27 7 27H24C26.2091 27 28 25.2091 28 23V13C28 10.7909 26.2091 9 24 9V8.16225C24 5.43202 21.3252 3.50414 18.7351 4.36751L6.05132 8.59544C4.82629 9.00378 4 10.1502 4 11.4415ZM22 20C23.1046 20 24 19.1046 24 18C24 16.8954 23.1046 16 22 16C20.8954 16 20 16.8954 20 18C20 19.1046 20.8954 20 22 20Z"
      fill="currentColor"
    />
  </svg>
);

WalletIcon.displayName = 'WalletIcon';
