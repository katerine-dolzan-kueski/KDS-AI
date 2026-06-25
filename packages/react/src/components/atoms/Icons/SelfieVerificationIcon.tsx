import React from 'react';

interface SelfieVerificationIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const SelfieVerificationIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: SelfieVerificationIconProps) => (
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
      d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12ZM18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 16C28 17.7844 27.6105 19.4779 26.9119 21H29C29.5523 21 30 21.4477 30 22C30 22.5523 29.5523 23 29 23H3C2.44772 23 2 22.5523 2 22C2 21.4477 2.44772 21 3 21H5.08808C4.38949 19.4779 4 17.7844 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM26 16C26 17.8214 25.513 19.5291 24.6622 21H22.3264C21.2029 18.6351 18.7924 17 16 17C13.2076 17 10.7971 18.6351 9.67363 21H7.33782C6.48697 19.5291 6 17.8214 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16ZM16 19C17.6358 19 19.0882 19.7856 20.0004 21H11.9996C12.9118 19.7856 14.3642 19 16 19Z"
      fill="currentColor"
    />{' '}
    <path
      d="M8.06253 25C10.1779 26.8671 12.9567 28 16 28C19.0433 28 21.8221 26.8671 23.9375 25H20.3641C19.0454 25.6407 17.5646 26 16 26C14.4354 26 12.9546 25.6407 11.6359 25H8.06253Z"
      fill="currentColor"
    />
  </svg>
);

SelfieVerificationIcon.displayName = 'SelfieVerificationIcon';
