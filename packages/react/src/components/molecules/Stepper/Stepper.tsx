import React from 'react';
import { cn } from '../../../lib';
import { connectorStyles, iconWrapperStyles } from './Stepper.styles';
import { ConnectorProps, StepperItemProps, StepperProps } from './Stepper.types';

function Connector({ $variant, $visible = true }: ConnectorProps) {
  return (
    <div className={cn(connectorStyles({ $variant, $visible }))} />
  );
}

function Item({
  $hasNext, $hasPrev, $icon, $children, $description, $title, className }: StepperItemProps,
) {
  return (
    <div className={cn(className, 'flex gap-x4 items-stretch')}>
      {/* Icon frame */}
      <div className="flex flex-col items-center gap-x1">
        <Connector $variant="fill" $visible={$hasPrev} />
        <div className={iconWrapperStyles({ $numeric: typeof $icon === 'number' })}>
          {$icon}
        </div>
        <Connector $variant="fill" $visible={$hasNext} />
      </div>
      {/* Text frame */}
      <div>
        {$title && (
          <div className="typo-body-2-emphasized text-text-and-icons-secondary">
            {$title}
          </div>
        )}
        {$description && (
          <div className="typo-body-2 text-text-and-icons-tertiary">
            {$description}
          </div>
        )}
        {$children}
      </div>
    </div>
  );
}

function StepperBase({ $items, className }: StepperProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {$items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          <Item
            $icon={item.icon}
            $hasNext={index < $items.length - 1}
            $hasPrev={index > 0}
            $title={item.title}
            $description={item.description}
          />
          {index < $items.length - 1 && <Connector $variant="space" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export const Stepper = Object.assign(StepperBase, { Item, Connector });
