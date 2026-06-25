import React from 'react';

interface CheckmarkCircleIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CheckmarkCircleIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CheckmarkCircleIconProps) => (
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
      d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.2071 12.2929C21.5976 12.6834 21.5976 13.3166 21.2071 13.7071L15.2071 19.7071C14.8166 20.0976 14.1834 20.0976 13.7929 19.7071L10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929C11.1834 14.9024 11.8166 14.9024 12.2071 15.2929L14.5 17.5858L19.7929 12.2929C20.1834 11.9024 20.8166 11.9024 21.2071 12.2929Z"
      fill="currentColor"
    />
  </svg>
);

CheckmarkCircleIcon.displayName = 'CheckmarkCircleIcon';
