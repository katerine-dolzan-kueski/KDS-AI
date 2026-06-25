import React, { useEffect, useRef } from 'react';


import { Button, KDSButton } from '../Button';
import { Display } from '../Display';
import { Header } from '../Header';
import { Spacer } from '../Spacer';
import { Text } from '../Text';
import { theme } from '../../theme';
import { Icon } from '../Icon';

import { useClickOutside } from '../../hooks/useClickOutside';
import {
  BottomSheetCard,
  BottomSheetCardContent,
  BottomSheetContainer,
  BottomSheetHeader,
  BottomSheetOverlay,
} from './BottomSheetModal.style';
import { BottomSheetModalProps } from './BottomSheetModal.types';

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  acceptButtonProps,
  cancelButtonProps,
  children,
  description,
  $isMini,
  onClose,
  open,
  title,
  $hideCloseIcon,
}) => {
  const optionsRef = useRef(null);

  useClickOutside(optionsRef, onClose);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
  }, [open]);

  if (!open) return null;

  return (
    <BottomSheetContainer $isMini={$isMini}>
      <BottomSheetOverlay />
      <BottomSheetCard ref={optionsRef} $isMini={$isMini}>
        <BottomSheetCardContent $isMini={$isMini}>
          {title && (
            <BottomSheetHeader>
              <Header
                $align={['left', 'tablet:center']}
                $color="textPrimary"
                $format={
                  $isMini
                    ? 'Title/Large/Bold'
                    : ['Title/Large/Bold', 'tablet:Headline/Large/Bold']
                }
              >
                {title}
              </Header>
              {!$hideCloseIcon && (
                <Icon
                  className="close-icon"
                  color={theme.color.iconPrimary}
                  height={16}
                  name="Close"
                  onClick={onClose}
                  width={16}
                />
              )}
            </BottomSheetHeader>
          )}
          {description && (
            <>
              <Spacer $size="spacing05" />
              <Text
                $align={$isMini ? 'left' : ['left', 'tablet:center']}
                $color="textSecondary"
                $format={['Body/Medium/Regular', 'tablet:Body/Large/Regular']}
              >
                {description}
              </Text>
            </>
          )}
          {children}
          {$isMini
            && cancelButtonProps?.label
            && acceptButtonProps?.label && <Spacer $size="spacing06" />}
          <Display
            $on={$isMini ? ['inline', 'tablet:flex'] : 'inline'}
            className="actions"
          >
            {cancelButtonProps?.label && (
              <>
                {!$isMini && (
                  <Spacer $size={['spacing06', 'tablet:spacing09']} />
                )}
                <Display $on={['inline', 'tablet:none']}>
                  <Button
                    $type={KDSButton.LINK}
                    $wide
                    type="button"
                    {...cancelButtonProps}
                  >
                    {cancelButtonProps.label}
                  </Button>
                </Display>

                <Display $on={['none', 'tablet:contents']}>
                  <Button
                    $type={KDSButton.OUTLINE}
                    $wide
                    type="button"
                    {...cancelButtonProps}
                  >
                    {cancelButtonProps.label}
                  </Button>
                </Display>
              </>
            )}
            {acceptButtonProps?.label && (
              <>
                {!$isMini && <Spacer $size="spacing04" />}
                <Button
                  $type={KDSButton.PRIMARY}
                  $wide
                  type="button"
                  {...acceptButtonProps}
                >
                  {acceptButtonProps.label}
                </Button>
              </>
            )}
          </Display>

        </BottomSheetCardContent>
      </BottomSheetCard>
    </BottomSheetContainer>
  );
};

export default BottomSheetModal;
