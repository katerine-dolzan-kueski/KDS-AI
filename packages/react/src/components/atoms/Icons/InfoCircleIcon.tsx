import React from 'react';

interface InfoCircleIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const InfoCircleIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: InfoCircleIconProps) => (
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
      d="M15.75 12C15.387 12 15.0879 11.8836 14.8528 11.6508C14.6176 11.4127 14.5 11.1138 14.5 10.754C14.5 10.3889 14.6176 10.0899 14.8528 9.85714C15.0879 9.61905 15.387 9.5 15.75 9.5C16.113 9.5 16.4121 9.61905 16.6472 9.85714C16.8824 10.0899 17 10.3889 17 10.754C17 11.1138 16.8824 11.4127 16.6472 11.6508C16.4121 11.8836 16.113 12 15.75 12Z"
      fill="currentColor"
    />{' '}
    <path
      d="M14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15H15.5V20H13.5C12.9477 20 12.5 20.4477 12.5 21C12.5 21.5523 12.9477 22 13.5 22H19.5C20.0523 22 20.5 21.5523 20.5 21C20.5 20.4477 20.0523 20 19.5 20H17.5V14C17.5 13.4477 17.0523 13 16.5 13H14Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM16 26C21.5229 26 26 21.5229 26 16C26 10.4772 21.5229 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5229 10.4772 26 16 26Z"
      fill="currentColor"
    />
  </svg>
);

InfoCircleIcon.displayName = 'InfoCircleIcon';
