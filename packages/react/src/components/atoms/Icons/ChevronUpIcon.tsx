import React from 'react';

interface ChevronUpIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ChevronUpIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ChevronUpIconProps) => (
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
      d="M7.29338 18.2929C6.90286 18.6834 6.90286 19.3166 7.29338 19.7071C7.68391 20.0976 8.31707 20.0976 8.7076 19.7071L16 12.4147L23.2924 19.7071C23.6829 20.0976 24.3161 20.0976 24.7066 19.7071C25.0971 19.3166 25.0971 18.6834 24.7066 18.2929L16.7066 10.2929C16.3161 9.90237 15.6829 9.90237 15.2924 10.2929L7.29338 18.2929Z"
      fill="currentColor"
    />
  </svg>
);

ChevronUpIcon.displayName = 'ChevronUpIcon';
