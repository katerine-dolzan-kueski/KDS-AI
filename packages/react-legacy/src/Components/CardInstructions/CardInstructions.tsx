import React from 'react';

import { color } from '../../theme/color';

import { CardRow, SpacerLine } from './CardInstructions.styles';
import { ContainerBox } from '../ContainerBox';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { Icon, IconName } from '../Icon';

type TInstruction = {
  icon: IconName;
  label: string;
};
type CardInstructionsProps = {
  instructions: TInstruction[];
  title: string;
};

export const CardInstructions: React.FC<CardInstructionsProps> = ({ instructions, title }) => (
  <ContainerBox
    $air="spacing06"
    $padding="spacing05"
  >
    <Text
      $color="textPrimary"
      $format="Body/Medium/Bold"
    >
      {title}
    </Text>
    <Spacer $size={['spacing05', 'tablet:spacing03']} />
    {instructions.map((instruction, i) => (
      <>
        <CardRow key={instruction.label}>
          <Icon
            name={instruction.icon}
            width={32}
            height={32}
            fillColor={color.iconPrimary}
          />
          <Text
            $color="textPrimary"
            $format="Body/Medium/Regular"
          >
            {instruction.label}
          </Text>
        </CardRow>
        {i + 1 < instructions.length && <SpacerLine />}
      </>
    ))}
  </ContainerBox>
);
