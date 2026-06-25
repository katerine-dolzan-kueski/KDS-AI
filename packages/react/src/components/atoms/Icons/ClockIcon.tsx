import React from 'react';

interface ClockIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ClockIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ClockIconProps) => (
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
      d="M16.4998 10.5C16.4998 9.94772 16.052 9.5 15.4998 9.5C14.9475 9.5 14.4998 9.94772 14.4998 10.5V16.5C14.4998 16.8038 14.6378 17.0911 14.8751 17.2809L19.8751 21.2809C20.3063 21.6259 20.9356 21.556 21.2806 21.1247C21.6256 20.6934 21.5557 20.0641 21.1245 19.7191L16.4998 16.0194V10.5Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z"
      fill="currentColor"
    />
  </svg>
);

ClockIcon.displayName = 'ClockIcon';
