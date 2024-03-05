import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html'),
				embedded: path.resolve(__dirname, 'embedded/index.html'),
			},
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[hash].js`,
				assetFileNames: `assets/[hash].[ext]
`			}
		}
	},
	plugins: [preact()],
});
