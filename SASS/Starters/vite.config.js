import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false, // Désactive la minification CSS/JS
    cssCodeSplit: false, // Un seul fichier CSS
  },
});