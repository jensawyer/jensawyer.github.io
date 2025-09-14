import React from "react"

export type SectionProps = {
    id?: string
    title?: string
    className?: string
    headingClassName?: string
    children: React.ReactNode
    glass?: boolean
    panelClassName?: string
}

export default function Section({
                            id,
                            title,
                            className,
                            headingClassName,
                            children,
                            glass = true,
                            panelClassName,
                        }: SectionProps) {

    return (
        <section id={id} className={`section ${className ?? ""}`}>
            <div className="container section-inner">
                {glass ? (
                    <div className={`section-glass ${panelClassName ?? ""}`} style={{ padding: "1.5rem" }}>
                        {title ? (
                            <h2 className={`section-title ${headingClassName ?? ""}`}>
                                {title}
                            </h2>
                        ) : null}
                        {children}
                    </div>
                ) : (
                    <>
                        {title ? (
                            <h2 className={`section-title ${headingClassName ?? ""}`}>
                                {title}
                            </h2>
                        ) : null}
                        {children}
                    </>
                )}
            </div>
        </section>
    )
}
