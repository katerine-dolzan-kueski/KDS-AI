import { build } from 'vite';
import { resolve, join, isAbsolute, extname } from 'path';
import { existsSync } from 'fs';
import { createRequire } from 'module';

/**
 * Load vite config from package's vite.config.ts file
 */
async function loadPackageViteConfig(packagePath: string, config: string) {
  const viteConfigPath = join(packagePath, config);

  // Validate path
  if (!isAbsolute(viteConfigPath)) {
    throw new Error(`Vite config path must be absolute: ${viteConfigPath}`);
  }
  if (extname(viteConfigPath) !== '.ts') {
    throw new Error(`Vite config must be a .ts file: ${viteConfigPath}`);
  }
  if (!existsSync(viteConfigPath)) {
    throw new Error(
      `vite.config.ts not found in ${packagePath}. Each package must have its own vite.config.ts file.`,
    );
  }

  console.log(`📝 Loading vite config from: ${viteConfigPath}`);

  // Try to load using createRequire (CJS), fallback to dynamic import (ESM)
  try {
    const require = createRequire(import.meta.url);
    try {
      // Try loading as CommonJS (if compiled or using ts-node)
      const viteConfigModule = require(viteConfigPath);
      const viteConfig = viteConfigModule.default || viteConfigModule;
      if (typeof viteConfig === 'function') {
        return await viteConfig();
      }
      return viteConfig;
    } catch (requireErr) {
      // Fallback to dynamic import (ESM)
      const viteConfigModule = await import(`file://${viteConfigPath}`);
      const viteConfig = viteConfigModule.default || viteConfigModule;
      if (typeof viteConfig === 'function') {
        return await viteConfig();
      }
      return viteConfig;
    }
  } catch (error) {
    throw new Error(
      `Failed to load vite config from ${viteConfigPath}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Bundle using Vite for multiple formats
 */
export async function bundler(
  entryPoint: string,
  outputDir: string,
  config: string,
): Promise<void> {
  // Extract package path from entry point (should be /path/to/package/src/index.ts -> /path/to/package)
  const packagePath = resolve(entryPoint, '..', '..');

  console.log(`🚀 Building package: ${packagePath}`);
  console.log(`📦 Entry point: ${entryPoint}`);
  console.log(`📁 Output directory: ${outputDir}`);

  try {
    // Load the package's vite config
    const viteConfig = await loadPackageViteConfig(packagePath, config);

    // Build using the package's own vite configuration
    await build(viteConfig);

    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error);
    throw error;
  }
}
