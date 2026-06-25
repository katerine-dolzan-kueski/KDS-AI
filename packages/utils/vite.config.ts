import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Re-export para que otros paquetes puedan usar las utilidades
export { createStylesCopyPlugin } from './src/vite-config';

/**
 * Configuración específica para el paquete utils
 * Esta configuración se usa para compilar el CLI y otras herramientas utilities
 */
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/cli/index.ts'),
      fileName: 'cli',
      formats: ['es'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: [
        'node:fs',
        'node:path',
        'node:url',
        'node:fs/promises',
        'fs',
        'path',
        'url',
        'util',
        'assert',
        'os',
        'crypto',
        'tty',
        'child_process',
        'worker_threads',
        'readline',
        'process',
        'module',
        'v8',
        'perf_hooks',
        'vm',
        'yargs',
        'yargs-parser',
        'y18n',
        '@pnpm/find-workspace-dir',
        'escalade',
        'esbuild',
      ],
    },
    target: 'node18',
    minify: false,
  },
  // Deshabilitamos plugins automáticos para utils
  optimizeDeps: {
    exclude: ['@tailwindcss/vite', '@tailwindcss/oxide', '@tailwindcss/node'],
  },
  plugins: [],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
