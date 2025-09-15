import Section from "./Section"
import { site } from "../content/site"

function isExternal(url: string) {
  return /^https?:\/\//i.test(url)
}

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <p className="muted">
        Best way to reach me:
        {" "}
        {site.github && (
          <>
            <a
              className="link"
              href={site.github}
              {...(isExternal(site.github) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              GitHub
            </a>
          </>
        )}
        {site.github && site.linkedin ? " • " : ""}
        {site.linkedin && (
          <>
            <a
              className="link"
              href={site.linkedin}
              {...(isExternal(site.linkedin) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              LinkedIn
            </a>
          </>
        )}
        {(!site.github && !site.linkedin) && (
          <span>Coming soon</span>
        )}
      </p>
    </Section>
  )
}
