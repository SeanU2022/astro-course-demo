// 1. Import utilities from ‘astro:content'
import { z, defineCollection } from "astro:content";
import { format } from 'date-fns';

// 2. Define your collection(s)
// schema should match what is in md files
// however md files can have more properties than defined in schema
const postsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        author: z.string(),
        categories: z.array(z.string()),
        date: z.string().transform((str) => format (new Date(str), 'd MMMM yyyy')),
        featured: z.boolean().default(false),
        image: z.string(),
        title: z.string(),
    })
})

// 3. Export a single 'collections' object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
    posts: postsCollection,
}

