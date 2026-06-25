import React from 'react';
import { FingerprintIcon } from '../../../atoms/Icons/FingerprintIcon';
import { cn } from '../../../../lib/utils';

export interface BiometricsSystemPromptScreenProps {
  /** Whether the prompt is visible (controls slide-up animation) */
  $visible?: boolean;
  /** Called when the user taps "Cancelar" */
  onCancel?: () => void;
  /** Extra class names for the root scrim element */
  className?: string;
}

/**
 * BiometricsSystemPromptScreen
 *
 * Visual-only recreation of the Android biometric system prompt.
 * Renders as a bottom sheet that slides up over a dark scrim.
 * This component is not functional — it's a UI mock of the OS-level dialog.
 *
 * Compose it as an overlay inside a relative/positioned parent:
 *   <div className="relative">
 *     <BiometricsScreen ... />
 *     <BiometricsSystemPromptScreen $visible={showPrompt} onCancel={...} />
 *   </div>
 */
export const BiometricsSystemPromptScreen = ({
  $visible = true,
  onCancel,
  className,
}: BiometricsSystemPromptScreenProps) => {
  return (
    <>
      {/* ── Scrim ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-black transition-opacity duration-300',
          $visible ? 'opacity-40' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* ── Bottom sheet card ────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Autenticación biométrica"
        className={cn(
          'absolute bottom-0 left-0 right-0 transition-transform duration-300 ease-out',
          $visible ? 'translate-y-0' : 'translate-y-full',
          className
        )}
      >
        <div className="bg-white rounded-t-[28px] px-6 pt-8 pb-10 flex flex-col items-center gap-6 shadow-2xl">
          {/* Drag handle */}
          <div className="w-10 h-1 rounded-full bg-gray-300 -mt-3" />

          {/* Title */}
          <p
            className="text-[18px] font-medium text-center leading-snug"
            style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#202124' }}
          >
            Confirmar con tu huella digital
          </p>

          {/* Fingerprint icon — blue, pulsing */}
          <div className="relative flex items-center justify-center">
            {/* Pulse ring */}
            <span
              className="absolute w-[96px] h-[96px] rounded-full animate-ping"
              style={{ backgroundColor: '#1E88E5', opacity: 0.12 }}
            />
            <div
              className="w-[80px] h-[80px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#E8F0FE' }}
            >
              <FingerprintIcon
                $width={48}
                $height={48}
                $fill="#1E88E5"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-[14px] text-center leading-relaxed"
            style={{ color: '#5F6368', fontFamily: "'Product Sans', 'Google Sans', sans-serif" }}
          >
            Toca el sensor de huella para continuar.
          </p>

          {/* Cancelar */}
          <button
            type="button"
            onClick={onCancel}
            className="text-[14px] font-medium tracking-wide uppercase cursor-pointer py-2 px-4 rounded transition-opacity hover:opacity-75 active:opacity-50"
            style={{ color: '#1E88E5', fontFamily: "'Product Sans', 'Google Sans', sans-serif", letterSpacing: '0.08em' }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};

BiometricsSystemPromptScreen.displayName = 'BiometricsSystemPromptScreen';
