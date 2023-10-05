import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    // this is the astro3 default port anyway
    port: 4321,
  }
});
