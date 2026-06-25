import { type PropsOf } from '../../../lib/types';
import { cn, CrossIcon, KueskiColoredLogo, Header, useBreakpoint } from '../../..';
import { FunnelLayoutDesktopHeaderProps, FunnelLayoutPageHeaderProps } from './FunnelLayout.types';

function FunnelLayoutRoot({ children, className, ...props }: PropsOf<'div'>) {
  return (
    <div
      id="funnel-layout"
      className={cn(
        'tw relative bg-background-tertiary-warm h-dvh overflow-auto',
        'flex flex-col md:items-center md:gap-x8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function DesktopHeader({
  $onCancel,
  children,
  className,
  $leadingProps,
  $trailingProps,
  ...props
}: FunnelLayoutDesktopHeaderProps) {
  const isMd = useBreakpoint('md');
  if (!isMd) return null;

  return (
    <Header
      $anchor="#funnel-layout"
      $variant="title"
      $align="center"
      className={cn('bg-background-tertiary-warm [--mb:var(--spacing-x3)] px-30!', className)}
      $scrolledClassNames="bg-background-primary [--mb:var(--spacing-x1)]"
      $leading={
        <KueskiColoredLogo
          {...$leadingProps}
          className={cn(
            'shrink-0 w-[119px]! [margin-bottom:var(--mb)] transition-[margin-bottom] duration-300',
            $leadingProps?.className
          )}
        />
      }
      $trailing={
        <button
          {...$trailingProps}
          // eslint-disable-next-line react/button-has-type
          type={$trailingProps?.type ?? 'button'}
          className={cn('cursor-pointer ml-[calc(119px-2rem)]', $trailingProps?.className)}
          onClick={(event) => {
            $trailingProps?.onClick?.(event);
            $onCancel();
          }}
        >
          <CrossIcon />
        </button>
      }
      {...props}
    >
      <div className="typo-body-1-emphasized">
        {children}
      </div>
    </Header>
  );
}

function Page({ children, className, ...props }: PropsOf<'main'>) {
  return (
    <main
      className={cn(
        'bg-background-primary flex flex-col flex-1',
        'md:p-18 md:rounded-3xl md:w-[584px] md:mb-x8 md:flex-[unset]',
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}

function PageHeader({ children, className, $onCancel, $closeButtonProps: closeButtonProps, ...props }: FunnelLayoutPageHeaderProps) {
  return (
    <header
      className={cn('text-text-and-icons-primary flex justify-between md:justify-center items-center px-x5 py-x4 md:p-x5', className)}
      {...props}
    >
      <div className="typo-headline-2 md:typo-headline-1">
        {children}
      </div>
      <button
        type="button"
        {...closeButtonProps}
        className={cn("md:hidden cursor-pointer", closeButtonProps?.className)}
        onClick={(event) => {
          closeButtonProps?.onClick?.(event);
          $onCancel();
        }}
      >
        <CrossIcon className="size-8" />
      </button>
    </header>
  );
}

function PageFooter({ children, className, ...props }: PropsOf<'footer'>) {
  return (
    <footer
      className={cn(
        'mt-auto sticky bottom-0 bg-background-primary',
        'md:static md:bg-transparent z-1',
        className
      )}
      {...props}
    >
      {children}
    </footer>
  );
}

export const FunnelLayout = Object.assign(FunnelLayoutRoot, { DesktopHeader, Page, PageHeader, PageFooter });
