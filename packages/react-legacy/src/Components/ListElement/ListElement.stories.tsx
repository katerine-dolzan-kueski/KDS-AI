import React from 'react';

import {
  ListElement,
  ListElementIcon,
  ListElementAside,
  ListElementAction,
  ListElementContent,
} from '../ListElement';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { Button, KDSButton } from '../Button';
import { Icon } from '../Icon';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { FlowContent, NarrowFlowLayout } from '../Layout';

export default {
  component: ListElement,
  title: 'OLD Design System/Components/ListElement',
};

const Template = () => (
  <NarrowFlowLayout $dark>
    <DesignSystemGlobals />
    <FlowContent>
      <ListElement $wide>
        <ListElementContent>
          <Text><b>Wide List Element</b></Text>
          <Text><small>1 de 4</small></Text>
        </ListElementContent>
        <ListElementAside><b><code>$190.00</code></b></ListElementAside>
      </ListElement>
      <ListElement>
        <ListElementIcon>
          <Avatar style={{ backgroundColor: 'lightblue', color: 'white' }}>PC</Avatar>
        </ListElementIcon>
        <ListElementContent>
          <Text>Regular List Element</Text>
          <Text><small>4 quincenas de $200.00</small></Text>
        </ListElementContent>
        <ListElementAside>
          <Text><b><code>$190.00</code></b></Text>
          <Text><button type="button">activo</button></Text>
        </ListElementAside>
        <ListElementAction><Icon name="ArrowRightLine" fillColor="cornflowerblue" /></ListElementAction>
      </ListElement>
    </FlowContent>
    <FlowContent>
      <ListElement $rounded>
        <ListElementIcon>
          <Icon name="Copy" width={32} height={32} />
        </ListElementIcon>
        <ListElementContent>
          <Text $format="Body/Medium/Bold">Rounded List Element 1</Text>
          <Text $format="Body/Small/Regular" $color="textDisabled">··· 1234</Text>
        </ListElementContent>
        <ListElementAction>
          <Button $type={KDSButton.TEXT}>
            <Text $format="Label/Large/Medium" $color="primary">Cambiar</Text>
          </Button>
        </ListElementAction>
      </ListElement>

      <ListElement $rounded>
        <ListElementIcon>
          <Icon name="Copy" width={32} height={32} />
        </ListElementIcon>
        <ListElementContent>
          <Text $format="Body/Medium/Bold">Rounded List Element 2</Text>
          <Text $format="Body/Small/Regular" $color="textDisabled">··· 1234</Text>
        </ListElementContent>
        <ListElementAction>
          <Button $type={KDSButton.TEXT}>
            <Text $format="Label/Large/Medium" $color="primary">Cambiar</Text>
          </Button>
        </ListElementAction>
      </ListElement>

      <ListElement $rounded>
        <ListElementIcon>
          <Icon name="Copy" width={32} height={32} />
        </ListElementIcon>
        <ListElementContent>
          <Text $format="Body/Medium/Bold">Rounded List Element 3</Text>
          <Text $format="Body/Small/Regular" $color="textDisabled">··· 1234</Text>
        </ListElementContent>
        <ListElementAction>
          <Button $type={KDSButton.TEXT}>
            <Text $format="Label/Large/Medium" $color="primary">Cambiar</Text>
          </Button>
        </ListElementAction>
      </ListElement>

      <ListElement $rounded>
        <ListElementIcon>
          <Icon name="Copy" width={32} height={32} />
        </ListElementIcon>
        <ListElementContent>
          <Text $format="Body/Medium/Bold">Rounded List Element 4</Text>
          <Text $format="Body/Small/Regular" $color="textDisabled">··· 1234</Text>
        </ListElementContent>
        <ListElementAction>
          <Button $type={KDSButton.TEXT}>
            <Text $format="Label/Large/Medium" $color="primary">Cambiar</Text>
          </Button>
        </ListElementAction>
      </ListElement>
    </FlowContent>
  </NarrowFlowLayout>
);

export const Desktop = Template.bind({});
