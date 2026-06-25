import { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './index';
import type { StepperProps } from './Stepper.types';
import { CameraIcon, DeviceModeLightIcon, IdCardIcon } from '../../atoms';

const meta: Meta<StepperProps> = {
  title: 'Kueski Design System/Molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StepperProps>;

export const Numeric: Story = {
  args: {
    $items: [
      { title: 'One', description: 'First step', icon: 1 },
      { title: 'Two', description: 'Second step', icon: 2 },
      { title: 'Three', description: 'Third step', icon: 3 },
      { title: 'Four', description: 'Fourth step', icon: 4 },
      { title: 'Five', description: 'Fifth step', icon: 5 },
    ],
  },
};

export const Icons: Story = {
  args: {
    $items: [
      { 
        title: 'Tu INE o pasaporte', 
        description: 'Debe estar vigente. No se aceptan fotos, imágenes digitales ni copias.',
        icon: <IdCardIcon />,
      },
      { 
        title: 'Activar tu cámara', 
        description: 'Danos acceso a tu cámara para que tomes fotos de tu documento y de tu rostro.',
        icon: <CameraIcon />,
      },
      { 
        title: 'Lugar iluminado', 
        description: 'Toma fotos de tu documento y de tu rostro sin accesorios que lo cubran.',
        icon: <DeviceModeLightIcon />,
      },
    ],
    className: 'w-[372px]',
  },
};
