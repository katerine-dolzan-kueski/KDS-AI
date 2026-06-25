import React from 'react';
import { BarcodeProps } from './Barcode.models';
import { BarcodeContainer } from './Barcode.styles';

export const Barcode: React.FC<BarcodeProps> = ({ barcode, alt }) => {
  const validateData = () => {
    if (barcode?.includes('data')) {
      return barcode;
    }
    return `data:image/png;base64, ${barcode}`;
  };

  return (
    <BarcodeContainer>
      <img
        className="barcode"
        src={validateData()}
        alt={alt}
      />
    </BarcodeContainer>
  );
};
