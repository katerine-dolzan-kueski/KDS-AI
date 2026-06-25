import React from 'react';

interface ChevronRightSmallIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ChevronRightSmallIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ChevronRightSmallIconProps) => (
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
      d="M13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289L20.7071 15.2929C21.0976 15.6834 21.0976 16.3166 20.7071 16.7071L14.7071 22.7071C14.3166 23.0976 13.6834 23.0976 13.2929 22.7071C12.9024 22.3166 12.9024 21.6834 13.2929 21.2929L18.5858 16L13.2929 10.7071Z"
      fill="currentColor"
    />
  </svg>
);

ChevronRightSmallIcon.displayName = 'ChevronRightSmallIcon';
