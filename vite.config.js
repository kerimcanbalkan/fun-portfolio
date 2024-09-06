import { defineConfig } from "vite";

export default defineConfig({
  base: "https://kerimcanbalkan.com",
  build: {
    minify: "terser",
  },
});
