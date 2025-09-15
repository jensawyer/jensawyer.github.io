// src/components/ModeToggle.tsx
import type { Mode } from "../App"
import ModeToggleButton from "./ModeToggleButton"

export default function ModeToggle({
  mode,
  setMode,
}: {
  mode: Mode
  setMode: (m: Mode) => void
}) {
  function key(e: React.KeyboardEvent<HTMLDivElement>) {
    const order: Mode[] = ["engineer", "aiengineer", "manager"]
    const idx = order.indexOf(mode)
    if (e.key === "ArrowRight") {
      e.preventDefault(); setMode(order[(idx + 1) % order.length])
    } else if (e.key === "ArrowLeft") {
      e.preventDefault(); setMode(order[(idx - 1 + order.length) % order.length])
    } else if (e.key === "Home") setMode(order[0])
    else if (e.key === "End") setMode(order[order.length - 1])
  }

  return (
    <div
      role="radiogroup"
      aria-label="Profile mode"
      onKeyDown={key}
      tabIndex={0}
      className="mode-toggle"
      style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
    >
      <ModeToggleButton label="Engineer" value="engineer" active={mode === "engineer"} onSelect={setMode} />
      <ModeToggleButton label="AI Engineer" value="aiengineer" active={mode === "aiengineer"} onSelect={setMode} />
      <ModeToggleButton label="Leader" value="manager" active={mode === "manager"} onSelect={setMode} />
    </div>
  )
}
