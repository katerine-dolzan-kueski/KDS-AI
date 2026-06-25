# Accessibility Hooks - Kueski Design System

## 🎯 Accessibility Strategy

### **Hybrid Approach: Custom Hooks + Radix UI**

This directory contains custom accessibility hooks that complement (not replace) Radix UI solutions.

#### **When to use custom hooks?**

- ✅ **Simple components**: Button, Link, IconButton
- ✅ **Kueski-specific patterns**: Loading states, aria-label priority
- ✅ **Business-specific logic**: Loading states, validations

#### **When to use Radix UI?**

- ✅ **Complex components**: Modal, Dropdown, Select, Tooltip
- ✅ **Complex focus management**: Drawer, Popover, Combobox
- ✅ **Components with extensive accessibility logic**: DatePicker, TimePicker

## 📚 Available Hooks

### `useKeyboardEvent`

Generic hook for keyboard event handling.

```typescript
const { eventHandlers } = useKeyboardEvent({
  action: () => console.log('Enter/Space pressed'),
  onKeyDown: (event) => console.log('Key pressed:', event.key),
  triggerKeys: ['Enter', ' '],
  focusable: true,
});
```

### `useAccessibility`

Unified hook that combines keyboard handling and aria-label logic.

```typescript
const { eventHandlers, accessibilityProps } = useAccessibility<HTMLButtonElement>({
  action: () => ref.current?.click(),
  onKeyDown,
  'aria-label': 'Custom label',
  loading: false,
  loadingText: 'Loading...',
  children: 'Button text',
  busy: false,
});
```

## 🔄 Usage Patterns

### For Simple Components (Button, Link)

```typescript
export const Button = () => {
  const { eventHandlers, accessibilityProps } = useAccessibility<HTMLButtonElement>({
    // Kueski-specific logic
  });

  return <button {...eventHandlers} {...accessibilityProps}>Click me</button>;
};
```

### For Complex Components (Modal, Dropdown)

```typescript
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';
import { useAccessibility } from '../../../hooks/useAccessibility';

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Modal</Button> {/* Uses our Button */}
      </DialogTrigger>
      <DialogContent>
        {/* Modal content */}
      </DialogContent>
    </Dialog>
  );
};
```

## 🚀 Future Roadmap

### Phase 1: Expand Custom Hooks

- [ ] `useModalAccessibility` - For simple modals
- [ ] `useFormAccessibility` - For forms
- [ ] `useNavigationAccessibility` - For navigation

### Phase 2: Integrate Radix UI

- [ ] Modal with `@radix-ui/react-dialog`
- [ ] Dropdown with `@radix-ui/react-dropdown-menu`
- [ ] Select with `@radix-ui/react-select`

### Phase 3: Hybrid Abstractions

- [ ] `useKueskiAccessibility` - Unified wrapper
- [ ] Components that combine both approaches

## 🧪 Testing

All hooks include comprehensive tests:

```bash
# Run hook tests
npm test -- --run src/hooks/

# Run component tests that use hooks
npm test -- --run src/components/atoms/button/
```

## 🔗 Related Documentation

- [Accessibility Patterns](../patterns/accessibility-patterns.md) - Accessibility guidelines and patterns
- [Component Standards](../standards/component-standards.md) - Development standards
- [Testing Guide](../testing/testing-guide.md) - Testing strategies
- [Atomic Design](../architecture/atomic-design.md) - Component hierarchy

## 📖 Documentation

- [Button Component](../components/atoms/button/README.md)
- [Accessibility Guidelines](../../docs/accessibility.md)
- [Component Patterns](../../docs/patterns.md)
