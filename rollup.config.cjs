/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const alias = require('@rollup/plugin-alias')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const svg = require('rollup-plugin-svg')
const { terser } = require('rollup-plugin-terser')
const typescript = require('rollup-plugin-typescript2')

const projectRootDir = path.resolve(__dirname)

module.exports = {
  input: 'src/index.ts',
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
      entries: [{ find: '@', replacement: path.resolve(projectRootDir, 'src') }],
    }),
    commonjs({
      include: 'node_modules/**',
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
      extract: false, // 파일 경로를 전달합니다.
      modules: true, // CSS 모듈을 사용하지 않습니다.
      minimize: true, // CSS 파일을 최소화합니다.
      sourceMap: true, // 소스 맵을 생성합니다.
    }),
    svg({ base64: true }),
    terser(),
  ],
}
