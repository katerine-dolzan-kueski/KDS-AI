import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TabProps } from './Tabs.models';
import { tabsContext } from './Tabs.utils';

export const Tab: React.FC<TabProps> = ({
  children,
  component: Component = 'button',
  disabled = false,
  value,
}) => {
  const { selected, setSelected } = useContext(tabsContext);
  const isTextComponent = typeof Component === 'string';
  const isActive = isTextComponent ? undefined : selected === value;

  return (
    <Component $active={isActive} disabled={disabled} onClick={() => setSelected(value)}>
      {children}
    </Component>
  );
};

Tab.propTypes = {
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
};
Tab.defaultProps = {
  component: 'button',
  disabled: false,
};
