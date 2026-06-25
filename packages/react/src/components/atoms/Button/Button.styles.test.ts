/* eslint-disable default-case */
import { buttonVariants } from './Button.styles';
import { ButtonVariant, ButtonSize, ButtonMode } from './Button.types';

describe('Button Styles', () => {
  describe('buttonVariants', () => {
    it('should return base classes by default', () => {
      const result = buttonVariants();
      expect(result).toContain('typo-body-2-emphasized');
      expect(result).toContain('whitespace-nowrap');
      expect(result).toContain('flex');
      expect(result).toContain('items-center');
      expect(result).toContain('justify-center');
      expect(result).toContain('w-fit');
      expect(result).toContain('disabled:pointer-events-none');
      expect(result).toContain('disabled:cursor-not-allowed');
      expect(result).toContain('relative');
      expect(result).toContain('overflow-hidden');
      expect(result).toContain('focus-visible:!outline-[2px]');
      expect(result).toContain('focus-visible:!outline-stroke-brand');
    });

    describe('Variants', () => {
      const variants: ButtonVariant[] = [
        'primary',
        'warning',
        'destructive',
        'success',
        'upsell',
        'secondary',
        'ghost-primary',
        'ghost-destructive',
        'translucent',
        'opaque-shadow',
        'opaque-outline',
      ];

      variants.forEach((variant) => {
        it(`should apply ${variant} variant classes`, () => {
          const result = buttonVariants({ variant });
          expect(result).toContain('typo-body-2-emphasized');

          // Each variant should have specific classes
          switch (variant) {
            case 'primary':
              expect(result).toContain('bg-background-brand');
              expect(result).toContain('!text-text-and-icons-always-white');
              expect(result).toContain('border-background-brand');
              break;
            case 'warning':
              expect(result).toContain('bg-background-warning');
              expect(result).toContain('!text-text-and-icons-always-white');
              expect(result).toContain('border-background-warning');
              break;
            case 'destructive':
              expect(result).toContain('bg-background-danger');
              expect(result).toContain('!text-text-and-icons-always-white');
              expect(result).toContain('border-background-danger');
              break;
            case 'success':
              expect(result).toContain('bg-background-success');
              expect(result).toContain('!text-text-and-icons-always-white');
              expect(result).toContain('border-background-success');
              break;
            case 'upsell':
              expect(result).toContain('bg-background-upsell');
              expect(result).toContain('!text-text-and-icons-always-white');
              expect(result).toContain('border-background-upsell');
              break;
            case 'secondary':
              expect(result).toContain('bg-background-primary');
              expect(result).toContain('!text-text-and-icons-secondary');
              expect(result).toContain('outline');
              break;
            case 'ghost-primary':
              expect(result).toContain('bg-transparent');
              expect(result).toContain('!text-text-and-icons-brand');
              expect(result).toContain('border-transparent');
              break;
            case 'ghost-destructive':
              expect(result).toContain('bg-transparent');
              expect(result).toContain('!text-text-and-icons-danger');
              expect(result).toContain('border-transparent');
              break;
            case 'translucent':
              expect(result).toContain('bg-background-invert-translucent');
              expect(result).toContain('!text-text-and-icons-always-white');
              expect(result).toContain('border-transparent');
              expect(result).toContain('backdrop-blur-[5px]');
              break;
            case 'opaque-shadow':
              expect(result).toContain('bg-background-primary');
              expect(result).toContain('!text-text-and-icons-secondary');
              expect(result).toContain('top-light-elevation-2');
              expect(result).toContain('border-transparent');
              break;
            case 'opaque-outline':
              expect(result).toContain('bg-background-primary');
              expect(result).toContain('!text-text-and-icons-secondary');
              expect(result).toContain('outline-stroke-tertiary');
              expect(result).toContain('outline-[0.50px]');
              break;
          }
        });
      });
    });

    describe('Sizes', () => {
      const sizes: ButtonSize[] = ['sm', 'default', 'md', 'lg'];

      sizes.forEach((size) => {
        it(`should apply ${size} size classes`, () => {
          const result = buttonVariants({ size });
          expect(result).toContain('typo-body-2-emphasized');

          switch (size) {
            case 'sm':
              expect(result).toContain('px-x3');
              expect(result).toContain('py-x2');
              expect(result).toContain('gap-1');
              expect(result).toContain('rounded-x2');
              expect(result).toContain('[&_svg]:size-5');
              break;
            case 'default':
            case 'md':
              expect(result).toContain('px-x4');
              expect(result).toContain('py-x3');
              expect(result).toContain('gap-1');
              expect(result).toContain('rounded-x2');
              expect(result).toContain('[&_svg]:size-5');
              break;
            case 'lg':
              expect(result).toContain('px-x5');
              expect(result).toContain('py-x3');
              expect(result).toContain('h-12');
              expect(result).toContain('gap-2');
              expect(result).toContain('rounded-x3');
              expect(result).toContain('[&_svg]:size-6');
              break;
          }
        });
      });
    });

    describe('Modes', () => {
      const modes: ButtonMode[] = ['default', 'icon', 'alternative', 'link'];

      modes.forEach((mode) => {
        it(`should apply ${mode} mode classes`, () => {
          const result = buttonVariants({ mode });
          expect(result).toContain('typo-body-2-emphasized');

          switch (mode) {
            case 'default':
              // No additional classes for default mode
              break;
            case 'icon':
              // Icon mode has no base classes, only compound variants
              break;
            case 'alternative':
              expect(result).toContain('!p-x1');
              expect(result).toContain('[&_svg]:size-6');
              expect(result).toContain('rounded-full');
              expect(result).toContain('!h-fit');
              break;
          }
        });
      });
    });

    describe('Compound Variants', () => {
      it('should apply icon mode with sm size compound variant', () => {
        const result = buttonVariants({ mode: 'icon', size: 'sm' });
        expect(result).toContain('!p-x2');
      });

      it('should apply icon mode with md size compound variant', () => {
        const result = buttonVariants({ mode: 'icon', size: 'md' });
        expect(result).toContain('!p-x3');
      });

      it('should apply icon mode with lg size compound variant', () => {
        const result = buttonVariants({ mode: 'icon', size: 'lg' });
        expect(result).toContain('!p-x3');
      });

      it('should apply alternative mode with sm size compound variant', () => {
        const result = buttonVariants({ mode: 'alternative', size: 'sm' });
        expect(result).toContain('!p-half');
        expect(result).toContain('[&_svg]:size-5');
      });

      it('should apply alternative mode with lg size compound variant', () => {
        const result = buttonVariants({ mode: 'alternative', size: 'lg' });
        expect(result).toContain('[&_svg]:size-10');
        expect(result).toContain('!h-auto');
      });
    });

    describe('Default Variants', () => {
      it('should use default variants when no props provided', () => {
        const result = buttonVariants();
        // Should include base classes and default variant classes
        expect(result).toContain('typo-body-2-emphasized');
        // Default variant is 'primary', default size is 'md', default mode is 'default'
      });

      it('should use primary variant by default', () => {
        const result = buttonVariants();
        expect(result).toContain('bg-background-brand');
        expect(result).toContain('!text-text-and-icons-always-white');
      });

      it('should use md size by default', () => {
        const result = buttonVariants();
        expect(result).toContain('px-x4');
        expect(result).toContain('py-x3');
      });

      it('should use default mode by default', () => {
        const result = buttonVariants();
        // Default mode has no additional classes
        expect(result).not.toContain('!p-x1');
        expect(result).not.toContain('rounded-full');
      });
    });

    describe('Combined Props', () => {
      it('should combine variant, size, and mode classes', () => {
        const result = buttonVariants({
          variant: 'destructive',
          size: 'lg',
          mode: 'icon',
        });

        // Should have base classes
        expect(result).toContain('typo-body-2-emphasized');

        // Should have destructive variant classes
        expect(result).toContain('bg-background-danger');
        expect(result).toContain('!text-text-and-icons-always-white');

        // Should have lg size classes
        expect(result).toContain('px-x5');
        expect(result).toContain('py-x3');
        expect(result).toContain('h-12');

        // Should have icon mode compound variant classes
        expect(result).toContain('!p-x3');
      });

      it('should combine secondary variant with alternative mode', () => {
        const result = buttonVariants({
          variant: 'secondary',
          mode: 'alternative',
        });

        // Should have base classes
        expect(result).toContain('typo-body-2-emphasized');

        // Should have secondary variant classes
        expect(result).toContain('bg-background-primary');
        expect(result).toContain('!text-text-and-icons-secondary');

        // Should have alternative mode classes
        expect(result).toContain('!p-x1');
        expect(result).toContain('rounded-full');
        expect(result).toContain('!h-fit');
      });
    });

    describe('Edge Cases', () => {
      it('should handle null values', () => {
        const result = buttonVariants({
          variant: null as any,
          size: null as any,
          mode: null as any,
        });

        expect(result).toContain('typo-body-2-emphasized');
        // Should fall back to default variants
      });

      it('should handle undefined values', () => {
        const result = buttonVariants({
          variant: undefined,
          size: undefined,
          mode: undefined,
        });

        expect(result).toContain('typo-body-2-emphasized');
        // Should use default variants
      });

      it('should handle empty object', () => {
        const result = buttonVariants({});
        expect(result).toContain('typo-body-2-emphasized');
      });

      it('should handle partial props', () => {
        const result = buttonVariants({ variant: 'primary' });
        expect(result).toContain('bg-background-brand');
        expect(result).toContain('px-x4'); // Default size
      });
    });

    describe('Class Variance Authority Integration', () => {
      it('should return a string', () => {
        const result = buttonVariants();
        expect(typeof result).toBe('string');
      });

      it('should handle className prop', () => {
        const result = buttonVariants({ className: 'custom-class' });
        expect(result).toContain('custom-class');
        expect(result).toContain('typo-body-2-emphasized');
      });

      it('should merge custom className with variant classes', () => {
        const result = buttonVariants({
          variant: 'primary',
          className: 'my-custom-class',
        });

        expect(result).toContain('my-custom-class');
        expect(result).toContain('bg-background-brand');
        expect(result).toContain('typo-body-2-emphasized');
      });
    });
  });
});
