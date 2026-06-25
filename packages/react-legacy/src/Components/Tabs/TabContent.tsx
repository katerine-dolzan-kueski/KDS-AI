import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TabContentProps } from './Tabs.models';
import { tabsContext } from './Tabs.utils';

export const TabContent: React.FC<TabContentProps> = ({
  children,
  value,
}) => {
  const { selected } = useContext(tabsContext);

  if (selected !== value) return null;

  return <>{children}</>;
};

TabContent.propTypes = {
  value: PropTypes.string.isRequired,
};
TabContent.defaultProps = {};
