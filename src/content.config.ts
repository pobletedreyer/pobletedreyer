import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const photos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/photos" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    caption: z.string(),
    location: z.string(),
    image: z.string(),
    alt: z.string(),
    layout: z.enum(['full', 'center', 'diptych-left', 'diptych-right']),
    movement: z.enum(['apertura', 'pastoral', 'agua-flamencos', 'habitantes', 'rock-dwellers', 'cierre']),
    interlude_after: z.string().optional(),
  }),
});

export const collections = { photos };
