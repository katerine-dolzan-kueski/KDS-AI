import React from 'react';

interface WaterIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const WaterIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: WaterIconProps) => (
  <svg
    width={$width}
    height={$height}
    className={$className}
    fill={$fill}
    viewBox="0 0 32 33"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.1114 17.9309C10.6597 17.8655 11.1572 18.2576 11.2227 18.806C11.4685 20.8577 13.2337 22.5609 15.5773 22.8031C16.1265 22.8598 16.5264 23.3506 16.4699 23.8998C16.4129 24.4489 15.9214 24.8491 15.3722 24.7924C12.1973 24.4645 9.60554 22.1188 9.23736 19.0433C9.17179 18.495 9.56318 17.9967 10.1114 17.9309Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0587 4.378C15.578 3.87413 16.4214 3.87404 16.9406 4.378L17.047 4.49421L23.9495 12.9641C27.3206 17.1011 26.4322 22.9919 22.0344 26.1078C18.4654 28.6362 13.5339 28.6363 9.96491 26.1078C5.56717 22.992 4.67895 17.1012 8.04984 12.9641L14.9523 4.49421L15.0587 4.378ZM9.59967 14.2278C6.98594 17.4358 7.63432 22.0055 11.1212 24.476C13.9974 26.5136 18.0018 26.5136 20.8782 24.476C24.3651 22.0054 25.0128 17.4358 22.3987 14.2278L15.9992 6.3751L9.59967 14.2278Z"
      fill="currentColor"
    />
  </svg>
);

WaterIcon.displayName = 'WaterIcon';
