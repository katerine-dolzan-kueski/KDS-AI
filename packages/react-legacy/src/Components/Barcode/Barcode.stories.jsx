import React from 'react';
import { Barcode } from './Barcode';

const Template = ({ ...args }) => (<Barcode {...args} />);

export const Default = Template.bind({});

export default {
  argTypes: {
    alt: {
      defaultValue: 'Código de barras',
      description: 'Image alt text is important for three reasons: accessibility, user experience, and image traffic. Understanding these reasons will help you write effective alt text for all of your images.',
      type: 'string',

    },
    barcode: {
      defaultValue: 'iVBORw0KGgoAAAANSUhEUgAAAL0AAABkAQAAAAD7nQx6AAAAOklEQVR4nGPSfeyTudFM7ciN2cKGyb49nUJmOsdmilssYGLAAUYlRiVGJUYlRiVGJUYlRiVGJQZaAgBuygqdruaoMwAAAABJRU5ErkJggg==',
      description: 'Barcode render image',
      type: 'string',
    },
  },
  component: Barcode,
  title: 'OLD Design System/Components/Barcode',
};
