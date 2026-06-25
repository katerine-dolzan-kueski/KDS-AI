/* eslint-disable no-alert */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FunnelLayout } from './FunnelLayout';
import { Banner } from '../../molecules/Banner';
import { Button, Divider, Shimmer } from '../../atoms';
import { OfferSuccessPage as SuccessPage } from '../OfferSuccessPage';

const meta: Meta<typeof FunnelLayout> = {
  title: 'Kueski Design System/Organisms/FunnelLayout',
  component: FunnelLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FunnelLayout>
      <FunnelLayout.DesktopHeader $onCancel={() => alert('Cancel clicked')}>
        Préstamo personal
      </FunnelLayout.DesktopHeader>
      <FunnelLayout.Page>
        <FunnelLayout.PageHeader $onCancel={() => alert('Cancel clicked')}>
          Pide un préstamo personal
        </FunnelLayout.PageHeader>
        <Banner $variant="upsell" $outline className="mb-x4 mx-x4 md:mx-0">
          <Banner.Content>
            <Banner.Title className="typo-body-2-emphasized text-text-and-icons-primary">
              Estamos preparando tu oferta
            </Banner.Title>
            <Banner.Body className="typo-body-2 text-text-and-icons-secondary">
              Te avisaremos cuando esté lista.
            </Banner.Body>
          </Banner.Content>
        </Banner>

        <div className="flex flex-col gap-6 p-4 md:p-0 pb-4!">
          {Array.from({ length: 8 }, (_, index) => `shimmer-${index}`).map((id) => (
            <div key={id} className="flex gap-x4">
              <Shimmer className="shrink-0 size-26 rounded" />
              <div className="flex-1 flex flex-col gap-x2">
                <Shimmer className="h-6 rounded" />
                <Shimmer className="h-6 rounded" />
                <Shimmer className="w-32 h-4 rounded" />
                <Shimmer className="w-32 h-4 rounded" />
              </div>
            </div>
          ))}
        </div>
        <FunnelLayout.PageFooter>
          <div className="flex p-4 md:p-0">
            <Button className="flex-1">
              Aceptar
            </Button>
          </div>
        </FunnelLayout.PageFooter>
      </FunnelLayout.Page>
    </FunnelLayout>
  ),
};

export const OfferSuccessPage: Story = {
  render: () => (
    <FunnelLayout>
      <FunnelLayout.DesktopHeader $onCancel={() => alert('Cancel clicked')}>
        Préstamo personal
      </FunnelLayout.DesktopHeader>
      <FunnelLayout.Page>
        <SuccessPage>
          <SuccessPage.Hero>
            <SuccessPage.Image />
            <SuccessPage.Title>
              ¡Tu préstamo está en camino!
            </SuccessPage.Title>
            <SuccessPage.Subtitle>
              Te notificaremos por correo cuando esté listo.
            </SuccessPage.Subtitle>
          </SuccessPage.Hero>
    
          <SuccessPage.Details className="px-x5 py-x4 flex flex-col gap-x5">
            <div className="flex flex-col gap-x2">
              <SuccessPage.Detail
                leading="Cuenta destino"
                trailing="Débito •2235"
              />
              <SuccessPage.Detail
                leading="Fecha límite de pago"
                trailing="28 feb 2026"
              />
              <SuccessPage.Detail
                leading="Domiciliación"
                trailing="Activada"
                className="mb-x4"
              />
            </div>
    
            <div className="flex flex-col gap-x3">
              <SuccessPage.Detail
                leading="Monto del depósito"
                trailing={<b className="typo-body-1-emphasized">$2,400.00</b>}
              />
              <SuccessPage.Detail
                leading="Intereses totales"
                trailing={<b className="typo-body-1-emphasized">$400.35</b>}
              />
              <Divider />
              <SuccessPage.Detail
                leading={<b className="typo-body-2-emphasized">Total a pagar</b>}
                trailing={<b className="typo-headline-3">$2,800.35</b>}
              />
            </div>
          </SuccessPage.Details>
    
          <SuccessPage.Footer>
            <SuccessPage.Legal>
              {'Para revisar las condiciones de tu oferta y tu contrato ingresa a '}
              <a href="https://www.youtube.com/watch?v=9r10A5dKno8&rel=0">Detalle de préstamo.</a>
            </SuccessPage.Legal>
            <Button>
              Ir al Inicio
            </Button>
          </SuccessPage.Footer>
        </SuccessPage>
      </FunnelLayout.Page>
    </FunnelLayout>
  ),
};