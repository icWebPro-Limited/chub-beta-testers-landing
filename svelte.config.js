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
    // Use the static adapter to generate static files
    adapter: adapter({
      pages: 'build',    // Directory where the generated pages go (you can use 'dist' if you prefer)
      assets: 'build',   // Directory where the assets go
      fallback: null     // No SPA fallback for static sites
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/chub-beta-testers-landing' : ''
    }
  },
  preprocess: vitePreprocess()
};

export default config;