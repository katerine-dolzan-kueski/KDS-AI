import React from 'react';

interface NavigationFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const NavigationFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: NavigationFilledIconProps) => (
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
      d="M25.18 4.17583C25.9375 3.83527 26.827 3.99864 27.4143 4.58599C28.0017 5.17335 28.165 6.06278 27.8245 6.82036L18.8245 26.8204C18.4529 27.6462 17.5718 28.1193 16.678 27.9737C15.7845 27.8278 15.1002 27.1001 15.01 26.1993L14.1731 17.8262L5.80105 16.9903C4.9002 16.9001 4.17253 16.2158 4.02664 15.3223C3.88104 14.4286 4.35417 13.5474 5.17996 13.1758L25.18 4.17583ZM15.3577 15.9522C15.7474 16.062 16.0398 16.4001 16.0813 16.8145L16.0686 16.7266C15.9976 16.3525 15.7197 16.0541 15.3577 15.9522Z"
      fill="currentColor"
    />
  </svg>
);

NavigationFilledIcon.displayName = 'NavigationFilledIcon';
