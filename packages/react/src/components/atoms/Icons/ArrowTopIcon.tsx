import React from 'react';

interface ArrowTopIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ArrowTopIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ArrowTopIconProps) => (
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
      d="M8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L15 8.41421V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V8.41421L22.2929 13.7071C22.6834 14.0976 23.3166 14.0976 23.7071 13.7071C24.0976 13.3166 24.0976 12.6834 23.7071 12.2929L16.7071 5.29289C16.3166 4.90237 15.6834 4.90237 15.2929 5.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071Z"
      fill="currentColor"
    />
  </svg>
);

ArrowTopIcon.displayName = 'ArrowTopIcon';
