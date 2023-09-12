// 1. Import utilities from `astro:content`
import { newsSchema } from '@/schema/news';
import { homePageSchema } from '@/schema/home_page';
import { z, reference, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const newsCollection = defineCollection({
  type: 'content',
  schema: newsSchema 
});

const homePageCollection = defineCollection({
  type: 'content',
  schema: homePageSchema
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  news: newsCollection,
  home: homePageCollection
};