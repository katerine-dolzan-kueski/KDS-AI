import React from 'react';

interface CopyIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CopyIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CopyIconProps) => (
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
      d="M8 5C6.34315 5 5 6.34315 5 8V18C5 19.6569 6.34315 21 8 21H10V19H8C7.44772 19 7 18.5523 7 18V8C7 7.44772 7.44772 7 8 7H18C18.5523 7 19 7.44772 19 8V10H21V8C21 6.34315 19.6569 5 18 5H8Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11C12.3431 11 11 12.3431 11 14V24C11 25.6569 12.3431 27 14 27H24C25.6569 27 27 25.6569 27 24V14C27 12.3431 25.6569 11 24 11H14ZM13 14C13 13.4477 13.4477 13 14 13H24C24.5523 13 25 13.4477 25 14V24C25 24.5523 24.5523 25 24 25H14C13.4477 25 13 24.5523 13 24V14Z"
      fill="currentColor"
    />
  </svg>
);

CopyIcon.displayName = 'CopyIcon';
