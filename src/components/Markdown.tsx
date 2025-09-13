
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
            >
                {source}
            </ReactMarkdown>
        </div>
    )
}
