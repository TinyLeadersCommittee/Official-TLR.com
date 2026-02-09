// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const rulesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),       // e.g. "100. Game Concepts"
    docTitle: z.string(),    // e.g. "Comprehensive Rules" (Parent Doc Name)
    docId: z.string(),       // e.g. "tsmcr" (Used to group sidebar items)
    order: z.number(),       // e.g. 1, 2, 3 (Used to sort sidebar)
    lastUpdated: z.string().optional(),
  }),
});

export const collections = {
  'rules': rulesCollection,
};