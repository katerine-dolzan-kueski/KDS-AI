import { cn } from '../../../lib/utils';
import { SectionHeaderProps } from './SectionHeader.types';
import { sectionHeaderStyles, headingStyles, trailingActionStyles } from './SectionHeader.styles';

export function SectionHeader({
  className, 
  $title,
  $trailing,
  children,
  $size = 'h2',
  $alignment = 'left',
  ...props 
}: SectionHeaderProps) {
  const HeadingTag: keyof JSX.IntrinsicElements = $size;
  
  return (
    <div className={cn(sectionHeaderStyles({ $alignment }), className)} {...props}>
      {/* Header section with title and trailing action */}
      <div className="flex items-center">
        <HeadingTag className={cn(headingStyles({ $size }), 'flex-1')}>
          {$title}
        </HeadingTag>
        
        {$trailing && (
          <div className={trailingActionStyles()}>
            {$trailing}
          </div>
        )}
      </div>
      
      {/* Children content */}
      {children && (
        <div className="text-text-and-icons-secondary">
          {children}
        </div>
      )}
    </div>
  );
};
