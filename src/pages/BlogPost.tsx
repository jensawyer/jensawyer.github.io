// src/pages/BlogPost.tsx
import { useEffect } from "react"
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

    useEffect(() => {
        document.title = `${post.title} – Jen Sawyer`
    }, [post.title])

    return (
        <Section>
            <article className="article">
                <header className="article__header">
                    <h1 style={{ fontSize: "2rem", fontWeight: 800, margin: 0 }}>{post.title}</h1>
                    <p className="muted meta-row" style={{ marginTop: "0.5rem" }}>
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

                <div className="card card-opaque article-body">
                    <Markdown source={post.content} className="prose" />
                </div>

                <p style={{ marginTop: "2rem" }}>
                    <Link className="link" to="/blog">← Back to blog</Link>
                </p>
            </article>
        </Section>
    )
}
