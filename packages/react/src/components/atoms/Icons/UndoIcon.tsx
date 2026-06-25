import React from 'react';

interface UndoIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const UndoIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: UndoIconProps) => (
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
      d="M13.7074 6.29289C13.3168 5.90237 12.6837 5.90237 12.2931 6.29289L6.29314 12.2929C5.90261 12.6834 5.90261 13.3166 6.29314 13.7071L12.2931 19.7071C12.6837 20.0976 13.3168 20.0976 13.7074 19.7071C14.0979 19.3166 14.0979 18.6834 13.7074 18.2929L9.41446 14H19.0002C21.7617 14 24.0002 16.2386 24.0002 19C24.0002 21.7614 21.7617 24 19.0002 24C18.448 24 18.0002 24.4477 18.0002 25C18.0002 25.5523 18.448 26 19.0002 26C22.8662 26 26.0002 22.866 26.0002 19C26.0002 15.134 22.8662 12 19.0002 12H9.41446L13.7074 7.70711C14.0979 7.31658 14.0979 6.68342 13.7074 6.29289Z"
      fill="currentColor"
    />
  </svg>
);

UndoIcon.displayName = 'UndoIcon';
