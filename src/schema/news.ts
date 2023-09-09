import { z } from 'astro:content';

export const newsSchema = z.object({
    publish_date: z.date(),
    title: z.string(),
    description: z.string(),
})

export type NewsType = z.infer<typeof newsSchema>;