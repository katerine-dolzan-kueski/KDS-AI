# Kueski Design System

A comprehensive monorepo containing the foundations, design tokens, and React components of the Kueski Design System.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/kueski-dev/kueski-design-system.git
cd kueski-design-system

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start Storybook for development
pnpm storybook
```

## 📦 Packages

| Package                        | Description             | Technologies                          | Version |
| ------------------------------ | ----------------------- | ------------------------------------- | ------- |
| `@kueski-dev/kds/react`        | Modern React components | React 16, TypeScript, Tailwind CSS v4 | `2.0.0` |
| `@kueski-dev/kds/react-legacy` | Legacy React components | React 16+, Styled Components          | `2.0.0` |
| `@kueski-dev/kds/utils`        | Build tools and CLI     | TypeScript, Vite                      | `2.0.0` |

## 📚 Documentation

### Architecture

- [Overview](docs/architecture/overview.md) - System architecture and design philosophy
- [Atomic Design](docs/architecture/atomic-design.md) - Component hierarchy and organization
- [Radix UI & shadcn/ui Integration](docs/architecture/radix-shadcn.md) - Integration patterns and best practices
- [React Compatibility](docs/architecture/react-compatibility.md) - React version support and migration

### Installation & Setup

- [Setup Guide](docs/installation/setup.md) - Installation and configuration instructions

### Components

- [Component Creation Guide](docs/components/creation-guide.md) - How to create new components
- [Component Standards](docs/standards/component-standards.md) - Development standards, guidelines, and composition patterns

#### Atoms

- [Button](docs/components/atoms/button.md) - Interactive button component with variants and states

### Design System

- [Design Tokens](docs/tokens/design-tokens.md) - Color, typography, spacing, and other design tokens
- [Accessibility Patterns](docs/patterns/accessibility-patterns.md) - Accessibility guidelines and patterns

### Build & Development

- [Build & Compilation](docs/build/compilation.md) - Build system and compilation process
- [Development Workflow](docs/development/workflow.md) - Development process and best practices
- [Testing Guide](docs/testing/testing-guide.md) - Testing strategies and best practices

### Tools

- [CLI Guide](docs/tools/cli-guide.md) - Design system CLI for token generation

### Usage

- [Usage in Other Projects](docs/usage/in-other-projects.md) - How to use the design system in your projects

## 🎯 Key Features

- **Modern React Components**: Built with React 16+, TypeScript, and Tailwind CSS v4
- **Accessibility First**: WCAG 2.1 AA compliant with comprehensive keyboard navigation
- **Design Token System**: Consistent design language with CSS custom properties
- **Hybrid Architecture**: Custom hooks for simple components, Radix UI for complex ones
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Performance Optimized**: Tree-shakable, minimal bundle size impact
- **Developer Experience**: Hot reload, Storybook, comprehensive testing

## 🏗️ Architecture

The design system follows **Atomic Design** principles:

- **Atoms**: Basic building blocks (Button, Input, Icon)
- **Molecules**: Simple combinations of atoms (SearchBox, FormField)
- **Organisms**: Complex UI components (Header, Sidebar, Card)
- **Patterns**: Reusable UI patterns and layouts

## 🎨 Design Philosophy

- **Consistency**: Unified design language across all components
- **Accessibility**: Every component is accessible by default
- **Performance**: Optimized for speed and minimal bundle impact
- **Flexibility**: Customizable and composable components
- **Developer Experience**: Excellent TypeScript support and tooling

## 🚀 Getting Started

### Installation

```bash
# Install the main React package
pnpm add @kueski-dev/kds/react

# Install legacy components (if needed)
pnpm add @kueski-dev/kds/react-legacy

# Install utilities
pnpm add @kueski-dev/kds/utils
```

### Basic Usage

```typescript
import { Button, Input, Card } from '@kueski-dev/kds/react';
import '@kueski-dev/kds/react/styles';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button $variant="primary">
        Submit
      </Button>
    </Card>
  );
}
```

## 🧪 Development

### Prerequisites

- **Node.js** 18+
- **pnpm** (Package manager)
- **TypeScript** knowledge
- **React** 16/17/18/19 support

### Development Commands

```bash
# Start development server
pnpm dev

# Run tests
pnpm test

# Run linting
pnpm lint

# Build packages
pnpm build

# Start Storybook
pnpm storybook
```

## 📊 Project Status

- **Components**: 50+ React components
- **Test Coverage**: 95%+ coverage
- **Bundle Size**: < 500KB gzipped
- **TypeScript**: 100% typed
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

We welcome contributions! Please see our [Development Workflow](docs/development/workflow.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/kueski-dev/kueski-design-system)
- [NPM Package](https://www.npmjs.com/package/@kueski-dev/kds)
- [Storybook](https://kueski-dev.github.io/kueski-design-system)
- [Design System Website](https://design.kueski.com)

## 📞 Support

- **Documentation**: Check the [docs](docs/) directory
- **Issues**: [GitHub Issues](https://github.com/kueski-dev/kueski-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kueski-dev/kueski-design-system/discussions)
- **Email**: design-system@kueski.com

---

Made with ❤️ by the Kueski Design System Team
