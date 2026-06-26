import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('storybook-addon-pseudo-states'),
  ],

  babel: async (options: any) => ({
    ...options,
    plugins: [
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ],
  }),

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        viteConfigPath: undefined,
      },
    },
  },

  typescript: {
    check: false,
    reactDocgen: false,
  },

  viteFinal: async (config) => {
    const { resolve } = await import('path');

    // Import Tailwind CSS v4 plugin
    let tailwindcss: any;
    try {
      // @ts-expect-error - Dynamic import may not have types
      tailwindcss = (await import('@tailwindcss/vite')).default;
    } catch (error) {
      console.warn('Tailwind CSS v4 plugin not found, skipping...');
      tailwindcss = null;
    }

    // Configure resolve for workspace packages
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@kueski-dev/kds-react': resolve(process.cwd(), 'packages/react/src'),
        '@kueski-dev/kds-legacy': resolve(process.cwd(), 'packages/react-legacy/src'),
        '@': resolve(process.cwd(), 'packages/react/src'),
      },
    };

    // Fix React compatibility and define global variables properly
    config.define = {
      ...config.define,
      global: 'globalThis',
    };

    // Set base path: repo subpath on GitHub Pages, root for local dev
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
    config.base = repoName ? `/${repoName}/` : '/';

    // Configure build settings properly
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        external: (id) => {
          // Don't externalize workspace packages
          if (id.includes('@kueski-dev/kds')) {
            return false;
          }
          return false;
        },
        output: {
          ...config.build.rollupOptions?.output,
          manualChunks: undefined,
        },
      };
      // Ensure proper asset handling
      config.build.assetsDir = 'assets';
    }

    // Allow workspace root filesystem
    config.server = {
      ...config.server,
      fs: {
        allow: ['..'],
      },
    };

    // Configure optimizeDeps to include React
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['react', 'react-dom', 'react-dom/client'],
      exclude: ['storybook'],
    };

    // Add Tailwind CSS v4 plugin
    config.plugins = config.plugins || [];
    if (tailwindcss) {
      config.plugins.push(tailwindcss());
    }

    // Add support for importing .md files as raw text
    config.plugins.push({
      name: 'markdown-loader',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return `export default ${JSON.stringify(code)};`;
        }
        return null;
      },
    });

    // Handle "use client" directive
    config.esbuild = {
      ...config.esbuild,
      jsx: 'automatic',
      loader: 'tsx',
    };

    // Configure module resolution for better compatibility
    config.resolve = {
      ...config.resolve,
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      mainFields: ['module', 'main'],
      conditions: ['import', 'module', 'browser', 'default'],
    };

    return config;
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
