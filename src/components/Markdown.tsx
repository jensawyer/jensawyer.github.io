
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

type Props = { source: string; className?: string }

export default function Markdown({ source, className }: Props) {
    return (
        <div className={className}>
            <ReactMarkdown
                // security: do NOT render raw HTML by default
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                    rehypeHighlight,
                ]}
                components={{
                    code({ inline, className, children, ...props }: any) {
                        const text = String(children ?? "")
                        if (inline) {
                            if (text.startsWith("accent:")) {
                                return <span className="text-accent" {...props}>{text.replace(/^accent:/, "").trim()}</span>
                            }
                            if (text.startsWith("muted:")) {
                                return <span className="muted" {...props}>{text.replace(/^muted:/, "").trim()}</span>
                            }
                        }
                        // default render for code (inline or block)
                        return <code className={className} {...props}>{children}</code>
                    },
                    img({ src, alt, ...props }: any) {
                        const rawAlt = String(alt ?? "")
                        const hasCaption = rawAlt.includes("|")
                        if (hasCaption) {
                            const [altText, captionRaw] = rawAlt.split("|")
                            const caption = String(captionRaw ?? "").trim()
                            const cleanAlt = String(altText ?? "").trim()
                            return (
                                <figure className="figure">
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <img src={src} alt={cleanAlt} {...props} />
                                    {caption ? <figcaption className="figure__caption">{caption}</figcaption> : null}
                                </figure>
                            )
                        }
                        // Standalone image without caption: style like figure images
                        return <img src={src} alt={rawAlt} className="prose-img" {...props} />
                    },
                }}
            >
                {source}
            </ReactMarkdown>
        </div>
    )
}
