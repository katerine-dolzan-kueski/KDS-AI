import React from 'react';

interface HomeFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const HomeFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: HomeFilledIconProps) => (
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
      d="M17.8001 5.1C16.7334 4.3 15.2667 4.3 14.2001 5.1L3.40006 13.2C2.95823 13.5314 2.86869 14.1582 3.20006 14.6C3.53143 15.0418 4.15823 15.1314 4.60006 14.8L6.00012 13.75V25C6.00012 26.6569 7.34326 28 9.00012 28H23.0001C24.657 28 26.0001 26.6569 26.0001 25V13.75L27.4001 14.8C27.8419 15.1314 28.4687 15.0418 28.8001 14.6C29.1314 14.1582 29.0419 13.5314 28.6001 13.2L17.8001 5.1ZM15 17C13.8954 17 13 17.8954 13 19V26H19V19C19 17.8954 18.1046 17 17 17H15Z"
      fill="currentColor"
    />
  </svg>
);

HomeFilledIcon.displayName = 'HomeFilledIcon';
