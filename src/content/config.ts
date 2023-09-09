// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  news: newsCollection
};