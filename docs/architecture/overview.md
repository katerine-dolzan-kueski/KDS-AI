# Architecture Overview

The Kueski Design System is a comprehensive monorepo that provides a unified design language and component library for Kueski's products.

## 🏗️ Monorepo Structure

This is a **monorepo** managed with **pnpm workspaces** and **Nx** containing multiple packages organized in a modular way:

```text
kueski-design-system/
├── packages/
│   ├── react/                 # Modern React component library
│   ├── react-legacy/          # Legacy React component library
│   └── utils/                 # Build tools and CLI utilities
├── docs/
│   ├── architecture/          # Architecture documentation
│   ├── components/            # Component documentation
│   ├── standards/             # Development standards
│   ├── tokens/                # Design tokens documentation
│   ├── build/                 # Build and compilation guides
│   ├── usage/                 # Usage in other projects
│   ├── development/           # Development workflow
│   └── api/                   # API documentation
├── cli/                       # CLI tools for tokens and icons
├── dist/                      # Consolidated builds for distribution
└── [configuration files]
```

## 📦 Package Structure

| Package                        | Description             | Technologies                          | Version |
| ------------------------------ | ----------------------- | ------------------------------------- | ------- |
| `@kueski-dev/kds/react`        | Modern React components | React 19, TypeScript, Tailwind CSS v4 | `2.0.0` |
| `@kueski-dev/kds/react-legacy` | Legacy React components | React 17+, Styled Components          | `2.0.0` |
| `@kueski-dev/kds/utils`        | Build tools and CLI     | TypeScript, Vite                      | `2.0.0` |

## 🎯 Design Philosophy

### Atomic Design Methodology

The component library follows **Atomic Design** principles:

- **Atoms**: Basic building blocks (Button, Input, Icon)
- **Molecules**: Simple combinations of atoms (SearchBox, FormField)
- **Organisms**: Complex UI components (Header, Sidebar, Card)
- **Patterns**: Reusable UI patterns and layouts

### Technology Stack

- **React 19**: Latest React features and performance improvements
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS v4**: Utility-first CSS framework
- **Class Variance Authority (CVA)**: Type-safe variant management
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Component composition patterns
- **Vitest**: Fast unit testing
- **Storybook**: Component documentation and testing

## 🔄 Hybrid Accessibility Strategy

The design system implements a **hybrid accessibility approach**:

- **Custom Hooks**: For simple components and Kueski-specific patterns
- **Radix UI Primitives**: For complex components requiring extensive accessibility logic

### When to Use Each Approach

**Custom Hooks** for:

- Simple components (Button, Link, IconButton)
- Kueski-specific patterns (loading states, aria-label priority)
- Components that don't require complex focus management

**Radix UI** for:

- Complex components (Modal, Dropdown, Select)
- Components requiring complex focus management
- Components with extensive accessibility logic

## 📁 Component Organization

Each component follows a standardized structure:

```text
components/
├── atoms/                    # Atomic components (Button, Input, etc.)
│   └── button/
│       ├── Button.tsx        # Main component
│       ├── Button.types.ts   # Type definitions
│       ├── Button.styles.ts  # Styles with CVA
│       ├── Button.test.tsx   # Unit tests
│       ├── Button.stories.tsx # Storybook stories
│       └── index.ts          # Component exports
├── molecules/                # Molecular components
├── organisms/                # Organism components
└── patterns/                 # UI patterns
```

## 🎨 Design Token System

The design system uses a comprehensive token system:

- **Color Tokens**: Brand colors, semantic colors, and neutral palettes
- **Typography Tokens**: Font families, sizes, weights, and line heights
- **Spacing Tokens**: Consistent spacing scale
- **Border Radius Tokens**: Unified border radius values
- **Shadow Tokens**: Elevation and depth system
- **Animation Tokens**: Transition and animation values

## 🚀 Build System

The monorepo uses:

- **Nx**: Monorepo management and task orchestration
- **pnpm**: Fast, disk space efficient package manager
- **TypeScript**: Type checking and compilation
- **Vite**: Fast build tool for development and production
- **PostCSS**: CSS processing and optimization
- **Tailwind CSS**: Utility-first CSS framework

## 📊 Quality Assurance

- **TypeScript**: Compile-time type checking
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Vitest**: Unit and integration testing
- **Storybook**: Visual testing and documentation
- **Accessibility Testing**: WCAG compliance validation

## 🔧 Development Tools

- **Storybook**: Component development and documentation
- **Nx Console**: VS Code extension for Nx commands
- **TypeScript**: IntelliSense and type checking
- **Hot Reload**: Fast development iteration
- **CLI Tools**: Custom tools for tokens and icons

## 📈 Performance Considerations

- **Tree Shaking**: Only import what you need
- **Code Splitting**: Lazy loading of components
- **Bundle Analysis**: Monitor bundle size impact
- **Optimized Builds**: Production-ready optimizations
- **Caching**: Efficient build caching with Nx

## 🔗 Integration Points

The design system integrates with:

- **React Applications**: Direct component imports
- **Next.js**: SSR and SSG support
- **Vite**: Fast development and building
- **Webpack**: Module bundling
- **Storybook**: Component documentation
- **Testing Frameworks**: Jest, Vitest, Testing Library
