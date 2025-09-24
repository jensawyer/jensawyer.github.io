export type ProjectCardProps = {
    title: string
    description: string
    link: string
    linkText: string }

export default function ProjectCard({
                                title,
                                description,
                                link,
                                linkText,
                            }: ProjectCardProps) {
    return (
        <article className="card card-opaque">
            <h3 className="card-title">{title}</h3>
            <p className="project-card__desc">{description}</p>
            <a
                href={link}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", marginTop: "0.75rem" }}>
                {linkText}
            </a>
        </article>
    )
}
