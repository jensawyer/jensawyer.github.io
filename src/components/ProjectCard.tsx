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
        <article className="card">
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0 }}>{title}</h3>
            <p style={{ marginTop: "0.5rem" }}>{description}</p>
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
