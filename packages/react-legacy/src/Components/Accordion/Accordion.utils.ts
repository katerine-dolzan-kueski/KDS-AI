import { createContext } from 'react';
import { AccordionContext } from './Accordion.models';

export const accordionContext = createContext<AccordionContext>({} as AccordionContext);

export const { Provider: AccordionContextProvider } = accordionContext;
