# Kueski Design System - Cursor Rules

This directory contains Cursor rules for the Kueski Design System, a comprehensive design system built with React, TypeScript, and Tailwind CSS v4.

## 📁 Rule Structure

### 🧩 Component Standards

**File**: `component-standards.mdc`
**Scope**: `packages/react/src/components/**/*.tsx`
**Purpose**: Standards for component creation and structure

- Required file structure
- Naming conventions
- Component hierarchy (Atomic Design)
- Class Variance Authority (CVA) usage with Tailwind CSS v4
- Design tokens integration

### 🎨 Design Tokens Standards

**File**: `design-tokens-standards.mdc`
**Scope**: `packages/react/src/**/*.tsx`, `packages/react/src/styles/**/*.css`
**Purpose**: Design tokens usage and standards

- Token structure and categories
- Color tokens (brand, semantic, text)
- Spacing tokens and scale
- Typography tokens and utilities
- Radius and shadow tokens
- Gradient tokens
- Component implementation with tokens

### 🏗️ Architecture Standards

**File**: `architecture-standards.mdc`
**Scope**: `packages/react/src/**/*.tsx`, `packages/react/src/components/**/*`, `packages/react/src/hooks/**/*`, `packages/react/src/lib/**/*`
**Purpose**: System architecture and component organization

- Project structure and organization
- Atomic Design hierarchy (Atoms, Molecules, Organisms, Patterns)
- Component file structure and dependencies
- Hook architecture and naming conventions
- Library and utility organization
- Style architecture with design tokens
- Import/export patterns
- Testing architecture
- Documentation structure

### 🔧 TypeScript Standards

**File**: `typescript-standards.mdc`
**Scope**: `**/*.ts`, `**/*.tsx`
**Purpose**: TypeScript standards for the system

- Interface definitions
- Type exports
- Props with `$` prefix
- Generic types
- JSDoc comments

### 🧪 Testing Standards

**File**: `testing-standards.mdc`
**Scope**: `**/*.test.ts`, `**/*.test.tsx`
**Purpose**: Testing standards for components

- Unit tests
- Integration tests
- Accessibility tests
- Test coverage
- Testing tools

### 🧹 Clean Code Principles

**File**: `clean-code-principles.mdc`
**Scope**: `**/*.ts`, `**/*.tsx`
**Purpose**: Clean Code and SOLID principles

- Clean Code principles
- SOLID principles
- Practical application in React
- Code examples

### ♿ Accessibility Standards

**File**: `accessibility-standards.mdc`
**Scope**: `packages/react/src/components/**/*.tsx`
**Purpose**: Accessibility standards

- WCAG 2.1 AA compliance
- ARIA attributes
- Keyboard navigation
- Focus management
- Accessibility testing

### ⚡ Performance Standards

**File**: `performance-standards.mdc`
**Scope**: `packages/react/src/**/*.tsx`
**Purpose**: Performance standards

- Bundle optimization
- Rendering optimization
- Image optimization
- State optimization
- Monitoring and profiling

### 📚 Storybook Standards

**File**: `storybook-standards.mdc`
**Scope**: `**/*.stories.tsx`
**Purpose**: Storybook standards

- Story structure
- Story documentation
- Testing in stories
- Story organization
- Best practices

### 🏗️ Monorepo Standards

**File**: `monorepo-standards.mdc`
**Scope**: `**/*.ts`, `**/*.tsx`, `**/*.json`
**Purpose**: Monorepo standards

- Project structure
- Package management
- TypeScript configuration
- ESLint configuration
- Vite configuration
- Testing configuration
- Storybook configuration
- Build configuration
- CI/CD

### 🚫 React Legacy Restrictions

**File**: `react-legacy-restrictions.mdc`
**Scope**: `packages/react-legacy/**/*`
**Purpose**: Restrictions for the legacy package

- **DO NOT modify** the legacy package
- Strict restrictions
- Reasons for restrictions
- What to do instead
- Component migration

## 🎯 How to Use the Rules

### 1. Component Development

When creating a new component, the rules will guide you to:

- Create the correct file structure
- Use appropriate naming conventions
- Implement accessibility
- Write comprehensive tests
- Create Storybook stories

### 2. Refactoring

When refactoring existing code:

- Follow Clean Code principles
- Apply SOLID principles
- Maintain performance
- Preserve accessibility

### 3. Testing

When writing tests:

- Cover all use cases
- Include accessibility tests
- Test component interactions
- Maintain high coverage

### 4. Documentation

When documenting components:

- Use appropriate JSDoc
- Create Storybook stories
- Include usage examples
- Document props and variants

## 🔍 Compliance Verification

### Component Checklist

- [ ] Complete file structure
- [ ] Naming conventions
- [ ] Props with `$` prefix
- [ ] CVA implemented
- [ ] Design tokens used
- [ ] Accessibility implemented
- [ ] Tests written
- [ ] Stories created
- [ ] Complete documentation

### Code Checklist

- [ ] Strict TypeScript
- [ ] Clean Code principles
- [ ] SOLID principles
- [ ] Performance optimized
- [ ] Minimal bundle size
- [ ] Tests passing
- [ ] Clean linting
- [ ] Accessibility verified

## 📚 Additional Resources

### Project Documentation

- [Component Standards](../docs/standards/component-standards.md)
- [Architecture Overview](../docs/architecture/overview.md)
- [Design Tokens](../docs/tokens/design-tokens.md)
- [Testing Guide](../docs/testing/testing-guide.md)

### External Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/)
- [Class Variance Authority](https://cva.style/)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contributing

When contributing to the project:

1. **Review the rules** before starting
2. **Follow the established standards**
3. **Verify compliance** with the checklist
4. **Test changes** before committing
5. **Document significant changes**

## 📞 Support

If you have questions about the rules or need help:

1. **Review the project documentation**
2. **Check the examples** in the rules
3. **Verify existing code** in the repository
4. **Contact the development team**

---

**Remember**: These rules are designed to maintain quality, consistency, and accessibility in the Kueski Design System. Following them ensures that the system is maintainable, scalable, and easy to use for all teams.
