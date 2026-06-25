import { createContext } from 'react';
import { TabContext } from './Tabs.models';

export const tabsContext = createContext<TabContext>({} as TabContext);

export const { Provider: TabContextProvider } = tabsContext;
