import { CustomComponents } from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '../../atoms/Icons';
import { cn } from '../../../lib/utils';

const Chevron: CustomComponents['Chevron'] = function DayPickerChevron({
  className,
  orientation,
  ...props
}) {
  const IconComponent = orientation === 'left' ? ChevronLeftIcon : ChevronRightIcon;

  return <IconComponent className={cn('text-text-and-icons-brand', className)} {...props} />;
};

export default Chevron;
