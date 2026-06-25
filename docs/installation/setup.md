# Installation & Setup

This guide will help you install and set up the Kueski Design System in your project.

## 📋 Prerequisites

Before installing the design system, ensure you have:

- **Node.js** 18+ (recommended: 20+)
- **pnpm** (Package manager - required)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/kueski-dev/kueski-design-system.git
cd kueski-design-system

# Install dependencies
pnpm install
```

### 2. Build All Packages

```bash
# Build all packages
pnpm build

# Or build specific packages
pnpm build --filter=@kueski-dev/kds/react
pnpm build --filter=@kueski-dev/kds/react-legacy
pnpm build --filter=@kueski-dev/kds/utils
```

### 3. Start Development

```bash
# Start Storybook for development
pnpm storybook

# Run tests
pnpm test

# Run linting
pnpm lint
```

## 📦 Package Installation

### Install from NPM (Recommended)

```bash
# Install the main React package
pnpm add @kueski-dev/kds/react

# Install Tailwind CSS v4 (required)
pnpm add -D tailwindcss@^4.1.13

# Install legacy components (if needed)
pnpm add @kueski-dev/kds/react-legacy

# Install utilities
pnpm add @kueski-dev/kds/utils
```

### Install from Local Development

```bash
# Link local packages for development
pnpm link --global @kueski-dev/kds/react
pnpm link --global @kueski-dev/kds/react-legacy
pnpm link --global @kueski-dev/kds/utils

# In your project
pnpm link @kueski-dev/kds/react
pnpm link @kueski-dev/kds/react-legacy
pnpm link @kueski-dev/kds/utils
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

### Tailwind CSS v4 Configuration

The design system uses Tailwind CSS v4 with the Vite plugin. Configure it in your project:

#### Option 1: Using Vite (Recommended)

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

#### Option 2: Using PostCSS

```javascript
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

#### CSS Setup

In your main CSS file, import Tailwind CSS v4:

```css
/* styles.css or global.css */
@import 'tailwindcss';

/* Import design system styles */
@import '@kueski-dev/kds/react/styles';
```

> **Note:** Tailwind CSS v4 uses `@import 'tailwindcss'` instead of the traditional `@tailwind` directives used in v3.

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

## 🔧 Development Setup

### VS Code Configuration

Create `.vscode/settings.json`:

```json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.autoImports": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  }
}
```

### ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    '@kueski-dev/kds/react/eslint.config',
    // Your other ESLint configs
  ],
  rules: {
    // Your custom rules
  },
};
```

### Prettier Configuration

```javascript
// .prettierrc.js
module.exports = {
  ...require('@kueski-dev/kds/react/prettier.config'),
  // Your custom Prettier config
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

For Tailwind CSS v4 with Next.js, use PostCSS configuration:

```javascript
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### Vite Integration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind CSS v4 plugin
  ],
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

## 🔍 Troubleshooting

### Common Issues

#### 1. TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
pnpm install
```

#### 2. Styling Issues

```bash
# Rebuild Tailwind CSS
pnpm build:css
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
pnpm install
pnpm build
```

### Getting Help

- Check the [Component Documentation](../components/)
- Review [Development Standards](../standards/)
- Open an issue on GitHub
- Contact the Design System team

## 📚 Next Steps

After installation:

1. [Read the Component Guide](../components/)
2. [Learn Development Standards](../standards/)
3. [Explore Design Tokens](../tokens/)
4. [Set up Development Workflow](../development/)
