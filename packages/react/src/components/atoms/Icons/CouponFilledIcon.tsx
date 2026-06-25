import React from 'react';

interface CouponFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CouponFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CouponFilledIconProps) => (
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
      d="M27 5C27.5523 5 28 5.44772 28 6V9C28 9.26522 27.8946 9.5195 27.707 9.70703L26.8281 10.5859C26.0474 11.3669 26.0474 12.6331 26.8281 13.4141L27.707 14.293C27.8946 14.4805 28 14.7348 28 15V17C28 17.2652 27.8946 17.5195 27.707 17.707L26.8281 18.5859C26.0474 19.3669 26.0474 20.6331 26.8281 21.4141L27.707 22.293C27.8946 22.4805 28 22.7348 28 23V26C28 26.5523 27.5523 27 27 27H8C5.79086 27 4 25.2091 4 23V9C4 6.79086 5.79086 5 8 5H27ZM19.8838 11.1162C19.3956 10.6281 18.6044 10.6281 18.1162 11.1162L10.1162 19.1162C9.62806 19.6044 9.62806 20.3956 10.1162 20.8838C10.6044 21.3719 11.3956 21.3719 11.8838 20.8838L19.8838 12.8838C20.3719 12.3956 20.3719 11.6044 19.8838 11.1162ZM18.5 18C17.6716 18 17 18.6716 17 19.5C17 20.3284 17.6716 21 18.5 21C19.3284 21 20 20.3284 20 19.5C20 18.6716 19.3284 18 18.5 18ZM11.5 11C10.6716 11 10 11.6716 10 12.5C10 13.3284 10.6716 14 11.5 14C12.3284 14 13 13.3284 13 12.5C13 11.6716 12.3284 11 11.5 11Z"
      fill="currentColor"
    />
  </svg>
);

CouponFilledIcon.displayName = 'CouponFilledIcon';
