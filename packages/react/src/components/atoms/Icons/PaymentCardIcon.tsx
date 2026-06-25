import React from 'react';

interface PaymentCardIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PaymentCardIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PaymentCardIconProps) => (
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
      d="M6 21C6 20.4477 6.44772 20 7 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H7C6.44772 22 6 21.5523 6 21Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6C3.79086 6 2 7.79086 2 10V22C2 24.2091 3.79086 26 6 26H26C28.2091 26 30 24.2091 30 22V10C30 7.79086 28.2091 6 26 6H6ZM26 8H6C4.89543 8 4 8.89543 4 10V12H28V10C28 8.89543 27.1046 8 26 8ZM28 16H4V22C4 23.1046 4.89543 24 6 24H26C27.1046 24 28 23.1046 28 22V16Z"
      fill="currentColor"
    />
  </svg>
);

PaymentCardIcon.displayName = 'PaymentCardIcon';
