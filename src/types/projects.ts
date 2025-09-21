export type ProjectCardData = {
  title: string
  description: string
  link: string
  linkText: string
}

export type ProjectGroupData = {
  title: string
  glyph: string
  desc?: string
  descMd?: string
  stack?: string[]
  cards: ProjectCardData[]
}
