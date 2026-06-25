# Usage in Other Projects

This guide explains how to use the Kueski Design System in your projects.

## 📦 Installation

### NPM Installation

```bash
# Install the main React package
npm install @kueski-dev/kds/react

# Or with yarn
yarn add @kueski-dev/kds/react

# Or with pnpm
pnpm add @kueski-dev/kds/react
```

### Legacy Package

```bash
# Install legacy components (if needed)
npm install @kueski-dev/kds/react-legacy
```

### Utils Package

```bash
# Install utilities
npm install @kueski-dev/kds/utils
```

## ⚙️ Configuration

### TypeScript Configuration

Add the design system types to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@kueski-dev/kds/*": ["node_modules/@kueski-dev/kds/*"]
    }
  },
  "include": ["node_modules/@kueski-dev/kds/**/*"]
}
```

### Tailwind CSS Configuration

Configure Tailwind CSS to use the design system tokens:

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@kueski-dev/kds/**/*.{js,ts,jsx,tsx}'],
  presets: [require('@kueski-dev/kds/react/tailwind.config')],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [
    // Your custom plugins
  ],
};
```

### PostCSS Configuration

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 🎨 Styling Setup

### Import Design System Styles

```typescript
// In your main CSS file or App component
import '@kueski-dev/kds/react/styles';
```

### Custom CSS Variables

Override design tokens if needed:

```css
/* styles.css */
:root {
  /* Override brand colors */
  --color-background-brand: #your-brand-color;
  --color-text-primary: #your-text-color;

  /* Override spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
}
```

## 🚀 Basic Usage

### Import Components

```typescript
// Import individual components
import { Button, Input, Card } from '@kueski-dev/kds/react';

// Import with namespace
import * as KDS from '@kueski-dev/kds/react';

// Import specific components
import { Button } from '@kueski-dev/kds/react/components/atoms/button';
```

### Use Components

```typescript
import React from 'react';
import { Button, Input, Card } from '@kueski-dev/kds/react';

function MyComponent() {
  return (
    <div>
      <Card>
        <Input placeholder="Enter your name" />
        <Button $variant="primary">
          Submit
        </Button>
      </Card>
    </div>
  );
}

export default MyComponent;
```

## 🔧 Advanced Usage

### Custom Styling

```typescript
import { Button } from '@kueski-dev/kds/react';
import { cn } from '@kueski-dev/kds/react';

function CustomButton() {
  return (
    <Button
      $variant="primary"
      $className={cn(
        'custom-button-class',
        'hover:scale-105',
        'transition-transform'
      )}
    >
      Custom Button
    </Button>
  );
}
```

### Using Hooks

```typescript
import { useAccessibility, useKeyboardEvent } from '@kueski-dev/kds/react';

function CustomComponent() {
  const { eventHandlers, accessibilityProps } = useAccessibility({
    loading: false,
    'aria-label': 'Custom component',
  });

  return (
    <div {...eventHandlers} {...accessibilityProps}>
      Custom content
    </div>
  );
}
```

### Form Integration

```typescript
import { Button, Input } from '@kueski-dev/kds/react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('name')}
        placeholder="Your name"
        $className="mb-4"
      />
      <Input
        {...register('email')}
        type="email"
        placeholder="Your email"
        $className="mb-4"
      />
      <Button type="submit" $variant="primary">
        Send Message
      </Button>
    </form>
  );
}
```

## 📱 Framework Integration

### Next.js Integration

```typescript
// next.config.js
module.exports = {
  transpilePackages: ['@kueski-dev/kds'],
  experimental: {
    optimizePackageImports: ['@kueski-dev/kds'],
  },
};
```

```typescript
// pages/_app.tsx
import '@kueski-dev/kds/react/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### Vite Integration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@kueski-dev/kds'],
  },
});
```

### Webpack Integration

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      '@kueski-dev/kds': path.resolve(__dirname, 'node_modules/@kueski-dev/kds'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: /node_modules\/@kueski-dev\/kds/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
```

## 🧪 Testing Setup

### Vitest Configuration

```javascript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
});
```

### Test Setup File

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';
import '@kueski-dev/kds/react/test/setup';
```

### Testing Components

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@kueski-dev/kds/react';

describe('MyComponent', () => {
  it('should render button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

## 🎨 Theming

### Custom Theme

```typescript
// theme.ts
export const customTheme = {
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
};
```

### Theme Provider

```typescript
import { ThemeProvider } from '@kueski-dev/kds/react';
import { customTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## 🔄 State Management

### Redux Integration

```typescript
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@kueski-dev/kds/react';

function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => dispatch(increment())}>
        Increment
      </Button>
    </div>
  );
}
```

### Zustand Integration

```typescript
import { useStore } from 'zustand';
import { Button } from '@kueski-dev/kds/react';

function Counter() {
  const { count, increment } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>
        Increment
      </Button>
    </div>
  );
}
```

## 📊 Performance Optimization

### Lazy Loading

```typescript
import { lazy, Suspense } from 'react';
import { Button } from '@kueski-dev/kds/react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Button>Light Component</Button>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```

### Bundle Optimization

```typescript
// Import only what you need
import { Button } from '@kueski-dev/kds/react/components/atoms/button';
import { Input } from '@kueski-dev/kds/react/components/atoms/input';

// Avoid importing everything
// import * from '@kueski-dev/kds/react';
```

## 🐛 Troubleshooting

### Common Issues

#### 1. TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
npm install
```

#### 2. Styling Issues

```bash
# Rebuild Tailwind CSS
npm run build:css
```

#### 3. Import Errors

```typescript
// Ensure proper imports
import { Button } from '@kueski-dev/kds/react';
// Not: import { Button } from '@kueski-dev/kds';
```

#### 4. Build Errors

```bash
# Clear all caches
rm -rf node_modules
rm -rf .next # or dist/
npm install
npm run build
```

### Getting Help

- Check the [Component Documentation](../components/)
- Review [Development Standards](../standards/)
- Open an issue on GitHub
- Contact the Design System team

## 📚 Examples

### Complete App Example

```typescript
// App.tsx
import React from 'react';
import { Button, Input, Card, CardHeader, CardContent } from '@kueski-dev/kds/react';
import '@kueski-dev/kds/react/styles';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <div className="min-h-screen bg-background-primary p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <h1 className="text-2xl font-bold">Contact Form</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
            <Button type="submit" $variant="primary" $fullWidth>
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
```

## 🔗 Resources

- [Component Documentation](../components/)
- [Design Tokens](../tokens/)
- [Development Standards](../standards/)
- [Build Guide](../build/)
- [GitHub Repository](https://github.com/kueski-dev/kueski-design-system)
