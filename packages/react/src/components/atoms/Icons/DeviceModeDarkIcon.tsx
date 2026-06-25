import React from 'react';

interface DeviceModeDarkIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const DeviceModeDarkIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: DeviceModeDarkIconProps) => (
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
      d="M15.064 4.73045C15.2543 5.1378 15.1493 5.62204 14.8074 5.91402C13.0877 7.38288 12 9.56393 12 12.0001C12 16.4184 15.5817 20.0001 20 20.0001C22.4361 20.0001 24.6172 18.9124 26.0861 17.1926C26.378 16.8508 26.8623 16.7458 27.2696 16.9361C27.677 17.1263 27.9073 17.565 27.8325 18.0083C26.8763 23.6799 21.9437 28.0001 16 28.0001C9.37258 28.0001 4 22.6275 4 16.0001C4 10.0564 8.32021 5.12373 13.9917 4.16754C14.4351 4.0928 14.8738 4.3231 15.064 4.73045ZM11.2169 7.21574C8.10873 8.9119 6 12.2103 6 16.0001C6 21.5229 10.4772 26.0001 16 26.0001C19.7898 26.0001 23.0882 23.8913 24.7843 20.7832C23.3633 21.5588 21.733 22.0001 20 22.0001C14.4772 22.0001 10 17.5229 10 12.0001C10 10.2671 10.4412 8.63675 11.2169 7.21574Z"
      fill="currentColor"
    />
  </svg>
);

DeviceModeDarkIcon.displayName = 'DeviceModeDarkIcon';
