import React from 'react';

interface BinocularsFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const BinocularsFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: BinocularsFilledIconProps) => (
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
      d="M21.1533 4C22.9875 4 24.6047 5.20314 25.1318 6.95996L28.5264 18.2764C28.8401 19.3222 29 20.4081 29 21.5C29 21.5488 28.995 21.5966 28.9883 21.6436C28.9952 21.7615 29 21.8803 29 22C29 25.3137 26.3137 28 23 28C19.6863 28 17 25.3137 17 22V21.8252C16.6869 21.936 16.3511 22 16 22C15.6489 22 15.3131 21.936 15 21.8252V22C15 25.3137 12.3137 28 9 28C5.68629 28 3 25.3137 3 22C3 21.8803 3.00383 21.7615 3.01074 21.6436C3.004 21.5967 3 21.5488 3 21.5C3 20.4081 3.15991 19.3222 3.47363 18.2764L6.86816 6.95996C7.39529 5.20314 9.01247 4 10.8467 4C13.1404 4.00016 14.9998 5.85958 15 8.15332V8.17383C15.3131 8.06306 15.649 8 16 8C16.351 8 16.6869 8.06306 17 8.17383V8.15332C17.0002 5.85958 18.8596 4.00016 21.1533 4ZM9 18C6.79086 18 5 19.7909 5 22C5 24.2091 6.79086 26 9 26C11.2091 26 13 24.2091 13 22C13 19.7909 11.2091 18 9 18ZM23 18C20.7909 18 19 19.7909 19 22C19 24.2091 20.7909 26 23 26C25.2091 26 27 24.2091 27 22C27 19.7909 25.2091 18 23 18ZM16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18Z"
      fill="currentColor"
    />
  </svg>
);

BinocularsFilledIcon.displayName = 'BinocularsFilledIcon';
