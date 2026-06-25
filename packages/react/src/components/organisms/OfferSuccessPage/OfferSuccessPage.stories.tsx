import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { OfferSuccessPage } from '.';
import { Button } from '../../..';
import { Divider } from '../../atoms';

const meta: Meta = {
  title: 'Kueski Design System/Organisms/OfferSuccessPage',
  component: OfferSuccessPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <OfferSuccessPage>
      <OfferSuccessPage.Hero>
        <OfferSuccessPage.Image />
        <OfferSuccessPage.Title>
          ¡Tu préstamo está en camino!
        </OfferSuccessPage.Title>
        <OfferSuccessPage.Subtitle>
          Te notificaremos por correo cuando esté listo.
        </OfferSuccessPage.Subtitle>
      </OfferSuccessPage.Hero>

      <OfferSuccessPage.Details className="px-x5 py-x4 flex flex-col gap-x5">
        <div className="flex flex-col gap-x2">
          <OfferSuccessPage.Detail
            leading="Cuenta destino"
            trailing="Débito •2235"
          />
          <OfferSuccessPage.Detail
            leading="Fecha límite de pago"
            trailing="28 feb 2026"
          />
          <OfferSuccessPage.Detail
            leading="Domiciliación"
            trailing="Activada"
            className="mb-x4"
          />
        </div>

        <div className="flex flex-col gap-x3">
          <OfferSuccessPage.Detail
            leading="Monto del depósito"
            trailing={<b className="typo-body-1-emphasized">$2,400.00</b>}
          />
          <OfferSuccessPage.Detail
            leading="Intereses totales"
            trailing={<b className="typo-body-1-emphasized">$400.35</b>}
          />
          <Divider />
          <OfferSuccessPage.Detail
            leading={<b className="typo-body-2-emphasized">Total a pagar</b>}
            trailing={<b className="typo-headline-3">$2,800.35</b>}
          />
        </div>
      </OfferSuccessPage.Details>

      <OfferSuccessPage.Footer>
        <OfferSuccessPage.Legal>
          {'Para revisar las condiciones de tu oferta y tu contrato ingresa a '}
          <a href="https://www.youtube.com/watch?v=9r10A5dKno8&rel=0">Detalle de préstamo.</a>
        </OfferSuccessPage.Legal>
        <Button>
          Ir al Inicio
        </Button>
      </OfferSuccessPage.Footer>
    </OfferSuccessPage>
  ),
};
