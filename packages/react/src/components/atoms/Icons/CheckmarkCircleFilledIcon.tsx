import React from 'react';

interface CheckmarkCircleFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CheckmarkCircleFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CheckmarkCircleFilledIconProps) => (
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
      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM21.2071 13.7071C21.5976 13.3166 21.5976 12.6834 21.2071 12.2929C20.8166 11.9024 20.1834 11.9024 19.7929 12.2929L14.5 17.5858L12.2071 15.2929C11.8166 14.9024 11.1834 14.9024 10.7929 15.2929C10.4024 15.6834 10.4024 16.3166 10.7929 16.7071L13.7929 19.7071C14.1834 20.0976 14.8166 20.0976 15.2071 19.7071L21.2071 13.7071Z"
      fill="currentColor"
    />
  </svg>
);

CheckmarkCircleFilledIcon.displayName = 'CheckmarkCircleFilledIcon';
