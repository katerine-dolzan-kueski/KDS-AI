/* // Uncomment when we have unit tests
import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { TabContent } from './TabContent';
import { TabsProps } from './Tabs.models';

describe('@kueski-consumer-portal/components/Tabs', () => {
  const MockTabs = (args: TabsProps) => (
    <Tabs {...args}>
      <Tab value="a">Tab A</Tab>
      <Tab value="b">Tab B</Tab>
      <TabContent value="a">Tab Content A</TabContent>
      <TabContent value="b">Tab Content B</TabContent>
    </Tabs>
  );
  describe('defaultValue', () => {
    it('should not render anything when defaultValue is unset', () => {
      const { queryByText } = render(<MockTabs />);

      expect(queryByText('Tab Content A')).not.toBeInTheDocument();
      expect(queryByText('Tab Content B')).not.toBeInTheDocument();
    });

    it('should render the correct tab when defaultValue is defined', () => {
      const { queryByText } = render(<MockTabs defaultValue="b" />);

      expect(queryByText('Tab Content A')).not.toBeInTheDocument();
      expect(queryByText('Tab Content B')).toBeInTheDocument();
    });
  });

  describe('Uncontrolled Tab Navigation', () => {
    it('should allow navigation without providing a state', () => {
      const { queryByText } = render(<MockTabs />);
      const tabA = queryByText('Tab A');
      const tabB = queryByText('Tab B');

      expect(queryByText('Tab Content A')).not.toBeInTheDocument();
      expect(queryByText('Tab Content B')).not.toBeInTheDocument();

      fireEvent.click(tabA as HTMLElement);

      expect(queryByText('Tab Content A')).toBeInTheDocument();
      expect(queryByText('Tab Content B')).not.toBeInTheDocument();

      fireEvent.click(tabB as HTMLElement);

      expect(queryByText('Tab Content A')).not.toBeInTheDocument();
      expect(queryByText('Tab Content B')).toBeInTheDocument();
    });
  });

  describe('Controlled Tab Navigation', () => {
    it('should display selected prop (A)', () => {
      const { queryByText } = render(<MockTabs selected="a" />);

      expect(queryByText('Tab Content A')).toBeInTheDocument();
      expect(queryByText('Tab Content B')).not.toBeInTheDocument();
    });

    it('should display selected prop (B)', () => {
      const { queryByText } = render(<MockTabs selected="b" />);

      expect(queryByText('Tab Content A')).not.toBeInTheDocument();
      expect(queryByText('Tab Content B')).toBeInTheDocument();
    });

    it('should trigger setSelected function on tab click', () => {
      const setSelected = jest.fn();
      const { queryByText } = render(<MockTabs setSelected={setSelected} />);
      const tabA = queryByText('Tab A');
      const tabB = queryByText('Tab B');

      fireEvent.click(tabA as HTMLElement);

      expect(setSelected).toHaveBeenCalledWith('a');

      fireEvent.click(tabB as HTMLElement);

      expect(setSelected).toHaveBeenCalledWith('b');
    });
  });
});
*/
