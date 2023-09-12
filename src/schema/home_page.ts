import { z } from 'astro:content';

export const homePageSchema = z.object({
    // description: z.string(),
})

export type HomePageType = z.infer<typeof homePageSchema>;