'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';
import { OnboardingScreen } from './OnboardingScreen';
import { CreateAccountScreen } from './CreateAccountScreen';
import { VerifyPhoneScreen } from './VerifyPhoneScreen';

// ── Step type ─────────────────────────────────────────────────────────────────

export type RegistrationFlowStep = 'onboarding' | 'create-account' | 'verify-phone';

// ── Props ─────────────────────────────────────────────────────────────────────

export interface RegistrationFlowProps {
  /**
   * Override the initial step.
   * Useful for deep-linking into a specific step during development/testing.
   * @default 'onboarding'
   */
  initialStep?: RegistrationFlowStep;

  // ── Onboarding callbacks ──────────────────────────────────
  /** Called when the user taps "Iniciar sesión" on the Onboarding screen */
  onLogin?: () => void;
  /** Called when the user taps the DataProtectionBadge */
  onDataProtection?: () => void;

  // ── CreateAccount callbacks ───────────────────────────────
  /** Called when the user taps "Continuar con Passkey" */
  onPasskey?: () => void;
  /** Called when the user taps "aviso de privacidad" */
  onPrivacyPolicy?: () => void;
  /** Called when the user taps "términos y condiciones" */
  onTerms?: () => void;

  // ── VerifyPhone callbacks ─────────────────────────────────
  /** Called when the user taps "Enviar por SMS" */
  onSendSms?: () => void;
  /** Called when the user requests a new OTP code */
  onResend?: () => void;
  /**
   * Optional function to validate the OTP code via API.
   * If provided, it's called before `onRegistrationComplete`.
   * Should throw or return a rejected Promise on failure — the flow will
   * surface an error message on the OTP input.
   */
  onVerifyCode?: (code: string) => Promise<void>;
  /**
   * Called when registration is fully complete (OTP verified).
   * Receives the phone number and OTP code.
   */
  onRegistrationComplete?: (payload: { phone: string; code: string }) => void;

  /** Called when the user closes the flow from any screen */
  onClose?: () => void;

  className?: string;
}

// ── Orchestrator ──────────────────────────────────────────────────────────────

/**
 * RegistrationFlow
 *
 * Orchestrates the three-step registration flow:
 *   1. OnboardingScreen    → carousel introduction
 *   2. CreateAccountScreen → phone number entry
 *   3. VerifyPhoneScreen   → OTP verification
 *
 * Screens slide horizontally: left = previous, right = future.
 */
export function RegistrationFlow({
  initialStep = 'onboarding',
  onLogin,
  onDataProtection,
  onPasskey,
  onPrivacyPolicy,
  onTerms,
  onSendSms,
  onResend,
  onVerifyCode,
  onRegistrationComplete,
  onClose,
  className,
}: RegistrationFlowProps) {
  const [step, setStep] = useState<RegistrationFlowStep>(initialStep);
  const [phone, setPhone] = useState('');
  const [verifyError, setVerifyError] = useState<string | undefined>();

  const STEPS: RegistrationFlowStep[] = ['onboarding', 'create-account', 'verify-phone'];

  const translateFor = (s: RegistrationFlowStep) => {
    const current = STEPS.indexOf(step);
    const target  = STEPS.indexOf(s);
    if (current === target) return 'translate-x-0';
    return target < current ? '-translate-x-full' : 'translate-x-full';
  };

  const handleCreateAccount = () => setStep('create-account');

  const handlePhoneContinue = (p: string) => {
    setPhone(p);
    setVerifyError(undefined);
    setStep('verify-phone');
  };

  const handleVerify = async (code: string) => {
    setVerifyError(undefined);
    try {
      await onVerifyCode?.(code);
      onRegistrationComplete?.({ phone, code });
    } catch {
      setVerifyError('Código incorrecto. Intenta de nuevo.');
    }
  };

  const handleBack = () => {
    if (step === 'verify-phone') setStep('create-account');
    else if (step === 'create-account') setStep('onboarding');
  };

  return (
    <div
      data-step={step}
      className={cn('relative w-full min-h-screen overflow-hidden', className)}
    >
      {/* ── Screen 1: Onboarding ──────────────────────────────────── */}
      <div
        aria-hidden={step !== 'onboarding'}
        className={cn(
          'absolute inset-0 transition-transform duration-[350ms] ease-in-out will-change-transform',
          translateFor('onboarding'),
        )}
      >
        <OnboardingScreen
          onCreateAccount={handleCreateAccount}
          onLogin={onLogin}
          onDataProtection={onDataProtection}
        />
      </div>

      {/* ── Screen 2: Create account ──────────────────────────────── */}
      <div
        aria-hidden={step !== 'create-account'}
        className={cn(
          'absolute inset-0 transition-transform duration-[350ms] ease-in-out will-change-transform',
          translateFor('create-account'),
        )}
      >
        <CreateAccountScreen
          onContinue={handlePhoneContinue}
          onPasskey={onPasskey}
          onClose={onClose}
          onPrivacyPolicy={onPrivacyPolicy}
          onTerms={onTerms}
        />
      </div>

      {/* ── Screen 3: Verify phone ────────────────────────────────── */}
      <div
        aria-hidden={step !== 'verify-phone'}
        className={cn(
          'absolute inset-0 transition-transform duration-[350ms] ease-in-out will-change-transform',
          translateFor('verify-phone'),
        )}
      >
        <VerifyPhoneScreen
          phone={phone}
          onVerify={handleVerify}
          onSendSms={onSendSms}
          onResend={onResend}
          onBack={handleBack}
          onClose={onClose}
          errorMessage={verifyError}
        />
      </div>
    </div>
  );
}

RegistrationFlow.displayName = 'RegistrationFlow';
