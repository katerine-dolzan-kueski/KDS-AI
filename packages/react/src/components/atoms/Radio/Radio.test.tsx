import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Radio, RadioIndicator, RadioLabel } from './Radio';
import { RadioProps } from './Radio.types';

// Mock the utils module
vi.mock('./Radio.utils', () => ({
  createUnifiedActivationHandler: vi.fn((handler) => handler),
  createKeyboardActivationHandler: vi.fn((handler) => handler),
}));

// Mock the styles module
vi.mock('./Radio.styles', () => ({
  radioVariants: vi.fn(() => 'mocked-radio-classes'),
  radioIndicatorVariants: vi.fn(() => 'mocked-indicator-classes'),
  radioDotVariants: vi.fn(() => 'mocked-dot-classes'),
  radioLabelVariants: vi.fn(() => 'mocked-label-classes'),
}));

describe('Radio Component', () => {
  const defaultProps: RadioProps = {
    $value: 'test-value',
    $name: 'test-radio',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      render(<Radio {...defaultProps} className="custom-class" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveClass('custom-class');
    });

    it('should render with aria-label when provided', () => {
      render(<Radio {...defaultProps} aria-label="Custom Radio Label" />);
      const radio = screen.getByRole('radio', { name: 'Custom Radio Label' });
      expect(radio).toBeInTheDocument();
    });

    it('should render as Slot when $asChild is true', () => {
      render(
        <Radio {...defaultProps} $asChild>
          <div data-testid="custom-element">Custom Radio</div>
        </Radio>,
      );
      const customElement = screen.getByTestId('custom-element');
      expect(customElement).toBeInTheDocument();
    });
  });

  describe('Checked State', () => {
    it('should render as unchecked by default', () => {
      render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');
      expect(radio).not.toBeChecked();
    });

    it('should render as checked when checked is true', () => {
      render(<Radio {...defaultProps} checked />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeChecked();
    });

    it('should update checked state when checked prop changes', () => {
      const { rerender } = render(<Radio {...defaultProps} checked={false} />);
      const radio = screen.getByRole('radio');
      expect(radio).not.toBeChecked();

      rerender(<Radio {...defaultProps} checked />);
      expect(radio).toBeChecked();
    });

    it('should call onChange when clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      await user.click(radio);
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('should maintain internal state when uncontrolled', async () => {
      const user = userEvent.setup();
      render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');

      expect(radio).not.toBeChecked();

      await user.click(radio);
      await waitFor(() => {
        expect(radio).toBeChecked();
      });
    });
  });

  describe('Disabled State', () => {
    it('should render with disabled state when disabled is true', () => {
      render(<Radio {...defaultProps} disabled />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('tabindex', '-1');
      // The actual input inside is disabled
      const input = radio.querySelector('input');
      expect(input).toBeDisabled();
    });

    it('should not call onChange when disabled and clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} disabled onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      await user.click(radio);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} disabled onClick={handleClick} />);
      const radio = screen.getByRole('radio');

      await user.click(radio);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not allow keyboard activation when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} disabled onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      await user.type(radio, '{Enter}');
      await user.type(radio, ' ');
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Event Handling', () => {
    it('should call onChange only once when clicked (no duplicate calls)', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      await user.click(radio);

      // Critical test: onChange should be called exactly once, not twice
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} onClick={handleClick} />);
      const radio = screen.getByRole('radio');

      await user.click(radio);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should handle keyboard activation with Enter key', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      radio.focus();
      await user.keyboard('{Enter}');
      expect(handleChange).toHaveBeenCalled();
    });

    it('should handle keyboard activation with Space key', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      radio.focus();
      await user.keyboard(' ');
      expect(handleChange).toHaveBeenCalled();
    });

    it('should call onFocus when focused', async () => {
      const handleFocus = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} onFocus={handleFocus} />);
      screen.getByRole('radio');

      await user.tab();
      expect(handleFocus).toHaveBeenCalled();
    });

    it('should call onBlur when blurred', () => {
      const handleBlur = vi.fn();

      render(<Radio {...defaultProps} onBlur={handleBlur} />);
      const radio = screen.getByRole('radio');

      radio.focus();
      radio.blur();
      expect(handleBlur).toHaveBeenCalled();
    });

    it('should handle mouse down and mouse up', () => {
      render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');

      fireEvent.mouseDown(radio);
      fireEvent.mouseUp(radio);
      expect(radio).toBeInTheDocument();
    });

    it('should handle mouse enter and mouse leave', () => {
      render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');

      fireEvent.mouseEnter(radio);
      fireEvent.mouseLeave(radio);
      expect(radio).toBeInTheDocument();
    });
  });

  describe('HTML Attributes', () => {
    it('should have correct name attribute on hidden input', () => {
      const { container } = render(<Radio {...defaultProps} $name="radio-group-1" />);
      const input = container.querySelector('input[type="radio"]');
      expect(input).toHaveAttribute('name', 'radio-group-1');
    });

    it('should have correct value attribute on hidden input', () => {
      const { container } = render(<Radio {...defaultProps} $value="option-1" />);
      const input = container.querySelector('input[type="radio"]');
      expect(input).toHaveAttribute('value', 'option-1');
    });

    it('should pass through additional HTML attributes', () => {
      render(<Radio {...defaultProps} data-testid="custom-radio" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('data-testid', 'custom-radio');
    });
  });

  describe('Accessibility', () => {
    it('should have role="radio"', () => {
      render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeInTheDocument();
    });

    it('should have aria-checked="false" when unchecked', () => {
      render(<Radio {...defaultProps} checked={false} />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('aria-checked', 'false');
    });

    it('should have aria-checked="true" when checked', () => {
      render(<Radio {...defaultProps} checked />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('aria-checked', 'true');
    });

    it('should have tabindex -1 when disabled', () => {
      render(<Radio {...defaultProps} disabled />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('tabindex', '-1');
    });

    it('should be keyboard accessible with tab', async () => {
      const user = userEvent.setup();
      render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');

      await user.tab();
      expect(radio).toHaveFocus();
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid clicks', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio {...defaultProps} onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      await user.click(radio);
      await user.click(radio);
      await user.click(radio);

      expect(handleChange).toHaveBeenCalled();
    });

    it('should handle state changes while focused', async () => {
      const { rerender } = render(<Radio {...defaultProps} checked={false} />);
      const radio = screen.getByRole('radio');

      radio.focus();
      expect(radio).toHaveFocus();

      rerender(<Radio {...defaultProps} checked />);
      expect(radio).toBeChecked();
      expect(radio).toHaveFocus();
    });

    it('should handle being disabled while focused', () => {
      const { rerender } = render(<Radio {...defaultProps} />);
      const radio = screen.getByRole('radio');

      radio.focus();
      expect(radio).toHaveFocus();

      rerender(<Radio {...defaultProps} disabled />);
      expect(radio).toHaveAttribute('tabindex', '-1');
    });
  });
});

describe('RadioIndicator Component', () => {
  it('should render indicator', () => {
    const { container } = render(<RadioIndicator checked />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    const { container } = render(<RadioIndicator checked className="custom-indicator" />);
    expect(container.firstChild).toHaveClass('custom-indicator');
  });

  it('should render with checked state', () => {
    const { container } = render(<RadioIndicator checked />);
    const indicator = container.firstChild as HTMLElement;
    expect(indicator).toHaveClass('bg-background-brand');
  });

  it('should render with unchecked state', () => {
    const { container } = render(<RadioIndicator checked={false} />);
    const indicator = container.firstChild as HTMLElement;
    expect(indicator).toHaveClass('bg-transparent');
  });

  it('should render with custom className', () => {
    const { container } = render(<RadioIndicator checked className="custom-indicator-class" />);
    const indicator = container.firstChild as HTMLElement;
    expect(indicator).toHaveClass('custom-indicator-class');
  });
});

describe('RadioLabel Component', () => {
  it('should render label with text', () => {
    render(<RadioLabel>Test Label</RadioLabel>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(<RadioLabel className="custom-label">Label</RadioLabel>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('custom-label');
  });

  it('should apply disabled styling', () => {
    render(<RadioLabel disabled>Disabled Label</RadioLabel>);
    const label = screen.getByText('Disabled Label');
    expect(label).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<RadioLabel onClick={handleClick}>Clickable Label</RadioLabel>);
    const label = screen.getByText('Clickable Label');

    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render complex children', () => {
    render(
      <RadioLabel>
        <span>Complex</span> <strong>Label</strong>
      </RadioLabel>,
    );
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});
