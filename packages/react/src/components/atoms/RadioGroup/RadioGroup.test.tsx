import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { RadioGroup, RadioGroupOption } from './RadioGroup';

describe('RadioGroup', () => {
  const options = [
    { $value: 'a', $label: 'Option A' },
    { $value: 'b', $label: 'Option B' },
    { $value: 'c', $label: 'Option C' },
  ];

  it('renders all options', () => {
    render(
      <RadioGroup $value="a" $onValueChange={() => {}}>
        {options.map((opt) => (
          <RadioGroupOption key={opt.$value} {...opt} />
        ))}
      </RadioGroup>,
    );
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
    expect(screen.getByText('Option C')).toBeInTheDocument();
  });

  it('marks the correct option as checked', () => {
    render(
      <RadioGroup $value="b" $onValueChange={() => {}}>
        {options.map((opt) => (
          <RadioGroupOption key={opt.$value} {...opt} />
        ))}
      </RadioGroup>,
    );
    const radios = screen.getAllByRole('radio');
    expect(radios[1]).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onValueChange when an option is selected', async () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup $value="a" $onValueChange={onValueChange}>
        {options.map((opt) => (
          <RadioGroupOption key={opt.$value} {...opt} />
        ))}
      </RadioGroup>,
    );
    const radios = screen.getAllByRole('radio');
    await userEvent.click(radios[2]);
    expect(onValueChange).toHaveBeenCalledWith('c');
  });

  it('disables all options when $disabled is true', () => {
    render(
      <RadioGroup $value="a" $onValueChange={() => {}} disabled>
        {options.map((opt) => (
          <RadioGroupOption key={opt.$value} {...opt} />
        ))}
      </RadioGroup>,
    );
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('tabindex', '-1');
    });
  });

  it('applies $orientation prop', () => {
    const { container } = render(
      <RadioGroup $value="a" $onValueChange={() => {}} $orientation="horizontal">
        {options.map((opt) => (
          <RadioGroupOption key={opt.$value} {...opt} />
        ))}
      </RadioGroup>,
    );
    // Check that orientation is applied to the inner container
    const innerContainer = container.querySelector('.flex-row');
    expect(innerContainer).toBeInTheDocument();
  });

  it('supports custom className', () => {
    const { container } = render(
      <RadioGroup $value="a" $onValueChange={() => {}} className="custom-group">
        {options.map((opt) => (
          <RadioGroupOption key={opt.$value} {...opt} />
        ))}
      </RadioGroup>,
    );
    const outerContainer = container.querySelector('.custom-group');
    expect(outerContainer).toBeInTheDocument();
  });
});
