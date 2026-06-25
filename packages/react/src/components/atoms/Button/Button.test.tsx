import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Button } from './Button';
import { ButtonProps, ButtonVariant, ButtonSize, ButtonMode } from './Button.types';

// Mock the accessibility hooks
vi.mock('../../../hooks/useAccessibility', () => ({
  useAccessibility: vi.fn((options) => {
    // Simulate the real behavior of the hook
    const ariaLabel = (() => {
      if (options.loading && options.loadingText) return options.loadingText;
      if (options['aria-label']) return options['aria-label'];
      if (typeof options.children === 'string') return options.children;
      return undefined;
    })();

    const ariaBusy = options.loading || options.busy;

    const mockOnKeyDown = vi.fn((event) => {
      // Call the original onKeyDown if provided
      options.onKeyDown?.(event);
    });

    return {
      eventHandlers: {
        onKeyDown: mockOnKeyDown,
      },
      accessibilityProps: {
        'aria-label': ariaLabel,
        'aria-busy': ariaBusy || undefined,
      },
    };
  }),
}));

// Mock the styles module
vi.mock('./Button.styles', () => ({
  buttonVariants: vi.fn((props) => {
    const baseClasses = 'mocked-button-classes';
    if (props?.className) {
      return `${baseClasses} ${props.className}`;
    }
    return baseClasses;
  }),
  buttonLinkVariants: vi.fn((props) => {
    const baseClasses = 'mocked-button-link-classes';
    if (props?.className) {
      return `${baseClasses} ${props.className}`;
    }
    return baseClasses;
  }),
}));

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    children: 'Test Button',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Test Button');
    });

    it('should render with custom className', () => {
      render(<Button {...defaultProps} className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('should render as different element when $as prop is provided', () => {
      render(<Button {...defaultProps} $as="div" />);
      const element = screen.getByText('Test Button');
      expect(element.tagName).toBe('DIV');
    });

    it('should render as Slot when $asChild is true', () => {
      render(
        <Button $asChild $loading={false}>
          <a href="/test">Link Button</a>
        </Button>,
      );
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent('Link Button');
    });
  });

  describe('Props and Variants', () => {
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
      it(`should render with ${variant} variant`, () => {
        render(<Button {...defaultProps} $variant={variant} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
      });
    });

    const sizes: ButtonSize[] = ['sm', 'default', 'md', 'lg'];

    sizes.forEach((size) => {
      it(`should render with ${size} size`, () => {
        render(<Button {...defaultProps} $size={size} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
      });
    });

    const modes: ButtonMode[] = ['default', 'icon', 'alternative', 'link'];

    modes.forEach((mode) => {
      it(`should render with ${mode} mode`, () => {
        render(<Button {...defaultProps} $mode={mode} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('Loading State', () => {
    it('should show loading state when $loading is true', () => {
      render(
        <Button {...defaultProps} $loading>
          <span>Loading...</span>
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('should show loading text when provided', () => {
      render(
        <Button {...defaultProps} $loading $loadingText="Please wait...">
          Original Text
        </Button>,
      );
      expect(screen.getByText('Please wait...')).toBeInTheDocument();
      expect(screen.queryByText('Original Text')).not.toBeInTheDocument();
    });

    it('should show loading icon when provided', () => {
      const loadingIcon = <span data-testid="loading-icon">⏳</span>;
      render(
        <Button {...defaultProps} $loading $loadingIcon={loadingIcon}>
          Loading
        </Button>,
      );
      expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
    });

    it('should show default loading icon when not provided', () => {
      render(<Button {...defaultProps} $loading />);
      const button = screen.getByRole('button');
      // Should render the default <div /> loading icon
      expect(button.querySelector('div')).toBeInTheDocument();
    });
  });

  describe('Full Width', () => {
    it('should apply full width class when $fullWidth is true', () => {
      render(<Button {...defaultProps} $fullWidth />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('!w-full');
    });

    it('should not apply full width class when $fullWidth is false', () => {
      render(<Button {...defaultProps} $fullWidth={false} />);
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('!w-full');
    });
  });

  describe('Accessibility', () => {
    it('should have proper aria-label when provided', () => {
      render(<Button {...defaultProps} aria-label="Custom aria label" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom aria label');
    });

    it('should use children as aria-label when no aria-label provided', () => {
      render(<Button>Accessible Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Accessible Button');
    });

    it('should use loading text as aria-label when loading', () => {
      render(
        <Button $loading $loadingText="Loading content...">
          Original Text
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Loading content...');
    });

    it('should have aria-busy when loading', () => {
      render(<Button {...defaultProps} $loading />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('should not have aria-busy when not loading', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      // The button should not have aria-busy attribute when not loading
      expect(button).not.toHaveAttribute('aria-busy');
    });
  });

  describe('Event Handling', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button {...defaultProps} onClick={handleClick} />);
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button {...defaultProps} onClick={handleClick} disabled />);
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button {...defaultProps} onClick={handleClick} $loading />);
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should call onKeyDown when key is pressed', async () => {
      const handleKeyDown = vi.fn();
      const user = userEvent.setup();

      render(<Button {...defaultProps} onKeyDown={handleKeyDown} />);
      const button = screen.getByRole('button');

      await user.type(button, 'a');
      expect(handleKeyDown).toHaveBeenCalled();
    });
  });

  describe('Keyboard Navigation', () => {
    it('should handle Enter key activation', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button {...defaultProps} onClick={handleClick} />);
      const button = screen.getByRole('button');

      await user.type(button, '{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });

    it('should handle Space key activation', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button {...defaultProps} onClick={handleClick} />);
      const button = screen.getByRole('button');

      await user.type(button, ' ');
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('HTML Attributes', () => {
    it('should pass through HTML button attributes', () => {
      render(
        <Button {...defaultProps} type="submit" form="test-form" data-testid="custom-button" />,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit'); // Should pass through the provided type
      expect(button).toHaveAttribute('form', 'test-form');
      expect(button).toHaveAttribute('data-testid', 'custom-button');
    });

    it('should always have type="button" by default', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Ref Forwarding', () => {
    it('should forward ref to button element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button {...defaultProps} ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should forward ref when using $as prop', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Button {...defaultProps} $as="div" ref={ref as any} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Compound Variants', () => {
    it('should handle icon mode with different sizes', () => {
      const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

      sizes.forEach((size) => {
        const { unmount } = render(<Button {...defaultProps} $mode="icon" $size={size} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        unmount();
      });
    });

    it('should handle alternative mode with different sizes', () => {
      const sizes: ButtonSize[] = ['sm', 'lg'];

      sizes.forEach((size) => {
        const { unmount } = render(<Button {...defaultProps} $mode="alternative" $size={size} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      render(<Button />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toBeEmptyDOMElement();
    });

    it('should handle null children', () => {
      render(<Button>{null}</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should handle undefined children', () => {
      render(<Button>{undefined}</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should handle multiple children', () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('IconText');
    });

    it('should handle complex loading state with custom icon and text', () => {
      const customIcon = <span data-testid="custom-loading">🔄</span>;
      render(
        <Button $loading $loadingText="Processing..." $loadingIcon={customIcon}>
          Submit
        </Button>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(screen.getByText('Processing...')).toBeInTheDocument();
      expect(screen.getByTestId('custom-loading')).toBeInTheDocument();
      expect(screen.queryByText('Submit')).not.toBeInTheDocument();
    });
  });

  describe('Library Integration', () => {
    it('should work with external form libraries', () => {
      const handleSubmit = vi.fn();
      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit Form</Button>
        </form>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit'); // Should pass through the provided type
    });

    it('should work with external state management', () => {
      const TestComponent = () => {
        const [count, setCount] = React.useState(0);
        return (
          <div>
            <span data-testid="count">{count}</span>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
          </div>
        );
      };

      render(<TestComponent />);
      const count = screen.getByTestId('count');
      const button = screen.getByRole('button');

      expect(count).toHaveTextContent('0');
      fireEvent.click(button);
      expect(count).toHaveTextContent('1');
    });

    it('should work with external routing libraries', () => {
      render(
        <Button $asChild $loading={false}>
          <a href="/dashboard">Go to Dashboard</a>
        </Button>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/dashboard');
    });
  });
});
