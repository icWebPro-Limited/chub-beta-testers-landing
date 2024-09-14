// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter()
//   },
//   preprocess: vitePreprocess()
// };
// export default config;
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the static adapter for GitHub Pages
    adapter: adapter({
      pages: 'build',    // Output folder for pages
      assets: 'build',   // Output folder for assets
      fallback: null     // No fallback, but you can use 'index.html' if needed
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/chub-beta-testers-landing' : '',
    }
  },
  preprocess: vitePreprocess()
};

export default config;