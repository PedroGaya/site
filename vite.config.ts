import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build",
    minify: true,
    manifest: true,
    sourcemap: true,
    reportCompressedSize: true,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       const libs = ["react", "@nextui-org"];
    //       if (libs.some((lib) => id.match(`node_modules/${lib}`))) {
    //         return id
    //           .toString()
    //           .split("node_modules/")[1]
    //           .split("/")[0]
    //           .toString();
    //       }
    //     },
    //   },
    // },
  },
  plugins: [react(), tsconfigPaths()],
});
