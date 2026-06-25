import React from 'react';

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const SearchIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: SearchIconProps) => (
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
      d="M15 5C19.9706 5 24 9.02944 24 14C24 16.3799 23.074 18.542 21.5654 20.1514L26.6318 25.2178C27.0224 25.6083 27.0224 26.2413 26.6318 26.6318C26.2413 27.0224 25.6083 27.0224 25.2178 26.6318L20.041 21.4551C18.6027 22.4296 16.8682 23 15 23C10.0294 23 6 18.9706 6 14C6 9.02944 10.0294 5 15 5ZM15 7C11.134 7 8 10.134 8 14C8 17.866 11.134 21 15 21C18.866 21 22 17.866 22 14C22 10.134 18.866 7 15 7Z"
      fill="currentColor"
    />
  </svg>
);

SearchIcon.displayName = 'SearchIcon';
