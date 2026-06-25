import React from 'react';

interface NavigationIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const NavigationIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: NavigationIconProps) => (
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
      d="M4.02606 15.3218C3.88036 14.428 4.35343 13.5478 5.17928 13.1762L25.1793 4.17621C25.937 3.83523 26.8267 3.99829 27.4142 4.58584C28.0018 5.1734 28.1648 6.06305 27.8238 6.82079L18.8238 26.8208C18.4522 27.6466 17.572 28.1197 16.6782 27.974C15.7844 27.8283 15.1 27.1002 15.0099 26.1991L14.1728 17.8273L5.801 16.9901C4.89988 16.9 4.17177 16.2157 4.02606 15.3218ZM6.00001 15.0001L15.1859 15.9186C15.6595 15.966 16.0341 16.3406 16.0814 16.8142L17 26.0001L26 6.00006L6.00001 15.0001Z"
      fill="currentColor"
    />
  </svg>
);

NavigationIcon.displayName = 'NavigationIcon';
