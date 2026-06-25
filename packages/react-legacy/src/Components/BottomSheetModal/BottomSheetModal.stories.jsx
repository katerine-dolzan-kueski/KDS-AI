import React from 'react';

import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { BottomSheetModal } from '../BottomSheetModal';


const DefaultTemplate = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <BottomSheetModal {...args} />
  </>
)

const MiniTemplate = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <BottomSheetModal {...args} >
      <Spacer $size={['spacing05', 'tablet:spacing07']} />
      <Text>
        Sample modal content.
      </Text>
      <Text>
        Sample modal content.
      </Text>

    </BottomSheetModal>
  </>
)

export const Default = DefaultTemplate.bind({});
export const MiniVariant = MiniTemplate.bind({});

Default.args = {
  open: true,
  title: 'Title',
  description: [<p>Kueski</p>],
  acceptButtonProps: { label: 'Sí, continuar' },
  cancelButtonProps: { label: 'Cancelar' },
};

MiniVariant.args = {
  $hideCloseIcon: false,
  $isMini: true,
  open: true,
  title: 'Title',
};

export default {
  argTypes: {
    open: {
      defaultValue: true,
      description: 'Handle if the modal is open or close',
      type: 'boolean',
    },
    $isMini: {
      defaultValue: true,
      description: 'Handle if the modal is variant mini',
      type: 'boolean',
    },
    title: {
      defaultValue: 'Title',
      description: 'Modal title',
      type: 'string',
    },
    acceptButtonProps: {
      defaultValue: { label: 'Sí, continuar' },
      description: 'Handle if the modal will show an accept button',
      type: 'object',
    },
    cancelButtonProps: {
      defaultValue: { label: 'Cancelar' },
      description: 'Handle if the modal will show an cancel button',
      type: 'object',
    },
  },
  component: BottomSheetModal,
  title: 'OLD Design System/Components/BottomSheetModal',
};
