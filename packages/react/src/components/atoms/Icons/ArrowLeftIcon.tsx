import React from 'react';

interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ArrowLeftIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ArrowLeftIconProps) => (
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
      d="M14.7071 8.29289C15.0976 8.68342 15.0976 9.31658 14.7071 9.70711L9.41421 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H9.41421L14.7071 22.2929C15.0976 22.6834 15.0976 23.3166 14.7071 23.7071C14.3166 24.0976 13.6834 24.0976 13.2929 23.7071L6.29289 16.7071C5.90237 16.3166 5.90237 15.6834 6.29289 15.2929L13.2929 8.29289C13.6834 7.90237 14.3166 7.90237 14.7071 8.29289Z"
      fill="currentColor"
    />
  </svg>
);

ArrowLeftIcon.displayName = 'ArrowLeftIcon';
