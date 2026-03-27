import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().default('Geral'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readTime: z.number().optional(),
  }),
});

export const collections = { blog };
