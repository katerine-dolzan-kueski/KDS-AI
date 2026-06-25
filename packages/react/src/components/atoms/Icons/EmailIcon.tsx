import React from 'react';

interface EmailIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const EmailIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: EmailIconProps) => (
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
      d="M4.00019 10.9564C4.00006 10.9709 4 10.9855 4 11V21C4 23.7614 6.23858 26 9 26H23C25.7614 26 28 23.7614 28 21V11C28 10.9855 27.9999 10.9709 27.9998 10.9564C27.9999 10.9454 28 10.9343 28 10.9232C28 8.20419 25.7958 6 23.0768 6H8.92319C6.20419 6 4 8.20419 4 10.9232C4 10.9343 4.00006 10.9454 4.00019 10.9564ZM6 13.8217V21C6 22.6569 7.34315 24 9 24H23C24.6569 24 26 22.6569 26 21V13.8217L17.6106 19.1604C16.6279 19.7857 15.3721 19.7857 14.3894 19.1604L6 13.8217ZM23 8C24.6404 8 25.9733 9.31664 25.9996 10.9508C25.9905 11.269 25.8243 11.5629 25.5547 11.7345L16.5369 17.473C16.2093 17.6815 15.7907 17.6815 15.4631 17.473L6.44534 11.7345C6.17575 11.5629 6.00951 11.269 6.0004 10.9508C6.02667 9.31664 7.35958 8 9 8H23Z"
      fill="currentColor"
    />
  </svg>
);

EmailIcon.displayName = 'EmailIcon';
