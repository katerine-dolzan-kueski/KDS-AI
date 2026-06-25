import React from 'react';

interface ShoppingBagFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ShoppingBagFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ShoppingBagFilledIconProps) => (
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
      d="M15.9999 3C13.4455 3 11.3197 4.96251 11.116 7.50879L11.0767 8H8.89201C7.29981 8 5.98495 9.24384 5.89663 10.8336L5.11885 24.8336C5.02332 26.5532 6.39198 28 8.11423 28H23.8858C25.6081 28 26.9768 26.5532 26.8812 24.8336L26.1034 10.8336C26.0151 9.24384 24.7003 8 23.1081 8H20.9231L20.8838 7.50879C20.6801 4.96252 18.5543 3 15.9999 3ZM18.9167 8L18.8902 7.66828C18.7697 6.16141 17.5116 5 15.9999 5C14.4883 5 13.2302 6.16141 13.1097 7.66828L13.0831 8H18.9167ZM11.1162 13.4912C11.3199 16.0375 13.4456 18 16.0001 18C18.5545 18 20.6802 16.0375 20.8839 13.4912L20.9969 12.0797C21.0409 11.5292 20.6303 11.0472 20.0798 11.0032C19.5293 10.9591 19.0473 11.3697 19.0032 11.9203L18.8903 13.3317C18.7698 14.8386 17.5117 16 16.0001 16C14.4884 16 13.2303 14.8386 13.1098 13.3317L12.9969 11.9203C12.9528 11.3697 12.4708 10.9591 11.9203 11.0032C11.3698 11.0472 10.9592 11.5292 11.0032 12.0797L11.1162 13.4912Z"
      fill="currentColor"
    />
  </svg>
);

ShoppingBagFilledIcon.displayName = 'ShoppingBagFilledIcon';
