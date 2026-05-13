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
    movement: z.string(),
    interlude_after: z.string().optional(),
    series: z.string().default('the-living-desert'),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/series" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string().optional(),
    location: z.string(),
    period: z.string(),
    status: z.enum(['ongoing', 'completed', 'in-development']),
    description_short: z.string(),
    description_intro: z.string(),
    description_paragraphs: z.array(z.string()).optional(),
    cover_image: z.string(),
    cover_alt: z.string(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { photos, series };
