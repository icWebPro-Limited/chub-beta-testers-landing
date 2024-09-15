import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/chub-beta-testers-landing/",
	build: {
		outDir: 'docs',  // Output build files to the /docs folder
	},
	plugins: [sveltekit()]
});
