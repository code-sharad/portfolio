import { MetadataRoute } from 'next'
import { projectsData } from '@/lib/data'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://iamsharad.in'

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/post`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]

    // Dynamic project pages
    const projectPages: MetadataRoute.Sitemap = projectsData
        .filter((project) => project.slug)
        .map((project) => ({
            url: `${baseUrl}/project/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

    // Dynamic post pages
    const postPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
        url: `${baseUrl}/post/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...projectPages, ...postPages]
}
