import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../Grid';
import { Header } from '../Header';
import { Display } from '../Display';
import { Button, KDSButton } from '../Button';
import { MobileRow } from '../MobileRow';
import { Icon } from '../Icon';

export interface SectionTitleProps {
  onClick?: () => void;
  large?: boolean;
  backButtonAriaLabel?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children, onClick, large, backButtonAriaLabel,
}) => (
  <MobileRow>
    <Grid
      $cols={large ? '11' : ['12', 'bigTablet:11']}
      $gap={large ? ['spacing01'] : ['spacing01', 'bigTablet:spacing04']}
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
      </Display>
      <Display $on={[large ? 'none' : 'block', 'bigTablet:none']}>
        <Button onClick={onClick} $micro $type={KDSButton.GHOST}>
          <Icon name="ChevronLeftSlim" fill="var(--kds-color-text-primary)" width={16} height={16} />
        </Button>
      </Display>
      <Header
        className="col11"
        $format={(
          large
            ? 'Headline/Small/Bold'
            : ['Title/Large/Bold', 'bigTablet:Headline/Large/Bold']
        )}
      >
        {children}
      </Header>
    </Grid>
  </MobileRow>
);

SectionTitle.propTypes = {
  backButtonAriaLabel: PropTypes.string,
  large: PropTypes.bool,
  onClick: PropTypes.func,
};

SectionTitle.defaultProps = {
  backButtonAriaLabel: undefined,
  large: false,
  onClick: undefined,
};
