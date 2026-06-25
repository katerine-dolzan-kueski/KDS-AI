import { KDSResponsiveProp } from '../../theme/breakpoint';
import { KDSSpacing } from '../../theme/spacing';

type Cols = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface ResponsiveTableProps {
  $cols?: Cols;
  $padding?: KDSResponsiveProp<KDSSpacing>;
  $shadow?: boolean;
  $symmetric?: boolean;
}
