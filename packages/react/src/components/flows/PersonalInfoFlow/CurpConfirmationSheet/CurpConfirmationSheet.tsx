import React from 'react';
import { Button } from '../../../atoms/Button';
import { FieldBase } from '../../../atoms/FieldBase';
import { IdCardIcon } from '../../../atoms/Icons/IdCardIcon';
import { CircularProgress } from '../../../atoms/CircularProgress';
import { cn } from '../../../../lib/utils';

export type CurpConfirmationSheetState = 'loading' | 'error';

export interface CurpConfirmationSheetProps {
  /** Controls whether the sheet is visible (slides up when true) */
  $visible?: boolean;
  /** Current UI state of the sheet */
  $state?: CurpConfirmationSheetState;
  /** The CURP value shown in the field (populated after loading) */
  $curp?: string;
  /** Max character length for CURP (default: 18) */
  $curpMaxLength?: number;
  /** Error message shown below the CURP field */
  $errorMessage?: React.ReactNode;
  /** Called when the user taps "Atrás" */
  onBack?: () => void;
  /** Called when the user taps "Confirmar" */
  onConfirm?: () => void;
  /** Extra class names for the sheet */
  className?: string;
}

/**
 * CurpConfirmationSheet
 *
 * Android-style bottom sheet that slides up over the PersonalInfoScreen.
 * Shows two states:
 *  - loading: spinner in CURP field, buttons disabled
 *  - error:   filled CURP field with red error border, active buttons
 */
export const CurpConfirmationSheet = ({
  $visible = false,
  $state = 'loading',
  $curp = '',
  $curpMaxLength = 18,
  $errorMessage,
  onBack,
  onConfirm,
  className,
}: CurpConfirmationSheetProps) => {
  const isLoading = $state === 'loading';
  const isError = $state === 'error';
  const charCount = $curp.length;

  return (
    <>
      {/* ── Scrim ──────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-black transition-opacity duration-300 z-20',
          $visible ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={isLoading ? undefined : onBack}
      />

      {/* ── Sheet ──────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Confirma tu información"
        className={cn(
          'absolute bottom-0 left-0 right-0 z-30',
          'bg-background-primary rounded-t-[28px]',
          'px-5 pt-3 pb-6',
          'flex flex-col gap-5',
          'shadow-[0_-4px_32px_rgba(0,0,0,0.18)]',
          $visible
            ? 'translate-y-0 duration-[420ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]'
            : 'translate-y-full duration-[260ms] [transition-timing-function:cubic-bezier(0.4,0,1,1)]',
          'transition-transform',
          className
        )}
      >
        {/* Handle */}
        <div className="flex justify-center flex-shrink-0 -mt-1">
          <div className="w-10 h-1 rounded-full bg-border-primary" />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-1">
          <h2 className="typo-headline-3 text-text-and-icons-primary">
            Confirma tu información
          </h2>
          <p className="typo-body-1 text-text-and-icons-secondary">
            Revisa que tus datos estén correctos para que calculemos tu CURP automáticamente.
          </p>
        </div>

        {/* CURP field */}
        <div className="flex flex-col gap-1">
          <span className="typo-body-2 text-text-and-icons-primary font-semibold">CURP</span>

          <FieldBase.Layout $error={isError}>
            {/* ID card icon leading — only shown when not loading */}
            {!isLoading && (
              <FieldBase.Leading>
                <IdCardIcon $width={24} $height={24} />
              </FieldBase.Leading>
            )}

            <FieldBase.Box
              $error={isError}
              $hasLeading={!isLoading}
              $isEmpty={!$curp}
            >
              {isLoading ? (
                /* Loading state: spinner centered inside the box */
                <div className="flex items-center !justify-center h-full w-full">
                  <CircularProgress $size="sm" />
                </div>
              ) : (
                <input
                  id="curp"
                  type="text"
                  maxLength={$curpMaxLength}
                  readOnly
                  value={$curp}
                  aria-label="CURP"
                  aria-invalid={isError}
                />
              )}
            </FieldBase.Box>
          </FieldBase.Layout>

          {/* Character counter + error row */}
          <div className="flex items-start justify-between gap-2">
            {isError && $errorMessage ? (
              <p className="typo-body-2 text-status-negative flex-1">
                {$errorMessage}
              </p>
            ) : (
              <span />
            )}
            <span className="typo-meta text-text-and-icons-tertiary flex-shrink-0 ml-auto">
              {charCount}/{$curpMaxLength}
            </span>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex gap-3">
          <Button
            type="button"
            $variant="secondary"
            $fullWidth
            disabled={isLoading}
            onClick={onBack}
          >
            Atrás
          </Button>

          <Button
            type="button"
            $variant="primary"
            $fullWidth
            $loading={isLoading}
            disabled={isLoading}
            onClick={onConfirm}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </>
  );
};

CurpConfirmationSheet.displayName = 'CurpConfirmationSheet';
