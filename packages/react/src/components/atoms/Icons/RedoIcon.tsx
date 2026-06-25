import React from 'react';

interface RedoIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const RedoIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: RedoIconProps) => (
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
      d="M18.2926 6.29289C18.6832 5.90237 19.3163 5.90237 19.7069 6.29289L25.7069 12.2929C26.0974 12.6834 26.0974 13.3166 25.7069 13.7071L19.7069 19.7071C19.3163 20.0976 18.6832 20.0976 18.2926 19.7071C17.9021 19.3166 17.9021 18.6834 18.2926 18.2929L22.5855 14H12.9998C10.2383 14 7.99976 16.2386 7.99976 19C7.99976 21.7614 10.2383 24 12.9998 24C13.552 24 13.9998 24.4477 13.9998 25C13.9998 25.5523 13.552 26 12.9998 26C9.13376 26 5.99976 22.866 5.99976 19C5.99976 15.134 9.13376 12 12.9998 12H22.5855L18.2926 7.70711C17.9021 7.31658 17.9021 6.68342 18.2926 6.29289Z"
      fill="currentColor"
    />
  </svg>
);

RedoIcon.displayName = 'RedoIcon';
