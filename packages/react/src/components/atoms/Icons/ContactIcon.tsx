import React from 'react';

interface ContactIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ContactIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ContactIconProps) => (
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
      d="M10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12H20C20.5523 12 21 11.5523 21 11C21 10.4477 20.5523 10 20 10H10Z"
      fill="currentColor"
    />{' '}
    <path
      d="M9 15C9 14.4477 9.44772 14 10 14H22C22.5523 14 23 14.4477 23 15C23 15.5523 22.5523 16 22 16H10C9.44772 16 9 15.5523 9 15Z"
      fill="currentColor"
    />{' '}
    <path
      d="M10 18C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20H18C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18H10Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 5C6.23858 5 4 7.23858 4 10V20C4 22.7614 6.23858 25 9 25H12.4338L14.285 28.0853C15.0618 29.38 16.9382 29.38 17.715 28.0853L19.5662 25H23C25.7614 25 28 22.7614 28 20V10C28 7.23858 25.7614 5 23 5H9ZM6 10C6 8.34315 7.34315 7 9 7H23C24.6569 7 26 8.34315 26 10V20C26 21.6569 24.6569 23 23 23H19C18.6487 23 18.3232 23.1843 18.1425 23.4855L16 27.0563L13.8575 23.4855C13.6768 23.1843 13.3513 23 13 23H9C7.34315 23 6 21.6569 6 20V10Z"
      fill="currentColor"
    />
  </svg>
);

ContactIcon.displayName = 'ContactIcon';
