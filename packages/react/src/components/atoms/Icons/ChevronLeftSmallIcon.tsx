import React from 'react';

interface ChevronLeftSmallIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ChevronLeftSmallIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ChevronLeftSmallIconProps) => (
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
      d="M18.7068 10.7071C19.0973 10.3166 19.0973 9.68342 18.7068 9.29289C18.3163 8.90237 17.6831 8.90237 17.2926 9.29289L11.2932 15.2923C11.293 15.2925 11.2934 15.2921 11.2932 15.2923C10.9027 15.6828 10.9021 16.3166 11.2926 16.7071C11.2929 16.7074 11.2932 16.7077 11.2934 16.7079L17.2926 22.7071C17.6831 23.0976 18.3163 23.0976 18.7068 22.7071C19.0973 22.3166 19.0973 21.6834 18.7068 21.2929L13.4139 16L18.7068 10.7071Z"
      fill="currentColor"
    />
  </svg>
);

ChevronLeftSmallIcon.displayName = 'ChevronLeftSmallIcon';
