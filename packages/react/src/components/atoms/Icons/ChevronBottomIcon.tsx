import React from 'react';

interface ChevronBottomIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ChevronBottomIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ChevronBottomIconProps) => (
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
      d="M8.70759 12.2929C8.31707 11.9024 7.68391 11.9024 7.29338 12.2929C6.90286 12.6834 6.90286 13.3166 7.29338 13.7071L15.2923 21.707C15.6828 22.0975 16.3161 22.0976 16.7066 21.7071L24.7066 13.7071C25.0971 13.3166 25.0971 12.6834 24.7066 12.2929C24.3161 11.9024 23.6829 11.9024 23.2924 12.2929L16 19.5853L8.70759 12.2929Z"
      fill="currentColor"
    />
  </svg>
);

ChevronBottomIcon.displayName = 'ChevronBottomIcon';
