import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Kueski Design System/Atoms/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    $type: {
      control: { type: 'select' },
      options: ['text', 'phone', 'date', 'payment', 'clabe'],
    },
    $error:        { control: 'boolean' },
    $optional:     { control: 'boolean' },
    $showCharCount:{ control: 'boolean' },
    label:         { control: 'text' },
    helperText:    { control: 'text' },
    errorMessage:  { control: 'text' },
    placeholder:   { control: 'text' },
    disabled:      { control: 'boolean' },
    readOnly:      { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Configurable sandbox (controlled) ────────────────────────────────────────

export const Configurable: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <div className="w-80">
        <Input {...args} value={value} onChange={setValue} onClear={() => setValue('')} />
      </div>
    );
  },
  args: {
    label: 'Correo electrónico',
    helperText: 'Ingresa tu correo principal.',
    placeholder: 'nombre@ejemplo.com',
    $type: 'text',
    $error: false,
    $optional: false,
  },
};

// ── All types ─────────────────────────────────────────────────────────────────

export const AllTypes: Story = {
  render: () => {
    const [vals, setVals] = useState<Record<string, string>>({});
    const set = (k: string) => (v: string) => setVals(p => ({ ...p, [k]: v }));

    return (
      <div className="flex flex-col gap-5 w-80">
        <Input label="Texto" $type="text" placeholder="Texto libre" value={vals.text ?? ''} onChange={set('text')} helperText="Tipo: text" />
        <Input label="Teléfono" $type="phone" countryFlag="🇲🇽" countryCode="+52" placeholder="55 1234 5678" value={vals.phone ?? ''} onChange={set('phone')} helperText="Tipo: phone" />
        <Input label="Fecha" $type="date" placeholder="DD/MM/AAAA" value={vals.date ?? ''} onChange={set('date')} helperText="Tipo: date" />
        <Input label="Tarjeta" $type="payment" placeholder="1234 5678 9012 3456" value={vals.payment ?? ''} onChange={set('payment')} helperText="Tipo: payment" />
        <Input label="CLABE" $type="clabe" placeholder="18 dígitos" value={vals.clabe ?? ''} onChange={set('clabe')} helperText="Tipo: clabe" />
      </div>
    );
  },
};

// ── States ────────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <div className="flex flex-col gap-5 w-80">
        <Input label="Default (vacío)" placeholder="Escribe algo..." value="" onChange={() => {}} helperText="Estado inicial." />
        <Input label="Con valor" placeholder="" value="katerine@kueski.com" onChange={() => {}} helperText="Campo con contenido." />
        <Input label="Error" placeholder="" value="correo-invalido" $error errorMessage="Este correo no es válido." onChange={() => {}} />
        <Input label="Opcional" placeholder="Escribe algo..." value={val} onChange={setVal} $optional helperText="Este campo es opcional." />
        <Input label="Read-only" value="valor-bloqueado@kueski.com" onChange={() => {}} readOnly helperText="No editable." />
        <Input label="Deshabilitado" placeholder="Deshabilitado" value="" onChange={() => {}} disabled helperText="No disponible." />
      </div>
    );
  },
};

// ── Char count ────────────────────────────────────────────────────────────────

export const CharCount: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <div className="w-80">
        <Input
          label="Mensaje corto"
          placeholder="Máximo 80 caracteres"
          value={val}
          onChange={setVal}
          onClear={() => setVal('')}
          maxLength={80}
          $showCharCount
          helperText="Escribe un mensaje breve."
        />
      </div>
    );
  },
};
