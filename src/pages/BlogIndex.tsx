// src/pages/BlogIndex.tsx
import { Link } from "react-router-dom"
import { useEffect } from "react"
import Section from "../components/Section"
import { posts } from "../content/blogLoader"

function shortDate(iso: string) {
    return new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
    })
}

export default function BlogIndex() {
    useEffect(() => { document.title = "Blog – Jen Sawyer" }, [])
    return (
        <Section id="blog" title="Blog">
            <div style={{ display: "grid", gap: "1rem" }}>
                {posts.map(p => (
                    <article key={p.slug} className="card card-opaque">
                        <div className="row-between">
                            <div>
                                <h3 className="card-title">
                                    <Link
                                        className="link"
                                        to={`/blog/${p.slug}`}
                                        onClick={() => window.gtag?.('event', 'blog_post_click', {
                                            content_type: 'blog_post',
                                            item_id: p.slug,
                                            title: p.title,
                                        })}
                                    >
                                        {p.title}
                                    </Link>
                                </h3>
                                <p className="muted muted-small" style={{ marginTop: "0.25rem" }}>
                                    {shortDate(p.date)} • {p.minutes} min read
                                    {p.categories.length ? ` • ${p.categories.join(", ")}` : ""}
                                </p>
                            </div>
                            <Link
                                className="link"
                                to={`/blog/${p.slug}`}
                                onClick={() => window.gtag?.('event', 'blog_post_click', {
                                    content_type: 'blog_post',
                                    item_id: p.slug,
                                    title: p.title,
                                })}
                            >
                                Read
                            </Link>
                        </div>
                        <p style={{ marginTop: "0.75rem", color: "#cbd5e1" }}>{p.excerpt}</p>
                    </article>
                ))}
            </div>
        </Section>
    )
}
