import React from 'react';

interface MinusEmphasisIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const MinusEmphasisIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: MinusEmphasisIconProps) => (
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
      d="M7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18H25C26.1046 18 27 17.1046 27 16C27 14.8954 26.1046 14 25 14H7Z"
      fill="currentColor"
    />
  </svg>
);

MinusEmphasisIcon.displayName = 'MinusEmphasisIcon';
