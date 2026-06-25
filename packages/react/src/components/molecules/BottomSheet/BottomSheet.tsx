import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { BottomSheetProps } from './BottomSheet.types';
import { cn } from '../../../lib/utils';
import { sheetStyles, positionerStyles, backdropStyles } from './BottomSheet.styles';
import { useBottomSheet } from './useBottomSheet';

const DragHandler = () => (
  <div className="w-full flex-shrink-0 flex justify-center p-4 touch-none md:hidden">
    <div className="w-8 h-1 bg-stroke-tertiary rounded-full" />
  </div>
);

export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(({ $isOpen, children, className, $onClose, ...props }, ref) => {
  const { mounted, animatedOpen } = useBottomSheet($isOpen, 300);

  if (!mounted) return null;

  return createPortal(
    <div className={cn(positionerStyles({ $isOpen: animatedOpen }))}>
      <div
        className={cn(backdropStyles({ $isOpen: animatedOpen }))}
        data-testid="bottom-sheet-backdrop"
        onClick={$onClose}
        onKeyDown={undefined}
        tabIndex={0}
        role="button"
        aria-label="Close Bottom Sheet"
      />
      <div ref={ref} className={cn(sheetStyles({ $isOpen: animatedOpen }), className)} {...props}>
        <DragHandler />
        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
});

BottomSheet.displayName = 'BottomSheet';
