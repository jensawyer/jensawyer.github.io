import { useState } from "react"
import Markdown from "./Markdown"

type Props = {
  source: string
  maxChars?: number
}

function truncate(text: string, maxChars: number) {
  if (text.length <= maxChars) return text
  return text.slice(0, Math.max(0, maxChars - 1)).trimEnd() + "…"
}

export default function ProjectGroupDescription({ source, maxChars = 360 }: Props) {
  const [expanded, setExpanded] = useState(false)
  const body = expanded ? source : truncate(source, maxChars)

  return (
    <div>
      <Markdown source={body} className="prose" />
      {source.length > maxChars && (
        <div style={{ marginTop: "0.5rem" }}>
          <button className="link-accent" onClick={() => setExpanded(e => !e)}>
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      )}
    </div>
  )
}

