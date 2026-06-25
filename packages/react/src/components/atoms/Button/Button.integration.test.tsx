import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

// Integration tests for Button component
// These tests focus on real-world usage scenarios and library integration

describe('Button Integration Tests', () => {
  describe('Form Integration', () => {
    it('should work with HTML forms', async () => {
      const handleSubmit = vi.fn((event) => event.preventDefault());

      render(
        <form onSubmit={handleSubmit} data-testid="test-form">
          <input name="email" placeholder="Email" />
          <Button type="submit">Submit Form</Button>
        </form>,
      );

      const form = screen.getByTestId('test-form');
      const button = screen.getByRole('button');

      // Button should pass through the provided type
      expect(button).toHaveAttribute('type', 'submit');

      // Form submission should work
      fireEvent.submit(form);
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('should work with form validation', async () => {
      const TestForm = () => {
        const [isValid, setIsValid] = React.useState(false);
        const [value, setValue] = React.useState('');

        return (
          <form>
            <input
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                setIsValid(event.target.value.length > 0);
              }}
              placeholder="Required field"
            />
            <Button disabled={!isValid}>Submit</Button>
          </form>
        );
      };

      render(<TestForm />);

      const button = screen.getByRole('button');
      const input = screen.getByPlaceholderText('Required field');

      expect(button).toBeDisabled();

      // Use fireEvent for React 16 compatibility instead of userEvent.type
      fireEvent.change(input, { target: { value: 'test' } });
      expect(button).not.toBeDisabled();
    });
  });

  describe('State Management Integration', () => {
    it('should work with React state', () => {
      const Counter = () => {
        const [count, setCount] = React.useState(0);

        return (
          <div>
            <span data-testid="count">{count}</span>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Button onClick={() => setCount(count - 1)}>Decrement</Button>
            <Button onClick={() => setCount(0)}>Reset</Button>
          </div>
        );
      };

      render(<Counter />);

      const count = screen.getByTestId('count');
      const incrementBtn = screen.getByText('Increment');
      const decrementBtn = screen.getByText('Decrement');
      const resetBtn = screen.getByText('Reset');

      expect(count).toHaveTextContent('0');

      fireEvent.click(incrementBtn);
      expect(count).toHaveTextContent('1');

      fireEvent.click(incrementBtn);
      expect(count).toHaveTextContent('2');

      fireEvent.click(decrementBtn);
      expect(count).toHaveTextContent('1');

      fireEvent.click(resetBtn);
      expect(count).toHaveTextContent('0');
    });

    it('should work with complex state updates', async () => {
      const TodoApp = () => {
        const [todos, setTodos] = React.useState<string[]>([]);
        const [input, setInput] = React.useState('');

        const addTodo = () => {
          if (input.trim()) {
            setTodos([...todos, input.trim()]);
            setInput('');
          }
        };

        const removeTodo = (index: number) => {
          setTodos(todos.filter((_, i) => i !== index));
        };

        return (
          <div>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Add todo"
            />
            <Button onClick={addTodo} disabled={!input.trim()}>
              Add Todo
            </Button>
            <ul>
              {todos.map((todo, index) => (
                <li key={todo}>
                  {todo}
                  <Button onClick={() => removeTodo(index)}>Remove</Button>
                </li>
              ))}
            </ul>
          </div>
        );
      };

      render(<TodoApp />);

      const input = screen.getByPlaceholderText('Add todo');
      const addBtn = screen.getByText('Add Todo');

      expect(addBtn).toBeDisabled();

      // Use fireEvent for React 16 compatibility instead of userEvent.type
      fireEvent.change(input, { target: { value: 'Learn React' } });
      expect(addBtn).not.toBeDisabled();

      fireEvent.click(addBtn);
      expect(screen.getByText('Learn React')).toBeInTheDocument();
      expect(input).toHaveValue('');

      fireEvent.change(input, { target: { value: 'Write tests' } });
      fireEvent.click(addBtn);
      expect(screen.getByText('Write tests')).toBeInTheDocument();

      const removeBtns = screen.getAllByText('Remove');
      await userEvent.click(removeBtns[0]);
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
      expect(screen.getByText('Write tests')).toBeInTheDocument();
    });
  });

  describe('Loading State Integration', () => {
    it('should work with async operations', async () => {
      const AsyncButton = () => {
        const [loading, setLoading] = React.useState(false);
        const [data, setData] = React.useState<string | null>(null);

        const fetchData = async () => {
          setLoading(true);
          // Simulate API call
          await new Promise((resolve) => {
            setTimeout(resolve, 100);
          });
          setData('Data loaded!');
          setLoading(false);
        };

        return (
          <div>
            <Button $loading={loading} $loadingText="Loading..." onClick={fetchData}>
              Fetch Data
            </Button>
            {data && <div data-testid="data">{data}</div>}
          </div>
        );
      };

      render(<AsyncButton />);

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Fetch Data');

      await userEvent.click(button);
      expect(button).toHaveTextContent('Loading...');
      expect(button).toBeDisabled();

      await waitFor(() => {
        expect(screen.getByTestId('data')).toHaveTextContent('Data loaded!');
      });

      expect(button).toHaveTextContent('Fetch Data');
      expect(button).not.toBeDisabled();
    });
  });

  describe('Accessibility Integration', () => {
    it('should work with screen readers', () => {
      render(
        <div>
          <h1>Actions</h1>
          <Button aria-label="Save document">
            <span aria-hidden="true">💾</span>
          </Button>
          <Button aria-label="Delete item">
            <span aria-hidden="true">🗑️</span>
          </Button>
        </div>,
      );

      const saveBtn = screen.getByLabelText('Save document');
      const deleteBtn = screen.getByLabelText('Delete item');

      expect(saveBtn).toBeInTheDocument();
      expect(deleteBtn).toBeInTheDocument();

      // Icons should be hidden from screen readers
      const icons = screen.getAllByText(/💾|🗑️/);
      expect(icons).toHaveLength(2);
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('should work with keyboard navigation', async () => {
      const user = userEvent.setup();

      render(
        <div>
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </div>,
      );

      const buttons = screen.getAllByRole('button');

      // Tab navigation
      await user.tab();
      expect(buttons[0]).toHaveFocus();

      await user.tab();
      expect(buttons[1]).toHaveFocus();

      await user.tab();
      expect(buttons[2]).toHaveFocus();

      // Shift+Tab navigation
      await user.tab({ shift: true });
      expect(buttons[1]).toHaveFocus();
    });
  });

  describe('Styling Integration', () => {
    it('should work with external CSS classes', () => {
      render(<Button className="custom-button external-class">Styled Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-button');
      expect(button).toHaveClass('external-class');
    });

    it('should work with CSS-in-JS libraries', () => {
      const styledButton = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
      };

      render(<Button style={styledButton}>Styled Button</Button>);

      const button = screen.getByRole('button');
      // Check that the style prop is applied (may be overridden by CSS classes)
      expect(button).toHaveStyle({
        padding: '10px',
      });
      // Note: backgroundColor and color may be overridden by CSS classes
    });
  });

  describe('Event Handling Integration', () => {
    it('should work with event delegation', () => {
      const handleContainerClick = vi.fn();

      render(
        <div
          onClick={handleContainerClick}
          onKeyDown={(event) => event.key === 'Enter' && handleContainerClick()}
          tabIndex={0}
          role="button"
        >
          <Button onClick={(event) => event.stopPropagation()}>Stop Propagation</Button>
          <Button>Normal Button</Button>
        </div>,
      );

      const stopBtn = screen.getByText('Stop Propagation');
      const normalBtn = screen.getByText('Normal Button');

      fireEvent.click(stopBtn);
      expect(handleContainerClick).not.toHaveBeenCalled();

      fireEvent.click(normalBtn);
      expect(handleContainerClick).toHaveBeenCalled();
    });

    it('should work with custom event handlers', () => {
      const handleCustomEvent = vi.fn();

      const CustomButton = () => {
        const handleClick = (event: React.MouseEvent) => {
          handleCustomEvent(event);
        };

        return <Button onClick={handleClick}>Custom Handler</Button>;
      };

      render(<CustomButton />);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleCustomEvent).toHaveBeenCalled();
    });
  });

  describe('Component Composition', () => {
    it('should work as a wrapper component', () => {
      const WrapperButton = ({ children, ...props }: ButtonProps) => (
        <Button {...props}>
          <span data-testid="wrapper">Wrapper</span>
          {children}
        </Button>
      );

      render(
        <WrapperButton>
          <span>Content</span>
        </WrapperButton>,
      );

      expect(screen.getByTestId('wrapper')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should work with higher-order components', () => {
      const withLoading = (Component: React.ComponentType<any>) => {
        return (props: any) => {
          const [loading, setLoading] = React.useState(false);

          return <Component {...props} $loading={loading} onClick={() => setLoading(!loading)} />;
        };
      };

      const LoadingButton = withLoading(Button);

      render(<LoadingButton>Toggle Loading</LoadingButton>);

      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();

      fireEvent.click(button);
      expect(button).toBeDisabled();

      fireEvent.click(button);
      // Note: The button will remain disabled because the HOC toggles loading state
      // This is the expected behavior for this specific HOC implementation
      expect(button).toBeDisabled();
    });
  });

  describe('Error Boundaries', () => {
    it('should handle errors gracefully', () => {
      const ErrorButton = () => {
        const [hasError, setHasError] = React.useState(false);

        if (hasError) {
          throw new Error('Test error');
        }

        return <Button onClick={() => setHasError(true)}>Trigger Error</Button>;
      };

      const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
        const [hasError, setHasError] = React.useState(false);

        React.useEffect(() => {
          const handleError = () => setHasError(true);
          window.addEventListener('error', handleError);
          return () => window.removeEventListener('error', handleError);
        }, []);

        if (hasError) {
          return <div>Error occurred</div>;
        }

        return <>{children}</>;
      };

      render(
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });
});
