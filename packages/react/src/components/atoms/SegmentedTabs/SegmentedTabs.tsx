import React from 'react';
import { cn } from '../../../lib/utils';
import {
  segmentedTabsRootStyles,
  segmentedTabsContainerStyles,
  segmentedTabsItemStyles,
} from './SegmentedTabs.styles';
import type { SegmentedTabsItemProps, SegmentedTabsProps } from './SegmentedTabs.types';

function SegmentedTabsItem({
  className,
  $selected = false,
  children,
  $text,
  $icon,
  ...rest
}: SegmentedTabsItemProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={$selected}
      className={cn(
        segmentedTabsItemStyles({ $selected }),
        className,
      )}
      {...rest}
    >
      {children ?? (
        <div className="flex flex-col items-center justify-center gap-x1 w-full overflow-hidden [&>svg]:w-[var(--spacing-x7)] [&>svg]:h-[var(--spacing-x7)]">
          {$icon}
          <span className="truncate whitespace-nowrap text-ellipsis text-center block w-full">
            {$text}
          </span>
        </div>
      )}
    </button>
  );
}

function SegmentedTabsComponent({
  className,
  children,
  $size,
  ...rest
}: SegmentedTabsProps) {
  return (
    <div role="tablist" className={cn(segmentedTabsRootStyles({ $size }), className)} {...rest}>
      <div className={cn(segmentedTabsContainerStyles({ $size }))}>
        {children}
      </div>
    </div>
  );
}

export const SegmentedTabs = Object.assign(SegmentedTabsComponent, {
  Item: SegmentedTabsItem,
});
