import React from 'react';

interface MoreVerticalIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const MoreVerticalIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: MoreVerticalIconProps) => (
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
      d="M14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8Z"
      fill="currentColor"
    />{' '}
    <path
      d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z"
      fill="currentColor"
    />{' '}
    <path
      d="M16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22Z"
      fill="currentColor"
    />
  </svg>
);

MoreVerticalIcon.displayName = 'MoreVerticalIcon';
