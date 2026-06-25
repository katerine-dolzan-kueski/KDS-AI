import React from 'react';

interface SaveIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const SaveIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: SaveIconProps) => (
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
      d="M6.99976 8C6.99976 5.79086 8.79062 4 10.9998 4H20.9998C23.2089 4 24.9998 5.79086 24.9998 8V26.0858C24.9998 27.8676 22.8455 28.7599 21.5855 27.5L15.9998 21.9142L10.414 27.5C9.15403 28.7599 6.99976 27.8676 6.99976 26.0858V8ZM10.9998 6C9.89519 6 8.99976 6.89543 8.99976 8V26.0858L14.5855 20.5C15.3666 19.719 16.6329 19.719 17.414 20.5L22.9998 26.0858V8C22.9998 6.89543 22.1043 6 20.9998 6H10.9998Z"
      fill="currentColor"
    />
  </svg>
);

SaveIcon.displayName = 'SaveIcon';
