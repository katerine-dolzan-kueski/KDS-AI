# @kueski-dev/kds-legacy

Kueski Design System Legacy components built with React and styled-components for legacy applications.

## Installation

```bash
npm install @kueski-dev/kds-legacy
# or
pnpm add @kueski-dev/kds-legacy
# or
yarn add @kueski-dev/kds-legacy
```

## Usage

### Basic Import

```tsx
import { Button, Card, Input } from '@kueski-dev/kds-legacy';
```

### Example

```tsx
import React from 'react';
import { Button, Card, Input } from '@kueski-dev/kds-legacy';

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
- Avatar
- Badge

### Molecules
- ButtonGroup
- RadioGroup
- InputGroup

### Organisms
- Header
- Footer
- Navigation
- Stepper

## Styling

This package uses styled-components for styling. No additional CSS imports are required.

## Dependencies

- React 16.14.0+
- styled-components
- prop-types

## TypeScript Support

This package is built with TypeScript and includes full type definitions.

## License

MIT
