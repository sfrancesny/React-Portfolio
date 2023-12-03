import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/React-Portfolio/",
  base: "/",
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png'],
  server: {
    port: 3000,
    open: true,
  },
});