import React from 'react';

interface ErrorCircleFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ErrorCircleFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ErrorCircleFilledIconProps) => (
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
      d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM15.9905 18.0902C15.4465 18.0902 15.0028 17.6544 14.9932 17.1105L14.8872 11.126C14.8762 10.5074 15.3747 10 15.9934 10C16.6126 10 17.1112 10.5081 17.0996 11.1271L16.9877 17.1115C16.9776 17.655 16.5341 18.0902 15.9905 18.0902ZM15.998 22C15.621 22 15.3105 21.8832 15.0663 21.6496C14.8221 21.4107 14.7 21.1108 14.7 20.7498C14.7 20.3835 14.8221 20.0836 15.0663 19.85C15.3105 19.6111 15.621 19.4917 15.998 19.4917C16.3749 19.4917 16.6854 19.6111 16.9296 19.85C17.1738 20.0836 17.2959 20.3835 17.2959 20.7498C17.2959 21.1108 17.1738 21.4107 16.9296 21.6496C16.6854 21.8832 16.3749 22 15.998 22Z"
      fill="currentColor"
    />
  </svg>
);

ErrorCircleFilledIcon.displayName = 'ErrorCircleFilledIcon';
