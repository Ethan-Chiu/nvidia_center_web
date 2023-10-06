import { z } from 'astro:content';

export const membersSchema = z.object({
    name: z.string(),
    title: z.string(),
    picture: z.string().url().nullable(),
    name_sort: z.array(z.number()),
    link: z.string().url().nullable(),
    email: z.string().email().nullable(),
})

export type MembersType = z.infer<typeof membersSchema>;