import React from 'react';

interface AddIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const AddIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: AddIconProps) => (
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
      d="M15 25C15 25.5523 15.4477 26 16 26C16.5523 26 17 25.5523 17 25V17H25C25.5523 17 26 16.5523 26 16C26 15.4477 25.5523 15 25 15H17V7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V15H7C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H15V25Z"
      fill="currentColor"
    />
  </svg>
);

AddIcon.displayName = 'AddIcon';
