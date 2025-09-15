import Section from "./Section"
import AboutOrigin from "./AboutOrigin"
import HelpPanel from "./HelpPanel"
import ModeToggle from "./ModeToggle"
import type { Mode } from "../App"

export default function AboutSection({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  return (
    <Section id="about" title="About">
      <div className="card card-opaque">
        <AboutOrigin />
      </div>
      <div style={{ height: "1.5rem" }} />
      <div>
        <h3 className="section-title" style={{ margin: 0 }}>How I can help you</h3>
        <p className="help-hint" style={{ margin: 0, marginBottom: "0.5rem" }}>
          Pick a mode to see how I show up in that role.
        </p>
        <div className="help-toggle-row">
          <ModeToggle mode={mode} setMode={setMode} />
        </div>
        <HelpPanel mode={mode} />
      </div>
    </Section>
  )
}
