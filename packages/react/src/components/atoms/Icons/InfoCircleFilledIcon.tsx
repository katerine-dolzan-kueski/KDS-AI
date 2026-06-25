import React from 'react';

interface InfoCircleFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const InfoCircleFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: InfoCircleFilledIconProps) => (
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
      d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM14.8528 11.6508C15.0879 11.8836 15.387 12 15.75 12C16.113 12 16.4121 11.8836 16.6472 11.6508C16.8824 11.4127 17 11.1138 17 10.754C17 10.3889 16.8824 10.0899 16.6472 9.85714C16.4121 9.61905 16.113 9.5 15.75 9.5C15.387 9.5 15.0879 9.61905 14.8528 9.85714C14.6176 10.0899 14.5 10.3889 14.5 10.754C14.5 11.1138 14.6176 11.4127 14.8528 11.6508ZM13 14C13 13.4477 13.4477 13 14 13H16.5C17.0523 13 17.5 13.4477 17.5 14V20H19.5C20.0523 20 20.5 20.4477 20.5 21C20.5 21.5523 20.0523 22 19.5 22H13.5C12.9477 22 12.5 21.5523 12.5 21C12.5 20.4477 12.9477 20 13.5 20H15.5V15H14C13.4477 15 13 14.5523 13 14Z"
      fill="currentColor"
    />
  </svg>
);

InfoCircleFilledIcon.displayName = 'InfoCircleFilledIcon';
