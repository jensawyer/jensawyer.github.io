import { useEffect, useMemo, useRef, useState } from "react"
import type { Recommendation } from "../types/recommendations"
import { recommendations } from "../content/recommendationsLoader"
import Markdown from "./Markdown"

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
  const [hoverPaused, setHoverPaused] = useState(false)
  const [focusPaused, setFocusPaused] = useState(false)
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})
  const regionRef = useRef<HTMLDivElement | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [resumeDelayPaused, setResumeDelayPaused] = useState(false)
  const resumeTimerRef = useRef<number | null>(null)
  const RESUME_DELAY_MS = 3000

  const expandedPaused = useMemo(() => Object.values(expanded).some(Boolean), [expanded])
  const effectivePaused = hoverPaused || focusPaused || expandedPaused || resumeDelayPaused
  const [active, setActive] = useAutoRotate(items.length, intervalMs, effectivePaused)

  function onKeyDots(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      // Collapse any expanded content before moving
      if (Object.values(expanded).some(Boolean)) setExpanded({})
      setActive((active + 1) % items.length)
    } else if (e.key === "ArrowLeft") {
      if (Object.values(expanded).some(Boolean)) setExpanded({})
      setActive((active - 1 + items.length) % items.length)
    }
  }

  function clearResumeTimer() {
    if (resumeTimerRef.current !== null) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }

  function onFocus(_e: React.FocusEvent<HTMLDivElement>) {
    setFocusPaused(true)
    // If we re-focus, cancel any pending resume delay
    clearResumeTimer()
    setResumeDelayPaused(false)
  }

  function onBlur(e: React.FocusEvent<HTMLDivElement>) {
    const current = e.currentTarget
    const next = e.relatedTarget as Node | null
    if (!next || !current.contains(next)) {
      // Focus left the carousel completely: start a brief cooldown before resuming
      setFocusPaused(false)
      setResumeDelayPaused(true)
      clearResumeTimer()
      resumeTimerRef.current = window.setTimeout(() => {
        setResumeDelayPaused(false)
        resumeTimerRef.current = null
      }, RESUME_DELAY_MS)
    }
  }

  useEffect(() => () => clearResumeTimer(), [])

  return (
    <div
      ref={rootRef}
      className="carousel"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div
        ref={regionRef}
        className={`carousel-track ${expandedPaused ? "is-expanded" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Recommendations"
        aria-live="polite"
        tabIndex={0}
        onKeyDown={onKeyDots}
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
              <div className="carousel-body">
                <blockquote className="blockquote">
                  <Markdown source={body} className="prose" />
                </blockquote>
                {t.text.length > maxChars && (
                  <div style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
                    <button className="link-accent" onClick={() => setExpanded(s => ({ ...s, [i]: !isExpanded }))}>
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  </div>
                )}
              </div>
              <div className="carousel-meta">
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
          <div className="carousel-dots" role="tablist" aria-label="Slide buttons" onKeyDown={onKeyDots}>
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}`}
                className={`dot ${i === active ? "is-active" : ""}`}
                onClick={() => {
                  if (Object.values(expanded).some(Boolean)) setExpanded({})
                  setActive(i)
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
