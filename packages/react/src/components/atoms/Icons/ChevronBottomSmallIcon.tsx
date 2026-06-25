import React from 'react';

interface ChevronBottomSmallIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ChevronBottomSmallIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ChevronBottomSmallIconProps) => (
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
      d="M9.29289 14.7071L15.2929 20.7071C15.6834 21.0976 16.3166 21.0976 16.7071 20.7071L22.7071 14.7071C23.0976 14.3166 23.0976 13.6834 22.7071 13.2929C22.3166 12.9024 21.6834 12.9024 21.2929 13.2929L16 18.5858L10.7071 13.2929C10.3166 12.9024 9.68342 12.9024 9.29289 13.2929C8.90237 13.6834 8.90237 14.3166 9.29289 14.7071Z"
      fill="currentColor"
    />
  </svg>
);

ChevronBottomSmallIcon.displayName = 'ChevronBottomSmallIcon';
