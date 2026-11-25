import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { BLOG_CATEGORIES } from './data/blog';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tldr: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    category: z.enum(BLOG_CATEGORIES),
    topic: z.string().optional(),
    date: z.string(),
    dateModified: z.string().optional(),
    readTime: z.string(),
    bullets: z.array(z.string()).optional(),
    order: z.number().optional(),
    featured: z.boolean().optional(),
    imagePosition: z.string().optional(),
  }),
});

export const collections = { blog };
