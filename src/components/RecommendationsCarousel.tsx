import { useEffect, useMemo, useRef, useState } from "react"
import type { Recommendation } from "../types/recommendations"
import { recommendations } from "../content/recommendations"

type Props = {
  intervalMs?: number
  maxChars?: number
}

function useAutoRotate(length: number, delay: number, paused: boolean) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (paused || length <= 1) return
    const id = setInterval(() => setIndex(i => (i + 1) % length), delay)
    return () => clearInterval(id)
  }, [length, delay, paused])
  return [index, setIndex] as const
}

function truncate(text: string, maxChars: number) {
  if (text.length <= maxChars) return text
  return text.slice(0, maxChars - 1).trimEnd() + "…"
}

export default function RecommendationsCarousel({ intervalMs = 6000, maxChars = 280 }: Props) {
  const items: Recommendation[] = useMemo(() => recommendations, [])
  const [paused, setPaused] = useState(false)
  const [active, setActive] = useAutoRotate(items.length, intervalMs, paused)
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})
  const regionRef = useRef<HTMLDivElement | null>(null)

  function onKeyDots(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") setActive((active + 1) % items.length)
    else if (e.key === "ArrowLeft") setActive((active - 1 + items.length) % items.length)
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={regionRef}
        className="carousel-track"
        role="region"
        aria-roledescription="carousel"
        aria-label="Recommendations"
      >
        {items.map((t, i) => {
          const isActive = i === active
          const isExpanded = !!expanded[i]
          const body = isExpanded ? t.text : truncate(t.text, maxChars)
          return (
            <article
              key={`${t.name}-${t.role ?? ""}-${i}`}
              className={`card card-opaque carousel-slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <blockquote style={{ margin: 0, paddingLeft: "1rem", borderLeft: "2px solid rgba(255,255,255,0.18)" }}>
                <p style={{ margin: 0 }}>{body}</p>
              </blockquote>
              {t.text.length > maxChars && (
                <div style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
                  <button className="link-accent" onClick={() => setExpanded(s => ({ ...s, [i]: !isExpanded }))}>
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                </div>
              )}
              <div style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.9 }}>
                <div style={{ fontWeight: 600 }}>{t.name}</div>
                {t.role ? <div style={{ opacity: 0.85 }}>{t.role}</div> : null}
                {t.source?.url ? (
                  <a className="link" href={t.source.url} target="_blank" rel="noopener noreferrer">
                    {t.source.label ?? "LinkedIn"}
                  </a>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>

      {items.length > 1 && (
        <div className="carousel-controls">
          <button className="btn btn-outline" onClick={() => setActive((active - 1 + items.length) % items.length)} aria-label="Previous recommendation">
            Prev
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Slide buttons" onKeyDown={onKeyDots}>
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}`}
                className={`dot ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button className="btn btn-outline" onClick={() => setActive((active + 1) % items.length)} aria-label="Next recommendation">
            Next
          </button>
        </div>
      )}
    </div>
  )
}
