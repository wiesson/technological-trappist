import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
	output: "hybrid",
  adapter: vercel({ edgeMiddleware: true }),
	integrations: [preact(), react()],
});
