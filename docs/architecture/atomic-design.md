# Atomic Design Methodology

This document explains how the Kueski Design System implements Atomic Design principles for component organization and hierarchy.

## 🧬 What is Atomic Design?

Atomic Design is a methodology for creating design systems developed by Brad Frost. It provides a clear methodology for crafting design systems by breaking down interfaces into fundamental building blocks and then building up from there.

## 🏗️ The Five Levels of Atomic Design

### 1. Atoms

**Definition**: The basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

**Characteristics**:

- Cannot be broken down further without losing their meaning
- Single-purpose components
- No complex state management
- Highly reusable across the application

**Examples in Kueski Design System**:

- `Button` - Interactive element for user actions
- `Input` - Form input field
- `Icon` - Visual symbol or glyph
- `Badge` - Small status indicator
- `Chip` - Compact information container
- `Avatar` - User profile image
- `Spinner` - Loading indicator

**File Structure**:

```text
components/atoms/
├── button/
│   ├── Button.tsx
│   ├── Button.types.ts
│   ├── Button.styles.ts
│   ├── Button.test.tsx
│   ├── Button.stories.tsx
│   └── index.ts
├── input/
├── icon/
└── badge/
```

### 2. Molecules

**Definition**: Groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

**Characteristics**:

- Simple combinations of 2-3 atoms
- May have simple state
- Serve a specific function
- More complex than atoms but still relatively simple

**Examples in Kueski Design System**:

- `SearchBox` - Input + Button combination
- `FormField` - Label + Input + Error message
- `Card` - Container with header, content, and actions
- `Alert` - Icon + Message + Close button
- `Breadcrumb` - Multiple Link components
- `Pagination` - Previous/Next buttons + Page numbers

**File Structure**:

```text
components/molecules/
├── search-box/
│   ├── SearchBox.tsx
│   ├── SearchBox.types.ts
│   ├── SearchBox.styles.ts
│   ├── SearchBox.test.tsx
│   ├── SearchBox.stories.tsx
│   └── index.ts
├── form-field/
├── card/
└── alert/
```

### 3. Organisms

**Definition**: Groups of molecules joined together to form a relatively complex, distinct section of an interface.

**Characteristics**:

- Complex UI components
- Composed of multiple molecules and atoms
- May have complex state and logic
- Serve major functions of the interface

**Examples in Kueski Design System**:

- `Header` - Logo + Navigation + User menu
- `Sidebar` - Navigation + User profile + Settings
- `Modal` - Overlay + Content + Actions
- `Table` - Headers + Rows + Pagination + Actions
- `Form` - Multiple FormFields + Validation + Submit
- `DataGrid` - Table + Filters + Sorting + Pagination

**File Structure**:

```text
components/organisms/
├── header/
│   ├── Header.tsx
│   ├── Header.types.ts
│   ├── Header.styles.ts
│   ├── Header.test.tsx
│   ├── Header.stories.tsx
│   └── index.ts
├── sidebar/
├── modal/
└── table/
```

### 4. Templates

**Definition**: Page-level objects that place components into a layout and articulate the design's content structure.

**Characteristics**:

- Layout-focused
- Define the structure of pages
- Place components without specific content
- Show the relationships between components

**Examples in Kueski Design System**:

- `PageLayout` - Header + Sidebar + Main content + Footer
- `FormLayout` - Form structure with validation areas
- `DashboardLayout` - Grid-based layout for widgets
- `AuthLayout` - Centered layout for authentication pages

**File Structure**:

```text
components/templates/
├── page-layout/
│   ├── PageLayout.tsx
│   ├── PageLayout.types.ts
│   ├── PageLayout.styles.ts
│   ├── PageLayout.test.tsx
│   ├── PageLayout.stories.tsx
│   └── index.ts
├── form-layout/
├── dashboard-layout/
└── auth-layout/
```

## 🎯 Benefits of Atomic Design

### 1. Consistency

- Ensures consistent design patterns across the application
- Reduces design debt and inconsistencies
- Makes it easier to maintain design standards

### 2. Reusability

- Components can be reused across different contexts
- Reduces development time and effort
- Ensures consistent behavior and appearance

### 3. Scalability

- Easy to add new components following established patterns
- Clear hierarchy makes it easy to understand component relationships
- Facilitates team collaboration and handoffs

### 4. Maintainability

- Clear separation of concerns
- Easy to update and modify components
- Reduces code duplication

### 5. Testing

- Each level can be tested independently
- Easier to identify and fix issues
- Better test coverage and reliability

## 🔄 Component Composition

### Composition Patterns

```typescript
// Atom: Button
export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

// Molecule: SearchBox (composed of Input + Button)
export const SearchBox = ({ onSearch, ...props }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="search-box">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        {...props}
      />
      <Button onClick={() => onSearch(query)}>
        <SearchIcon />
      </Button>
    </div>
  );
};

// Organism: Header (composed of Logo + Navigation + SearchBox + UserMenu)
export const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <SearchBox onSearch={handleSearch} />
      <UserMenu user={user} onLogout={onLogout} />
    </header>
  );
};
```

### Props Drilling vs Context

```typescript
// ❌ Props drilling through multiple levels
<Header user={user} onLogout={onLogout} theme={theme} />
  <UserMenu user={user} onLogout={onLogout} theme={theme} />
    <Avatar user={user} theme={theme} />

// ✅ Using Context for shared state
<UserProvider value={{ user, onLogout }}>
  <ThemeProvider value={theme}>
    <Header />
      <UserMenu />
        <Avatar />
  </ThemeProvider>
</UserProvider>
```

## 📏 Component Guidelines

### Atom Guidelines

- **Single Responsibility**: Each atom should have one clear purpose
- **No Dependencies**: Atoms should not depend on other components
- **Highly Configurable**: Should accept props for customization
- **Accessible**: Must meet accessibility standards

```typescript
// ✅ Good atom example
interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'destructive';
  $size?: 'sm' | 'md' | 'lg';
  $loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ $variant = 'primary', $size = 'md', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ $variant, $size }))}
      {...props}
    />
  );
};
```

### Molecule Guidelines

- **Composed of Atoms**: Should primarily use atoms as building blocks
- **Simple State**: May have basic state management
- **Specific Function**: Should serve a clear, specific purpose
- **Reusable**: Should be reusable across different contexts

```typescript
// ✅ Good molecule example
interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  $disabled?: boolean;
}

export const SearchBox = ({ onSearch, placeholder = "Search...", $disabled }: SearchBoxProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        $disabled={$disabled}
      />
      <Button type="submit" $disabled={$disabled || !query}>
        <SearchIcon />
      </Button>
    </form>
  );
};
```

### Organism Guidelines

- **Complex Composition**: Should combine multiple molecules and atoms
- **State Management**: May have complex state and business logic
- **Context Aware**: Should be aware of application context
- **Feature Complete**: Should provide complete functionality

```typescript
// ✅ Good organism example
interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  onSearch: (query: string) => void;
}

export const Header = ({ user, onLogout, onSearch }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__brand">
        <Logo />
      </div>

      <Navigation className="header__nav" />

      <div className="header__actions">
        <SearchBox onSearch={onSearch} />
        {user ? (
          <UserMenu user={user} onLogout={onLogout} />
        ) : (
          <AuthButtons />
        )}
      </div>

      <MobileMenuToggle
        isOpen={isMobileMenuOpen}
        onToggle={setIsMobileMenuOpen}
      />
    </header>
  );
};
```

## 🧪 Testing Strategy

### Testing Each Level

```typescript
// Atom testing
describe('Button', () => {
  it('should render with correct variant', () => {
    render(<Button $variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-background-brand');
  });
});

// Molecule testing
describe('SearchBox', () => {
  it('should call onSearch when form is submitted', () => {
    const onSearch = vi.fn();
    render(<SearchBox onSearch={onSearch} />);

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'test query' }
    });
    fireEvent.submit(screen.getByRole('form'));

    expect(onSearch).toHaveBeenCalledWith('test query');
  });
});

// Organism testing
describe('Header', () => {
  it('should show user menu when user is logged in', () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    render(<Header user={user} onLogout={vi.fn()} onSearch={vi.fn()} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

## 📚 Storybook Organization

### Story Structure

```typescript
// Button.stories.tsx
export default {
  title: 'Atoms/Button',
  component: Button,
  // ...
};

// SearchBox.stories.tsx
export default {
  title: 'Molecules/SearchBox',
  component: SearchBox,
  // ...
};

// Header.stories.tsx
export default {
  title: 'Organisms/Header',
  component: Header,
  // ...
};
```

## 🔗 Resources

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Design Systems Book](https://designsystemsrepo.com/)
- [Component-Driven Development](https://www.componentdriven.org/)
