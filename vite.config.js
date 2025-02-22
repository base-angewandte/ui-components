import path from 'path';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';
import babel from '@rollup/plugin-babel';
import vue from '@vitejs/plugin-vue2';
import eslint from 'vite-plugin-eslint';
import pkg from './package.json';

// generate external pattern
// taken from: https://github.com/rollup/rollup-plugin-babel/issues/148#issuecomment-399696316
const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  '@babel',
];

const externalPattern = (arr) => {
  if (arr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${arr.join('|')})($|/)`);
  return id => pattern.test(id);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      // run after build or build:watch process
      // https://rollupjs.org/plugin-development/#build-hooks
      name: 'post-commands',
      closeBundle: async () => {
        await execSync('npm run build:post-commands');
        console.log('build:post-commands completed');
      },
    },
    vue(),
    babel({
      // https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
      // user 'runtime' for libraries for improved code deduplication
      babelHelpers: 'runtime',
      // avoid missing source files
      exclude: ['node_modules/**'],
    }),
    eslint(),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, ''),
    },
  },
  build: {
    minify: true, // set to false in linked dev mode and using nuxt-bride
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'BaseUiComponents',
      formats: ['es', 'cjs'],
      fileName: format => `[name].${format}.js`,
    },
    rollupOptions: {
      external: externalPattern(external),
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'base-ui-components.css';
          return assetInfo.name;
        },
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vue2-datepicker': 'Datepicker',
          lazysizes: 'lazysizes',
          swiper: 'Swiper',
          leaflet: 'leaflet',
          'leaflet-responsive-popup': 'leaflet-responsive-popup',
          'leaflet.markercluster': 'leaflet.markercluster',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  css: {
    postcss: {
      // the configuration was defined here (and not in an external file)
      // to prevent in a npm-link-setup the plugins from being requested in the parent module
      plugins: [
        // eslint-disable-next-line global-require
        () => import('autoprefixer'),
        // needed for import of external css (e.g. leaflet)
        // needs to be before postcss-url to have leaflet background-images included
        // eslint-disable-next-line global-require
        () => import('postcss-import'),
        // remove comments
        // eslint-disable-next-line global-require
        () => import('postcss-discard-comments'),
      ],
    },
  },
  define: {
    'process.env': {},
  },
  server: {
    port: 8080,
  },
});
