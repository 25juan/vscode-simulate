import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".js", ".ts", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"), // 路径别名
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    AutoImport({
      imports: ["pinia", "vue", "vue/macros"],
      dts: "./src/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload();
        },
      },
    ]),
    renderer(),
  ],
});
