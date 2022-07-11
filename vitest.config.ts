import { defineConfig } from 'vitest/config';
import check from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    root: 'src',
    test: {
        silent: true,
        reporters: ['verbose']
    },
    plugins: [check.default({ typescript: true }), tsconfigPaths()]
});
