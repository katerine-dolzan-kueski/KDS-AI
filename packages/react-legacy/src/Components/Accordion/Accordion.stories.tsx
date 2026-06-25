import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Accordion, AccordionAction, AccordionBody, AccordionHeader } from '../Accordion';
import { AccordionIcon, AccordionTitle } from '../Accordion/Accordion.styles';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { color } from '../../theme/color';
import { Header } from '../Header';

const Template = () => (
  <>
    <DesignSystemGlobals />
    <Accordion>
      <AccordionHeader>
        <AccordionIcon>
          <Icon name="CardCashPayment" fillColor={color.primaryLight} />
        </AccordionIcon>
        <AccordionTitle>
          <Header $color="primaryLight" $format="Title/Small/Medium">
            ¿Cómo realizo mi pago?
          </Header>
        </AccordionTitle>
        <AccordionAction>
          <Icon name="ArrowDown" fillColor={color.primaryLight} />
        </AccordionAction>
      </AccordionHeader>
      <AccordionBody>
        <ul>
          <li>
            <Text $format="Body/Medium/Regular">
              Ve a la caja de cualquiera OXXO y compártele al encargado el código de barras o la
              referencia y la cantidad exacta que vas a pagar.
            </Text>
          </li>
        </ul>
      </AccordionBody>
    </Accordion>
  </>
);

export const Default = Template.bind({});

export default {
  component: Accordion,
  title: 'OLD Design System/Components/Accordion',
};
