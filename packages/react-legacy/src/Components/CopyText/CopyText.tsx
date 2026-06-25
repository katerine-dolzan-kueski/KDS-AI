import React, { useState } from 'react';
import { Spacer } from '../Spacer';
import { Header } from '../Header';
import { Text } from '../Text';
import { copyTextToClipboard } from '../../utils/copyText';
import { ContainerBox, RightContainer } from '../ContainerBox';
import { Grid } from '../Grid';
import { Button, KDSButton } from '../Button';
import { Icon } from '../Icon';
import { color } from '../../theme/color';
import { CopyTextProps } from './CopyText.models';

export const CopyText: React.FC<CopyTextProps> = ({
  $title,
  $content,
  onCopy,
  onCopySuccess,
  disabled,
}) => {
  const [copying, setCopying] = useState(false);
  const copyText = async (referenceNumber: string) => {
    if (disabled || copying) return;
    setCopying(true);

    if (onCopy) onCopy();
    const copied = await copyTextToClipboard(referenceNumber);

    setCopying(false);
    if (copied && onCopySuccess) onCopySuccess();
  };
  return (
    <>
      {$title && (
        <>
          <Header $format="Title/Medium/Bold">{$title}</Header>
          <Spacer $size="spacing03" />
        </>
      )}

      {$content && (
        <ContainerBox aria-label={`Copiar ${$title}`}>
          <Grid $cols="2" $gap="spacing03">
            <Text $format="Label/Large/Bold">{$content}</Text>
            <RightContainer>
              <Button $type={KDSButton.TEXT} $micro disabled={disabled || copying}>
                <Icon
                  name="Copy"
                  onClick={() => copyText($content)}
                  fillColor={disabled || copying ? color.iconDisabled : color.iconInteraction}
                />
              </Button>
            </RightContainer>
          </Grid>
        </ContainerBox>
      )}
    </>
  );
};
