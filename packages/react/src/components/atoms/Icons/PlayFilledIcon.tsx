import React from 'react';

interface PlayFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PlayFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PlayFilledIconProps) => (
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
      d="M25.0116 19.4617L15.057 25.4305C12.3909 27.0291 9 25.1086 9 22V10.0623C9 6.95366 12.3909 5.03314 15.057 6.63176L25.0116 12.6006C27.6022 14.154 27.6022 17.9083 25.0116 19.4617Z"
      fill="currentColor"
    />
  </svg>
);

PlayFilledIcon.displayName = 'PlayFilledIcon';
