import Section from "./Section"
import ProjectGroup from "./ProjectGroup"
import { projectGroups } from "../content/projects"

export default function ProjectsSection() {
    return (
        <Section id="projects" title="Projects">
            {projectGroups.map((g) => (
                <ProjectGroup
                    key={g.title}
                    title={g.title}
                    stack={g.stack}
                    desc={g.desc}
                    descMd={g.descMd}
                    glyph={g.glyph}
                    cards={g.cards}
                />
            ))}
        </Section>
    )
}
