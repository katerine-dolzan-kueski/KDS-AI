import React from 'react';

interface LocationOnIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const LocationOnIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: LocationOnIconProps) => (
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
      d="M20.4832 23.4741C22.977 21.0574 25 18.0073 25 14.8333C25 9.9835 20.9995 6 16 6C11.0005 6 7 9.9835 7 14.8333C7 18.0073 9.02297 21.0574 11.5168 23.4741C12.7295 24.6492 13.9716 25.5933 14.9534 26.2348C15.3721 26.5084 15.7279 26.7168 16 26.8605C16.2721 26.7168 16.6279 26.5084 17.0466 26.2348C18.0284 25.5933 19.2705 24.6492 20.4832 23.4741ZM15.5967 27.052C15.5549 27.0674 15.5593 27.0625 15.5994 27.051L15.5967 27.052ZM16.4006 27.051C16.4407 27.0625 16.4451 27.0674 16.4033 27.052L16.4006 27.051ZM16 29C17 29 27 22.8164 27 14.8333C27 8.85025 22.0751 4 16 4C9.92487 4 5 8.85025 5 14.8333C5 22.8164 15 29 16 29Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 11C14.3431 11 13 12.3431 13 14C13 15.6569 14.3431 17 16 17C17.6569 17 19 15.6569 19 14C19 12.3431 17.6569 11 16 11ZM11 14C11 11.2386 13.2386 9 16 9C18.7614 9 21 11.2386 21 14C21 16.7614 18.7614 19 16 19C13.2386 19 11 16.7614 11 14Z"
      fill="currentColor"
    />
  </svg>
);

LocationOnIcon.displayName = 'LocationOnIcon';
