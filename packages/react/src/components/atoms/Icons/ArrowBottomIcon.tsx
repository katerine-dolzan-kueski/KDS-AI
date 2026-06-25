import React from 'react';

interface ArrowBottomIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ArrowBottomIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ArrowBottomIconProps) => (
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
      d="M15 23.5858V6C15 5.44772 15.4477 5 16 5C16.5523 5 17 5.44772 17 6V23.5858L22.2929 18.2929C22.6834 17.9024 23.3166 17.9024 23.7071 18.2929C24.0976 18.6834 24.0976 19.3166 23.7071 19.7071L16.7071 26.7071C16.3166 27.0976 15.6834 27.0976 15.2929 26.7071L8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929C8.68342 17.9024 9.31658 17.9024 9.70711 18.2929L15 23.5858Z"
      fill="currentColor"
    />
  </svg>
);

ArrowBottomIcon.displayName = 'ArrowBottomIcon';
