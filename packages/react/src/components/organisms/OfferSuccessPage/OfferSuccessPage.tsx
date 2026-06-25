import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../../lib/utils';
import Image from './Image';
import type { OfferSuccessPageDetailProps } from './OfferSuccessPage.types';

type DivProps = HTMLAttributes<HTMLDivElement>;
type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const OfferSuccessPageRoot = forwardRef<HTMLDivElement, DivProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-x8 px-x5 md:px-0 pb-x4 md:pb-0', className)} {...props}>
        {children}
      </div>
    );
  },
);

OfferSuccessPageRoot.displayName = 'OfferSuccessPage';

const Hero = ({ children, className, ...props }: DivProps) => (
  <div className={cn('flex flex-col items-center', className)} {...props}>
    {children}
  </div>
);

const Title = ({ children, className, ...props }: DivProps) => (
  <div
    className={cn('typo-headline-1 text-text-and-icons-primary text-center mt-x3 mb-x2', className)}
    {...props}
  >
    {children}
  </div>
);

const Subtitle = ({ children, className, ...props }: DivProps) => (
  <div
    className={cn('typo-body-1 text-text-and-icons-secondary text-center', className)}
    {...props}
  >
    {children}
  </div>
);

const Details = ({ children, className, ...props }: DivProps) => (
  <div className={cn('rounded-x3 bg-background-secondary-cool', className)} {...props}>
    {children}
  </div>
);

const Detail = ({ leading, trailing, className, ...props }: OfferSuccessPageDetailProps) => (
  <div className={cn('flex justify-between items-center', className)} {...props}>
    <span className="text-body-2 text-text-and-icons-secondary">{leading}</span>
    <span className="text-body-1 text-text-and-icons-primary">{trailing}</span>
  </div>
);

const Footer = ({ children, className, ...props }: DivProps) => (
  <div className={cn('mt-auto flex flex-col items-stretch [&>*]:[width:unset] gap-x4', className)} {...props}>
    {children}
  </div>
);

const Legal = ({ children, className, ...props }: ParagraphProps) => (
  <p className={cn('text-text-and-icons-secondary typo-meta [&_a]:underline', className)} {...props}>
    {children}
  </p>
);

export const OfferSuccessPage = Object.assign(OfferSuccessPageRoot, {
  Image,
  Hero,
  Title,
  Subtitle,
  Details,
  Detail,
  Footer,
  Legal,
});
