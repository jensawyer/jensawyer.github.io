import { site } from "../content/site"
import Markdown from "./Markdown"
import contactRaw from "../content/contact.md?raw"

function isExternal(url: string) {
  return /^https?:\/\//i.test(url)
}

export default function ContactContent() {
  return (
    <div>
      <Markdown source={contactRaw} className="prose" />

      <div className="contact-links">
        {site.github && (
          <a
            className="link contact-link"
            href={site.github}
            {...(isExternal(site.github) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            GitHub
          </a>
        )}
        {site.linkedin && (
          <a
            className="link contact-link"
            href={site.linkedin}
            {...(isExternal(site.linkedin) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            LinkedIn
          </a>
        )}
        {(!site.github && !site.linkedin) && <span className="muted">Coming soon</span>}
      </div>
    </div>
  )
}
