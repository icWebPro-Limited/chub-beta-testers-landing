import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'build',  // Output build files to the /docs folder
	},
	plugins: [sveltekit()]
});
