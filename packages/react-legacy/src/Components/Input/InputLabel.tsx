import React from 'react';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

export const InputLabel = ({ label, htmlFor }: { label?: string; htmlFor?: string }) => (
  label
    ? (
      <>
        <Text
          as="label"
          htmlFor={htmlFor}
          $color="textPrimary"
          $format="Body/Medium/Medium"
        >
          {label}
        </Text>
        <Spacer $size="spacing03" />
        {' '}
      </>
    )
    : null
);

InputLabel.defaultProps = {
  htmlFor: undefined,
  label: undefined,
};
