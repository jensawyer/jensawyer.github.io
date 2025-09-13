import React from "react"
import Glyph from "./Glyph"
import ProjectCard from "./ProjectCard"
import type { ProjectCardData } from "../types/projects"

export type ProjectGroupProps = {
    title: string
    stack?: string[]
    desc?: string
    glyph: string
    cards: ProjectCardData[]
}

export default function ProjectGroup({ title, desc, glyph, cards, stack }: ProjectGroupProps) {
    return (
        <div className="project-group">
            <div className="project-group__header">
                <Glyph label={glyph} />
                <div className="project-group__meta">
                    <h3 className="project-group__title">{title}</h3>
                    {desc ? <p className="project-group__desc">{desc}</p> : null}
                    {stack && stack.length > 0 ? (
                        <ul className="badges">
                            {stack.map(s => (
                                <li key={s} className="badge">{s}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>
            <div className="project-group__cards">
                {cards.map((card) => (
                    <ProjectCard
                        key={`${title}-${card.title}`}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        linkText={card.linkText}
                    />
                ))}
            </div>
        </div>
    )
}
