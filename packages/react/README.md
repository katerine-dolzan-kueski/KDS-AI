# @kueski-dev/kds-react

Kueski Design System React components built with modern React patterns and Tailwind CSS.

## Installation

```bash
npm install @kueski-dev/kds-react
# or
pnpm add @kueski-dev/kds-react
# or
yarn add @kueski-dev/kds-react
```

## Usage

### Basic Import

```tsx
import { Button, Card, Input } from '@kueski-dev/kds-react';
```

### Import Specific Components

```tsx
import { Button } from '@kueski-dev/kds-react/atoms';
```

### Import Styles

```tsx
import '@kueski-dev/kds-react/styles';
```

### Example

```tsx
import React from 'react';
import { Button, Card, Input } from '@kueski-dev/kds-react';
import '@kueski-dev/kds-react/styles';

function App() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}

export default App;
```

## Available Components

### Atoms

- Button
- Input
- Card
- Spinner
- Radio
- Checkbox

### Molecules

- ButtonGroup
- RadioGroup

### Organisms

- Header
- Footer
- Navigation

## Styling

This package uses Tailwind CSS for styling. Make sure to include the styles in your project:

```tsx
import '@kueski-dev/kds-react/styles';
```

## TypeScript Support

This package is built with TypeScript and includes full type definitions.

## License

MIT
