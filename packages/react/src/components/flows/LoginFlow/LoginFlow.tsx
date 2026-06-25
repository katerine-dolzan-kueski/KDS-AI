import React, { useState } from 'react';
import { LoginScreen } from './LoginScreen';
import { BiometricsScreen } from './BiometricsScreen';
import { BiometricsSystemPromptScreen } from './BiometricsSystemPromptScreen';
import { BiometricsSuccessScreen } from './BiometricsSuccessScreen';
import { cn } from '../../../lib/utils';

export type LoginFlowStep = 'login' | 'biometrics' | 'android-prompt' | 'success';

export interface LoginFlowProps {
  /**
   * Override the initial step (default: 'login').
   * Useful for deep-linking into a specific step during development.
   */
  initialStep?: LoginFlowStep;

  // ── LoginScreen callbacks ──────────────────────────────────
  /** Called when the user closes the login sheet */
  onLoginClose?: () => void;
  /** Called when the user taps "Crear cuenta" */
  onCreateAccount?: () => void;
  /** Called when the user taps "Olvidaste tu contraseña" */
  onForgotPassword?: () => void;

  // ── BiometricsScreen callbacks ─────────────────────────────
  /** Called when the user taps "Activar" on the biometrics screen */
  onBiometricsActivate?: () => void;
  /** Called when the user taps "Ahora no" or closes the biometrics screen */
  onBiometricsSkip?: () => void;

  // ── BiometricsSuccessScreen callbacks ─────────────────────
  /** Called when the user taps "Entendido" on the success screen */
  onSuccess?: () => void;

  /** Extra class names for the outermost container */
  className?: string;
}

/**
 * LoginFlow
 *
 * Orchestrates the four-step authentication flow:
 *   1. LoginScreen              → user enters email + password
 *   2. BiometricsScreen         → slides in from the right after login
 *   3. BiometricsSystemPrompt   → Android OS bottom sheet slides up over Biometrics
 *   4. BiometricsSuccessScreen  → slides in from the right after prompt is dismissed
 *
 * Steps 1 → 2 use horizontal slide transitions (translateX).
 * Step 3 (android-prompt) is an overlay on top of step 2; it slides up vertically.
 * Step 4 slides in from the right once the prompt is dismissed.
 */
export const LoginFlow = ({
  initialStep = 'login',
  onLoginClose,
  onCreateAccount,
  onForgotPassword,
  onBiometricsActivate,
  onBiometricsSkip,
  onSuccess,
  className,
}: LoginFlowProps) => {
  const [step, setStep] = useState<LoginFlowStep>(initialStep);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async (_email: string, _password: string) => {
    // Simulate an async auth call; replace with real API call.
    setLoginLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoginLoading(false);
    setStep('biometrics');
  };

  const handleActivate = () => {
    // Show the Android system prompt overlay
    setStep('android-prompt');
    onBiometricsActivate?.();
  };

  const handlePromptCancel = () => {
    // Dismiss the prompt, go back to biometrics
    setStep('biometrics');
  };

  const handlePromptSuccess = () => {
    // In a real app the OS would call this after fingerprint match.
    // Here we treat prompt cancel→success to allow flow demo.
    setStep('success');
  };

  // Determine horizontal position of each full-screen step
  const xPos = (s: LoginFlowStep) => {
    const order: LoginFlowStep[] = ['login', 'biometrics', 'android-prompt', 'success'];
    const current = order.indexOf(step === 'android-prompt' ? 'biometrics' : step);
    const target = order.indexOf(s === 'android-prompt' ? 'biometrics' : s);
    if (current === target) return 'translate-x-0';
    return target < current ? '-translate-x-full' : 'translate-x-full';
  };

  return (
    <div
      data-step={step}
      className={cn(
        'tw relative w-full min-h-screen overflow-hidden bg-background-tertiary-warm',
        className
      )}
    >
      {/* ── Screen 1: Login ──────────────────────────────────────── */}
      <div
        aria-hidden={step !== 'login'}
        className={cn(
          'absolute inset-0 transition-transform duration-[350ms] ease-in-out will-change-transform',
          xPos('login')
        )}
      >
        <LoginScreen
          onClose={onLoginClose}
          onLogin={handleLogin}
          onCreateAccount={onCreateAccount}
          onForgotPassword={onForgotPassword}
          $loading={loginLoading}
        />
      </div>

      {/* ── Screen 2: Biometrics (+ system prompt overlay) ───────── */}
      <div
        aria-hidden={step !== 'biometrics' && step !== 'android-prompt'}
        className={cn(
          'absolute inset-0 transition-transform duration-[350ms] ease-in-out will-change-transform',
          xPos('biometrics')
        )}
      >
        {/* Biometrics base screen */}
        <BiometricsScreen
          onClose={() => {
            setStep('login');
            onBiometricsSkip?.();
          }}
          onActivate={handleActivate}
          onSkip={() => {
            setStep('login');
            onBiometricsSkip?.();
          }}
        />

        {/* Android system prompt overlaid on top of biometrics */}
        <BiometricsSystemPromptScreen
          $visible={step === 'android-prompt'}
          onCancel={handlePromptCancel}
        />
      </div>

      {/* ── Screen 3 (hidden from user): prompt triggers success ─── */}
      {/*
        The "android-prompt" step is handled as an overlay above.
        A hidden button lets us advance to success in Storybook / tests.
        In production, the OS callback would call handlePromptSuccess().
      */}

      {/* ── Screen 4: Success ────────────────────────────────────── */}
      <div
        aria-hidden={step !== 'success'}
        className={cn(
          'absolute inset-0 transition-transform duration-[350ms] ease-in-out will-change-transform',
          step === 'success' ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <BiometricsSuccessScreen
          onConfirm={() => {
            onSuccess?.();
          }}
        />
      </div>
    </div>
  );
};

LoginFlow.displayName = 'LoginFlow';
