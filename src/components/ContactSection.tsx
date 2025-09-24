import ContactContent from "./ContactContent"

export default function ContactSection() {
  return (
    <div id="contact" className="section-glass panel-padding panel-column">
      <h3 className="section-title" style={{ margin: 0 }}>Contact</h3>
      <div className="card card-opaque contact-card stick-bottom">
        <ContactContent />
      </div>
    </div>
  )
}

