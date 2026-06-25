import React from 'react';

interface BlockedIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const BlockedIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: BlockedIconProps) => (
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
      d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM9.67108 8.25721C11.395 6.84643 13.5986 6 16 6C21.5228 6 26 10.4772 26 16C26 18.4014 25.1536 20.605 23.7428 22.3289L9.67108 8.25721ZM8.2569 9.67145C6.8463 11.3953 6 13.5988 6 16C6 21.5228 10.4772 26 16 26C18.4012 26 20.6047 25.1537 22.3285 23.7431L8.2569 9.67145Z"
      fill="currentColor"
    />
  </svg>
);

BlockedIcon.displayName = 'BlockedIcon';
