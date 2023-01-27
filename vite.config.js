import { defineConfig } from "vite";
import { resolve } from 'path';
import path from "path";

export default {
    root: path.resolve(__dirname, "src"),
    build: {
        outDir: path.resolve(__dirname, "dist"),
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
               
            },
        },
    },
    base: './'
};