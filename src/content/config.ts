import { z, reference, defineCollection } from 'astro:content';
import { newsSchema } from '@/schema/news';
import { homePageSchema } from '@/schema/home_page';
import { membersSchema } from '@/schema/members';

const newsCollection = defineCollection({
  type: 'content',
  schema: newsSchema 
});

const homePageCollection = defineCollection({
  type: 'content',
  schema: homePageSchema
});

const membersCollection = defineCollection({
  type: 'data',
  schema: membersSchema
})

export const collections = {
  news: newsCollection,
  home: homePageCollection,
  members: membersCollection,
};