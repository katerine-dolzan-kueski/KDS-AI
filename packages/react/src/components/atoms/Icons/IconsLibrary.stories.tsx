import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState, useMemo } from 'react';

import * as Icons from './index';

interface IconDemoProps {
  size: number;
  colorClass: string;
  showAll?: boolean;
  showGuide?: boolean;
}

const IconDemo = ({ size, colorClass, showAll = false, showGuide = false }: IconDemoProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Crear la lista de iconos automáticamente desde todos los exports
  const allIcons = useMemo(
    () =>
      Object.entries(Icons)
        .filter(([name]) => name.endsWith('Icon')) // Solo componentes que terminen en 'Icon'
        .map(([name, Component]) => ({
          Component: Component as React.ComponentType<{
            $width?: number | string;
            $height?: number | string;
            $className?: string;
          }>,
          name: name.replace('Icon', ''), // Remover 'Icon' del final para mostrar nombre limpio
          fullName: name,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)), // Ordenar alfabéticamente
    [],
  );

  // Filtrar iconos basado en búsqueda
  const filteredIcons = useMemo(() => {
    const filtered = allIcons.filter((icon) =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return showAll ? filtered : filtered.slice(0, 10);
  }, [allIcons, searchTerm, showAll]);

  const handleCopyCode = (iconName: string) => {
    const code = `import { ${iconName} } from '@kueski-dev/design-system';\n\n<${iconName} $width={24} $height={24} $className="text-text-and-icons-primary" />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="p-6">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Kueski Design System - Icons</h2>
        <p className="text-text-and-icons-secondary">
          {allIcons.length} available icons
          {!showAll && ` (showing ${filteredIcons.length})`}
        </p>
      </div>

      {/* Search bar */}
      {showAll && (
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-and-icons-brand"
          />
          {searchTerm && (
            <p className="text-sm text-text-and-icons-secondary mt-2">
              {filteredIcons.length} result{filteredIcons.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        {filteredIcons.map(({ Component, name, fullName }) => (
          <div
            key={name}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center p-4 hover:bg-background-secondary border border-gray-200 rounded-lg text-center shadow-background-invert-translucent hover:shadow-lg transition-shadow duration-200 cursor-pointer relative"
            title={`Click to copy ${fullName} code`}
            onClick={() => handleCopyCode(fullName)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleCopyCode(fullName);
              }
            }}
          >
            <div className="mb-3 flex items-center justify-center h-12">
              <Component $width={size} $height={size} $className={colorClass} />
            </div>
            <div className="text-sm font-medium text-text-and-icons-primary mb-1">{name}</div>
            <div className="text-xs text-text-and-icons-tertiary font-mono opacity-75">
              {fullName}
            </div>
            {copiedIcon === fullName && (
              <div className="absolute top-2 right-2 text-xs text-text-and-icons-success bg-green-50 px-2 py-1 rounded">
                ✓ Copied!
              </div>
            )}
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-text-and-icons-secondary text-sm">
            💡 Use the <strong>"All Icons"</strong> story to view all available icons with search
          </p>
        </div>
      )}

      {/* Color Tokens Examples - Solo en Default */}
      {showGuide && (
        <>
          <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-text-and-icons-primary">
              Kueski Color Tokens
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.BankIcon $width={24} $height={24} $className="text-text-and-icons-brand" />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-brand
                </div>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.CheckmarkIcon
                    $width={24}
                    $height={24}
                    $className="text-text-and-icons-success"
                  />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-success
                </div>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.WarningIcon
                    $width={24}
                    $height={24}
                    $className="text-text-and-icons-warning"
                  />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-warning
                </div>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.ErrorCircleIcon
                    $width={24}
                    $height={24}
                    $className="text-text-and-icons-danger"
                  />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-danger
                </div>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.HomeIcon
                    $width={24}
                    $height={24}
                    $className="text-text-and-icons-primary"
                  />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-primary
                </div>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.SettingsIcon
                    $width={24}
                    $height={24}
                    $className="text-text-and-icons-secondary"
                  />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-secondary
                </div>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.PersonIcon
                    $width={24}
                    $height={24}
                    $className="text-text-and-icons-tertiary"
                  />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-tertiary
                </div>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Icons.StarIcon
                    $width={24}
                    $height={24}
                    $className="text-text-and-icons-upsell"
                  />
                </div>
                <div className="text-xs text-text-and-icons-tertiary">
                  text-text-and-icons-upsell
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Section */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-text-and-icons-primary">
              📖 Usage Guide
            </h3>

            {/* Quick Tips */}
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-text-and-icons-primary mb-2">💡 Quick Tips</h4>
              <ul className="text-sm text-text-and-icons-secondary space-y-1 list-disc list-inside">
                <li>
                  <strong>Click any icon</strong> to copy its usage code to clipboard
                </li>
                <li>
                  Use the <strong>"All Icons"</strong> story to search through all available icons
                </li>
                <li>Icons use styled-components transient props ($width, $height, $className)</li>
                <li>You can use Tailwind classes for colors or create your own</li>
              </ul>
            </div>

            {/* Code Examples */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-and-icons-primary mb-2 text-sm">
                  Basic Usage
                </h4>
                <pre className="bg-gray-50 border border-gray-200 rounded text-xs p-4 overflow-x-auto">
                  {`import { BankIcon } from '@kueski-dev/design-system';

// Default usage (24x24px)
<BankIcon />

// With custom size
<BankIcon $width={${size}} $height={${size}} />

// With Kueski color class
<BankIcon $className="${colorClass}" />`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold text-text-and-icons-primary mb-2 text-sm">
                  Kueski Color Tokens
                </h4>
                <pre className="bg-gray-50 border border-gray-200 rounded text-xs p-4 overflow-x-auto">
                  {`// Primary colors
<HomeIcon $className="text-text-and-icons-primary" />
<SettingsIcon $className="text-text-and-icons-secondary" />
<PersonIcon $className="text-text-and-icons-tertiary" />

// Status colors
<CheckmarkIcon $className="text-text-and-icons-success" />
<WarningIcon $className="text-text-and-icons-warning" />
<ErrorCircleIcon $className="text-text-and-icons-danger" />

// Special colors
<BankIcon $className="text-text-and-icons-brand" />
<StarIcon $className="text-text-and-icons-upsell" />
<CloseIcon $className="text-text-and-icons-always-white" />`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold text-text-and-icons-primary mb-2 text-sm">
                  Advanced Configuration
                </h4>
                <pre className="bg-gray-50 border border-gray-200 rounded text-xs p-4 overflow-x-auto">
                  {`// Combining multiple props
<CartIcon 
  $width={32} 
  $height={32} 
  $className="text-text-and-icons-brand hover:text-text-and-icons-success transition-colors"
/>

// With native SVG props
<ShoppingBagIcon 
  $width={24} 
  $height={24}
  $className="text-text-and-icons-primary"
  aria-label="Shopping cart"
  role="img"
/>`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold text-text-and-icons-primary mb-2 text-sm">
                  Available Props
                </h4>
                <div className="bg-gray-50 border border-gray-200 rounded p-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 pr-4">Prop</th>
                        <th className="text-left py-2 pr-4">Type</th>
                        <th className="text-left py-2 pr-4">Default</th>
                        <th className="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-and-icons-secondary">
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-4 font-mono">$width</td>
                        <td className="py-2 pr-4">number</td>
                        <td className="py-2 pr-4">24</td>
                        <td className="py-2">Icon width in pixels</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-4 font-mono">$height</td>
                        <td className="py-2 pr-4">number</td>
                        <td className="py-2 pr-4">24</td>
                        <td className="py-2">Icon height in pixels</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-4 font-mono">$className</td>
                        <td className="py-2 pr-4">string</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">CSS classes (Tailwind or custom)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-4 font-mono">$fill</td>
                        <td className="py-2 pr-4">string</td>
                        <td className="py-2 pr-4">currentColor</td>
                        <td className="py-2">SVG fill color</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono">...props</td>
                        <td className="py-2 pr-4">SVGProps</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">Any native SVG prop</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const meta: Meta<typeof IconDemo> = {
  title: 'Kueski Design System/Atoms/Icons',
  argTypes: {
    colorClass: {
      control: {
        type: 'select',
      },
      description:
        'Color class using Kueski design tokens. You can use any Tailwind or custom class.',
      options: [
        'text-text-and-icons-primary',
        'text-text-and-icons-secondary',
        'text-text-and-icons-tertiary',
        'text-text-and-icons-brand',
        'text-text-and-icons-success',
        'text-text-and-icons-warning',
        'text-text-and-icons-danger',
        'text-text-and-icons-upsell',
        'text-text-and-icons-always-white',
      ],
    },
    showAll: {
      control: {
        type: 'boolean',
      },
      description:
        'Show all available icons with search functionality. If false, only shows the first 10 icons.',
    },
    showGuide: {
      control: false, // Ocultar control - solo se usa internamente en la story Default
      description:
        'Shows the complete usage guide with code examples, color tokens, and props table. Automatically enabled in the Default story.',
      table: {
        disable: true, // Ocultar también de la tabla de props
      },
    },
    size: {
      control: {
        max: 48,
        min: 12,
        step: 2,
        type: 'range',
      },
      description:
        'Icon size in pixels. Default size is 24px. Common sizes are: 16 (small), 24 (standard), 32 (large).',
    },
  },
  component: IconDemo,
  parameters: {
    docs: {
      description: {
        component:
          'Complete icon library for the Kueski Design System. All icons are optimized SVG components that support styled-components transient props ($width, $height, $className). **Tip:** Click any icon to copy its usage code.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorClass: 'text-text-and-icons-brand',
    size: 24,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default view showing the first 10 icons with standard size (24px) and primary color. Click any icon to copy its code. The complete usage guide is automatically shown in the documentation.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    colorClass: 'text-text-and-icons-primary',
    size: 16,
  },
};

export const Large: Story = {
  args: {
    colorClass: 'text-text-and-icons-primary',
    size: 32,
  },
};

export const Brand: Story = {
  args: {
    colorClass: 'text-text-and-icons-brand',
    size: 24,
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons with Kueski brand color. Use this color for brand-related elements.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    colorClass: 'text-text-and-icons-success',
    size: 24,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Icons with success color. Ideal for confirmations, completed states, and positive messages.',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    colorClass: 'text-text-and-icons-warning',
    size: 24,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Icons with warning color. Use them for alerts, important notices, and situations requiring attention.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    colorClass: 'text-text-and-icons-danger',
    size: 24,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Icons with danger/error color. Appropriate for errors, critical states, and destructive actions.',
      },
    },
  },
};

export const Upsell: Story = {
  args: {
    colorClass: 'text-text-and-icons-upsell',
    size: 24,
  },
};

export const Secondary: Story = {
  args: {
    colorClass: 'text-text-and-icons-secondary',
    size: 24,
  },
};

export const Tertiary: Story = {
  args: {
    colorClass: 'text-text-and-icons-tertiary',
    size: 24,
  },
};

export const AllIcons: Story = {
  args: {
    colorClass: 'text-text-and-icons-brand',
    showAll: true,
    size: 24,
  },
  parameters: {
    docs: {
      description: {
        story:
          '🔍 Complete view with all available icons. Includes search bar to filter icons by name. Perfect for exploring and finding the icon you need. Click any icon to copy its usage code.',
      },
    },
  },
};

export const GuideComplete: Story = {
  args: {
    colorClass: 'text-text-and-icons-brand',
    showGuide: true,
    size: 24,
  },
  parameters: {
    docs: {
      description: {
        story:
          '📖 Complete usage guide with code examples, color tokens, and props table. This story shows all the necessary documentation to use icons correctly.',
      },
    },
  },
};
