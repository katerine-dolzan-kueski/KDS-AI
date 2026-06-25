import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './index';
import { Button } from '../Button';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with nested content', () => {
    render(
      <Card>
        <div className="p-4">
          <h3>Test Header</h3>
          <p>Test content</p>
        </div>
      </Card>,
    );
    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Card $variant="primary">Primary card</Card>);
    expect(screen.getByText('Primary card')).toBeInTheDocument();

    rerender(<Card $variant="secondary">Secondary card</Card>);
    expect(screen.getByText('Secondary card')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Card $size="sm">Small card</Card>);
    expect(screen.getByText('Small card')).toBeInTheDocument();

    rerender(<Card $size="md">Medium card</Card>);
    expect(screen.getByText('Medium card')).toBeInTheDocument();

    rerender(<Card $size="lg">Large card</Card>);
    expect(screen.getByText('Large card')).toBeInTheDocument();

    rerender(<Card $size="auto">Auto card</Card>);
    expect(screen.getByText('Auto card')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Test content</Card>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Card data-testid="card" data-custom="value">
        Test content
      </Card>,
    );
    expect(screen.getByTestId('card')).toHaveAttribute('data-custom', 'value');
  });

  it('renders with complete card structure', () => {
    render(
      <Card $variant="primary" $size="auto">
        <div className="p-4">
          <h3>Card Title</h3>
          <p>Card content goes here</p>
          <div>
            <Button>Action</Button>
          </div>
        </div>
      </Card>,
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card content goes here')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    const { container: primaryContainer } = render(
      <Card $variant="primary" data-testid="primary-card">
        Test content
      </Card>,
    );
    expect(primaryContainer.firstChild).toHaveClass('bg-background-primary');

    const { container: secondaryContainer } = render(
      <Card $variant="secondary" data-testid="secondary-card">
        Test content
      </Card>,
    );
    expect(secondaryContainer.firstChild).toHaveClass('bg-background-secondary');
  });

  it('applies correct size styles', () => {
    const { container: smContainer } = render(
      <Card $size="sm" data-testid="sm-card">
        Test content
      </Card>,
    );
    expect(smContainer.firstChild).toHaveClass('min-h-[120px]');

    const { container: mdContainer } = render(
      <Card $size="md" data-testid="md-card">
        Test content
      </Card>,
    );
    expect(mdContainer.firstChild).toHaveClass('min-h-[160px]');

    const { container: lgContainer } = render(
      <Card $size="lg" data-testid="lg-card">
        Test content
      </Card>,
    );
    expect(lgContainer.firstChild).toHaveClass('min-h-[200px]');

    const { container: autoContainer } = render(
      <Card $size="auto" data-testid="auto-card">
        Test content
      </Card>,
    );
    expect(autoContainer.firstChild).toHaveClass('h-auto', 'w-full');
  });

  it('renders with responsive padding structure', () => {
    render(
      <Card $variant="primary" $size="auto">
        <div className="p-4 sm:p-5 md:p-6">
          <h3>Responsive Card</h3>
          <p>This card has responsive padding</p>
        </div>
      </Card>,
    );
    expect(screen.getByText('Responsive Card')).toBeInTheDocument();
    expect(screen.getByText('This card has responsive padding')).toBeInTheDocument();
  });
});
