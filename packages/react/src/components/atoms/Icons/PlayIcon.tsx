import React from 'react';

interface PlayIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PlayIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PlayIconProps) => (
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
      d="M25.0116 19.4617L15.057 25.4305C12.3909 27.0291 9 25.1086 9 22V10.0623C9 6.95367 12.3909 5.03314 15.057 6.63176L25.0116 12.6006C27.6022 14.154 27.6022 17.9083 25.0116 19.4617ZM23.9831 17.7464C25.2784 16.9697 25.2784 15.0926 23.9831 14.3159L14.0285 8.34704C12.6954 7.54773 11 8.508 11 10.0623V22C11 23.5543 12.6954 24.5145 14.0285 23.7152L23.9831 17.7464Z"
      fill="currentColor"
    />
  </svg>
);

PlayIcon.displayName = 'PlayIcon';
