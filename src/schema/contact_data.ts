import { z } from 'astro:content';

export const contactSchema = z.object({
    contact_1: z.string(),
    contact_1_desc: z.string(),
    phone_1: z.string(),
    email_1: z.string().email(),
    contact_2: z.string(),
    contact_2_desc: z.string(),
    phone_2: z.string(),
})

export type HomePageType = z.infer<typeof contactSchema>;