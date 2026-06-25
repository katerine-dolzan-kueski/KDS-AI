import React, { useState } from 'react';
import { Button } from '../../../atoms/Button';
import { FieldBase } from '../../../atoms/FieldBase';
import { CrossIcon } from '../../../atoms/Icons/CrossIcon';
import { EmailIcon } from '../../../atoms/Icons/EmailIcon';
import { LockOnIcon } from '../../../atoms/Icons/LockOnIcon';
import { VisibilityOffIcon } from '../../../atoms/Icons/VisibilityOffIcon';
import { VisibilityOnIcon } from '../../../atoms/Icons/VisibilityOnIcon';
import { KueskiColoredLogo } from '../../../atoms/Icons/KueskiColoredLogo';
import { cn } from '../../../../lib/utils';

export interface LoginScreenProps {
  /** Called when the user taps the close (×) button */
  onClose?: () => void;
  /** Called when the user submits valid credentials */
  onLogin?: (email: string, password: string) => void;
  /** Called when the user taps "Crear cuenta" */
  onCreateAccount?: () => void;
  /** Called when the user taps "Olvidaste tu contraseña" */
  onForgotPassword?: () => void;
  /** Whether the login button should show a loading state */
  $loading?: boolean;
  /** Extra class names for the root element */
  className?: string;
}

/**
 * LoginScreen
 *
 * Bottom-sheet login form with email + password fields.
 * Uses KDS FieldBase (correct composition: Leading/Trailing are siblings
 * of Box inside Layout) and Button for CTAs.
 *
 * - "Iniciar sesión" → $variant="primary" (blue)
 * - "Crear cuenta"   → $variant="ghost-primary" (text-only blue)
 */
export const LoginScreen = ({
  onClose,
  onLogin,
  onCreateAccount,
  onForgotPassword,
  $loading = false,
  className,
}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.(email, password);
  };

  return (
    <div
      className={cn(
        'tw bg-background-primary flex flex-col min-h-screen w-full',
        className
      )}
    >
      {/* ── Header: logo + close ─────────────────────────────────── */}
      <header className="flex items-center justify-between w-full px-5 py-3 shrink-0">
        <KueskiColoredLogo className="w-[102px]" />
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="text-text-and-icons-primary cursor-pointer p-1 rounded-full hover:bg-background-secondary-cool transition-colors"
        >
          <CrossIcon $width={24} $height={24} />
        </button>
      </header>

      {/* ── Scrollable form area ─────────────────────────────────── */}
      <main className="flex flex-col gap-5 flex-1 w-full px-5 pt-2 overflow-y-auto">
        {/* Section header */}
        <div className="flex flex-col gap-1 shrink-0">
          <h1 className="typo-headline-2 text-text-and-icons-primary">
            Qué bueno que estés por aquí
          </h1>
          <p className="typo-body-1 text-text-and-icons-secondary">
            Inicia sesión para acceder a tu cuenta.
          </p>
        </div>

        <form
          id="login-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 shrink-0"
          noValidate
        >
          {/* ── Email ──────────────────────────────────────────── */}
          <FieldBase.Layout $label="Correo electrónico">
            <FieldBase.Leading>
              <EmailIcon $width={24} $height={24} />
            </FieldBase.Leading>

            <FieldBase.Box $hasLeading>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Correo electrónico"
              />
            </FieldBase.Box>
          </FieldBase.Layout>

          {/* ── Password ───────────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            <FieldBase.Layout $label="Contraseña">
              <FieldBase.Leading>
                <LockOnIcon $width={24} $height={24} />
              </FieldBase.Leading>

              <FieldBase.Box $hasLeading $hasTrailing>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Contraseña"
                />
              </FieldBase.Box>

              <FieldBase.Trailing
                $onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <VisibilityOnIcon $width={24} $height={24} />
                ) : (
                  <VisibilityOffIcon $width={24} $height={24} />
                )}
              </FieldBase.Trailing>
            </FieldBase.Layout>

            {/* Forgot password link */}
            <button
              type="button"
              onClick={onForgotPassword}
              className="typo-body-2 text-text-and-icons-secondary underline text-left cursor-pointer w-fit"
            >
              Olvidaste tu contraseña
            </button>
          </div>
        </form>
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="flex flex-col gap-2 px-5 py-4 w-full shrink-0">
        <Button
          type="submit"
          form="login-form"
          $variant="primary"
          $fullWidth
          $loading={$loading}
          $loadingText="Iniciando sesión..."
        >
          Iniciar sesión
        </Button>

        <Button
          type="button"
          $variant="ghost-primary"
          $fullWidth
          onClick={onCreateAccount}
        >
          Crear cuenta
        </Button>

        {/* Home indicator */}
        <div className="flex items-center justify-center h-6 mt-1">
          <div className="bg-text-and-icons-primary h-1 w-[108px] rounded-full opacity-20" />
        </div>
      </footer>
    </div>
  );
};

LoginScreen.displayName = 'LoginScreen';
