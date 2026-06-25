# CLI Guide

This document explains how to use the Kueski Design System CLI to generate design tokens, icons, and utilities from Figma.

## 🚀 Overview

The Kueski Design System CLI is a powerful tool that automatically generates design tokens, icons, and utility classes from Figma designs. It ensures consistency between design and code by maintaining a single source of truth.

## 📦 Installation

The CLI is included in the `@kueski-dev/kds/utils` package:

```bash
# Install the utils package
pnpm add -D @kueski-dev/kds/utils

# Or install globally
pnpm add -g @kueski-dev/kds/utils
```

## 🛠️ Available Commands

### 1. Download Tokens

Downloads design tokens from Figma and generates CSS files.

```bash
# Download all tokens
pnpm run cli download-tokens

# Download with specific options
pnpm run cli download-tokens --figma-token YOUR_TOKEN --file-key FILE_KEY
```

**Options:**

- `--figma-token`: Your Figma personal access token
- `--file-key`: Figma file key (optional, uses default)
- `--output-dir`: Output directory (default: `packages/react/src/styles/tokens/`)

### 2. Parse Tokens

Processes raw tokens and generates utility classes and TypeScript types.

```bash
# Parse all tokens
pnpm run cli parse-tokens

# Parse with specific options
pnpm run cli parse-tokens --input-dir ./tokens --output-dir ./styles
```

**Options:**

- `--input-dir`: Input directory for raw tokens
- `--output-dir`: Output directory for processed files
- `--watch`: Watch for changes and re-process

### 3. Download Icons

Downloads icons from Figma and generates React components.

```bash
# Download all icons
pnpm run cli download-icons

# Download with specific options
pnpm run cli download-icons --figma-token YOUR_TOKEN --file-key FILE_KEY
```

**Options:**

- `--figma-token`: Your Figma personal access token
- `--file-key`: Figma file key (optional, uses default)
- `--output-dir`: Output directory (default: `packages/react/src/components/atoms/icon/`)

### 4. Validate Files

Validates TypeScript declarations and ensures type safety.

```bash
# Validate all files
pnpm run cli validate-files

# Validate specific directory
pnpm run cli validate-files --dir ./packages/react/src
```

## 🔧 Configuration

### Environment Variables

Set these environment variables for easier usage:

```bash
# .env
FIGMA_TOKEN=your_figma_token_here
FIGMA_FILE_ID=figma_file_id
```

### CLI Script

The project includes a `cli` script in `package.json` that you can use to run any CLI command:

```bash
# All CLI commands use this pattern:
pnpm run cli <command> [options]

# Examples:
pnpm run cli download-tokens
pnpm run cli parse-tokens
pnpm run cli download-icons
```

## 📁 Generated Files

### Design Tokens

The CLI generates the following token files:

```
packages/react/src/styles/tokens/
├── colors.css              # Color tokens
├── spacings.css            # Spacing tokens
├── font-sizes.css          # Typography tokens
├── font-weights.css        # Font weight tokens
├── font-families.css       # Font family tokens
├── line-heights.css        # Line height tokens
├── letter-spacings.css     # Letter spacing tokens
├── radius.css              # Border radius tokens
├── border-widths.css       # Border width tokens
├── gradients.css           # Gradient tokens
├── primitive-colors.css    # Primitive color tokens
└── index.css               # Main token file
```

### Utility Classes

Generated utility classes for common patterns:

```
packages/react/src/styles/utility/
├── button.css              # Button utilities
├── elevation.css           # Shadow utilities
└── typography.css          # Typography utilities
```

### Icons

Generated React icon components:

```
packages/react/src/components/atoms/icon/
├── icons/                  # Individual icon components
│   ├── CheckIcon.tsx
│   ├── CloseIcon.tsx
│   └── ...
├── Icon.tsx                # Main icon component
├── Icon.types.ts           # Icon types
└── index.ts                # Icon exports
```

## 🎨 Design Token Updates

The CLI automatically updates design tokens from Figma, including colors, spacing, typography, border radius, and gradients. All generated tokens use CSS custom properties with the `@theme` directive for Tailwind CSS v4 compatibility.

> For detailed information about the token structure and available values, see the [Design Tokens documentation](../tokens/design-tokens.md).

## 🎯 Usage Examples

### Download and Parse Tokens

```bash
# Complete workflow
pnpm run cli download-tokens --figma-token $FIGMA_TOKEN
pnpm run cli parse-tokens
```

### Watch Mode for Development

```bash
# Watch for changes and re-process
pnpm run cli parse-tokens --watch
```

### Generate Icons

```bash
# Download and generate icon components
pnpm run cli download-icons --figma-token $FIGMA_TOKEN
```

## 🔄 Workflow Integration

### Pre-commit Hook

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "pnpm run cli validate-files"
    }
  }
}
```

### CI/CD Pipeline

.github/workflows/design-sync.yml

## 🐛 Troubleshooting

### Common Issues

#### 1. Figma Token Issues

```bash
# Check if token is valid
curl -H "X-Figma-Token: YOUR_TOKEN" https://api.figma.com/v1/me
```

#### 2. File Key Issues

```bash
# Extract file key from Figma URL
# https://www.figma.com/file/FILE_KEY/Project-Name
# FILE_KEY is the part after /file/
```

#### 3. Permission Issues

```bash
# Ensure you have access to the Figma file
# Check if your token has the right permissions
```

### Debug Mode

```bash
# Run with debug output
DEBUG=* pnpm run cli download-tokens
```

## 📚 Advanced Usage

### Custom Token Processing

```typescript
// custom-token-processor.ts
import { parseTokensCommand } from '@kueski-dev/kds/utils';

const customProcessor = {
  ...parseTokensCommand,
  process: (tokens) => {
    // Custom processing logic
    return processedTokens;
  },
};
```

### Custom Icon Generation

```typescript
// custom-icon-generator.ts
import { downloadIconsCommand } from '@kueski-dev/kds/utils';

const customGenerator = {
  ...downloadIconsCommand,
  generateComponent: (iconData) => {
    // Custom component generation
    return customComponent;
  },
};
```

## 🔗 Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Design Tokens W3C](https://www.w3.org/community/design-tokens/)
- [Figma Tokens Plugin](https://www.figma.com/community/plugin/843461159747178946/Figma-Tokens)
- [Design System CLI](https://github.com/kueski-dev/kueski-design-system/tree/main/cli)
