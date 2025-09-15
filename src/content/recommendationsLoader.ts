// src/content/recommendationsLoader.ts
import fm from "front-matter"
import type { Recommendation, RecommendationSource } from "../types/recommendations"

type FM = {
  name?: string
  role?: string
  date?: string
  source?: RecommendationSource | string
}

function coerceSource(s: FM["source"]): RecommendationSource | undefined {
  if (!s) return undefined
  if (typeof s === "string") return { url: s }
  if (typeof s.url === "string") return { label: s.label, url: s.url }
  return undefined
}

const files = import.meta.glob("../content/recos/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

function parse(path: string, raw: string): Recommendation | null {
  const { attributes, body } = fm<FM>(raw)
  const name = String(attributes.name ?? "").trim()
  const text = body.trim()
  if (!name || !text) return null
  const role = attributes.role ? String(attributes.role) : undefined
  const date = attributes.date ? String(attributes.date) : undefined
  const source = coerceSource(attributes.source)
  return { name, role, text, date, source }
}

const recosUnsorted: Recommendation[] = Object.entries(files)
  .map(([p, raw]) => parse(p, raw))
  .filter((r): r is Recommendation => !!r)

export const recommendations: Recommendation[] = recosUnsorted
  .sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })

