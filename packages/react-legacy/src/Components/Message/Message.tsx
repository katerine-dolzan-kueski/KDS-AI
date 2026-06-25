import React from 'react';
import { Spacer } from '../Spacer';
import { Header } from '../Header';
import { Text } from '../Text';
import { Button, KDSButton } from '../Button';
import { FlexColumnCentered, FlexWrapper } from '../Flex';
import { SuccessSVG } from './success';
import { ErrorSVG } from './error';

type TMessage = MessageProps & {
  success?: boolean;
};

type MessageProps = {
  buttonLabel: string;
  description?: string;
  title: string;
  onContinue(): void;
};

export const Message: React.FC<TMessage> = ({
  buttonLabel,
  description,
  success,
  title,
  onContinue,
}) => (
  <FlexWrapper>
    <FlexColumnCentered $wide>
      <Spacer $size={['spacing05', 'tablet:spacing09']} />
      {success ? <SuccessSVG /> : <ErrorSVG />}
      <Spacer $size="spacing07" />
      <Header
        $align="center"
        $color="textPrimary"
        $format={['Title/Large/Bold', 'tablet:Headline/Large/Bold']}
      >
        {title}
      </Header>
      {description && (
        <>
          <Spacer $size={['spacing05', 'tablet:spacing03']} />
          <Text
            $align="center"
            $color="textSecondary"
            $format="Body/Large/Regular"
          >
            {description}
          </Text>
        </>
      )}
      <Spacer $size="spacing07" />
    </FlexColumnCentered>
    <Button
      $type={KDSButton.PRIMARY}
      $wide
      onClick={onContinue}
      type="button"
    >
      {buttonLabel}
    </Button>
  </FlexWrapper>
);

export const SuccessMessage: React.FC<MessageProps> = (props) => (
  <Message
    {...props}
    success
    data-testid="success-message"
  />
);

export const ErrorMessage: React.FC<MessageProps> = (props) => (
  <Message
    {...props}
    data-testid="error-message"
  />
);

Message.defaultProps = {
  description: undefined,
  success: false,
};

SuccessMessage.defaultProps = {
  description: undefined,
};

ErrorMessage.defaultProps = {
  description: undefined,
};
