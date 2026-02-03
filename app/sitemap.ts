import { MetadataRoute } from 'next'
import { projectsData } from '@/lib/data'

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

    return [...staticPages, ...projectPages]
}
