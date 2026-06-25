import React from 'react';

interface StoreFilledIconProps extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const StoreFilledIcon = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: StoreFilledIconProps) => (
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
      d="M7.04073 4C5.66093 4 4.45819 4.93689 4.12353 6.27239L3.14229 10.1883C2.65098 12.149 3.47319 14.0689 4.97443 15.1373V25C4.97443 26.6569 6.3207 28 7.9814 28H24.0186C25.6793 28 27.0256 26.6569 27.0256 25V15.1373C28.5268 14.0689 29.349 12.149 28.8577 10.1883L27.8765 6.27239C27.5418 4.93689 26.3391 4 24.9593 4H7.04073ZM6.06833 6.75746C6.17988 6.3123 6.58079 6 7.04073 6H10.9883V10.7098C10.9883 12.5269 9.51184 14 7.69049 14C5.94466 14 4.66366 12.3631 5.08708 10.6734L6.06833 6.75746ZM26.9129 10.6734C27.3363 12.3631 26.0553 14 24.3095 14C22.4882 14 21.0117 12.5269 21.0117 10.7098V6H24.9593C25.4192 6 25.8201 6.3123 25.9317 6.75746L26.9129 10.6734ZM12.993 11V6H19.007V11C19.007 12.6569 17.6607 14 16 14C14.3393 14 12.993 12.6569 12.993 11ZM14.9977 18C13.8905 18 12.993 18.8954 12.993 20V26H19.007V20C19.007 18.8954 18.1095 18 17.0023 18H14.9977Z"
      fill="currentColor"
    />
  </svg>
);

StoreFilledIcon.displayName = 'StoreFilledIcon';
