import React from 'react';
import { cn } from '../../../lib/utils';
import { CircularProgressProps } from './CircularProgress.types';

export const CircularProgress: React.FC<CircularProgressProps> = ({
  $size: size = 'md',
  $visible: visible = true,
  $className: className,
  $speed: speed,
  $show: show = true,
  $variant: variant = 'default',
  ...props
}) => {
  const idRef = React.useRef<string>();
  if (!idRef.current) {
    idRef.current = `cp-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }
  const uniqueClipId = `clip-${idRef.current}`;

  if (!visible || !show) {
    return null;
  }

  // Size mapping to pixels
  const sizeMap = {
    xs: 12,
    sm: 16,
    md: 32,
    lg: 40,
    xl: 48,
  };

  const svgSize = sizeMap[size];
  const gradient = variant === 'inverted' ? 'gradient-spinner-white' : 'gradient-spinner-blue';

  return (
    <div
      className={cn('inline-flex items-center justify-center', className)}
      role="status"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={svgSize}
        height={svgSize}
        viewBox="0 0 32 32"
        fill="none"
        className="animate-spin"
        style={speed !== undefined ? {
          animationDuration: `${speed}s`,
        } : undefined}
        aria-hidden="true"
      >
        <defs>
          <clipPath id={uniqueClipId}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 17.1046 29.1046 18 28 18C26.8954 18 26 17.1046 26 16C26 14.0222 25.4135 12.0888 24.3147 10.4443C23.2159 8.79981 21.6541 7.51809 19.8268 6.76121C17.9996 6.00433 15.9889 5.8063 14.0491 6.19215C12.1093 6.57801 10.3275 7.53041 8.92893 8.92894C7.53041 10.3275 6.578 12.1093 6.19215 14.0491C5.8063 15.9889 6.00433 17.9996 6.76121 19.8268C7.51808 21.6541 8.79981 23.2159 10.4443 24.3147C12.0888 25.4135 14.0222 26 16 26V30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12531 23.9157 3.06569 21.3576C2.00606 18.7994 1.72881 15.9845 2.26901 13.2687C2.8092 10.553 4.14257 8.05845 6.10051 6.10051C8.05844 4.14258 10.553 2.80921 13.2687 2.26901Z"
            />
          </clipPath>
        </defs>

        {/* Use foreignObject to apply CSS conic-gradient like Figma */}
        <g clipPath={`url(#${uniqueClipId})`}>
          <foreignObject x="0" y="0" width="32" height="32">
            <div className={`w-full h-full bg-conic-105 ${gradient}`} />
          </foreignObject>
        </g>
      </svg>
    </div>
  );
};
