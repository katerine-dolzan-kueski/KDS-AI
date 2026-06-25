import React from 'react';

interface BankIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const BankIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: BankIconProps) => (
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
      d="M16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"
      fill="currentColor"
    />{' '}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6325 4.15671C16.2219 4.01987 15.7781 4.01987 15.3675 4.15671L4.36754 7.82338C3.55086 8.09561 3 8.85988 3 9.72074V12C3 13.1046 3.89543 14 5 14H7V22H5.78077C4.86304 22 4.06307 22.6246 3.84049 23.5149L3.34049 25.5149C3.02491 26.7772 3.97963 28 5.28077 28H26.7192C28.0204 28 28.9751 26.7772 28.6595 25.5149L28.1595 23.5149C27.9369 22.6246 27.137 22 26.2192 22H25V14H27C28.1046 14 29 13.1046 29 12V9.72074C29 8.85988 28.4491 8.09561 27.6325 7.82338L16.6325 4.15671ZM23 22V14H21V22H23ZM19 22V14H17V22H19ZM15 22V14H13V22H15ZM11 22V14H9V22H11ZM5.78077 24L5.28077 26H26.7192L26.2192 24H5.78077ZM16 6.05408L27 9.72074V12H5V9.72074L16 6.05408Z"
      fill="currentColor"
    />
  </svg>
);

BankIcon.displayName = 'BankIcon';
