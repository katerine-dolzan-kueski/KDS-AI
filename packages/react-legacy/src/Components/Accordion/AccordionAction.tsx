import React, { useContext } from 'react';

import { AccordionActionContainer } from './Accordion.styles';
import { accordionContext } from './Accordion.utils';

export const AccordionAction: React.FC = ({ children }) => {
  const { isOpen } = useContext(accordionContext);

  return (
    <AccordionActionContainer $isOpen={isOpen ?? false}>
      {children}
    </AccordionActionContainer>
  );
};
