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
    // Ensure static adapter outputs files correctly
    adapter: adapter({
      pages: 'docs',  // Output to the /docs folder
      assets: 'docs',
      fallback: 'index.html',  // Use index.html as fallback for dynamic routes
    }),
    paths: {
      base: '/chub-beta-testers-landing',  // Ensure the base path matches the repository name
    }
  },
  preprocess: vitePreprocess()
};

export default config;