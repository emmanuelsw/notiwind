import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "notiwind",
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue(), dts()],
});
