// src/pages/BlogPost.tsx
import { useParams, Link } from "react-router-dom"
import Section from "../components/Section"
import Markdown from "../components/Markdown"
import { findPost } from "../content/blogLoader"

function longDate(iso: string) {
    return new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "2-digit",
    })
}

export default function BlogPost() {
    const { slug = "" } = useParams()
    const post = findPost(slug)

    if (!post) {
        return (
            <Section title="Not Found">
                <p className="muted">Sorry, that post doesn’t exist.</p>
                <p style={{ marginTop: "1rem" }}><Link className="link" to="/blog">← Back to blog</Link></p>
            </Section>
        )
    }

    return (
        <Section>
            <article style={{ marginInline: "auto", maxWidth: "48rem" }}>
                <header style={{ marginBottom: "1.5rem" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: 800, margin: 0 }}>{post.title}</h1>
                    <p className="muted" style={{ marginTop: "0.5rem", display: "flex", flexWrap: "wrap", gap: "0.25rem 0.5rem", fontSize: "0.9rem" }}>
                        <time dateTime={post.date}>{longDate(post.date)}</time>
                        <span aria-hidden>•</span>
                        <span>{post.minutes} min read</span>
                        {post.tags.length > 0 && (
                            <>
                                <span aria-hidden>•</span>
                                <span>{post.tags.join(", ")}</span>
                            </>
                        )}
                    </p>
                </header>

                <Markdown source={post.content} className="prose" />

                <p style={{ marginTop: "2rem" }}>
                    <Link className="link" to="/blog">← Back to blog</Link>
                </p>
            </article>
        </Section>
    )
}
