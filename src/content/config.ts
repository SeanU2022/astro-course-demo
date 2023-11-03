// 1. Import utilities from ‘astro:content'
import { defineCollection, z } from "astro:content";
import { format } from 'date-fns';

// 2. Define your collection(s)
// schema should match what is in md files
// however md files can have more properties than defined in schema

// const postsCollection = defineCollection({
//     type: 'content', // v2.5.0 and later
//     schema: z.object({
//         author: z.string(),
//         categories: z.array(z.string()),
//         date: z.string().transform((str) => format (new Date(str), 'd MMMM yyyy')),
//         featured: z.boolean().default(false),
//         image: z.string(),
//         title: z.string(),
//         description: z.string(),
//     })
// })

// v2 The image helper for the content collections schema lets you validate the image metadata using Zod.
const postsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
        author: z.string(),
        categories: z.array(z.string()),
        date: z.string().transform((str) => format (new Date(str), 'd MMMM yyyy')),
        featured: z.boolean().default(false),
        image: image().refine((img) => img.width >= 1080, {
            message: 'Image must be at least 1080px wide.',
        }),
        imageAlt: z.string(),
        title: z.string(),
        description: z.string(),
    })
})
// V3 const postsCollection = defineCollection({
//     type: 'content', // v2.5.0 and later
//     schema: ({ image }) => z.object({
//         author: z.string(),
//         categories: z.array(z.string()),
//         date: z.string().transform((str) => format (new Date(str), 'd MMMM yyyy')),
//         featured: z.boolean().default(false),
//         image: image(),
//         title: z.string(),
//         description: z.string(),
//     })
// })


// 3. Export a single 'collections' object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
    posts: postsCollection,
}

