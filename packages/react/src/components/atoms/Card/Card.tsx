'use client';

import { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import { cardStyles, cardDividerClass } from './Card.styles';
import type { CardProps } from './Card.types';

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      $type = 'primary',
      header,
      children,
      footer,
      as: Element = 'div',
      className,
      ...props
    },
    ref,
  ) => {
    const hasHeader = header != null;
    const hasFooter = footer != null;

    return (
      <Element
        ref={ref}
        className={cn(cardStyles({ $type }), className)}
        {...(props as React.HTMLAttributes<HTMLElement>)}
      >
        {hasHeader && (
          <>
            <div className="card__header">{header}</div>
            <hr className={cardDividerClass} />
          </>
        )}

        <div className="card__content">{children}</div>

        {hasFooter && (
          <>
            <hr className={cardDividerClass} />
            <div className="card__footer">{footer}</div>
          </>
        )}
      </Element>
    );
  },
);

Card.displayName = 'Card';
