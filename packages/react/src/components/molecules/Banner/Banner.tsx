import React, { forwardRef, createContext, useContext, useMemo } from 'react';
import { cn } from '../../../lib/utils';
import { Card } from '../../atoms/Card';
import {
  InfoCircleFilledIcon,
  CheckmarkCircleFilledIcon,
  WarningFilledIcon,
  ErrorCircleFilledIcon,
  StarFilledIcon,
  CrossIcon,
} from '../../atoms/Icons';
import {
  bannerVariants,
  bannerIconVariants,
  bannerContentVariants,
  bannerCloseVariants,
  bannerTitleVariants,
  bannerBodyVariants,
  bannerAlternativeIconVariants,
  bannerAlternativeVariants,
} from './Banner.styles';
import type {
  BannerVariant,
  BannerProps,
  BannerIconProps,
  BannerContentProps,
  BannerTitleProps,
  BannerCloseProps,
  BannerBodyProps,
} from './Banner.types';

/**
 * Banner Context Value
 */
interface BannerContextValue {
  variant: BannerVariant;
  onClose?: () => void;
  isAlternative?: boolean;
}

const BannerContext = createContext<BannerContextValue | undefined>(undefined);

/**
 * Banner Context Hook
 *
 * @throws {Error} When used outside of Banner.Root
 */
const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error('Banner components must be used within Banner.Root');
  }
  return context;
};

// Icon mapping
const iconMap = {
  information: InfoCircleFilledIcon,
  success: CheckmarkCircleFilledIcon,
  warning: WarningFilledIcon,
  error: ErrorCircleFilledIcon,
  upsell: StarFilledIcon,
};

/**
 * Banner Root Component - Following Radix UI pattern
 *
 */
const BannerRoot = forwardRef<HTMLDivElement, BannerProps>(
  (
    { $variant, $outline = false, $alternative = false, onClose, className, children, ...props },
    ref,
  ) => {
    const contextValue: BannerContextValue = useMemo(
      () => ({
        variant: $variant,
        onClose,
        isAlternative: $alternative,
      }),
      [$variant, onClose, $alternative],
    );

    const bannerVariant = $alternative ? bannerAlternativeVariants : bannerVariants;

    return (
      <BannerContext.Provider value={contextValue}>
        <Card
          ref={ref}
          $variant="base"
          className={cn(bannerVariant({ $variant, $outline }), className)}
          {...props}
        >
          {children}
        </Card>
      </BannerContext.Provider>
    );
  },
);

BannerRoot.displayName = 'Banner.Root';

/**
 * Banner Icon Component - Auto-composes with Root
 */
const BannerIcon = forwardRef<HTMLDivElement, BannerIconProps>(
  ({ className, children, ...props }, ref) => {
    const { variant, isAlternative } = useBannerContext();
    const IconComponent = iconMap[variant];

    const bannerIconVariant = isAlternative ? bannerAlternativeIconVariants : bannerIconVariants;

    return (
      <div ref={ref} className={cn(bannerIconVariant({ $variant: variant }), className)} {...props}>
        {children || <IconComponent className="w-5 h-5" />}
      </div>
    );
  },
);

BannerIcon.displayName = 'Banner.Icon';

/**
 * Banner Content Component - Auto-composes with Root
 *
 */
const BannerContent = forwardRef<HTMLDivElement, BannerContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isAlternative } = useBannerContext();

    return (
      <div
        ref={ref}
        className={cn(bannerContentVariants({ $alternative: isAlternative }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

BannerContent.displayName = 'Banner.Content';

/**
 * Banner Title Component - Auto-composes with Content
 */
const BannerTitle = forwardRef<HTMLDivElement, BannerTitleProps>(
  ({ className, children, ...props }, ref) => {
    const { isAlternative } = useBannerContext();

    return (
      <div
        ref={ref}
        className={cn(bannerTitleVariants({ $alternative: isAlternative }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

BannerTitle.displayName = 'Banner.Title';

/**
 * Banner Body Component - Auto-composes with Content
 */
const BannerBody = forwardRef<HTMLDivElement, BannerBodyProps>(
  ({ className, children, ...props }, ref) => {
    const { isAlternative } = useBannerContext();

    return (
      <div
        ref={ref}
        className={cn(bannerBodyVariants({ $alternative: isAlternative }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

BannerBody.displayName = 'Banner.Body';

/**
 * Banner Close Component - Auto-composes with Root
 */
const BannerClose = forwardRef<HTMLButtonElement, BannerCloseProps>(
  ({ className, ...props }, ref) => {
    const { onClose, isAlternative } = useBannerContext();

    // Don't render if onClose is not provided
    if (!onClose) {
      return null;
    }

    const handleClose = () => {
      if (typeof onClose !== 'function') {
        return;
      }

      onClose();
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(bannerCloseVariants({ $alternative: isAlternative }), className)}
        onClick={handleClose}
        aria-label="Cerrar banner"
        {...props}
      >
        <CrossIcon className="w-5 h-5" />
      </button>
    );
  },
);

BannerClose.displayName = 'Banner.Close';

/**
 * Banner Component System - Following Radix UI composition pattern
 */
// Main Banner component with sub-components
export const Banner = Object.assign(BannerRoot, {
  Icon: BannerIcon,
  Content: BannerContent,
  Title: BannerTitle,
  Body: BannerBody,
  Close: BannerClose,
});
