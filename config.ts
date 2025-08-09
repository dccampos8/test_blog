import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    category: z.enum(['Política Nacional', 'Sociedade', 'Livros']).optional(),
    lang: z.enum(['pt', 'en']).default('pt'),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };
