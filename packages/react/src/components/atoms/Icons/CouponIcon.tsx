import React from 'react';

interface CouponIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CouponIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CouponIconProps) => (
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
      d="M19.8839 12.8839C20.372 12.3957 20.372 11.6043 19.8839 11.1161C19.3957 10.628 18.6043 10.628 18.1161 11.1161L10.1161 19.1161C9.62796 19.6043 9.62796 20.3957 10.1161 20.8839C10.6043 21.372 11.3957 21.372 11.8839 20.8839L19.8839 12.8839Z"
      fill="currentColor"
    />{' '}
    <path
      d="M13 12.5C13 13.3284 12.3284 14 11.5 14C10.6716 14 10 13.3284 10 12.5C10 11.6716 10.6716 11 11.5 11C12.3284 11 13 11.6716 13 12.5Z"
      fill="currentColor"
    />{' '}
    <path
      d="M20 19.5C20 20.3284 19.3284 21 18.5 21C17.6716 21 17 20.3284 17 19.5C17 18.6716 17.6716 18 18.5 18C19.3284 18 20 18.6716 20 19.5Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 5C5.79086 5 4 6.79086 4 9V23C4 25.2091 5.79086 27 8 27H27C27.5523 27 28 26.5523 28 26V23C28 22.7348 27.8946 22.4804 27.7071 22.2929L26.8284 21.4142C26.0474 20.6332 26.0474 19.3668 26.8284 18.5858L27.7071 17.7071C27.8946 17.5196 28 17.2652 28 17V15C28 14.7348 27.8946 14.4804 27.7071 14.2929L26.8284 13.4142C26.0474 12.6332 26.0474 11.3668 26.8284 10.5858L27.7071 9.70711C27.8946 9.51957 28 9.26522 28 9V6C28 5.44772 27.5523 5 27 5H8ZM6 9C6 7.89543 6.89543 7 8 7H26V8.58579L25.4142 9.17157C23.8521 10.7337 23.8521 13.2663 25.4142 14.8284L26 15.4142V16.5858L25.4142 17.1716C23.8521 18.7337 23.8521 21.2663 25.4142 22.8284L26 23.4142V25H8C6.89543 25 6 24.1046 6 23V9Z"
      fill="currentColor"
    />
  </svg>
);

CouponIcon.displayName = 'CouponIcon';
