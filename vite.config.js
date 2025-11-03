import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
// Use '/' on Vercel, '/my-portfolio/' for GitHub Pages
const isVercel = process.env.VERCEL === '1'

export default defineConfig({
  base: isVercel ? '/' : '/my-portfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})