module.exports = function (api) {
  // Cache based on NODE_ENV
  api.cache.using(() => process.env.NODE_ENV);

  const debug = process.env.KDS_BUILD_VERBOSE === 'true';
  const optimizeClsx = process.env.KDS_OPTIMIZE_CLSX === 'true';
  const removePropTypes = process.env.KDS_REMOVE_PROP_TYPES === 'true';
  const runtimeVersion = process.env.KDS_BABEL_RUNTIME_VERSION || '^7.25.0';

  // Create separate configurations for both formats
  const createConfig = (bundleType) => ({
    assumptions: {
      noDocumentAll: true,
      setPublicClassFields: true,
      privateFieldsAsProperties: true,
      objectRestNoSymbols: true,
      setSpreadProperties: true,
    },
    ignore: [/@babel[\\|/]runtime/, /prettier/, '**/*.template.js'],
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          debug,
          modules: bundleType === 'esm' ? false : 'commonjs',
          browserslistEnv: bundleType === 'esm' ? 'stable' : 'node',
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          useBuiltIns: bundleType === 'esm',
          useSpread: bundleType === 'esm',
        },
      ],
      ['@babel/preset-typescript'],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          version: runtimeVersion,
          regenerator: false,
          useESModules: bundleType === 'esm',
        },
      ],
      [
        'babel-plugin-transform-inline-environment-variables',
        {
          include: ['KUESKI_DESIGN_VERSION'],
        },
      ],
      ...(removePropTypes
        ? [['babel-plugin-transform-react-remove-prop-types', { mode: 'unsafe-wrap' }]]
        : []),
      ...(optimizeClsx ? [['babel-plugin-optimize-clsx']] : []),
    ],
  });

  // Auto-detect format from filename or use ESM as default
  const filename = api.caller && api.caller((caller) => caller.filename);
  const isUMD = filename && (filename.includes('.umd.') || filename.includes('umd'));
  const bundle = isUMD ? 'cjs' : 'esm';

  return createConfig(bundle);
};
