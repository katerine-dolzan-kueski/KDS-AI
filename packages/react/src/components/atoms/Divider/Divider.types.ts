import { HTMLAttributes } from 'react';

export type DividerThickness = 'thin' | 'regular' | 'thick';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Controls the height of the divider line. Maps to --border-thin / --border-regular / --border-thick. */
  $thickness?: DividerThickness;
}
