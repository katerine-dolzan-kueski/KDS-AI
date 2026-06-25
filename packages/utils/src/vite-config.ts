import { resolve } from 'path';
import type { Plugin } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

// Utility function to create styles copy plugin
export function createStylesCopyPlugin(packagePath: string): Plugin {
  return {
    name: 'copy-styles',
    generateBundle: {
      order: 'post',
      async handler() {
        const { existsSync, mkdirSync, cpSync } = await import('fs');

        console.log('📦 Copying styles...');
        const srcStylesPath = resolve(packagePath, 'src', 'styles');
        const buildStylesPath = resolve(packagePath, 'dist', 'styles');

        try {
          if (existsSync(srcStylesPath)) {
            if (!existsSync(buildStylesPath)) {
              mkdirSync(buildStylesPath, { recursive: true });
            }
            cpSync(srcStylesPath, buildStylesPath, { recursive: true });
            console.log('✅ Styles copied successfully to build/styles/');
          } else {
            console.warn('⚠️ Source styles directory not found:', srcStylesPath);
          }
        } catch (error) {
          console.error('❌ Failed to copy styles:', error);
          throw error;
        }
      },
    },
  };
}

// Helper type for bundle analyzer options
export interface BundleAnalyzerOptions {
  packageName: string;
  open?: boolean;
}

// Helper function to create bundle analyzer plugin using rollup-plugin-visualizer
// Note: This plugin doesn't need to be used for utils package itself
export function createBundleAnalyzerPlugin(options: BundleAnalyzerOptions): Plugin {
  console.log('📊 Creating bundle analyzer plugin for:', options.packageName);

  return visualizer({
    filename: `bundle-analysis/${options.packageName}-stats.html`,
    open: options?.open ?? false,
    title: `Bundle Analysis - ${options.packageName}`,
    gzipSize: true,
    brotliSize: true,
    template: 'treemap', // or 'sunburst', 'network'
  }) as Plugin;
}
