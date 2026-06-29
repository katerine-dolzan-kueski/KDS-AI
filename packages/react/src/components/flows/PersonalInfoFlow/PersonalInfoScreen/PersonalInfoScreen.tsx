import React, { useState } from 'react';
import { Button } from '../../../atoms/Button';
import { FieldBase } from '../../../atoms/FieldBase';
import { SegmentedTabs } from '../../../atoms/SegmentedTabs';
import { ChevronLeftIcon } from '../../../atoms/Icons/ChevronLeftIcon';
import { ChevronBottomIcon } from '../../../atoms/Icons/ChevronBottomIcon';
import { CrossIcon } from '../../../atoms/Icons/CrossIcon';
import { DataProtectionBadge } from '../../../molecules/DataProtectionBadge';
import { cn } from '../../../../lib/utils';

export interface PersonalInfoScreenProps {
  /** Called when the user taps the back (←) button */
  onBack?: () => void;
  /** Called when the user taps the close (×) button */
  onClose?: () => void;
  /** Called when the user taps "Continuar" */
  onContinue?: (data: PersonalInfoData) => void;
  /** Called when the user taps "Cómo protegemos tus datos" */
  onDataProtection?: () => void;
  /** Current step number (shown in header) */
  $step?: number;
  /** Total steps (shown in header) */
  $totalSteps?: number;
  /** Extra class names for the root element */
  className?: string;
}

export interface PersonalInfoData {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  sexo: 'hombre' | 'mujer' | '';
  fechaNacimiento: { dia: string; mes: string; anio: string };
  lugarNacimiento: string;
  numeroCelular: string;
}

/** Mexico flag SVG — used as FieldBase leading for phone number */
const MexicoFlag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" fill="#fff" />
    {/* Green stripe */}
    <rect x="2" y="5" width="6.67" height="14" rx="2" fill="#006847" />
    {/* Clip left radius only on green */}
    <rect x="2" y="5" width="6.67" height="14" fill="#006847" />
    {/* Red stripe */}
    <rect x="15.33" y="5" width="6.67" height="14" fill="#CE1126" />
    {/* White middle stripe already from the base */}
    {/* Coat of arms placeholder – small eagle circle */}
    <circle cx="12" cy="12" r="2.5" fill="#006847" opacity="0.35" />
  </svg>
);

/**
 * PersonalInfoScreen
 *
 * Registration step "Queremos conocerte" (default: Paso 2 de 5).
 * Contains 7 form fields built with KDS FieldBase, SegmentedTabs for
 * Sexo, a custom 3-segment date picker, and a dropdown trigger for
 * Lugar de nacimiento.
 */
export const PersonalInfoScreen = ({
  onBack,
  onClose,
  onContinue,
  onDataProtection,
  $step = 2,
  $totalSteps = 5,
  className,
}: PersonalInfoScreenProps) => {
  const [nombre, setNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [sexo, setSexo] = useState<'hombre' | 'mujer' | ''>('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');
  const [lugarNacimiento, setLugarNacimiento] = useState('');
  const [numeroCelular, setNumeroCelular] = useState('');

  const handleContinue = () => {
    onContinue?.({
      nombre,
      primerApellido,
      segundoApellido,
      sexo,
      fechaNacimiento: { dia, mes, anio },
      lugarNacimiento,
      numeroCelular,
    });
  };

  return (
    <div
      className={cn(
        'tw bg-background-primary flex flex-col min-h-screen w-full',
        className
      )}
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between w-full px-5 py-3 shrink-0 relative">
        <button
          type="button"
          aria-label="Regresar"
          onClick={onBack}
          className="text-text-and-icons-primary cursor-pointer p-1 rounded-full hover:bg-background-secondary-cool transition-colors"
        >
          <ChevronLeftIcon $width={24} $height={24} />
        </button>

        <span className="typo-body-2 text-text-and-icons-secondary absolute left-1/2 -translate-x-1/2">
          Paso {$step} de {$totalSteps}
        </span>

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
      <main className="flex flex-col gap-5 flex-1 w-full px-5 pt-2 pb-4 overflow-y-auto">
        {/* Section heading */}
        <div className="flex flex-col gap-1 shrink-0">
          <h1 className="typo-headline-2 text-text-and-icons-primary">
            Queremos conocerte
          </h1>
          <p className="typo-body-1 text-text-and-icons-secondary">
            Completa tus datos tal como aparecen en tu INE o pasaporte.
          </p>
        </div>

        {/* ── Nombre ─────────────────────────────────────────────── */}
        <FieldBase.Layout $label="Nombre">
          <FieldBase.Box $isEmpty={!nombre}>
            <input
              id="nombre"
              type="text"
              autoComplete="given-name"
              value={nombre}
              placeholder="Escribe tu nombre"
              onChange={(e) => setNombre(e.target.value)}
              aria-label="Nombre"
            />
          </FieldBase.Box>
        </FieldBase.Layout>

        {/* ── Primer apellido ─────────────────────────────────────── */}
        <FieldBase.Layout $label="Primer apellido">
          <FieldBase.Box $isEmpty={!primerApellido}>
            <input
              id="primer-apellido"
              type="text"
              autoComplete="family-name"
              value={primerApellido}
              placeholder="Escribe tu primer apellido"
              onChange={(e) => setPrimerApellido(e.target.value)}
              aria-label="Primer apellido"
            />
          </FieldBase.Box>
        </FieldBase.Layout>

        {/* ── Segundo apellido ────────────────────────────────────── */}
        <FieldBase.Layout $label="Segundo apellido">
          <FieldBase.Box $isEmpty={!segundoApellido}>
            <input
              id="segundo-apellido"
              type="text"
              autoComplete="additional-name"
              value={segundoApellido}
              placeholder="Escribe tu segundo apellido"
              onChange={(e) => setSegundoApellido(e.target.value)}
              aria-label="Segundo apellido"
            />
          </FieldBase.Box>
        </FieldBase.Layout>

        {/* ── Sexo ────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2">
          <span className="typo-body-2 text-text-and-icons-secondary">Sexo</span>
          <SegmentedTabs>
            <SegmentedTabs.Item
              $text="Hombre"
              $selected={sexo === 'hombre'}
              onClick={() => setSexo('hombre')}
            />
            <SegmentedTabs.Item
              $text="Mujer"
              $selected={sexo === 'mujer'}
              onClick={() => setSexo('mujer')}
            />
          </SegmentedTabs>
        </div>

        {/* ── Fecha de nacimiento ─────────────────────────────────── */}
        <div className="flex flex-col gap-2">
          <span className="typo-body-2 text-text-and-icons-secondary">Fecha de nacimiento</span>
          <div className="flex items-center gap-0 w-full">
            {/* DD */}
            <FieldBase.Box $isEmpty={!dia} className="flex-1 rounded-r-none border-r-0">
              <input
                id="dia"
                type="text"
                inputMode="numeric"
                maxLength={2}
                value={dia}
                placeholder="DD"
                onChange={(e) => setDia(e.target.value.replace(/\D/g, ''))}
                aria-label="Día de nacimiento"
                className="text-center"
              />
            </FieldBase.Box>

            {/* Divider */}
            <div className="w-px h-12 bg-border-primary shrink-0" />

            {/* MM */}
            <FieldBase.Box $isEmpty={!mes} className="flex-1 rounded-none border-x-0">
              <input
                id="mes"
                type="text"
                inputMode="numeric"
                maxLength={2}
                value={mes}
                placeholder="MM"
                onChange={(e) => setMes(e.target.value.replace(/\D/g, ''))}
                aria-label="Mes de nacimiento"
                className="text-center"
              />
            </FieldBase.Box>

            {/* Divider */}
            <div className="w-px h-12 bg-border-primary shrink-0" />

            {/* AAAA */}
            <FieldBase.Box $isEmpty={!anio} className="flex-[2] rounded-l-none border-l-0">
              <input
                id="anio"
                type="text"
                inputMode="numeric"
                maxLength={4}
                value={anio}
                placeholder="AAAA"
                onChange={(e) => setAnio(e.target.value.replace(/\D/g, ''))}
                aria-label="Año de nacimiento"
                className="text-center"
              />
            </FieldBase.Box>
          </div>
        </div>

        {/* ── Lugar de nacimiento ─────────────────────────────────── */}
        <FieldBase.Layout $label="Lugar de nacimiento">
          <FieldBase.Box $isEmpty={!lugarNacimiento} $hasTrailing>
            <input
              id="lugar-nacimiento"
              type="text"
              readOnly
              value={lugarNacimiento}
              placeholder="Seleccionar"
              aria-label="Lugar de nacimiento"
              className="cursor-pointer"
            />
          </FieldBase.Box>
          <FieldBase.Trailing $onClick={() => {}}>
            <ChevronBottomIcon $width={24} $height={24} />
          </FieldBase.Trailing>
        </FieldBase.Layout>

        {/* ── Número de celular ───────────────────────────────────── */}
        <FieldBase.Layout $label="Número de celular">
          <FieldBase.Leading>
            <div className="flex items-center gap-3">
              <MexicoFlag />
              <span className="typo-body-2 text-text-and-icons-primary">+52</span>
            </div>
          </FieldBase.Leading>
          <FieldBase.Box $hasLeading $isEmpty={!numeroCelular}>
            <input
              id="numero-celular"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              value={numeroCelular}
              placeholder="10 dígitos"
              onChange={(e) => setNumeroCelular(e.target.value.replace(/\D/g, ''))}
              aria-label="Número de celular"
            />
          </FieldBase.Box>
        </FieldBase.Layout>
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="flex flex-col gap-3 px-5 py-4 w-full shrink-0">
        <Button
          type="button"
          $variant="primary"
          $fullWidth
          onClick={handleContinue}
        >
          Continuar
        </Button>

        {/* Data protection link */}
        <DataProtectionBadge onPress={onDataProtection} />

        {/* Home indicator */}
        <div className="flex items-center justify-center h-5">
          <div className="bg-text-and-icons-primary h-1 w-[108px] rounded-full opacity-20" />
        </div>
      </footer>
    </div>
  );
};

PersonalInfoScreen.displayName = 'PersonalInfoScreen';
