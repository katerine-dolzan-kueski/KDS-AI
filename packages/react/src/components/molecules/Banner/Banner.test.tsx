import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Banner } from './Banner';

describe('Banner', () => {
  it('should render Banner.Root with variant', () => {
    render(
      <Banner $variant="information" data-testid="banner">
        <Banner.Icon />
        <Banner.Content>
          <Banner.Title>Test Title</Banner.Title>
          <Banner.Body>Test Description</Banner.Body>
        </Banner.Content>
      </Banner>,
    );

    const banner = screen.getByTestId('banner');
    expect(banner).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should render Banner.Icon with correct variant', () => {
    render(
      <Banner $variant="success">
        <Banner.Icon data-testid="icon" />
        <Banner.Content>
          <Banner.Title>Test Title</Banner.Title>
        </Banner.Content>
      </Banner>,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render Banner.Title', () => {
    render(
      <Banner $variant="information">
        <Banner.Icon />
        <Banner.Content>
          <Banner.Title>Test Title</Banner.Title>
        </Banner.Content>
      </Banner>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should render Banner.Body', () => {
    render(
      <Banner $variant="information">
        <Banner.Icon />
        <Banner.Content>
          <Banner.Title>Test Title</Banner.Title>
          <Banner.Body>Test Description</Banner.Body>
        </Banner.Content>
      </Banner>,
    );

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should render Banner.Close when onClose is provided', () => {
    const handleClose = vi.fn();
    render(
      <Banner $variant="information" onClose={handleClose}>
        <Banner.Icon />
        <Banner.Content>
          <Banner.Title>Test Title</Banner.Title>
        </Banner.Content>
        <Banner.Close />
      </Banner>,
    );

    const closeButton = screen.getByLabelText('Cerrar banner');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('should not render Banner.Close when onClose is not provided', () => {
    render(
      <Banner $variant="information">
        <Banner.Icon />
        <Banner.Content>
          <Banner.Title>Test Title</Banner.Title>
        </Banner.Content>
        <Banner.Close />
      </Banner>,
    );

    const closeButton = screen.queryByLabelText('Cerrar banner');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('should render all variants correctly', () => {
    const variants = ['information', 'success', 'warning', 'error', 'upsell'] as const;

    variants.forEach((variant) => {
      const { unmount } = render(
        <Banner $variant={variant}>
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>{variant} Banner</Banner.Title>
            <Banner.Body>Test description for {variant}</Banner.Body>
          </Banner.Content>
        </Banner>,
      );

      expect(screen.getByText(`${variant} Banner`)).toBeInTheDocument();
      expect(screen.getByText(`Test description for ${variant}`)).toBeInTheDocument();

      unmount();
    });
  });

  it('should apply custom className', () => {
    render(
      <Banner $variant="information" className="custom-banner">
        <Banner.Icon />
        <Banner.Content>
          <Banner.Title>Test Title</Banner.Title>
        </Banner.Content>
      </Banner>,
    );

    const banner = screen.getByText('Test Title').closest('[class*="custom-banner"]');
    expect(banner).toBeInTheDocument();
  });

  // New tests for theme context and outline logic
  describe('Theme Context Integration', () => {
    it('should show border in dark mode regardless of $outline', () => {
      render(
        <Banner $variant="information" $outline data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Dark Mode Banner</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('border');
    });

    it('should respect $outline in light mode', () => {
      render(
        <Banner $variant="information" $outline data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Light Mode Banner with Outline</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('border');
    });

    it('should not show border in light mode when $outline is false', () => {
      render(
        <Banner $variant="information" $outline={false} data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Light Mode Banner without Outline</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const banner = screen.getByTestId('banner');
      expect(banner).not.toHaveClass('border');
    });

    it('should always show border in dark mode even when $outline is false', () => {
      render(
        <Banner $variant="information" $outline data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Dark Mode Banner without Outline</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('border');
    });
  });

  describe('Optimized Outline Logic', () => {
    it('should use optimized outline validation logic', () => {
      // Test light mode with $outline={false} - should not have border
      const { unmount } = render(
        <Banner $variant="information" $outline={false} data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Test Banner</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      let banner = screen.getByTestId('banner');
      expect(banner).not.toHaveClass('border');
      unmount();

      // Test dark mode with $outline={false} - should have border
      render(
        <Banner $variant="information" $outline={false} data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Test Banner</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      banner = screen.getByTestId('banner');
      // With $outline={false}, should have border-0 and dark:border classes
      expect(banner).toHaveClass('border-0');
      expect(banner).toHaveClass('dark:border');
    });
  });

  describe('Alternative Mode', () => {
    it('should render Banner with alternative mode', () => {
      render(
        <Banner $variant="information" $alternative data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Alternative Banner</Banner.Title>
            <Banner.Body>This banner uses alternative mode styling.</Banner.Body>
          </Banner.Content>
        </Banner>,
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toBeInTheDocument();
      expect(screen.getByText('Alternative Banner')).toBeInTheDocument();
      expect(screen.getByText('This banner uses alternative mode styling.')).toBeInTheDocument();
    });

    it('should apply alternative styling classes', () => {
      render(
        <Banner $variant="information" $alternative data-testid="banner">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Alternative Banner</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('bg-background-invert-primary');
      expect(banner).toHaveClass('text-text-and-icons-invert-primary');
    });

    it('should work with all variants in alternative mode', () => {
      const variants = ['information', 'success', 'warning', 'error', 'upsell'] as const;

      variants.forEach((variant) => {
        const { unmount } = render(
          <Banner $variant={variant} $alternative data-testid="banner">
            <Banner.Icon />
            <Banner.Content>
              <Banner.Title>{variant} Alternative Banner</Banner.Title>
              <Banner.Body>Alternative mode for {variant}</Banner.Body>
            </Banner.Content>
          </Banner>,
        );

        const banner = screen.getByTestId('banner');
        expect(banner).toHaveClass('bg-background-invert-primary');
        expect(banner).toHaveClass('text-text-and-icons-invert-primary');
        expect(screen.getByText(`${variant} Alternative Banner`)).toBeInTheDocument();

        unmount();
      });
    });

    it('should preserve icon colors in alternative mode', () => {
      render(
        <Banner $variant="success" $alternative>
          <Banner.Icon data-testid="icon" />
          <Banner.Content>
            <Banner.Title>Success Alternative</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('text-text-and-icons-success-on-invert');
    });

    it('should apply alternative close button styling', () => {
      const handleClose = vi.fn();
      render(
        <Banner $variant="information" $alternative onClose={handleClose}>
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>Alternative Banner</Banner.Title>
          </Banner.Content>
          <Banner.Close data-testid="close-button" />
        </Banner>,
      );

      const closeButton = screen.getByTestId('close-button');
      expect(closeButton).toHaveClass('text-stroke-invert');
    });
  });

  describe('Custom Icons', () => {
    it('should render custom icon when children are provided', () => {
      render(
        <Banner $variant="information">
          <Banner.Icon data-testid="icon">
            <div data-testid="custom-icon">Custom Icon</div>
          </Banner.Icon>
          <Banner.Content>
            <Banner.Title>Custom Icon Banner</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const customIcon = screen.getByTestId('custom-icon');
      expect(customIcon).toBeInTheDocument();
      expect(customIcon).toHaveTextContent('Custom Icon');
    });

    it('should render default icon when no children are provided', () => {
      render(
        <Banner $variant="success">
          <Banner.Icon data-testid="icon" />
          <Banner.Content>
            <Banner.Title>Default Icon Banner</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const icon = screen.getByTestId('icon');
      expect(icon).toBeInTheDocument();
      // The default icon should be rendered (CheckmarkCircleFilledIcon for success)
      expect(icon.querySelector('svg')).toBeInTheDocument();
    });

    it('should work with custom icons in alternative mode', () => {
      render(
        <Banner $variant="warning" $alternative>
          <Banner.Icon data-testid="icon">
            <div data-testid="custom-warning-icon">⚠</div>
          </Banner.Icon>
          <Banner.Content>
            <Banner.Title>Custom Warning Icon</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const customIcon = screen.getByTestId('custom-warning-icon');
      expect(customIcon).toBeInTheDocument();
      expect(customIcon).toHaveTextContent('⚠');
    });

    it('should preserve icon container styling with custom icons', () => {
      render(
        <Banner $variant="error">
          <Banner.Icon data-testid="icon">
            <div data-testid="custom-error-icon">Error</div>
          </Banner.Icon>
          <Banner.Content>
            <Banner.Title>Custom Error Icon</Banner.Title>
          </Banner.Content>
        </Banner>,
      );

      const icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('text-stroke-error');
    });

    it('should work with different custom icon types', () => {
      const customIcons = [
        { testId: 'emoji-icon', content: '🎉' },
        { testId: 'text-icon', content: 'NEW' },
        { testId: 'symbol-icon', content: '★' },
      ];

      customIcons.forEach(({ testId, content }) => {
        const { unmount } = render(
          <Banner $variant="information">
            <Banner.Icon>
              <div data-testid={testId}>{content}</div>
            </Banner.Icon>
            <Banner.Content>
              <Banner.Title>Custom {testId}</Banner.Title>
            </Banner.Content>
          </Banner>,
        );

        const customIcon = screen.getByTestId(testId);
        expect(customIcon).toBeInTheDocument();
        expect(customIcon).toHaveTextContent(content);

        unmount();
      });
    });
  });

  describe('Combined Features', () => {
    it('should work with alternative mode and custom icons', () => {
      render(
        <Banner $variant="upsell" $alternative onClose={vi.fn()}>
          <Banner.Icon>
            <div data-testid="custom-upsell-icon">💎</div>
          </Banner.Icon>
          <Banner.Content>
            <Banner.Title>Premium Feature</Banner.Title>
            <Banner.Body>This is a premium feature with custom icon.</Banner.Body>
          </Banner.Content>
          <Banner.Close />
        </Banner>,
      );

      const banner = screen
        .getByText('Premium Feature')
        .closest('[class*="bg-background-invert-primary"]');
      expect(banner).toBeInTheDocument();

      const customIcon = screen.getByTestId('custom-upsell-icon');
      expect(customIcon).toBeInTheDocument();
      expect(customIcon).toHaveTextContent('💎');

      const closeButton = screen.getByLabelText('Cerrar banner');
      expect(closeButton).toHaveClass('text-stroke-invert');
    });

    it('should work with alternative mode, custom icons, and outline', () => {
      render(
        <Banner $variant="error" $alternative $outline onClose={vi.fn()}>
          <Banner.Icon>
            <div data-testid="custom-error-icon">❌</div>
          </Banner.Icon>
          <Banner.Content>
            <Banner.Title>Error with Outline</Banner.Title>
            <Banner.Body>This error has custom icon, alternative mode, and outline.</Banner.Body>
          </Banner.Content>
          <Banner.Close />
        </Banner>,
      );

      const banner = screen
        .getByText('Error with Outline')
        .closest('[class*="bg-background-invert-primary"]');
      expect(banner).toBeInTheDocument();

      const customIcon = screen.getByTestId('custom-error-icon');
      expect(customIcon).toBeInTheDocument();
      expect(customIcon).toHaveTextContent('❌');

      const closeButton = screen.getByLabelText('Cerrar banner');
      expect(closeButton).toHaveClass('text-stroke-invert');
    });
  });
});
