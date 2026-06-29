'use client';

import { useState, useRef, useCallback } from 'react';
import { cn } from '@/utils/cn';
import { Button } from '../../../atoms/Button';
import { CarouselStepper } from '../../../atoms/CarouselStepper';
import { SectionHeader } from '../../../molecules/SectionHeader';
import { Footer } from '../../../organisms/Footer';
import { DataProtectionBadge } from '../../../molecules/DataProtectionBadge';

// ── Slide data ────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    id: 'hello',
    title: '¡Hola!',
    subtitle:
      'Únete a los millones de mexicanos que ya compran y piden préstamos con Kueski.',
  },
  {
    id: 'pace',
    title: 'Compra a tu ritmo',
    subtitle:
      'Divide tus compras en pagos pequeños y manejables. Tú decides cuándo y cómo pagar.',
  },
  {
    id: 'simple',
    title: 'Dinero cuando lo necesitas',
    subtitle:
      'Pide un préstamo en minutos y recíbelo en tu cuenta al instante.',
  },
] as const;

// ── Illustration placeholder ──────────────────────────────────────────────────
// Replace with real KDS Illustration imports once the package is available.

function IllustrationSlot({ id }: { id: string }) {
  return (
    <div
      aria-hidden="true"
      data-illustration={id}
      className="w-full h-full bg-[var(--color-background-secondary)] flex items-center justify-center"
    >
      {/* TODO: replace with <KdsIllustration name={id} /> from @kueski/kds-illustrations */}
    </div>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface OnboardingScreenProps {
  /** Called when the user taps "Crear cuenta" */
  onCreateAccount?: () => void;
  /** Called when the user taps "Iniciar sesión" */
  onLogin?: () => void;
  /** Called when the user taps the DataProtectionBadge */
  onDataProtection?: () => void;
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function OnboardingScreen({
  onCreateAccount,
  onLogin,
  onDataProtection,
  className,
}: OnboardingScreenProps) {
  const [activeStep, setActiveStep] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => setActiveStep(Math.max(0, Math.min(index, SLIDES.length - 1))),
    [],
  );

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(activeStep + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  const currentSlide = SLIDES[activeStep];

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-[var(--color-background-secondary)]',
        className,
      )}
    >
      {/* ── Carousel area ─────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Stepper bar */}
        <CarouselStepper
          $type="manual"
          $size="wide"
          steps={SLIDES.length}
          activeStep={activeStep}
          className="w-full"
        />

        {/* Section header — changes per slide */}
        <SectionHeader
          $title={currentSlide.title}
          $size="h1"
          $alignment="centered"
          className="px-[var(--spacing-x5)] pt-[var(--spacing-x1)]"
        >
          {currentSlide.subtitle}
        </SectionHeader>

        {/* Illustration strip */}
        <div
          className="flex-1 overflow-hidden relative"
          aria-label={`Ilustración ${activeStep + 1} de ${SLIDES.length}`}
        >
          {/* Slide track — translates horizontally */}
          <div
            className="flex h-full transition-transform duration-300 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${activeStep * 100}%)`, width: `${SLIDES.length * 100}%` }}
          >
            {SLIDES.map((slide) => (
              <div key={slide.id} className="h-full" style={{ width: `${100 / SLIDES.length}%` }}>
                <IllustrationSlot id={slide.id} />
              </div>
            ))}
          </div>
        </div>

        {/* Tap zones — left/right to advance slides */}
        <button
          type="button"
          aria-label="Diapositiva anterior"
          className="absolute left-0 top-0 h-full w-1/4 opacity-0"
          onClick={() => goTo(activeStep - 1)}
          tabIndex={-1}
        />
        <button
          type="button"
          aria-label="Siguiente diapositiva"
          className="absolute right-0 top-0 h-full w-1/4 opacity-0"
          onClick={() => goTo(activeStep + 1)}
          tabIndex={-1}
        />
      </div>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <Footer
        $buttons="stacked"
        $systemBar
        primaryAction={
          <Button
            $variant="primary"
            $size="lg"
            className="w-full"
            onClick={onCreateAccount}
          >
            Crear cuenta
          </Button>
        }
        secondaryAction={
          <Button
            $variant="ghost-primary"
            $size="lg"
            className="w-full"
            onClick={onLogin}
          >
            Iniciar sesión
          </Button>
        }
        badge={
          <DataProtectionBadge
            onPress={onDataProtection}
          />
        }
      />
    </div>
  );
}

OnboardingScreen.displayName = 'OnboardingScreen';
