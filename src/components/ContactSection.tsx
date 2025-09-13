import Section from "./Section"

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <p className="muted">
        Best way to reach me:
        {" "}
        <a className="link" href="#">GitHub</a>
        {" "}•{" "}
        <a className="link" href="#">LinkedIn</a>
      </p>
    </Section>
  )
}
