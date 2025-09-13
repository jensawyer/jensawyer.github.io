// src/components/AboutSection.tsx
import Section from "./Section"
import Markdown from "./Markdown"
import ModeToggle from "./ModeToggle"
import type { Mode } from "../App"

import aboutEngineer from "../content/about.engineer.md?raw"
import aboutManager from "../content/about.manager.md?raw"

export default function AboutSection({
                                         mode,
                                         setMode,
                                     }: {
    mode: Mode
    setMode: (m: Mode) => void
}) {
    const source = mode === "manager" ? aboutManager : aboutEngineer

    return (
        <Section id="about" title="Who I am">
            <div className="about-layout">
                <div>
                    <p className="muted" style={{ marginTop: "0.25rem", fontSize: "0.95rem" }}>
                        Toggle between modes to see different facets of my work.
                    </p>
                    <div style={{ marginTop: "1rem" }}>
                        <ModeToggle mode={mode} setMode={setMode} />
                    </div>
                </div>
                <div>
                    <Markdown source={source} className="prose" />
                </div>
            </div>
        </Section>
    )
}
