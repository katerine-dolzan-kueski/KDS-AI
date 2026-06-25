import React from 'react';

interface PersonDataIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PersonDataIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PersonDataIconProps) => (
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
      d="M13 12C14.6569 12 16 10.6569 16 9C16 7.34315 14.6569 6 13 6C11.3431 6 10 7.34315 10 9C10 10.6569 11.3431 12 13 12ZM13 14C15.7614 14 18 11.7614 18 9C18 6.23858 15.7614 4 13 4C10.2386 4 8 6.23858 8 9C8 11.7614 10.2386 14 13 14Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 26H6V25C6 21.134 9.13401 18 13 18C16.866 18 20 21.134 20 25V26ZM6 28C4.89543 28 4 27.1046 4 26V25C4 20.0294 8.02944 16 13 16C17.9706 16 22 20.0294 22 25V26C22 27.1046 21.1046 28 20 28H6Z"
      fill="currentColor"
    />{' '}
    <path
      d="M20 10C20 9.44772 20.4477 9 21 9H27C27.5523 9 28 9.44772 28 10C28 10.5523 27.5523 11 27 11H21C20.4477 11 20 10.5523 20 10Z"
      fill="currentColor"
    />{' '}
    <path
      d="M19 14C19 13.4477 19.4477 13 20 13H27C27.5523 13 28 13.4477 28 14C28 14.5523 27.5523 15 27 15H20C19.4477 15 19 14.5523 19 14Z"
      fill="currentColor"
    />{' '}
    <path
      d="M22 18C22 17.4477 22.4477 17 23 17H27C27.5523 17 28 17.4477 28 18C28 18.5523 27.5523 19 27 19H23C22.4477 19 22 18.5523 22 18Z"
      fill="currentColor"
    />
  </svg>
);

PersonDataIcon.displayName = 'PersonDataIcon';
