// src/pages/BlogIndex.tsx
import { Link } from "react-router-dom"
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
    return (
        <Section id="blog" title="Blog">
            <div style={{ display: "grid", gap: "1rem" }}>
                {posts.map(p => (
                    <article key={p.slug} className="card card-opaque">
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                            <div>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
                                    <Link className="link" to={`/blog/${p.slug}`}>{p.title}</Link>
                                </h3>
                                <p className="muted" style={{ marginTop: "0.25rem", fontSize: "0.9rem" }}>
                                    {shortDate(p.date)} • {p.minutes} min read
                                    {p.categories.length ? ` • ${p.categories.join(", ")}` : ""}
                                </p>
                            </div>
                            <Link className="link" to={`/blog/${p.slug}`}>Read</Link>
                        </div>
                        <p style={{ marginTop: "0.75rem", color: "#cbd5e1" }}>{p.excerpt}</p>
                    </article>
                ))}
            </div>
        </Section>
    )
}
