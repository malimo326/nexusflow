import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "https://nourhomsi.net",
  base: "/nexusflow/",
  vite: {
    plugins: [tailwindcss()],
  },
});
