import { defineConfig, loadEnv } from "vite";
import marko from "@marko/vite";
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [marko()],
    build: {
      outDir: "dist", // Server and client builds should output assets to the same folder.
      emptyOutDir: false // Avoid server / client deleting files from each other.
    }
  })
};
