import Section from "./Section"
import ContactContent from "./ContactContent"

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="card card-opaque">
        <ContactContent />
      </div>
    </Section>
  )
}
