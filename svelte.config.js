import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  preprocess: vitePreprocess(),
  kit: {
    // Default adapter (can switch to static site or node if needed)
    adapter: undefined
  }
};