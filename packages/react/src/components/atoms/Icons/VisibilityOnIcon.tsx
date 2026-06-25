import React from 'react';

interface VisibilityOnIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const VisibilityOnIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: VisibilityOnIconProps) => (
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
      d="M16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10ZM12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9999 6C10.4229 6 5.52978 8.81902 3.15338 13.0203C2.11098 14.8632 2.11098 17.1368 3.15338 18.9797C5.52978 23.181 10.4229 26 15.9999 26C21.577 26 26.4701 23.181 28.8465 18.9797C29.8889 17.1368 29.8889 14.8632 28.8465 13.0203C26.4701 8.81902 21.577 6 15.9999 6ZM4.8942 14.005C6.88372 10.4877 11.0763 8 15.9999 8C20.9235 8 25.1161 10.4877 27.1057 14.005C27.8025 15.2369 27.8025 16.7631 27.1057 17.995C25.1161 21.5124 20.9235 24 15.9999 24C11.0763 24 6.88372 21.5124 4.8942 17.995C4.19738 16.7631 4.19738 15.2369 4.8942 14.005Z"
      fill="currentColor"
    />
  </svg>
);

VisibilityOnIcon.displayName = 'VisibilityOnIcon';
