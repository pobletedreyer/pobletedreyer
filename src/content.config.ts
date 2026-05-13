import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Reusable bilingual string. Spanish is optional during migration;
// pages fall back to English when es is missing.
const bilingualString = z.object({
  en: z.string(),
  es: z.string().optional(),
});

const photos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/photos" }),
  schema: z.object({
    order: z.number(),
    title: bilingualString,
    caption: bilingualString,
    location: z.string(),
    image: z.string(),
    alt: bilingualString,
    layout: z.enum(['full', 'center', 'diptych-left', 'diptych-right']),
    movement: z.string(),
    interlude_after: bilingualString.optional(),
    series: z.string().default('the-living-desert'),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/series" }),
  schema: z.object({
    order: z.number(),
    title: bilingualString,
    subtitle: bilingualString.optional(),
    location: z.string(),
    period_start: z.number(),
    period_end: z.number().optional(),
    status: z.enum(['ongoing', 'completed', 'in-development']),
    description_short: bilingualString,
    description_intro: bilingualString,
    description_paragraphs: z.array(bilingualString).optional(),
    cover_image: z.string(),
    cover_alt: bilingualString,
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { photos, series };
