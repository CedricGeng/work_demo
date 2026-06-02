import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"

// 此插件是为了解决在 Vue 3 中使用 <script setup> 时，无法直接使用组件名称的问题
import SetupExtend from "vite-plugin-vue-setup-extend"

import { codeInspectorPlugin } from "code-inspector-plugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    SetupExtend(),
    vueDevTools(),
    codeInspectorPlugin({ bundler: "vite" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
