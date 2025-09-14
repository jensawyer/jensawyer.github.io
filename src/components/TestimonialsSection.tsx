import Section from "./Section"
import { testimonials } from "../content/testimonials"

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" title="Testimonials">
      <div className="grid-2">
        {testimonials.map((t) => (
          <div key={`${t.name}-${t.role ?? ""}`} className="card card-opaque">
            <blockquote>
              <p>“{t.text}”</p>
            </blockquote>
            <div style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.9 }}>
              <div style={{ fontWeight: 600 }}>{t.name}</div>
              {t.role ? <div style={{ opacity: 0.85 }}>{t.role}</div> : null}
              {t.source?.url ? (
                <a className="link" href={t.source.url} target="_blank" rel="noopener noreferrer">
                  {t.source.label ?? "LinkedIn"}
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
