import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'lib',
    format: 'cjs',
  },
  plugins: [
    image(),
    typescript({
      lib: ['DOM', 'ES2015'],
      target: 'es5',
      jsx: 'react',
      allowSyntheticDefaultImports: true,
    }),
    commonjs(),
    nodeResolve(),
  ],
  external: ['react', 'react-dom',],
};