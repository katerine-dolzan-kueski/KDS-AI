import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createStylesCopyPlugin } from '../utils/src/vite-config';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
import { createBundleAnalyzerPlugin } from '../utils/src/vite-config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: resolve(__dirname, 'dist'),
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
      rollupTypes: false,
      copyDtsFiles: true,
    }),
    createStylesCopyPlugin(__dirname),
    ...(process.env.ANALYZE
      ? [createBundleAnalyzerPlugin({ packageName: 'react', open: false })]
      : []),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
      name: 'KueskiDesignSystem',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'clsx',
        'class-variance-authority',
        'tailwind-merge',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        preserveModules: false,
        exports: 'named',
        interop: 'auto',
      },
    },
    target: 'es2020',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@kueski-dev/kds-react': resolve(__dirname, 'src'),
    },
  },
});
