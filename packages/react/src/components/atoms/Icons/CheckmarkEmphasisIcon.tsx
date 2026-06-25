import React from 'react';

interface CheckmarkEmphasisIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CheckmarkEmphasisIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CheckmarkEmphasisIconProps) => (
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
      d="M26.4142 8.58579C25.6332 7.80474 24.3668 7.80474 23.5858 8.58579L13 19.1716L8.41421 14.5858C7.63317 13.8047 6.36684 13.8047 5.58579 14.5858C4.80474 15.3668 4.80474 16.6332 5.58579 17.4142L11.5858 23.4142C12.3668 24.1953 13.6332 24.1953 14.4142 23.4142L26.4142 11.4142C27.1953 10.6332 27.1953 9.36683 26.4142 8.58579Z"
      fill="currentColor"
    />
  </svg>
);

CheckmarkEmphasisIcon.displayName = 'CheckmarkEmphasisIcon';
