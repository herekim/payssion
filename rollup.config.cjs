/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const alias = require('rollup-plugin-alias')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const { terser } = require('rollup-plugin-terser')
const typescript = require('rollup-plugin-typescript2')

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named',
    },
  ],
  plugins: [
    alias({
      '@': path.resolve(__dirname, 'src/'),
    }),
    commonjs({
      include: 'node_modules/**',
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement',
          'useContext',
          'jsx',
          'useEffect',
          'useRef',
          'useState',
          'useMemo',
          'useCallback',
          'useReducer',
          'useLayoutEffect',
          'useImperativeHandle',
          'forwardRef',
          'memo',
          'Children',
          'isValidElement',
          'useDebugValue',
          'Fragment',
        ],
        'node_modules/react/jsx-runtime.js': ['jsx', 'Fragment', 'jsxs'],
        'node_modules/react-dom/index.js': ['render', 'hydrate', 'flushSync', 'createPortal'],
        'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
      },
    }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    json(),
    postcss({
      extract: true,
    }),

    terser(),
  ],
}
