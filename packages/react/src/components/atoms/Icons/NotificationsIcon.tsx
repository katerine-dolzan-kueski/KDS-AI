import React from 'react';

interface NotificationsIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const NotificationsIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: NotificationsIconProps) => (
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
      d="M16 4C12.0518 4 8.6884 6.86803 8.06462 10.7667L7.27173 15.7222C7.1194 16.6743 6.79625 17.591 6.31787 18.4282L5.44408 19.9573C5.15307 20.4666 5 21.043 5 21.6295C5 23.491 6.50902 25 8.37048 25H12C12 27.2091 13.7909 29 16 29C18.2091 29 20 27.2091 20 25H23.6295C25.491 25 27 23.491 27 21.6295C27 21.043 26.8469 20.4666 26.5559 19.9573L25.6821 18.4282C25.2037 17.591 24.8806 16.6743 24.7283 15.7222L23.9354 10.7667C23.3116 6.86803 19.9482 4 16 4ZM18 25H14C14 26.1046 14.8954 27 16 27C17.1046 27 18 26.1046 18 25ZM10.0395 11.0826C10.508 8.15426 13.0344 6 16 6C18.9656 6 21.492 8.15426 21.9605 11.0826L22.7534 16.0382C22.9438 17.2282 23.3477 18.374 23.9456 19.4204L24.8194 20.9496C24.9378 21.1566 25 21.391 25 21.6295C25 22.3864 24.3864 23 23.6295 23H8.37048C7.61359 23 7 22.3864 7 21.6295C7 21.391 7.06224 21.1566 7.18057 20.9496L8.05436 19.4204C8.6523 18.374 9.05621 17.2282 9.24661 16.0382L10.0395 11.0826Z"
      fill="currentColor"
    />
  </svg>
);

NotificationsIcon.displayName = 'NotificationsIcon';
