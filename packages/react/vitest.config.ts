import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'node14',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    typecheck: {
      tsconfig: './tsconfig.test.json',
    },
    server: {
      deps: {
        inline: ['@radix-ui'],
      },
    },
    include: [
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'src/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    exclude: [
      'node_modules',
      'dist',
      '.idea',
      '.git',
      '.cache',
      '**/*.config.{js,ts}',
      '**/*.stories.{js,jsx,ts,tsx}',
      '**/*.d.ts',
      'src/test/types/',
      '.eslintrc.test.js',
      'vitest.config.*',
      'tsconfig.*',
    ],
    testTimeout: 10000,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.stories.{js,jsx,ts,tsx}',
        '**/*.config.{js,ts}',
        '**/index.ts',
        '**/setup.ts',
        'src/test/types/',
        '.eslintrc.test.js',
        'vitest.config.*',
        'tsconfig.*',
        'dist/',
        'coverage/',
        '**/*.test.{js,ts,jsx,tsx}',
        '**/*.spec.{js,ts,jsx,tsx}',
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
