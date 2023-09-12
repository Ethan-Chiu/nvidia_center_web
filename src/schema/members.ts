import { z } from 'astro:content';

export const membersSchema = z.object({
    name: z.string(),
    title: z.string(),
    picture: z.string(),
    name_sort: z.array(z.number()),
    link: z.string(),
    email: z.string(),
})

export type MembersType = z.infer<typeof membersSchema>;