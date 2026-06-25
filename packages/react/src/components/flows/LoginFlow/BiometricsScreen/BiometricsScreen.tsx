import React from 'react';
import { Button } from '../../../atoms/Button';
import { Stepper } from '../../../molecules/Stepper';
import { CrossIcon } from '../../../atoms/Icons/CrossIcon';
import { FingerprintIcon } from '../../../atoms/Icons/FingerprintIcon';
import { ShieldCheckIcon } from '../../../atoms/Icons/ShieldCheckIcon';
import { LogInIcon } from '../../../atoms/Icons/LogInIcon';
import { cn } from '../../../../lib/utils';

export interface BiometricsScreenProps {
  /** Called when the user taps the close (×) button */
  onClose?: () => void;
  /** Called when the user taps "Activar" */
  onActivate?: () => void;
  /** Called when the user taps "Ahora no" */
  onSkip?: () => void;
  /** Extra class names for the root element */
  className?: string;
}

/**
 * BiometricsScreen
 *
 * Full-page screen that prompts the user to enable biometric
 * authentication (fingerprint / face ID) for their Kueski account.
 *
 * Uses KDS atoms (Button, Icons) and molecules (Stepper) so it
 * automatically inherits brand tokens and accessibility behaviour.
 */
export const BiometricsScreen = ({
  onClose,
  onActivate,
  onSkip,
  className,
}: BiometricsScreenProps) => {
  return (
    <div
      className={cn(
        'tw bg-background-primary flex flex-col items-center min-h-screen w-full',
        className
      )}
    >
      {/* ── Navigation header ─────────────────────────────────── */}
      <header className="flex items-center justify-end w-full px-6 pt-4 pb-2 shrink-0">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="text-text-and-icons-primary cursor-pointer p-1 rounded-full hover:bg-background-secondary-cool transition-colors"
        >
          <CrossIcon $width={24} $height={24} />
        </button>
      </header>

      {/* ── Scrollable content area ───────────────────────────── */}
      <main className="flex flex-col items-center gap-5 flex-1 w-full overflow-y-auto px-5">
        {/* Fingerprint icon badge */}
        <div className="bg-background-secondary-cool flex items-center justify-center rounded-full w-[100px] h-[100px] shrink-0">
          <FingerprintIcon
            $width={75}
            $height={75}
            className="text-text-and-icons-secondary"
          />
        </div>

        {/* Section header */}
        <div className="flex flex-col gap-1 items-center text-center w-full shrink-0">
          <h1 className="typo-headline-2 text-text-and-icons-primary">
            Inicia sesión con tu huella o rostro
          </h1>
          <p className="typo-body-1 text-text-and-icons-tertiary">
            Acceso fácil y seguro activando el reconocimiento biométrico.
          </p>
        </div>

        {/* Feature list */}
        <Stepper
          className="w-full shrink-0"
          $items={[
            {
              icon: (
                <ShieldCheckIcon
                  $width={32}
                  $height={32}
                  className="text-icon-success"
                />
              ),
              title: 'Previene fraudes',
              description:
                'Al usar rasgos únicos como tu rostro, se dificulta la posibilidad de fraudes.',
            },
            {
              icon: (
                <LogInIcon
                  $width={32}
                  $height={32}
                  className="text-icon-success"
                />
              ),
              title: 'Mayor rápidez',
              description: 'Olvídate de tu contraseña para iniciar sesión.',
            },
          ]}
        />
      </main>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="flex flex-col items-center w-full shrink-0">
        {/* Legal disclaimer */}
        <div className="px-6 pt-4 w-full">
          <p className="typo-meta text-text-and-icons-secondary">
            Al activarlo, todas las huellas registradas en tu dispositivo
            podrán acceder a tu cuenta.
          </p>
        </div>

        {/* Button group */}
        <div className="flex flex-col gap-2 px-5 py-4 w-full">
          <Button
            $variant="success"
            $fullWidth
            onClick={onActivate}
            aria-label="Activar reconocimiento biométrico"
          >
            Activar
          </Button>

          <Button
            $variant="secondary"
            $fullWidth
            onClick={onSkip}
            aria-label="Omitir por ahora"
          >
            Ahora no
          </Button>
        </div>

        {/* Home-indicator spacer (matches Android/iOS nav bar) */}
        <div className="flex items-center justify-center h-6 w-full pb-1">
          <div className="bg-text-and-icons-primary h-1 w-[108px] rounded-full opacity-20" />
        </div>
      </footer>
    </div>
  );
};

BiometricsScreen.displayName = 'BiometricsScreen';
