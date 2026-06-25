import React from 'react';

interface ChevronLeftOffsetIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ChevronLeftOffsetIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ChevronLeftOffsetIconProps) => (
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
      d="M11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289L2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.29289 16.7071L10.2929 24.7071C10.6834 25.0976 11.3166 25.0976 11.7071 24.7071C12.0976 24.3166 12.0976 23.6834 11.7071 23.2929L4.41421 16L11.7071 8.70711Z"
      fill="currentColor"
    />
  </svg>
);

ChevronLeftOffsetIcon.displayName = 'ChevronLeftOffsetIcon';
