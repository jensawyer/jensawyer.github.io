import { useMemo, useState } from "react"
import Markdown from "./Markdown"
import originRaw from "../content/about.md?raw"

function normalize(md: string): string {
  return md.replace(/\r\n/g, "\n").trim()
}

function buildPreview(md: string, extraChars: number = 320): { preview: string; isTruncated: boolean } {
  const trimmed = normalize(md)
  // Start from the beginning (which includes the full first paragraph) and add ~extraChars
  const limit = Math.min(trimmed.length, Math.max(0, extraChars + 1) + 1 + (trimmed.indexOf("\n\n") >= 0 ? trimmed.indexOf("\n\n") : 0))
  // If we couldn't find a paragraph break, fall back to a simple char clamp ~ first+extra
  const approx = limit > 0 ? Math.max(limit, Math.min(trimmed.length, 480)) : Math.min(trimmed.length, 480)
  // Take a conservative slice and add ellipsis when truncated
  const slice = trimmed.slice(0, approx)
  const isTruncated = slice.length < trimmed.length
  const preview = isTruncated ? slice.trimEnd() + "…" : slice
  return { preview, isTruncated }
}

export default function AboutOrigin() {
  const [expanded, setExpanded] = useState(false)
  const { preview, isTruncated } = useMemo(() => buildPreview(originRaw, 320), [])

  return (
    <div>
      {expanded ? (
        <>
          <Markdown source={originRaw} className="prose" />
          <div style={{ marginTop: "0.5rem" }}>
            <button className="link-accent" onClick={() => setExpanded(false)}>Show less</button>
          </div>
        </>
      ) : (
        <>
          <Markdown source={preview} className="prose" />
          {isTruncated && (
            <div style={{ marginTop: "0.5rem" }}>
              <button className="link-accent" onClick={() => setExpanded(true)}>Read more</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
