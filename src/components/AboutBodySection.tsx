import Section from "./Section"
import AboutOrigin from "./AboutOrigin"

export default function AboutBodySection() {
  return (
    <Section id="about" title="About">
      <div className="card card-opaque">
        <AboutOrigin />
      </div>
    </Section>
  )
}

