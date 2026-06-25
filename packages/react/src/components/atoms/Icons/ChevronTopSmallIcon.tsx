import React from 'react';

interface ChevronTopSmallIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ChevronTopSmallIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ChevronTopSmallIconProps) => (
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
      d="M9.29289 17.2929C8.90237 17.6834 8.90237 18.3166 9.29289 18.7071C9.68342 19.0976 10.3166 19.0976 10.7071 18.7071L16 13.4142L21.2929 18.7071C21.6834 19.0976 22.3166 19.0976 22.7071 18.7071C23.0976 18.3166 23.0976 17.6834 22.7071 17.2929L16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L9.29289 17.2929Z"
      fill="currentColor"
    />
  </svg>
);

ChevronTopSmallIcon.displayName = 'ChevronTopSmallIcon';
