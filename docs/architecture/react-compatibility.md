# React Compatibility

This document outlines the React version compatibility and migration strategies for the Kueski Design System.

## 📋 Supported React Versions

### Current Support

| React Version   | Status       | Support Level      | Notes                                 |
| --------------- | ------------ | ------------------ | ------------------------------------- |
| **React 19**    | ✅ Primary   | Full Support       | Latest features, optimal performance  |
| **React 18**    | ✅ Supported | Full Support       | Stable, recommended for production    |
| **React 17**    | ✅ Supported | Full Support       | Legacy support, no new features       |
| **React 16.8+** | ⚠️ Limited   | Compatibility Mode | Hooks support, some features disabled |

### Legacy Package Support

The `@kueski-dev/kds/react-legacy` package provides compatibility with older React versions:

| Package                        | React Versions | Features                                            |
| ------------------------------ | -------------- | --------------------------------------------------- |
| `@kueski-dev/kds/react`        | 16.8+          | Full feature set, some features require React 18+   |
| `@kueski-dev/kds/react-legacy` | 16.8+          | Maximum compatibility, polyfills for older features |

## 🔄 Migration Strategy

### From React 16.8 to React 17+

```typescript
// React 16.8 - Legacy package
import { Button } from '@kueski-dev/kds/react-legacy';

// React 17+ - Modern package
import { Button } from '@kueski-dev/kds/react';
```

### Gradual Migration

1. **Phase 1**: Install both packages
2. **Phase 2**: Migrate components one by one
3. **Phase 3**: Remove legacy package

```typescript
// Gradual migration example
import { Button } from '@kueski-dev/kds/react'; // New components
import { LegacyModal } from '@kueski-dev/kds/react-legacy'; // Legacy components

function MyComponent() {
  return (
    <div>
      <Button $variant="primary">New Button</Button>
      <LegacyModal>Legacy Modal</LegacyModal>
    </div>
  );
}
```

## ⚠️ React 16.8 Limitations

### Hooks Compatibility

React 16.8 introduced hooks, but some advanced patterns may not work:

```typescript
// ✅ Works in React 16.8+
const [state, setState] = useState(initialState);
const effect = useEffect(() => {
  // Effect logic
}, [dependencies]);

// ❌ May not work in React 16.8
const { data, loading, error } = useSWR('/api/data'); // External hooks
const theme = useTheme(); // Context hooks
```

### Context API Limitations

```typescript
// ✅ Basic context works
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ⚠️ Advanced context patterns may not work
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

### Suspense Limitations

```typescript
// ❌ Suspense for data fetching (React 18+)
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// ✅ Basic Suspense for code splitting (React 16.8+)
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

## 🛠️ Compatibility Layer

### Legacy Package Features

The legacy package provides compatibility through:

1. **Polyfills**: Missing React features
2. **Shims**: API compatibility layers
3. **Fallbacks**: Graceful degradation

```typescript
// Legacy package structure
@kueski-dev/kds/react-legacy/
├── components/           # Compatible components
├── hooks/               # Compatible hooks
├── polyfills/           # React polyfills
├── shims/               # Compatibility shims
└── utils/               # Utility functions
```

### Polyfills

```typescript
// Polyfill for useId (React 16.8-17 compatibility)
// Note: This implementation uses useRef for stability across renders
const useCompatibleId = (): string => {
  // Use React 18+ useId if available
  if (typeof React.useId === 'function') {
    return React.useId();
  }

  // Fallback for React 16.8-17: use stable ref-based ID
  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {
    idRef.current = `id-${Math.random().toString(36).substr(2, 9)}`;
  }
  return idRef.current;
};

// Legacy polyfill (less recommended due to SSR issues)
if (!React.useId) {
  React.useId = () => {
    const [id] = useState(() => Math.random().toString(36).substr(2, 9));
    return id;
  };
}

// Polyfill for React 18 features
if (!React.useDeferredValue) {
  React.useDeferredValue = (value) => {
    const [deferredValue, setDeferredValue] = useState(value);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDeferredValue(value);
      }, 0);

      return () => clearTimeout(timeoutId);
    }, [value]);

    return deferredValue;
  };
}
```

### Shims

```typescript
// Shim for React 18 features
const createRoot = (container) => {
  if (ReactDOM.createRoot) {
    return ReactDOM.createRoot(container);
  }

  // Fallback to React 17 render
  return {
    render: (element) => ReactDOM.render(element, container),
    unmount: () => ReactDOM.unmountComponentAtNode(container),
  };
};
```

## 📦 Package Selection Guide

### Choose Modern Package When:

- Using React 17 or higher
- Need latest features and performance
- Building new applications
- Can upgrade React version

```typescript
// Modern package
import { Button, Input, Modal } from '@kueski-dev/kds/react';
import { useAccessibility, useKeyboardEvent } from '@kueski-dev/kds/react';
```

### Choose Legacy Package When:

- Using React 16.8
- Cannot upgrade React version
- Need maximum compatibility
- Working with legacy codebases

```typescript
// Legacy package
import { Button, Input, Modal } from '@kueski-dev/kds/react-legacy';
import { useAccessibility } from '@kueski-dev/kds/react-legacy';
```

## 🔧 Configuration

### TypeScript Configuration

```json
// tsconfig.json for React 16.8
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### Webpack Configuration

```javascript
// webpack.config.js for React 16.8
module.exports = {
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
    ],
  },
};
```

## 🧪 Testing Compatibility

### Test Setup for React 16.8

```typescript
// test/setup.ts for React 16.8
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Configure testing library for React 16.8
configure({
  testIdAttribute: 'data-testid',
});

// Mock React 18 features
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
```

### Component Testing

```typescript
// Test component with React 16.8 compatibility
import { render, screen } from '@testing-library/react';
import { Button } from '@kueski-dev/kds/react-legacy';

describe('Button Compatibility', () => {
  it('should render in React 16.8', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle events correctly', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## 📊 Performance Considerations

### Bundle Size Impact

| Package                        | Bundle Size | Gzipped | React 16.8 Support                             |
| ------------------------------ | ----------- | ------- | ---------------------------------------------- |
| `@kueski-dev/kds/react`        | ~400KB      | ~120KB  | ✅ Yes (with polyfills for React 18+ features) |
| `@kueski-dev/kds/react-legacy` | ~600KB      | ~180KB  | ✅ Yes (maximum compatibility)                 |

### Performance Optimizations

```typescript
// Optimize for React 16.8
const Button = React.memo(({ children, ...props }) => {
  return <button {...props}>{children}</button>;
});

// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});

// Optimize context usage
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const value = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## 🚀 Migration Checklist

### Pre-Migration

- [ ] Audit current React version
- [ ] Identify components using design system
- [ ] Check for React 18+ specific features
- [ ] Plan migration timeline

### During Migration

- [ ] Install both packages
- [ ] Update imports gradually
- [ ] Test components thoroughly
- [ ] Monitor performance

### Post-Migration

- [ ] Remove legacy package
- [ ] Update documentation
- [ ] Train team on new features
- [ ] Monitor for issues

## 🔗 Resources

- [React 16.8 Release Notes](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)
- [React 18 Migration Guide](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html)
- [React Compatibility Table](https://reactjs.org/versions/)
- [Babel React Preset](https://babeljs.io/docs/en/babel-preset-react)
