import { defineConfig, loadEnv } from "vite";
import marko from "@marko/vite";
import ViteFonts from 'vite-plugin-fonts'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [marko(), ViteFonts({
      google: {
        families: ['Krona+One']
      },
    })],
    build: {
      outDir: "dist", // Server and client builds should output assets to the same folder.
      emptyOutDir: false // Avoid server / client deleting files from each other.
    }
  })
};
