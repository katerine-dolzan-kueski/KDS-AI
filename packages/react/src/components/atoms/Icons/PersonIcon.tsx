import React from 'react';

interface PersonIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PersonIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PersonIconProps) => (
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
      d="M16 12C17.6569 12 19 10.6569 19 9C19 7.34315 17.6569 6 16 6C14.3431 6 13 7.34315 13 9C13 10.6569 14.3431 12 16 12ZM16 14C18.7614 14 21 11.7614 21 9C21 6.23858 18.7614 4 16 4C13.2386 4 11 6.23858 11 9C11 11.7614 13.2386 14 16 14Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 26H9V25C9 21.134 12.134 18 16 18C19.866 18 23 21.134 23 25V26ZM9 28C7.89543 28 7 27.1046 7 26V25C7 20.0294 11.0294 16 16 16C20.9706 16 25 20.0294 25 25V26C25 27.1046 24.1046 28 23 28H9Z"
      fill="currentColor"
    />
  </svg>
);

PersonIcon.displayName = 'PersonIcon';
