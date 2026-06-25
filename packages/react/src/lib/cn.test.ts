import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility function', () => {
  it('should combine class names correctly', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('should handle conditional classes', () => {
    const result = cn('base', true && 'conditional', false && 'hidden');
    expect(result).toBe('base conditional');
  });

  it('should handle undefined and null values', () => {
    const result = cn('base', undefined, null, 'valid');
    expect(result).toBe('base valid');
  });

  it('should handle empty strings', () => {
    const result = cn('base', '', 'valid');
    expect(result).toBe('base valid');
  });

  it('should handle arrays of classes', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should handle objects with boolean values', () => {
    const result = cn({
      class1: true,
      class2: false,
      class3: true,
    });
    expect(result).toBe('class1 class3');
  });

  it('should handle mixed input types', () => {
    const result = cn(
      'base',
      ['array1', 'array2'],
      {
        conditional: true,
        hidden: false,
      },
      'final',
    );
    expect(result).toBe('base array1 array2 conditional final');
  });

  it('should handle complex conditional logic', () => {
    const isActive = true;
    const isDisabled = false;
    const size = 'lg' as const;

    const result = cn('button', {
      'button--active': isActive,
      'button--disabled': isDisabled,
      'button--lg': size === 'lg',
      'button--sm': size === 'sm',
    });

    expect(result).toBe('button button--active button--lg');
  });

  it('should handle empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle only falsy values', () => {
    const result = cn(false, null, undefined, '');
    expect(result).toBe('');
  });

  it('should work with Tailwind classes', () => {
    const result = cn('px-4 py-2', 'bg-blue-500', 'text-white', 'rounded-md', 'hover:bg-blue-600');

    expect(result).toBe('px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600');
  });

  it('should handle duplicate classes', () => {
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });
});
