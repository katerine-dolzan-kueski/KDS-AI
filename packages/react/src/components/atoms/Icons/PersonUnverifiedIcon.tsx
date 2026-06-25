import React from 'react';

interface PersonUnverifiedIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const PersonUnverifiedIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: PersonUnverifiedIconProps) => (
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
      d="M13 14C15.7614 14 18 11.7614 18 9C18 6.23858 15.7614 4 13 4C10.2386 4 8 6.23858 8 9C8 11.7614 10.2386 14 13 14ZM13 12C14.6569 12 16 10.6569 16 9C16 7.34315 14.6569 6 13 6C11.3431 6 10 7.34315 10 9C10 10.6569 11.3431 12 13 12Z"
      fill="currentColor"
    />{' '}
    <path
      d="M21.2929 10.2929C21.6834 9.90237 22.3166 9.90237 22.7071 10.2929L24.5 12.0858L26.2929 10.2929C26.6834 9.90237 27.3166 9.90237 27.7071 10.2929C28.0976 10.6834 28.0976 11.3166 27.7071 11.7071L25.9142 13.5L27.7071 15.2929C28.0976 15.6834 28.0976 16.3166 27.7071 16.7071C27.3166 17.0976 26.6834 17.0976 26.2929 16.7071L24.5 14.9142L22.7071 16.7071C22.3166 17.0976 21.6834 17.0976 21.2929 16.7071C20.9024 16.3166 20.9024 15.6834 21.2929 15.2929L23.0858 13.5L21.2929 11.7071C20.9024 11.3166 20.9024 10.6834 21.2929 10.2929Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 26C4 27.1046 4.89543 28 6 28H20C21.1046 28 22 27.1046 22 26V25C22 20.0294 17.9706 16 13 16C8.02944 16 4 20.0294 4 25V26ZM6 25V26H20V25C20 21.134 16.866 18 13 18C9.13401 18 6 21.134 6 25Z"
      fill="currentColor"
    />
  </svg>
);

PersonUnverifiedIcon.displayName = 'PersonUnverifiedIcon';
