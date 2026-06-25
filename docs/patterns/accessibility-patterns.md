# Accessibility Patterns - Kueski Design System

## 🎯 Hybrid Strategy: Custom Hooks + Radix UI

### **Architectural Decision**

After analyzing available options, we have decided to implement a **hybrid strategy** that combines:

- ✅ **Custom hooks** for simple components and Kueski-specific patterns
- ✅ **Radix UI primitives** for complex components that require extensive accessibility logic

## 📊 Approach Comparison

| Aspect            | Custom Hooks      | Radix UI          | Hybrid Strategy   |
| ----------------- | ----------------- | ----------------- | ----------------- |
| **Bundle Size**   | ✅ Minimal        | ❌ Larger         | ✅ Optimized      |
| **Control**       | ✅ Total          | ⚠️ Limited        | ✅ Balanced       |
| **Maintenance**   | ⚠️ Our code       | ✅ Community      | ✅ Balanced       |
| **Flexibility**   | ✅ Maximum        | ⚠️ Limited        | ✅ Maximum        |
| **Testing**       | ✅ Full control   | ⚠️ Dependent      | ✅ Full control   |
| **Accessibility** | ✅ WCAG compliant | ✅ WCAG compliant | ✅ WCAG compliant |

## 🎯 When to Use Each Approach

### **Custom Hooks** ✅

**For simple components and Kueski-specific patterns:**

```typescript
// ✅ Button - Simple, specific pattern
export const Button = () => {
  const { eventHandlers, accessibilityProps } = useAccessibility<HTMLButtonElement>({
    action: () => ref.current?.click(),
    loading: false,
    loadingText: 'Loading...',
    children: 'Click me',
  });

  return <button {...eventHandlers} {...accessibilityProps}>Click me</button>;
};

// ✅ Link - Simple, specific pattern
export const Link = () => {
  const { eventHandlers } = useKeyboardEvent({
    action: () => navigate('/path'),
    triggerKeys: ['Enter'],
  });

  return <a {...eventHandlers}>Go to page</a>;
};

// ✅ IconButton - Simple, specific pattern
export const IconButton = () => {
  const { eventHandlers, accessibilityProps } = useAccessibility<HTMLButtonElement>({
    action: () => handleClick(),
    'aria-label': 'Close dialog',
  });

  return <button {...eventHandlers} {...accessibilityProps}><CloseIcon /></button>;
};
```

### **Radix UI Primitives** ✅

**For complex components with extensive accessibility logic:**

```typescript
// ✅ Modal - Complex, extensive accessibility logic
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Modal</Button> {/* Uses our Button */}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Modal Title</DialogTitle>
        {/* Modal content */}
      </DialogContent>
    </Dialog>
  );
};

// ✅ Dropdown - Complex, focus management
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@radix-ui/react-dropdown-menu';

export const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button> {/* Uses our Button */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Menu options */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// ✅ Select - Complex, keyboard navigation
import { Select, SelectTrigger, SelectContent, SelectItem } from '@radix-ui/react-select';

export const SelectField = () => {
  return (
    <Select>
      <SelectTrigger asChild>
        <Button>Choose option</Button> {/* Uses our Button */}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
};
```

## 🔄 Integration Patterns

### **Pattern 1: Simple Components with Custom Hooks**

```typescript
// ✅ For: Button, Link, IconButton, Badge, Chip
export const SimpleComponent = () => {
  const { eventHandlers, accessibilityProps } = useAccessibility<HTMLElement>({
    // Kueski-specific logic
  });

  return <element {...eventHandlers} {...accessibilityProps}>Content</element>;
};
```

### **Pattern 2: Complex Components with Radix UI**

```typescript
// ✅ For: Modal, Dropdown, Select, Tooltip, Popover
import { RadixPrimitive } from '@radix-ui/react-*';

export const ComplexComponent = () => {
  return (
    <RadixPrimitive>
      <RadixPrimitive.Trigger asChild>
        <Button>Trigger</Button> {/* Uses our Button */}
      </RadixPrimitive.Trigger>
      <RadixPrimitive.Content>
        {/* Complex content */}
      </RadixPrimitive.Content>
    </RadixPrimitive>
  );
};
```

### **Pattern 3: Hybrid - Radix UI + Custom Hooks**

```typescript
// ✅ For: Components that need both approaches
import { Dialog } from '@radix-ui/react-dialog';
import { useAccessibility } from '../../../hooks/useAccessibility';

export const HybridComponent = () => {
  const { eventHandlers, accessibilityProps } = useAccessibility<HTMLDivElement>({
    // Additional specific logic
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent {...eventHandlers} {...accessibilityProps}>
        {/* Content with additional logic */}
      </DialogContent>
    </Dialog>
  );
};
```

## 🚀 Implementation Roadmap

### **Phase 1: Custom Hooks (Current)**

- [x] `useKeyboardEvent` - Generic keyboard events
- [x] `useAccessibility` - Unified accessibility
- [x] Button component with custom hooks
- [ ] Link component with custom hooks
- [ ] IconButton component with custom hooks

### **Phase 2: Radix UI Integration**

- [ ] Modal with `@radix-ui/react-dialog`
- [ ] Dropdown with `@radix-ui/react-dropdown-menu`
- [ ] Select with `@radix-ui/react-select`
- [ ] Tooltip with `@radix-ui/react-tooltip`
- [ ] Popover with `@radix-ui/react-popover`

### **Phase 3: Hybrid Abstractions**

- [ ] `useKueskiAccessibility` - Unified wrapper
- [ ] Components that combine both approaches
- [ ] Advanced composition patterns

## 📋 Decision Checklist

### **Use Custom Hooks when:**

- [ ] Component is simple (Button, Link, IconButton)
- [ ] Has Kueski-specific patterns (loading states, aria-label priority)
- [ ] Doesn't require complex focus management
- [ ] Bundle size is critical
- [ ] You need total control over the logic

### **Use Radix UI when:**

- [ ] Component is complex (Modal, Dropdown, Select)
- [ ] Requires complex focus management
- [ ] Has extensive accessibility logic
- [ ] Benefits from community and maintenance
- [ ] You don't need extreme customization

## 🧪 Testing Strategy

### **Custom Hooks**

```typescript
// Comprehensive unit tests
describe('useAccessibility', () => {
  it('should handle loading states correctly', () => {
    // Kueski-specific test
  });
});
```

### **Radix UI Components**

```typescript
// Integration tests
describe('Modal with Radix UI', () => {
  it('should work with our Button component', () => {
    // Integration test
  });
});
```

## 📖 Resources

## 🔗 Related Documentation

- [Accessibility Hooks](../hooks/accessibility-hooks.md) - Custom accessibility hooks
- [Component Standards](../standards/component-standards.md) - Development standards and asChild pattern
- [Testing Guide](../testing/testing-guide.md) - Accessibility testing strategies
- [Atomic Design](../architecture/atomic-design.md) - Component hierarchy

## 📚 Resources

### Accessibility

- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Testing Library Accessibility](https://testing-library.com/docs/guide-which-query/)

### Component Composition

- [Radix UI Slot Documentation](https://www.radix-ui.com/primitives/docs/utilities/slot) - Official Radix UI Slot documentation
- [Compound Components Pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks) - Advanced React composition patterns
- [Polymorphic Components](https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/) - TypeScript polymorphic component patterns
