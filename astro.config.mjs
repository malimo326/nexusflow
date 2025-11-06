import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "www.mahmoudali.no",
  base: "nexusflow/",
  vite: {
    plugins: [tailwindcss()],
  },
});
