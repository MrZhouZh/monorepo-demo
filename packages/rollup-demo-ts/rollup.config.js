// import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'Tools'
    }
  ],
  plugins: [
    babel({
      babelrc: false,
      babelHelpers: 'bundled',
      presets: [['env', { modules: false }]]
    }),
    resolve(),
    alias(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    commonjs(),
    esbuild({
      minify: process.env.NODE_ENV === 'production'
    }),
  ]
}
