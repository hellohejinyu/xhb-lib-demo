import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
// import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'lib',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    commonjs(),
    nodeResolve(),
    // babel({ babelHelpers: 'bundled' }),
  ]
};