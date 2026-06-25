import { cn } from '../../../lib';
import { ShimmerProps } from './Shimmer.types';

export function Shimmer({ className = '' }: ShimmerProps) {
  return (
    <div
      className={cn(
        'gradient-mirrored-shimmer animate-bg animate-bg-left bg-linear-to-r rounded-x1',
        className,
      )}
    />
  );
}
