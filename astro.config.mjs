import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Ajusta o domínio quando tiveres um (para Plausible e SEO)
const SITE = 'https://conversa-de-tasca.vercel.app';

export default defineConfig({
  site: SITE,
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: 'static'
});
