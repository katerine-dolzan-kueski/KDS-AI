import React from 'react';

interface CrossIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CrossIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CrossIconProps) => (
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
      d="M21.6564 8.92888C22.0469 8.53836 22.6809 8.53836 23.0715 8.92888C23.4616 9.31932 23.4616 9.95248 23.0715 10.3429L17.4142 15.9992L23.0715 21.6564C23.4619 22.0469 23.462 22.681 23.0715 23.0715C22.681 23.462 22.0469 23.4619 21.6564 23.0715L15.9992 17.4142L10.3429 23.0715C9.95248 23.4616 9.31932 23.4616 8.92888 23.0715C8.53836 22.6809 8.53836 22.0469 8.92888 21.6564L14.5851 15.9992L8.92888 10.3429C8.5384 9.95241 8.53837 9.31939 8.92888 8.92888C9.31939 8.53837 9.95241 8.5384 10.3429 8.92888L15.9992 14.5851L21.6564 8.92888Z"
      fill="currentColor"
    />
  </svg>
);

CrossIcon.displayName = 'CrossIcon';
