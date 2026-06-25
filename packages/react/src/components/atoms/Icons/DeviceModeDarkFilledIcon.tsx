import React from 'react';

interface DeviceModeDarkFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const DeviceModeDarkFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: DeviceModeDarkFilledIconProps) => (
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
      d="M14.8074 5.91402C15.1493 5.62204 15.2543 5.1378 15.064 4.73045C14.8738 4.3231 14.4351 4.0928 13.9917 4.16754C8.32021 5.12373 4 10.0564 4 16.0001C4 22.6275 9.37258 28.0001 16 28.0001C21.9437 28.0001 26.8763 23.6799 27.8325 18.0083C27.9073 17.565 27.677 17.1263 27.2696 16.9361C26.8623 16.7458 26.378 16.8508 26.0861 17.1926C24.6172 18.9124 22.4361 20.0001 20 20.0001C15.5817 20.0001 12 16.4184 12 12.0001C12 9.56393 13.0877 7.38288 14.8074 5.91402Z"
      fill="currentColor"
    />
  </svg>
);

DeviceModeDarkFilledIcon.displayName = 'DeviceModeDarkFilledIcon';
