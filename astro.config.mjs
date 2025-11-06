import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "www.nexusflow.dev",
  base: "/nexusflow/",
  vite: {
    plugins: [tailwindcss()],
  },
});
