export type RecommendationSource = {
  label?: string
  url: string
}

export type Recommendation = {
  name: string
  role?: string
  text: string
  date?: string // YYYY-MM (optional)
  source?: RecommendationSource
}

