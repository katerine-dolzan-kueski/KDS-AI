import React from 'react';

interface AddCircleIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const AddCircleIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: AddCircleIconProps) => (
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
      d="M17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11V15H11C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H15V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H17V11Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z"
      fill="currentColor"
    />
  </svg>
);

AddCircleIcon.displayName = 'AddCircleIcon';
