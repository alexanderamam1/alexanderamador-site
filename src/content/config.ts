import { defineCollection, z } from 'astro:content';

const decisions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    tag: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    artifact_url: z.string().url().optional(),
    artifact_label: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { decisions };