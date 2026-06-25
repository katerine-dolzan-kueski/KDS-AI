import React from 'react';

interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ArrowRightIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ArrowRightIconProps) => (
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
      d="M17.2929 8.29289C16.9024 8.68342 16.9024 9.31658 17.2929 9.70711L22.5858 15H5C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H22.5858L17.2929 22.2929C16.9024 22.6834 16.9024 23.3166 17.2929 23.7071C17.6834 24.0976 18.3166 24.0976 18.7071 23.7071L25.7071 16.7071C26.0976 16.3166 26.0976 15.6834 25.7071 15.2929L18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289Z"
      fill="currentColor"
    />
  </svg>
);

ArrowRightIcon.displayName = 'ArrowRightIcon';
