import React from 'react';

interface CrossCircleIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const CrossCircleIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: CrossCircleIconProps) => (
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
      d="M20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929C20.3166 10.9024 19.6834 10.9024 19.2929 11.2929L16 14.5858L12.7071 11.2929C12.3166 10.9024 11.6834 10.9024 11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071L14.5858 16L11.2929 19.2929C10.9024 19.6834 10.9024 20.3166 11.2929 20.7071C11.6834 21.0976 12.3166 21.0976 12.7071 20.7071L16 17.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L17.4142 16L20.7071 12.7071Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z"
      fill="currentColor"
    />
  </svg>
);

CrossCircleIcon.displayName = 'CrossCircleIcon';
