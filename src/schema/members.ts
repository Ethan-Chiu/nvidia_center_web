import { z } from 'astro:content';

export const membersSchema = z.object({
    name: z.string(),
    title: z.string(),
    picture: z.string(),
    name_sort: z.array(z.number())
})

export type MembersType = z.infer<typeof membersSchema>;