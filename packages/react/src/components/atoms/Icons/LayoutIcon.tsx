import React from 'react';

interface LayoutIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const LayoutIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: LayoutIconProps) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 17C17.8807 17 19 18.1193 19 19.5V20.5C19 21.8807 17.8807 23 16.5 23H10.5C9.11929 23 8 21.8807 8 20.5V19.5C8 18.1193 9.11929 17 10.5 17H16.5ZM10.5 19C10.2239 19 10 19.2239 10 19.5V20.5C10 20.7761 10.2239 21 10.5 21H16.5L16.6006 20.9902C16.7961 20.9503 16.9503 20.7961 16.9902 20.6006L17 20.5V19.5C17 19.2583 16.8286 19.0563 16.6006 19.0098L16.5 19H10.5Z"
      fill="currentColor"
    />{' '}
    <path
      d="M21 13C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H9C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H21Z"
      fill="currentColor"
    />{' '}
    <path
      d="M23 9C23.5523 9 24 9.44772 24 10C24 10.5523 23.5523 11 23 11H9C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9H23Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 5C26.6569 5 28 6.34315 28 8V24C28 25.6569 26.6569 27 25 27H7C5.34315 27 4 25.6569 4 24V8C4 6.34315 5.34315 5 7 5H25ZM7 7C6.44772 7 6 7.44772 6 8V24C6 24.5523 6.44772 25 7 25H25C25.5523 25 26 24.5523 26 24V8C26 7.44771 25.5523 7 25 7H7Z"
      fill="currentColor"
    />
  </svg>
);

LayoutIcon.displayName = 'LayoutIcon';
