import { z } from 'astro:content';

export const membersSchema = z.object({
    name: z.string(),
    title: z.string(),
    picture: z.string().url(),
    name_sort: z.array(z.number()),
    link: z.string().url(),
    email: z.string(),
})

export type MembersType = z.infer<typeof membersSchema>;