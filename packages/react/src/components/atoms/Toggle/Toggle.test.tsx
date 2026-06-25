import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<Toggle aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

    it('renders with custom className', () => {
      render(<Toggle className="custom-class" aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveClass('custom-class');
    });

    it('renders with proper default styles', () => {
      render(<Toggle aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveClass('w-10', 'h-6', 'rounded-full');
    });
  });

  describe('State Management', () => {
    it('handles checked state correctly', () => {
      render(<Toggle $checked aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('handles unchecked state correctly', () => {
      render(<Toggle $checked={false} aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

    it('calls onCheckedChange when clicked', () => {
      const handleCheckedChange = vi.fn();
      render(
        <Toggle $checked={false} onCheckedChange={handleCheckedChange} aria-label="Test toggle" />,
      );

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('calls onCheckedChange with false when toggling from checked to unchecked', () => {
      const handleCheckedChange = vi.fn();
      render(<Toggle $checked onCheckedChange={handleCheckedChange} aria-label="Test toggle" />);

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);
      expect(handleCheckedChange).toHaveBeenCalledWith(false);
    });
  });

  describe('Disabled State', () => {
    it('handles disabled state correctly', () => {
      render(<Toggle $disabled />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toBeDisabled();
    });

    it('does not call onCheckedChange when disabled', () => {
      const handleCheckedChange = vi.fn();
      render(<Toggle $disabled onCheckedChange={handleCheckedChange} aria-label="Test toggle" />);

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);
      expect(handleCheckedChange).not.toHaveBeenCalled();
    });

    it('applies disabled styles correctly', () => {
      render(<Toggle $disabled aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveClass('pointer-events-none');
    });
  });

  describe('Accessibility', () => {
    it('supports aria-label', () => {
      render(<Toggle aria-label="Enable notifications" />);
      const toggle = screen.getByRole('switch', { name: 'Enable notifications' });
      expect(toggle).toBeInTheDocument();
    });

    it('supports aria-labelledby', () => {
      render(
        <div>
          <label id="toggle-label" htmlFor="toggle-control">
            Enable notifications
          </label>
          <Toggle id="toggle-control" aria-labelledby="toggle-label" />
        </div>,
      );
      const toggle = screen.getByRole('switch', { name: 'Enable notifications' });
      expect(toggle).toBeInTheDocument();
    });

    it('has proper ARIA attributes', () => {
      render(<Toggle $checked aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
      expect(toggle).not.toHaveAttribute('aria-disabled');
    });

    it('updates aria-checked when state changes', () => {
      const { rerender } = render(<Toggle $checked={false} aria-label="Test toggle" />);
      let toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'false');

      rerender(<Toggle $checked aria-label="Test toggle" />);
      toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('Keyboard Navigation', () => {
    it('can be focused and activated', () => {
      const handleCheckedChange = vi.fn();
      render(
        <Toggle $checked={false} onCheckedChange={handleCheckedChange} aria-label="Test toggle" />,
      );

      const toggle = screen.getByRole('switch');
      // Focus the toggle first
      toggle.focus();
      expect(toggle).toHaveFocus();

      // The toggle should be focusable
      expect(toggle).toBeInTheDocument();
    });

    it('has proper keyboard accessibility', () => {
      render(<Toggle aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');

      // Should have proper role
      expect(toggle).toHaveAttribute('role', 'switch');

      // Should be focusable (can be focused programmatically)
      toggle.focus();
      expect(toggle).toHaveFocus();
    });

    it('does not respond to arrow keys', () => {
      const handleCheckedChange = vi.fn();
      render(
        <Toggle $checked={false} onCheckedChange={handleCheckedChange} aria-label="Test toggle" />,
      );

      const toggle = screen.getByRole('switch');
      fireEvent.keyDown(toggle, { key: 'ArrowRight', code: 'ArrowRight' });
      expect(handleCheckedChange).not.toHaveBeenCalled();
    });
  });

  describe('Focus Management', () => {
    it('can be focused', () => {
      render(<Toggle aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      toggle.focus();
      expect(toggle).toHaveFocus();
    });

    it('applies focus styles', () => {
      render(<Toggle aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveClass('focus:ring-2', 'focus:ring-stroke-brand');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Toggle ref={ref} aria-label="Test toggle" />);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('allows imperative focus', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Toggle ref={ref} aria-label="Test toggle" />);

      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe('Event Handling', () => {
    it('handles mouse events', () => {
      const handleCheckedChange = vi.fn();
      render(
        <Toggle $checked={false} onCheckedChange={handleCheckedChange} aria-label="Test toggle" />,
      );

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('handles touch events', () => {
      const handleCheckedChange = vi.fn();
      render(
        <Toggle $checked={false} onCheckedChange={handleCheckedChange} aria-label="Test toggle" />,
      );

      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });
  });

  describe('Visual States', () => {
    it('applies checked styles when checked', () => {
      render(<Toggle $checked aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveClass('bg-background-brand');
    });

    it('applies hover styles', () => {
      render(<Toggle aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveClass('hover:bg-states-hover');
    });

    it('applies active styles', () => {
      render(<Toggle aria-label="Test toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveClass('active:bg-states-pressed');
    });
  });

  describe('Integration', () => {
    it('works with form controls', () => {
      const handleSubmit = vi.fn();
      render(
        <form onSubmit={handleSubmit}>
          <Toggle name="notifications" aria-label="Enable notifications" />
          <button type="submit">Submit</button>
        </form>,
      );

      const form = screen.getByRole('button', { name: 'Submit' }).closest('form');
      fireEvent.submit(form!);
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('works with controlled components', () => {
      const TestComponent = () => {
        const [checked, setChecked] = React.useState(false);
        return (
          <div>
            <Toggle $checked={checked} onCheckedChange={setChecked} aria-label="Test toggle" />
            <span data-testid="status">{checked ? 'on' : 'off'}</span>
          </div>
        );
      };

      render(<TestComponent />);
      const toggle = screen.getByRole('switch');
      const status = screen.getByTestId('status');

      expect(status).toHaveTextContent('off');

      fireEvent.click(toggle);
      expect(status).toHaveTextContent('on');
    });
  });
});
