import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
import { createBundleAnalyzerPlugin } from '../utils/src/vite-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración específica para React Legacy (sin Tailwind CSS)
export default defineConfig({
  build: {
    copyPublicDir: false,
    sourcemap: true,
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
      name: 'KueskiDesignSystemLegacy',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime', 
        'react-dom',
        'styled-components',
        'prop-types',
        'uuid'
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'prop-types': 'PropTypes',
          'uuid': 'uuid',
        },
        preserveModules: false,
        exports: 'named',
      },
    },
    target: ['es2015'],
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true,
              ssr: false,
              pure: true,
              minify: false,
              transpileTemplateLiterals: false,
            },
          ],
        ],
      },
    }),
    dts({
      insertTypesEntry: true,
      outDir: resolve(__dirname, 'dist'),
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
      rollupTypes: false,
      copyDtsFiles: true,
    }),
    ...(process.env.ANALYZE ? [createBundleAnalyzerPlugin({ packageName: 'react-legacy' })] : []),
  ],
  resolve: {
    alias: {
      '@kueski-dev/kds-legacy': resolve(__dirname, 'src'),
    },
  },
});
