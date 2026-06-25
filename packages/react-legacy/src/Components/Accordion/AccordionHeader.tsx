import React, { useContext } from 'react';

import { AccordionHeaderContainer } from './Accordion.styles';
import { accordionContext } from './Accordion.utils';

export const AccordionHeader: React.FC = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(accordionContext);

  return (
    <AccordionHeaderContainer onClick={() => setIsOpen(!isOpen)}>
      {children}
    </AccordionHeaderContainer>
  );
};
