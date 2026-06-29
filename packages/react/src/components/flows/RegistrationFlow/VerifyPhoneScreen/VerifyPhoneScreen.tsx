'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/utils/cn';
import { Button } from '../../../atoms/Button';
import { OTPInput } from '../../../atoms/OTPInput';
import { NavigationHeader } from '../../../organisms/NavigationHeader';
import { SectionHeader } from '../../../molecules/SectionHeader';
import { Footer } from '../../../organisms/Footer';
import { ChevronLeftOffsetIcon } from '../../../atoms/Icons/ChevronLeftOffsetIcon';
import { CrossIcon } from '../../../atoms/Icons/CrossIcon';

// ── Resend countdown ──────────────────────────────────────────────────────────

const RESEND_SECONDS = 42;

interface ResendCountdownProps {
  onResend: () => void;
}

function ResendCountdown({ onResend }: ResendCountdownProps) {
  const [seconds, setSeconds] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = window.setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  if (seconds > 0) {
    return (
      <p className="typo-body-1 text-[var(--color-text-and-icons-tertiary)]">
        Reenviar código en {mm}:{ss}
      </p>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setSeconds(RESEND_SECONDS);
        onResend();
      }}
      className="typo-body-1 text-[var(--color-text-and-icons-brand)] underline underline-offset-2 cursor-pointer bg-transparent border-0 p-0"
    >
      Reenviar código
    </button>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface VerifyPhoneScreenProps {
  /** Phone number the code was sent to — shown in the subtitle */
  phone: string;
  /** Called when the user submits a valid 6-digit code */
  onVerify?: (code: string) => void;
  /** Called when the user taps "Enviar por SMS" */
  onSendSms?: () => void;
  /** Called when the resend timer expires and the user taps "Reenviar código" */
  onResend?: () => void;
  /** Called when the user taps the ← back button */
  onBack?: () => void;
  /** Called when the user taps the × close button */
  onClose?: () => void;
  /** Optional external error message (e.g. from a failed verification API call) */
  errorMessage?: string;
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function VerifyPhoneScreen({
  phone,
  onVerify,
  onSendSms,
  onResend,
  onBack,
  onClose,
  errorMessage,
  className,
}: VerifyPhoneScreenProps) {
  const [code, setCode] = useState('');
  const isComplete = code.length === 6;

  const handleVerify = useCallback(() => {
    if (isComplete) onVerify?.(code);
  }, [code, isComplete, onVerify]);

  // Format phone number for display: +52 123 456 789
  const formattedPhone = phone.startsWith('+')
    ? phone
    : `+52 ${phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}`;

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-[var(--color-background-primary)]',
        className,
      )}
    >
      {/* ── Navigation header — back + close ────────────────────── */}
      <NavigationHeader
        $type="main"
        leftIcon={
          <button
            type="button"
            aria-label="Regresar"
            className="flex items-center justify-center size-8 rounded-full"
            onClick={onBack}
          >
            <ChevronLeftOffsetIcon className="size-8 text-[var(--color-text-and-icons-primary)]" />
          </button>
        }
        rightIcon={
          <button
            type="button"
            aria-label="Cerrar"
            className="flex items-center justify-center size-8 rounded-full"
            onClick={onClose}
          >
            <CrossIcon className="size-6 text-[var(--color-text-and-icons-primary)]" />
          </button>
        }
      />

      {/* ── Scrollable body ─────────────────────────────────────── */}
      <main className="flex-1 flex flex-col gap-[var(--spacing-x5)] p-[var(--spacing-x5)] overflow-y-auto">
        {/* Section header */}
        <SectionHeader
          $title="Verifica tu número"
          $size="h2"
          $alignment="left"
        >
          {`Ingresa el código de verificación que te enviamos a ${formattedPhone}.`}
        </SectionHeader>

        {/* OTP input */}
        <OTPInput
          value={code}
          onChange={setCode}
          onComplete={handleVerify}
          $error={!!errorMessage}
          errorMessage={errorMessage}
          resendNode={
            <ResendCountdown onResend={() => onResend?.()} />
          }
        />
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <Footer
        $buttons="stacked"
        $systemBar
        primaryAction={
          <Button
            $variant="primary"
            $size="lg"
            className="w-full"
            disabled={!isComplete}
            onClick={handleVerify}
          >
            Verificar
          </Button>
        }
        secondaryAction={
          <Button
            $variant="ghost-primary"
            $size="lg"
            className="w-full"
            onClick={onSendSms}
          >
            Enviar por SMS
          </Button>
        }
      />
    </div>
  );
}

VerifyPhoneScreen.displayName = 'VerifyPhoneScreen';
