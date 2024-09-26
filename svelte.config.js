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
    // Static adapter for generating static files
    adapter: adapter({
      pages: 'build',    // Output build files to the /build folder
      assets: 'build',
      fallback: 'index.html',  // Fallback for SPA routing
    }),
    paths: {
      base: '/v2',  // Set this to your subfolder path
    }
  },
  preprocess: vitePreprocess()
};

export default config;