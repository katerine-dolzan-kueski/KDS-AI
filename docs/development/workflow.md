# Development Workflow

This document outlines the development workflow for contributing to the Kueski Design System.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **pnpm** (Package manager - required)
- **Git** for version control
- **VS Code** (recommended) with extensions:
  - Nx Console
  - TypeScript
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/kueski-dev/kueski-design-system.git
cd kueski-design-system

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## 🔄 Development Process

### 1. Branch Strategy

We use **Git Flow** with the following branches:

- **`main`**: Production-ready code
- **`develop`**: Integration branch for features
- **`feature/*`**: Feature development branches
- **`hotfix/*`**: Critical bug fixes
- **`release/*`**: Release preparation branches

### 2. Creating a Feature Branch

```bash
# Create and switch to feature branch
git checkout -b feature/button-variants

# Or from develop
git checkout develop
git pull origin develop
git checkout -b feature/button-variants
```

### 3. Development Workflow

```bash
# 1. Start development server
pnpm dev

# 2. Run tests in watch mode
pnpm test:watch

# 3. Run linting
pnpm lint

# 4. Build packages
pnpm build

# 5. Run all checks
pnpm check
```

## 🧪 Testing Workflow

### Unit Testing

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm test --filter=@kueski-dev/kds/react

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Visual Testing

```bash
# Start Storybook
pnpm storybook

# Build Storybook
pnpm build:storybook

# Test Storybook build
pnpm test:storybook
```

## 🔍 Code Quality

### Linting

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues
pnpm lint:fix

# Run Stylelint
pnpm stylelint

# Fix Stylelint issues
pnpm stylelint:fix
```

### Type Checking

```bash
# Type check all packages
pnpm type-check

# Type check specific package
pnpm type-check --filter=@kueski-dev/kds/react
```

### Formatting

```bash
# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check
```

## 🏗️ Building

### Development Build

```bash
# Build all packages in development mode
pnpm build:dev

# Build specific package
pnpm build:dev --filter=@kueski-dev/kds/react
```

### Production Build

```bash
# Build all packages for production
pnpm build

# Build specific package
pnpm build --filter=@kueski-dev/kds/react
```

### Build Validation

```bash
# Validate build output
pnpm build:validate

# Check bundle size
pnpm build:size

# Analyze bundle
pnpm build:analyze
```

## 📦 Package Management

### Adding Dependencies

```bash
# Add dependency to specific package
pnpm add react --filter=@kueski-dev/kds/react

# Add dev dependency
pnpm add -D @types/react --filter=@kueski-dev/kds/react

# Add dependency to workspace root
pnpm add -w typescript
```

### Updating Dependencies

```bash
# Update all dependencies
pnpm update

# Update specific dependency
pnpm update react

# Check for outdated packages
pnpm outdated
```

## 🔄 Git Workflow

### Commit Messages

We follow **Conventional Commits**:

```bash
# Feature
git commit -m "feat(button): add new variant prop"

# Bug fix
git commit -m "fix(button): resolve loading state issue"

# Documentation
git commit -m "docs(button): update usage examples"

# Style
git commit -m "style(button): fix formatting"

# Refactor
git commit -m "refactor(button): improve type safety"

# Test
git commit -m "test(button): add integration tests"

# Chore
git commit -m "chore: update dependencies"
```

### Pull Request Process

1. **Create Pull Request**
   - Use descriptive title
   - Add detailed description
   - Link related issues
   - Add screenshots for UI changes

2. **Code Review**
   - Request review from team members
   - Address feedback
   - Update PR description if needed

3. **Merge**
   - Squash and merge
   - Delete feature branch
   - Update version if needed

### Pre-commit Hooks

```bash
# Install pre-commit hooks
pnpm prepare

# Run pre-commit checks manually
pnpm pre-commit
```

## 🚀 Release Process

### Version Management

We use **Semantic Versioning**:

- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features
- **Patch** (0.0.1): Bug fixes

### Release Workflow

```bash
# 1. Create release branch
git checkout -b release/v1.2.0

# 2. Build packages
pnpm build

# 3. Run tests
pnpm test
```

## 🔧 Development Tools

### VS Code Configuration

```json
// .vscode/settings.json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.autoImports": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Recommended Extensions

```json
// .vscode/extensions.json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "nrwl.angular-console"
  ]
}
```

## 📊 Monitoring & Metrics

### Build Metrics

```bash
# Show build performance
pnpm build:profile

# Analyze bundle size
pnpm build:analyze

# Check for duplicate dependencies
pnpm build:check:duplicates
```

### Test Coverage

```bash
# Generate coverage report
pnpm test:coverage

# View coverage report
open coverage/index.html
```

### Performance Monitoring

```bash
# Run performance tests
pnpm test:performance

# Generate performance report
pnpm build:performance
```

## 🐛 Debugging

### Common Issues

#### 1. Build Failures

```bash
# Clear all caches
pnpm clean
rm -rf node_modules
pnpm install
pnpm build
```

#### 2. Test Failures

```bash
# Clear test cache
pnpm test:clear-cache
pnpm test
```

#### 3. TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
pnpm type-check
```

#### 4. Styling Issues

```bash
# Rebuild CSS
pnpm build:css
```

### Debug Mode

```bash
# Run with debug information
DEBUG=* pnpm dev

# Run tests with debug
DEBUG=* pnpm test

# Build with debug
DEBUG=* pnpm build
```

## 📚 Documentation

### Updating Documentation

1. **Component Documentation**
   - Update JSDoc comments
   - Add Storybook stories
   - Update README files

2. **API Documentation**
   - Update type definitions
   - Add usage examples
   - Document breaking changes

3. **Architecture Documentation**
   - Update design decisions
   - Document new patterns
   - Update diagrams

### Documentation Commands

```bash
# Build documentation
pnpm docs:build

# Serve documentation locally
pnpm docs:serve

# Validate documentation
pnpm docs:validate
```

## 🔗 Resources

- [Nx Documentation](https://nx.dev/)
- [pnpm Documentation](https://pnpm.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [VS Code Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace)
