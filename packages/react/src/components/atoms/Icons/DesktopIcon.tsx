import React from 'react';

interface DesktopIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const DesktopIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: DesktopIconProps) => (
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
      d="M6 5C4.34315 5 3 6.34315 3 8V20C3 21.6569 4.34315 23 6 23H11V25C11 25.5523 10.5523 26 10 26C9.44772 26 9 26.4477 9 27C9 27.5523 9.44772 28 10 28L22 28C22.5523 28 23 27.5523 23 27C23 26.9655 22.9983 26.9314 22.9948 26.8978C22.9436 26.3935 22.5178 26 22 26C21.4477 26 21 25.5523 21 25V23H26C27.6569 23 29 21.6569 29 20V8C29 6.34315 27.6569 5 26 5H6ZM19 23V25C19 25.3506 19.0602 25.6872 19.1707 26L12.8293 26C12.9398 25.6872 13 25.3506 13 25V23H19ZM26 21C26.5523 21 27 20.5523 27 20V8C27 7.44771 26.5523 7 26 7H6C5.44772 7 5 7.44772 5 8V20C5 20.5523 5.44772 21 6 21H26Z"
      fill="currentColor"
    />
  </svg>
);

DesktopIcon.displayName = 'DesktopIcon';
