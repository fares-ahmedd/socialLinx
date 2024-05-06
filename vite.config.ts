import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// @ts-ignore
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
