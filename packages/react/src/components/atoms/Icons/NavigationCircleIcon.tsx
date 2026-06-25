import React from 'react';

interface NavigationCircleIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const NavigationCircleIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: NavigationCircleIconProps) => (
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
      d="M9.42506 13.0843C8.5341 13.3516 7.94504 14.1979 8.00374 15.1262C8.06245 16.0546 8.75343 16.8199 9.67096 16.9728L14.2618 17.7379L15.027 22.3288C15.1799 23.2463 15.9452 23.9373 16.8735 23.996C17.8019 24.0547 18.6481 23.4657 18.9154 22.5747L21.9154 12.5747C22.1268 11.87 21.9342 11.1061 21.414 10.5858C20.8937 10.0655 20.1298 9.87293 19.4251 10.0843L9.42506 13.0843ZM9.99976 15L19.9998 12L16.9998 22L16.1172 16.7046C16.0469 16.2831 15.7167 15.9528 15.2952 15.8826L9.99976 15Z"
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

NavigationCircleIcon.displayName = 'NavigationCircleIcon';
