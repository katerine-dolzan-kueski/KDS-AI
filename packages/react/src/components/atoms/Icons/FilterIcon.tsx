import React from 'react';

interface FilterIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const FilterIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: FilterIconProps) => (
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
      d="M14.874 7H27C27.5523 7 28 7.44772 28 8C28 8.55228 27.5523 9 27 9H14.874C14.4299 10.7252 12.8638 12 11 12C9.13616 12 7.57006 10.7252 7.12602 9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H7.12602C7.57006 5.27477 9.13616 4 11 4C12.8638 4 14.4299 5.27477 14.874 7ZM13 8C13 9.10457 12.1046 10 11 10C9.89543 10 9 9.10457 9 8C9 6.89543 9.89543 6 11 6C12.1046 6 13 6.89543 13 8Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H17.126C17.5701 18.7252 19.1362 20 21 20C22.8638 20 24.4299 18.7252 24.874 17H27C27.5523 17 28 16.5523 28 16C28 15.4477 27.5523 15 27 15H24.874C24.4299 13.2748 22.8638 12 21 12C19.1362 12 17.5701 13.2748 17.126 15H5ZM23 16C23 17.1046 22.1046 18 21 18C19.8954 18 19 17.1046 19 16C19 14.8954 19.8954 14 21 14C22.1046 14 23 14.8954 23 16Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 23C4.44772 23 4 23.4477 4 24C4 24.5523 4.44772 25 5 25H11.126C11.5701 26.7252 13.1362 28 15 28C16.8638 28 18.4299 26.7252 18.874 25H27C27.5523 25 28 24.5523 28 24C28 23.4477 27.5523 23 27 23H18.874C18.4299 21.2748 16.8638 20 15 20C13.1362 20 11.5701 21.2748 11.126 23H5ZM17 24C17 25.1046 16.1046 26 15 26C13.8954 26 13 25.1046 13 24C13 22.8954 13.8954 22 15 22C16.1046 22 17 22.8954 17 24Z"
      fill="currentColor"
    />
  </svg>
);

FilterIcon.displayName = 'FilterIcon';
