import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../Grid';
import { Header } from '../Header';
import { Display } from '../Display';
import { Button, KDSButton } from '../Button';
import { Spacer } from '../Spacer';
import { Icon } from '../Icon';
import { RightContainer } from '../ContainerBox';

export interface SectionTitleWithIconProps {
  icon?: React.ReactNode;
  large?: boolean;
  onClick?: () => void;
  backButtonAriaLabel?: string;
}

export interface FooterReferencesParams {
  id: string;
}

export const SectionTitleWithIcon: React.FC<SectionTitleWithIconProps> = ({
  children, large, icon, onClick, backButtonAriaLabel,
}) => (
  <>
    <Grid
      $cols={large ? '12' : ['12', 'bigTablet:11']}
      $gap={large ? ['spacing05'] : ['spacing01', 'bigTablet:spacing04']}
      $air={large ? 'spacing03' : undefined}
    >
      <Display $on={[large ? 'block' : 'none', 'bigTablet:block']}>
        <Button
          onClick={onClick}
          $micro
          $noElevation
          $type={large ? KDSButton.NAV : KDSButton.SECONDARY}
          aria-label={backButtonAriaLabel}
        >
          <Icon name="LeftArrow" fillColor="var(--kds-color-text-primary)" width={16} height={16} />
        </Button>
        <Spacer $size={large ? 'spacing05' : 'bigTablet:spacing07'} />
      </Display>
      <Display $on={[large ? 'none' : 'block', 'bigTablet:none']}>
        <Button onClick={onClick} $micro $type={KDSButton.GHOST}>
          <Icon name="ChevronLeftSlim" fill="var(--kds-color-text-primary)" width={16} height={16} />
        </Button>
      </Display>
    </Grid>
    <Grid $cols="2">
      <Header
        $format={(
          large
            ? 'Headline/Small/Bold'
            : ['Headline/Small/Bold', 'bigTablet:Headline/Large/Bold']
        )}
      >
        {children}
      </Header>
      <RightContainer>
        {icon}
      </RightContainer>
    </Grid>
    <Spacer $size="spacing03" />
  </>
);

SectionTitleWithIcon.propTypes = {
  backButtonAriaLabel: PropTypes.string,
  icon: PropTypes.element.isRequired,
  large: PropTypes.bool,
  onClick: PropTypes.func,
};

SectionTitleWithIcon.defaultProps = {
  backButtonAriaLabel: undefined,
  large: false,
  onClick: undefined,
};
