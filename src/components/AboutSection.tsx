import Section from "./Section"
import AboutOrigin from "./AboutOrigin"
import HelpPanel from "./HelpPanel"
import ModeToggle from "./ModeToggle"
import type { Mode } from "../App"

export default function AboutSection({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  return (
    <Section id="about" title="About">
      <div className="card card-opaque" style={{ padding: "1rem" }}>
        <AboutOrigin />
      </div>
      <div style={{ height: "1rem" }} />
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
          <h3 className="section-title" style={{ margin: 0 }}>How I can help you</h3>
          <ModeToggle mode={mode} setMode={setMode} />
        </div>
        <p className="muted" style={{ margin: 0, marginBottom: "0.5rem", fontSize: "0.95rem" }}>
          Pick a mode to see how I show up in that role — hands‑on Engineer, pragmatic AI Engineer, or people‑first Leader.
        </p>
        <HelpPanel mode={mode} />
      </div>
    </Section>
  )
}
