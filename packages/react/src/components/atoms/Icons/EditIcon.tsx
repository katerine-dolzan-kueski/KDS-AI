import React from 'react';

interface EditIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const EditIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: EditIconProps) => (
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
      d="M25.6275 4.99994L27.0417 6.41416C28.6038 7.97625 28.6038 10.5089 27.0417 12.071L13.3499 25.7628C12.9142 26.1986 12.3548 26.4896 11.7479 26.5962L7.57034 27.3304C5.85289 27.6322 4.36184 26.1274 4.67944 24.4128L5.44678 20.2702C5.55731 19.6736 5.84619 19.1244 6.27528 18.6953L19.9707 4.99994C21.5328 3.43784 24.0654 3.43785 25.6275 4.99994ZM6.64599 24.777L7.41333 20.6345C7.45017 20.4356 7.54646 20.2526 7.68949 20.1095L7.79909 19.9999H8.00008C10.2092 19.9999 12.0001 21.7908 12.0001 23.9999V24.2842L11.9357 24.3486C11.7905 24.4939 11.604 24.5909 11.4017 24.6264L7.22417 25.3606C6.88068 25.4209 6.58247 25.12 6.64599 24.777ZM13.8056 22.4788L22.7991 13.4852L18.5564 9.24259L9.587 18.212C11.647 18.7756 13.2648 20.4094 13.8056 22.4788ZM24.2133 12.071L19.9707 7.82838L21.3849 6.41416C22.1659 5.63311 23.4323 5.63311 24.2133 6.41416L25.6275 7.82837C26.4086 8.60942 26.4086 9.87575 25.6275 10.6568L24.2133 12.071Z"
      fill="currentColor"
    />
  </svg>
);

EditIcon.displayName = 'EditIcon';
