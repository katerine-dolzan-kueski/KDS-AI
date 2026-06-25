import React from 'react';

interface SearchFailureIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const SearchFailureIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: SearchFailureIconProps) => (
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
      d="M17.293 10.293C17.6835 9.90244 18.3165 9.90244 18.707 10.293C19.0975 10.6835 19.0975 11.3165 18.707 11.707L16.4141 14L18.707 16.293L18.7754 16.3691C19.0957 16.7619 19.0731 17.3409 18.707 17.707C18.3409 18.0731 17.7619 18.0957 17.3691 17.7754L17.293 17.707L15 15.4141L12.707 17.707L12.6309 17.7754C12.2381 18.0957 11.6591 18.0731 11.293 17.707C10.9269 17.3409 10.9043 16.7619 11.2246 16.3691L11.293 16.293L13.5859 14L11.293 11.707C10.9025 11.3165 10.9025 10.6835 11.293 10.293C11.6835 9.90244 12.3165 9.90244 12.707 10.293L15 12.5859L17.293 10.293Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 5C19.9706 5 24 9.02944 24 14C24 16.3799 23.074 18.542 21.5654 20.1514L26.6318 25.2178C27.0224 25.6083 27.0224 26.2413 26.6318 26.6318C26.2413 27.0223 25.6083 27.0223 25.2178 26.6318L20.041 21.4551C18.6027 22.4296 16.8682 23 15 23C10.0294 23 6 18.9706 6 14C6 9.02944 10.0294 5 15 5ZM15 7C11.134 7 8 10.134 8 14C8 17.866 11.134 21 15 21C18.866 21 22 17.866 22 14C22 10.134 18.866 7 15 7Z"
      fill="currentColor"
    />
  </svg>
);

SearchFailureIcon.displayName = 'SearchFailureIcon';
