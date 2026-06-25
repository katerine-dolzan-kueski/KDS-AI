export interface TabContext {
  selected?: string,
  setSelected: (selected: string) => void;
}

export interface TabsProps {
  defaultValue?: string;
  selected?: string;
  setSelected?: (selected: string) => void;
}

export interface TabAllowedComponent {
  $active?: boolean;
  disabled?: boolean;
  onClick: (value: string) => void;
}

export interface TabContentProps {
  value: string;
}

export interface TabProps extends TabContentProps {
  disabled?: boolean;
  component?: React.ComponentType<TabAllowedComponent> | string;
}
