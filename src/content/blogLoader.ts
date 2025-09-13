// src/content/blogLoader.ts
import fm from "front-matter"

export type PostMeta = {
    slug: string
    title: string
    date: string
    categories: string[]
    tags: string[]
    draft?: boolean
}

export type Post = PostMeta & {
    excerpt: string
    content: string
    minutes: number
}

type FM = {
    title?: string
    date?: string
    categories?: string[] | string
    tags?: string[] | string
    draft?: boolean
    slug?: string
}

function readingTime(text: string, wpm = 200) {
    const words = text.trim().split(/\s+/).length
    return Math.max(1, Math.round(words / wpm))
}

function parseFilename(path: string) {
    const m = path.match(/blog\/(\d{4})-(\d{2})-(\d{2})-([^/]+)\.md$/)
    if (!m) return { dateFromName: null as Date | null, slug: "" }
    const [, y, mo, d, rest] = m
    return { dateFromName: new Date(`${y}-${mo}-${d}T00:00:00Z`), slug: rest }
}

function toISO(input: unknown, fallback: Date): string {
    const d = new Date(String(input ?? ""))
    return isNaN(d.getTime()) ? fallback.toISOString() : d.toISOString()
}

function firstParagraph(markdown: string): string {
    const cleaned = markdown.trim()
    const split = cleaned.split(/\n\s*\n/)
    return (split[0] ?? "").replace(/^#+\s+/, "")
}

const files = import.meta.glob("../content/blog/*.md", {
    query: "?raw",
    import: "default",
    eager: true }) as Record<string, string>

const postsUnsorted: Post[] = Object.entries(files).map(([path, raw]) => {
    const { attributes, body } = fm<FM>(raw)
    const { dateFromName, slug: slugFromName } = parseFilename(path)

    const title = attributes.title ?? slugFromName.replace(/-/g, " ")
    const dateISO = toISO(attributes.date, dateFromName ?? new Date())
    const categories = Array.isArray(attributes.categories)
        ? attributes.categories
        : attributes.categories ? [String(attributes.categories)] : []
    const tags = Array.isArray(attributes.tags)
        ? attributes.tags
        : attributes.tags ? [String(attributes.tags)] : []
    const draft = Boolean(attributes.draft)
    const slug = attributes.slug ?? slugFromName
    const excerpt = firstParagraph(body)
    const minutes = readingTime(body)

    return { slug, title, date: dateISO, categories, tags, draft, excerpt, content: body, minutes }
})

export const posts: Post[] = postsUnsorted
    .filter(p => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function findPost(slug: string) {
    return posts.find(p => p.slug === slug)
}
