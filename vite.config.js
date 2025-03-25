import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/educase-project",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
