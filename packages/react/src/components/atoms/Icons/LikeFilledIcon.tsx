import React from 'react';

interface LikeFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const LikeFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: LikeFilledIconProps) => (
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
      d="M4 11.9966C4.00185 8.13216 7.13514 5 11 5C12.847 5 14.6279 6.11911 16 7.54898C17.3721 6.11911 19.153 5 21 5C24.866 5 28 8.13401 28 12C28 13.6512 27.5542 15.2668 26.8634 16.7687C26.5084 17.5728 26.0763 18.3588 25.5779 19.0661C24.1093 21.297 22.1889 23.2409 20.4606 24.6307C19.5936 25.3279 18.7577 25.8995 18.032 26.3027C17.6696 26.5041 17.3206 26.6713 16.9985 26.7906C16.6916 26.9042 16.3423 27 16 27C15.6577 27 15.3084 26.9042 15.0015 26.7906C14.6794 26.6713 14.3304 26.504 13.968 26.3027C13.2423 25.8995 12.4064 25.3279 11.5394 24.6307C9.81104 23.2408 7.89066 21.297 6.42207 19.0661C5.92372 18.3588 5.49158 17.5729 5.13665 16.7688C4.44577 15.2668 4 13.6513 4 12L4 11.9966Z"
      fill="currentColor"
    />
  </svg>
);

LikeFilledIcon.displayName = 'LikeFilledIcon';
