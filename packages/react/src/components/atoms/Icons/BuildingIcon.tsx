import React from 'react';

interface BuildingIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const BuildingIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: BuildingIconProps) => (
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
      d="M11 9C11 8.44772 10.5523 8 10 8C9.44772 8 9 8.44772 9 9L9 11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V9Z"
      fill="currentColor"
    />{' '}
    <path
      d="M10 14C10.5523 14 11 14.4477 11 15V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 15C9 14.4477 9.44772 14 10 14Z"
      fill="currentColor"
    />{' '}
    <path
      d="M15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V11C13 11.5523 13.4477 12 14 12C14.5523 12 15 11.5523 15 11V9Z"
      fill="currentColor"
    />{' '}
    <path
      d="M14 14C14.5523 14 15 14.4477 15 15V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V15C13 14.4477 13.4477 14 14 14Z"
      fill="currentColor"
    />{' '}
    <path
      d="M19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9V11C17 11.5523 17.4477 12 18 12C18.5523 12 19 11.5523 19 11V9Z"
      fill="currentColor"
    />{' '}
    <path
      d="M18 14C18.5523 14 19 14.4477 19 15V17C19 17.5523 18.5523 18 18 18C17.4477 18 17 17.5523 17 17V15C17 14.4477 17.4477 14 18 14Z"
      fill="currentColor"
    />{' '}
    <path
      d="M22 8C22.5523 8 23 8.44772 23 9V11C23 11.5523 22.5523 12 22 12C21.4477 12 21 11.5523 21 11V9C21 8.44772 21.4477 8 22 8Z"
      fill="currentColor"
    />{' '}
    <path
      d="M23 15C23 14.4477 22.5523 14 22 14C21.4477 14 21 14.4477 21 15V17C21 17.5523 21.4477 18 22 18C22.5523 18 23 17.5523 23 17V15Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6C5 4.89543 5.89543 4 7 4H25C26.1046 4 27 4.89543 27 6V26C27 27.1046 26.1046 28 25 28H7C5.89543 28 5 27.1046 5 26V6ZM25 26H22V22C22 20.8954 21.1046 20 20 20H12C10.8954 20 10 20.8954 10 22V26H7V6L25 6V26ZM15 26H12V22H15V26ZM17 26H20V22H17V26Z"
      fill="currentColor"
    />
  </svg>
);

BuildingIcon.displayName = 'BuildingIcon';
