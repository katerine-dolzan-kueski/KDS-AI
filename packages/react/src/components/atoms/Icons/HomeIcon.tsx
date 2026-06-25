import React from 'react';

interface HomeIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const HomeIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: HomeIconProps) => (
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
      d="M14.2001 5.1C15.2667 4.3 16.7334 4.3 17.8001 5.1L28.6001 13.2C29.0419 13.5314 29.1314 14.1582 28.8001 14.6C28.4687 15.0418 27.8419 15.1314 27.4001 14.8L26.0001 13.75V25C26.0001 26.6569 24.657 28 23.0001 28H9.00012C7.34326 28 6.00012 26.6569 6.00012 25V13.75L4.60006 14.8C4.15823 15.1314 3.53143 15.0418 3.20006 14.6C2.86869 14.1582 2.95823 13.5314 3.40006 13.2L14.2001 5.1ZM8.00012 12.25V25C8.00012 25.5523 8.44783 26 9.00012 26H12.0001V20C12.0001 18.3431 13.3433 17 15.0001 17H17.0001C18.657 17 20.0001 18.3431 20.0001 20V26H23.0001C23.5524 26 24.0001 25.5523 24.0001 25V12.25L16.6001 6.7C16.2445 6.43333 15.7556 6.43333 15.4001 6.7L8.00012 12.25ZM18.0001 26H14.0001V20C14.0001 19.4477 14.4478 19 15.0001 19H17.0001C17.5524 19 18.0001 19.4477 18.0001 20V26Z"
      fill="currentColor"
    />
  </svg>
);

HomeIcon.displayName = 'HomeIcon';
