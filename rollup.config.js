import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import tailwindcss from 'tailwindcss'

export default [
  {
    input: 'src/main/index.ts',
    output: {
      file: 'dist/main.js',
      format: 'cjs',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript()
    ],
  },
  {
    input: 'src/renderer/index.ts',
    output: {
      file: 'dist/renderer.js',
      format: 'iife',
    },
    plugins: [
      resolve({
        browser: true,
      }),
      postcss({
        plugins: [
          tailwindcss
        ]
      }),
      vue(),
      commonjs(),
      typescript(),
      htmlTemplate({
        template: 'src/renderer/index.html',
        target: 'dist/index.html',
      }),
    ],
  },
  {
    input: 'src/preload/index.ts',
    output: {
      file: 'dist/preload.js',
      format: 'iife',
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript()
    ],
  }
]