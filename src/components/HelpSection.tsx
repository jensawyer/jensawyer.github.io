import type { Mode } from "../App"
import ModeToggle from "./ModeToggle"
import HelpPanel from "./HelpPanel"

type Props = {
  mode: Mode
  setMode: (m: Mode) => void
}

export default function HelpSection({ mode, setMode }: Props) {
  return (
    <div className="section-glass panel-padding panel-column">
      <h3 className="section-title" style={{ margin: 0 }}>How I can help you</h3>
      <p className="help-hint" style={{ margin: 0, marginBottom: "0.5rem" }}>
        Pick a mode to see how I show up in that role.
      </p>
      <div className="help-toggle-row">
        <ModeToggle mode={mode} setMode={setMode} />
      </div>
      <HelpPanel mode={mode} />
    </div>
  )
}

