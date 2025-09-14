import { useMemo, useState } from "react"
import Markdown from "./Markdown"
import originRaw from "../content/about.md?raw"

function firstParagraph(md: string): string {
  const trimmed = md.replace(/\r\n/g, "\n").trim()
  const parts = trimmed.split(/\n\s*\n/)
  return (parts[0] ?? "").trim()
}

export default function AboutOrigin() {
  const [expanded, setExpanded] = useState(false)
  const first = useMemo(() => firstParagraph(originRaw), [])

  return (
    <div>
      {expanded ? (
        <>
          <Markdown source={originRaw} className="prose" />
          <div style={{ marginTop: "0.5rem" }}>
            <button className="link-accent" onClick={() => setExpanded(false)}>Collapse</button>
          </div>
        </>
      ) : (
        <>
          <Markdown source={first} className="prose" />
          <div style={{ marginTop: "0.5rem" }}>
            <button className="link-accent" onClick={() => setExpanded(true)}>Read more</button>
          </div>
        </>
      )}
    </div>
  )
}
