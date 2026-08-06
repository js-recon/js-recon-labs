// adapter-node: produces a Node.js HTTP server in build/.
// Run with: PORT=3013 node build/index.js
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      out: 'build'
    })
  }
};

export default config;
