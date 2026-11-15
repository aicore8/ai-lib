import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "../dist/web",
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // The workspace root holds the hoisted packages (fonts); without it the preview serves no font files.
    fs: { allow: ["..", searchForWorkspaceRoot(process.cwd())] },
  },
});
