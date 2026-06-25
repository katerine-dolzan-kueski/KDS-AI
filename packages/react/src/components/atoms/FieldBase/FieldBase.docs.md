# FieldBase Components

> **Important:** FieldBase components are low-level building blocks designed for creating form field abstractions. They are not intended for direct use in end-user applications without proper wrapper components or abstractions.

## Overview

FieldBase provides a set of composable components for building consistent form field layouts within the Kueski Design System. These components follow atomic design principles and serve as foundational blocks for higher-level field components.

## Components

### <FieldBase.Layout>
Provides the overall structure for form fields, including header (labels) and footer (helper/error text).

### <FieldBase.Box>
The main container for field elements (inputs, buttons, selects, etc.). Handles styling, states, and spacing for child elements.

### <FieldBase.Leading>
Positions decorative elements or actions at the start of the field. Supports both static icons and interactive buttons.

### <FieldBase.Trailing>
Positions decorative elements or actions at the end of the field. Commonly used for action buttons, dropdown indicators, or status icons.

## Usage Pattern

```tsx
import { FieldBase } from '@kueski-dev/kds/react';

// Basic structure
<FieldBase.Layout $label="Label" $helperText="Help text">
  <FieldBase.Box>
    <input type="text" placeholder="Field content" />
  </FieldBase.Box>
</FieldBase.Layout>

// With decorators
<FieldBase.Layout $label="Label">
  <FieldBase.Leading>
    <SearchIcon />
  </FieldBase.Leading>
  
  <FieldBase.Box $hasLeading $hasTrailing>
    <input type="text" />
  </FieldBase.Box>
  
  <FieldBase.Trailing>
    <button><ClearIcon /></button>
  </FieldBase.Trailing>
</FieldBase.Layout>
```

## Usage

- Always use `FieldBase.Layout` as the root container for consistent spacing and structure
- Set `$hasLeading` and `$hasTrailing` props on `FieldBase.Box` when using Leading/Trailing components
- Prefer creating higher-level abstractions (like `Input`, `Select`, `DatePicker`) rather than using FieldBase directly
- Use `$onClick` prop on Leading/Trailing when the decorator itself should be interactive (e.g., buttons)
