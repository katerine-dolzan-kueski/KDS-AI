import React from 'react';

interface FlagIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const FlagIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: FlagIconProps) => (
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
      d="M8 5C8 4.44772 7.55228 4 7 4C6.44772 4 6 4.44772 6 5V27C6 27.5523 6.44772 28 7 28C7.55228 28 8 27.5523 8 27V20.8472L10.5007 20.4304C12.089 20.1657 13.718 20.2935 15.2456 20.8027C17.6826 21.615 20.3174 21.615 22.7544 20.8027L25.3162 19.9487C25.6019 19.8535 25.8295 19.6346 25.9357 19.3528C26.042 19.071 26.0155 18.7563 25.8638 18.4962L22.6276 12.9484L25.9062 5.92292C26.0693 5.57346 26.0169 5.16136 25.7715 4.86383C25.5262 4.5663 25.1316 4.43636 24.7575 4.52989L21.6184 5.31467C19.9344 5.73566 18.1653 5.66772 16.5186 5.11882C14.2346 4.35749 11.7654 4.35749 9.48138 5.11882L8 5.61261V5ZM8 7.7208V18.8196L10.1719 18.4576C12.082 18.1392 14.041 18.2929 15.8781 18.9053C17.9046 19.5808 20.0954 19.5808 22.1219 18.9053L23.516 18.4406L20.6362 13.5039C20.471 13.2206 20.4551 12.8743 20.5938 12.5772L23.2062 6.97927L22.1034 7.25496C20.0505 7.7682 17.8937 7.68537 15.8862 7.01618C14.0127 6.3917 11.9873 6.3917 10.1138 7.01618L8 7.7208Z"
      fill="currentColor"
    />
  </svg>
);

FlagIcon.displayName = 'FlagIcon';
