import { cn } from '../../../lib/utils';
import { HeaderProps } from './Header.types';
import { headerStyles, leadingStyles, trailingStyles, titleStyles } from './Header.styles';
import { useIsScrolled } from './Header.hooks';

export default function Header({
  className, $scrolledClassNames, $variant, $align, $leading, $trailing, $anchor, $scrolled, children, ...props
}: HeaderProps) {
  const $isScrolled = useIsScrolled({
    anchor: $anchor,
    forceScrolled: $scrolled,
    variant: $variant,
  });

  return (
    <header
      className={cn(
        headerStyles({ $align, $isScrolled, $variant }),
        className,
        $isScrolled && $scrolledClassNames,
      )} 
      {...props}
    >
      {$leading && (
        <div className={cn(leadingStyles({ $isScrolled, $large: $variant === 'main' }))}>
          {$leading}
        </div>
      )}

      <div className={cn(titleStyles({ $align, $variant, $isScrolled }))}>
        {children}
      </div>

      {$trailing && (
        <div className={cn(trailingStyles)}>
          {$trailing}
        </div>
      )}
    </header>
  );
};
