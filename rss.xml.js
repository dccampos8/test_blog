import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Conversa de Tasca',
    description: 'Reflexões sobre política e sociedade',
    site: context.site,
    items: posts.map((p) => ({
      link: p.url,
      title: p.data.title,
      description: p.data.description,
      pubDate: new Date(p.data.pubDate)
    })),
  });
}
