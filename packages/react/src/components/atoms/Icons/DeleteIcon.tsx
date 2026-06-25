import React from 'react';

interface DeleteIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const DeleteIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: DeleteIconProps) => (
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
      d="M12.1045 14.2036C12.0468 13.6544 12.4453 13.1623 12.9945 13.1046C13.5438 13.0468 14.0358 13.4453 14.0936 13.9946L14.7207 19.9617C14.7785 20.511 14.38 21.003 13.8307 21.0608C13.2815 21.1185 12.7894 20.72 12.7317 20.1708L12.1045 14.2036Z"
      fill="currentColor"
    />{' '}
    <path
      d="M19.0055 13.1046C19.5547 13.1623 19.9532 13.6544 19.8955 14.2036L19.2683 20.1708C19.2106 20.72 18.7185 21.1185 18.1693 21.0608C17.62 21.003 17.2215 20.511 17.2793 19.9617L17.9064 13.9946C17.9642 13.4453 18.4562 13.0468 19.0055 13.1046Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 7V6C21 4.34315 19.6569 3 18 3H14C12.3431 3 11 4.34315 11 6V7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H6.09974L7.69144 24.1212C7.92354 26.3261 9.78288 28 12 28H20C22.2171 28 24.0765 26.3261 24.3086 24.1212L25.9003 9H27C27.5523 9 28 8.55228 28 8C28 7.44772 27.5523 7 27 7H21ZM18 5H14C13.4477 5 13 5.44772 13 6V7H19V6C19 5.44772 18.5523 5 18 5ZM23.8892 9H8.11079L9.68045 23.9118C9.8054 25.0988 10.8064 26 12 26H20C21.1936 26 22.1946 25.0988 22.3195 23.9118L23.8892 9Z"
      fill="currentColor"
    />
  </svg>
);

DeleteIcon.displayName = 'DeleteIcon';
