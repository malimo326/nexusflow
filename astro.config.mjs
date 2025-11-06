import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "www.mahmoodali.no",
  base: "/nexusflow/",
  vite: {
    plugins: [tailwindcss()],
  },
});
