import React from 'react';

interface StarFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const StarFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: StarFilledIconProps) => (
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
      d="M13.2791 5.98493C14.3543 3.66973 17.6457 3.66974 18.7209 5.98493L20.4047 9.61057C20.5504 9.92432 20.8479 10.1405 21.1913 10.1821L25.1598 10.6631C27.6939 10.9702 28.711 14.1005 26.8414 15.8385L23.9135 18.5603C23.6602 18.7958 23.5465 19.1456 23.6131 19.485L24.382 23.4079C24.873 25.9129 22.2101 27.8476 19.9795 26.6066L16.4862 24.663C16.1839 24.4949 15.8161 24.4949 15.5138 24.663L12.0205 26.6065C9.78983 27.8476 7.12702 25.913 7.61801 23.4079L8.38691 19.485C8.45344 19.1456 8.3398 18.7958 8.08643 18.5603L5.15856 15.8385C3.28893 14.1005 4.30604 10.9702 6.84017 10.6631L10.8087 10.1821C11.1521 10.1405 11.4496 9.92432 11.5953 9.61057L13.2791 5.98493Z"
      fill="currentColor"
    />
  </svg>
);

StarFilledIcon.displayName = 'StarFilledIcon';
