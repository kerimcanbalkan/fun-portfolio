import { defineConfig } from "vite";

export default defineConfig({
  base: "/fun-portfolio/",
  build: {
    minify: "terser",
  },
});
