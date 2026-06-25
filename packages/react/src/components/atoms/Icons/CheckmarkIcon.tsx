import React from 'react';

interface CheckmarkIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CheckmarkIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CheckmarkIconProps) => (
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
      d="M25.7071 9.29289C26.0976 9.68342 26.0976 10.3166 25.7071 10.7071L13.7071 22.7071C13.3166 23.0976 12.6834 23.0976 12.2929 22.7071L6.29289 16.7071C5.90237 16.3166 5.90237 15.6834 6.29289 15.2929C6.68342 14.9024 7.31658 14.9024 7.70711 15.2929L13 20.5858L24.2929 9.29289C24.6834 8.90237 25.3166 8.90237 25.7071 9.29289Z"
      fill="currentColor"
    />
  </svg>
);

CheckmarkIcon.displayName = 'CheckmarkIcon';
