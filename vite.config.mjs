import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'notiwind',
      formats: ['cjs', 'es'],
      fileName: (format, entryName) => {
        const formatMapping = {
          cjs: 'common',
          es: 'esm',
        }
        return `${entryName}.${formatMapping[format]}.js`
      },
    },
    rollupOptions: {
      external: ['vue', 'mitt'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), dts()],
})
