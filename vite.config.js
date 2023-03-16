import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
const pathSrc = path.resolve(__dirname, "./src");
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "${pathSrc}/assets/scss/abstracts/variables.scss";`,
            },
        },
    },
    plugins: [vue(), svgLoader()],
});
