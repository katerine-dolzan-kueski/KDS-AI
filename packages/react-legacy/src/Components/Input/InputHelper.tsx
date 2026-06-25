import React, { ReactNode } from 'react';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

export const InputHelper = ({ $isError, text }: { text?: ReactNode; $isError?: boolean }) => (
  text
    ? (
      <>
        <Spacer $size="spacing03" />
        {' '}
        <Text
          $color={$isError ? 'danger' : 'secondaryDark'}
          $format="Body/Small/Regular"
        >
          {text}
        </Text>
      </>
    )
    : null
);

InputHelper.defaultProps = {
  $isError: false,
  text: undefined,
};
