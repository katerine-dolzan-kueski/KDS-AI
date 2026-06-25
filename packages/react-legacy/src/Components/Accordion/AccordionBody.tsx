import React, { useContext } from 'react';

import { AccordionContainer } from './Accordion.styles';
import { accordionContext } from './Accordion.utils';

export const AccordionBody: React.FC = ({ children }) => {
  const { isOpen } = useContext(accordionContext);

  return (
    <>
      {isOpen && (
      <AccordionContainer>
        {children}
      </AccordionContainer>
      )}
    </>
  );
};
