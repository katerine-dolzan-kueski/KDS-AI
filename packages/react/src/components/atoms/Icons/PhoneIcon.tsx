import React from 'react';

interface PhoneIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PhoneIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PhoneIconProps) => (
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
      d="M10 8V24C10 25.1046 10.8954 26 12 26H20C21.1046 26 22 25.1046 22 24V8C22 6.89543 21.1046 6 20 6H12C10.8954 6 10 6.89543 10 8ZM12 4C9.79086 4 8 5.79086 8 8V24C8 26.2091 9.79086 28 12 28H20C22.2091 28 24 26.2091 24 24V8C24 5.79086 22.2091 4 20 4H12Z"
      fill="currentColor"
    />{' '}
    <path
      d="M13 9C13 8.44772 13.4477 8 14 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H14C13.4477 10 13 9.55228 13 9Z"
      fill="currentColor"
    />
  </svg>
);

PhoneIcon.displayName = 'PhoneIcon';
