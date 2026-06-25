import React from 'react';

interface FaceIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const FaceIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: FaceIconProps) => (
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
      d="M12 13.5C12 14.3284 11.3284 15 10.5 15C9.67157 15 9 14.3284 9 13.5C9 12.6716 9.67157 12 10.5 12C11.3284 12 12 12.6716 12 13.5Z"
      fill="currentColor"
    />{' '}
    <path
      d="M21.5 15C22.3284 15 23 14.3284 23 13.5C23 12.6716 22.3284 12 21.5 12C20.6716 12 20 12.6716 20 13.5C20 14.3284 20.6716 15 21.5 15Z"
      fill="currentColor"
    />{' '}
    <path
      d="M11.7253 19.0385C12.2563 18.8868 12.8098 19.1943 12.9615 19.7253C13.3577 21.1117 14.8129 21.9046 16.1926 21.4858L16.7095 21.3288C17.238 21.1684 17.7965 21.4668 17.9569 21.9952C18.1173 22.5237 17.819 23.0822 17.2905 23.2426L16.7736 23.3995C14.3246 24.143 11.7416 22.7356 11.0385 20.2747C10.8868 19.7437 11.1943 19.1902 11.7253 19.0385Z"
      fill="currentColor"
    />{' '}
    <path
      d="M18 14C18 13.4477 17.5523 13 17 13C16.4477 13 16 13.4477 16 14V16H15C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V14Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16ZM16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6Z"
      fill="currentColor"
    />
  </svg>
);

FaceIcon.displayName = 'FaceIcon';
