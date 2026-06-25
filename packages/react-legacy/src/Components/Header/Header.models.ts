import type { KDSResponsiveProp } from '../../theme/breakpoint';
import type { HeaderDesignToken } from '../../hocs/withResponsive';

export interface HeadingStylesProps {
  $format: KDSResponsiveProp<HeaderDesignToken>;
  $number?: boolean;
  as?: keyof JSX.IntrinsicElements;
}
