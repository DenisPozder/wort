export default function sitemap() {
    return [
        {
            url: "https://www.wort.rs",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: "https://www.wort.rs/our-projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
    ]
}