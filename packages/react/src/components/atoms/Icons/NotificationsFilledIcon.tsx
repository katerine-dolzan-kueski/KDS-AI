import React from 'react';

interface NotificationsFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const NotificationsFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: NotificationsFilledIconProps) => (
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
      d="M8.06462 10.7667C8.6884 6.86803 12.0518 4 16 4C19.9482 4 23.3116 6.86803 23.9354 10.7667L24.7283 15.7222C24.8806 16.6743 25.2037 17.591 25.6821 18.4282L26.5559 19.9573C26.8469 20.4666 27 21.043 27 21.6295C27 23.491 25.491 25 23.6295 25H8.37048C6.50902 25 5 23.491 5 21.6295C5 21.043 5.15307 20.4666 5.44408 19.9573L6.31787 18.4282C6.79625 17.591 7.1194 16.6743 7.27173 15.7222L8.06462 10.7667Z"
      fill="currentColor"
    />{' '}
    <path
      d="M12.643 27.1758C12.2871 26.6278 12.7626 26 13.416 26H18.5841C19.2375 26 19.713 26.6278 19.3571 27.1758C18.644 28.2738 17.4068 29 16 29C14.5933 29 13.3561 28.2738 12.643 27.1758Z"
      fill="currentColor"
    />
  </svg>
);

NotificationsFilledIcon.displayName = 'NotificationsFilledIcon';
