import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabsProps } from './Tabs.models';
import { TabContextProvider } from './Tabs.utils';

export const Tabs: React.FC<TabsProps> = ({
  children, defaultValue, selected, setSelected,
}) => {
  const [internalSelected, setInternalSelected] = useState<string>(defaultValue ?? '');

  return (
    <TabContextProvider value={{
      selected: selected ?? internalSelected,
      setSelected: setSelected ?? setInternalSelected,
    }}
    >
      {children}
    </TabContextProvider>
  );
};

Tabs.propTypes = {
  defaultValue: PropTypes.string,
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

Tabs.defaultProps = {
  defaultValue: undefined,
  selected: undefined,
  setSelected: undefined,
};
