import React, { useState } from 'react';
import { PersonalInfoScreen, PersonalInfoData } from './PersonalInfoScreen';
import { CurpConfirmationSheet } from './CurpConfirmationSheet';
import { cn } from '../../../lib/utils';

export type PersonalInfoFlowStep =
  | 'personal-info'
  | 'curp-loading'
  | 'curp-error';

export interface PersonalInfoFlowProps {
  /** Initial step to start on */
  $initialStep?: PersonalInfoFlowStep;
  /** Current step number displayed in header (default: 2) */
  $step?: number;
  /** Total number of steps displayed in header (default: 5) */
  $totalSteps?: number;
  /** Called when the user taps the back button on the form */
  onBack?: () => void;
  /** Called when the user taps the close button */
  onClose?: () => void;
  /**
   * Called when the user submits the form and should trigger CURP lookup.
   * The flow automatically moves to 'curp-loading' after this.
   */
  onSubmit?: (data: PersonalInfoData) => void;
  /**
   * Called when the user confirms their CURP on the error screen.
   * Only fires when state is 'curp-error'.
   */
  onConfirmCurp?: () => void;
  /**
   * Called when the user taps "inicia sesión" in the CURP error message.
   * The host should navigate to the login flow.
   */
  onLoginRedirect?: () => void;
  /** Called when the user taps "Cómo protegemos tus datos" */
  onDataProtection?: () => void;
  /**
   * Simulated CURP value shown in the sheet (used in Storybook / demos).
   * In production this would come from an API response.
   */
  $mockCurp?: string;
  /**
   * Whether to auto-advance from loading → error for demo purposes.
   * Set to false when the host controls state externally.
   * @default true
   */
  $autoAdvanceDemo?: boolean;
  /** Extra class names */
  className?: string;
}

/**
 * PersonalInfoFlow
 *
 * Orchestrates:
 *  1. PersonalInfoScreen — "Queremos conocerte" form
 *  2. CurpConfirmationSheet (loading) — slides up while looking up CURP
 *  3. CurpConfirmationSheet (error)   — shows CURP with error state
 */
export const PersonalInfoFlow = ({
  $initialStep = 'personal-info',
  $step = 2,
  $totalSteps = 5,
  onBack,
  onClose,
  onSubmit,
  onConfirmCurp,
  onLoginRedirect,
  onDataProtection,
  $mockCurp = 'RIVA831125MCHLRS09',
  $autoAdvanceDemo = true,
  className,
}: PersonalInfoFlowProps) => {
  const [step, setStep] = useState<PersonalInfoFlowStep>($initialStep);

  const handleContinue = (data: PersonalInfoData) => {
    onSubmit?.(data);
    setStep('curp-loading');

    // Demo: auto-advance loading → error after 1.8 s
    if ($autoAdvanceDemo) {
      setTimeout(() => setStep('curp-error'), 1800);
    }
  };

  const handleSheetBack = () => {
    setStep('personal-info');
  };

  const handleConfirmCurp = () => {
    onConfirmCurp?.();
  };

  const isSheetVisible = step === 'curp-loading' || step === 'curp-error';
  const sheetState = step === 'curp-error' ? 'error' : 'loading';

  return (
    <div
      className={cn(
        'tw relative w-full min-h-screen overflow-hidden bg-background-primary',
        className
      )}
    >
      {/* ── Form screen ────────────────────────────────────────────── */}
      <PersonalInfoScreen
        $step={$step}
        $totalSteps={$totalSteps}
        onBack={onBack}
        onClose={onClose}
        onContinue={handleContinue}
        onDataProtection={onDataProtection}
      />

      {/* ── CURP confirmation sheet ─────────────────────────────────── */}
      <CurpConfirmationSheet
        $visible={isSheetVisible}
        $state={sheetState}
        $curp={step === 'curp-error' ? $mockCurp : ''}
        $errorMessage={
          step === 'curp-error' ? (
            <>
              Esta CURP ya está asociada a d•••••@g•••••.com. Para continuar,{' '}
              <button
                type="button"
                className="underline font-semibold"
                onClick={onLoginRedirect}
              >
                inicia sesión.
              </button>
            </>
          ) : undefined
        }
        onBack={handleSheetBack}
        onConfirm={handleConfirmCurp}
      />
    </div>
  );
};

PersonalInfoFlow.displayName = 'PersonalInfoFlow';
