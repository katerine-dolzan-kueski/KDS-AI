import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import '@testing-library/jest-dom';
import { Divider } from './Divider';

describe('Divider', () => {
  it('should render with default props', () => {
    render(<Divider data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('bg-stroke-tertiary-a50', 'h-[1px]');
  });

  it('should render with 0.5px thickness', () => {
    render(<Divider $thickness="sm" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('h-[0.5px]');
  });

  it('should render with 1px thickness', () => {
    render(<Divider $thickness="md" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('h-[1px]');
  });

  it('should render with 2px thickness', () => {
    render(<Divider $thickness="lg" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('h-[2px]');
  });

  it('should apply custom className', () => {
    render(<Divider className="custom-divider" data-testid="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toHaveClass('custom-divider');
  });
});
