'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';
import { Button } from '../../../atoms/Button';
import { Input } from '../../../atoms/Input';
import { NavigationHeader } from '../../../organisms/NavigationHeader';
import { SectionHeader } from '../../../molecules/SectionHeader';
import { Footer } from '../../../organisms/Footer';
import { KueskiColoredLogo } from '../../../atoms/Icons/KueskiColoredLogo';
import { CrossIcon } from '../../../atoms/Icons/CrossIcon';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Returns true when the raw digit string looks like a valid MX mobile number */
function isMexicanMobileValid(digits: string): boolean {
  return /^\d{10}$/.test(digits);
}

function stripNonDigits(v: string) {
  return v.replace(/\D/g, '');
}

// ── Legal caption ─────────────────────────────────────────────────────────────

interface LegalCaptionProps {
  onPrivacyPolicy?: () => void;
  onTerms?: () => void;
}

function LegalCaption({ onPrivacyPolicy, onTerms }: LegalCaptionProps) {
  return (
    <p className="typo-meta text-[var(--color-text-and-icons-secondary)]">
      Al{' '}
      <strong className="typo-meta-emphasized">continuar</strong>{' '}
      confirmo que he leído el{' '}
      <button
        type="button"
        className="underline cursor-pointer bg-transparent border-0 p-0 typo-meta text-[var(--color-text-and-icons-secondary)]"
        onClick={onPrivacyPolicy}
      >
        aviso de privacidad,
      </button>{' '}
      los{' '}
      <button
        type="button"
        className="underline cursor-pointer bg-transparent border-0 p-0 typo-meta text-[var(--color-text-and-icons-secondary)]"
        onClick={onTerms}
      >
        términos y condiciones
      </button>{' '}
      del servicio y la cláusula de medios electrónicos, tales como el NIP.
    </p>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface CreateAccountScreenProps {
  /** Called when the user taps "Continuar" with a valid phone number */
  onContinue?: (phone: string) => void;
  /** Called when the user taps "Continuar con Passkey" */
  onPasskey?: () => void;
  /** Called when the user taps the × close button */
  onClose?: () => void;
  /** Called when the user taps "aviso de privacidad" */
  onPrivacyPolicy?: () => void;
  /** Called when the user taps "términos y condiciones" */
  onTerms?: () => void;
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function CreateAccountScreen({
  onContinue,
  onPasskey,
  onClose,
  onPrivacyPolicy,
  onTerms,
  className,
}: CreateAccountScreenProps) {
  const [phone, setPhone] = useState('');
  const digits = stripNonDigits(phone);
  const isValid = isMexicanMobileValid(digits);

  const handleContinue = () => {
    if (isValid) onContinue?.(digits);
  };

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-[var(--color-background-primary)]',
        className,
      )}
    >
      {/* ── Navigation header — Kueski logo + close ─────────────── */}
      <NavigationHeader
        $type="main"
        leftIcon={
          <KueskiColoredLogo
            aria-label="Kueski"
            width={102}
            height={24}
          />
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
          $title="Crear cuenta"
          $size="h2"
          $alignment="left"
        >
          Crea tu cuenta en minutos y ve cuánto puedes solicitar.
        </SectionHeader>

        {/* Phone number input */}
        <Input
          $type="phone"
          label="Número de teléfono"
          countryFlag="🇲🇽"
          countryCode="+52"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          helperText="Enviaremos tu código por WhatsApp."
          inputMode="numeric"
          autoComplete="tel-national"
        />
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <Footer
        $buttons="stacked"
        $systemBar
        caption={
          <LegalCaption
            onPrivacyPolicy={onPrivacyPolicy}
            onTerms={onTerms}
          />
        }
        primaryAction={
          <Button
            $variant="primary"
            $size="lg"
            className="w-full"
            disabled={!isValid}
            onClick={handleContinue}
          >
            Continuar
          </Button>
        }
        secondaryAction={
          <Button
            $variant="ghost-primary"
            $size="lg"
            className="w-full"
            onClick={onPasskey}
          >
            Continuar con Passkey
          </Button>
        }
      />
    </div>
  );
}

CreateAccountScreen.displayName = 'CreateAccountScreen';
