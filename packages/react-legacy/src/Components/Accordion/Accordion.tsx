import React, { useState } from 'react';

import { AccordionContainer } from './Accordion.styles';
import { AccordionContextProvider } from './Accordion.utils';

export const Accordion: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <AccordionContextProvider value={{ isOpen, setIsOpen }}>
      <AccordionContainer>
        {children}
      </AccordionContainer>
    </AccordionContextProvider>
  );
};
