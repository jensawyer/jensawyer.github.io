// src/components/ModeToggle.tsx
import type { Mode } from "../App"

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

  const Button = ({ label, value }: { label: string; value: Mode }) => (
    <button
      type="button"
      role="radio"
      aria-checked={mode === value}
      tabIndex={mode === value ? 0 : -1}
      onClick={() => setMode(value)}
      className={`mode-toggle__btn ${mode === value ? "is-active" : ""}`}
    >
      {label}
    </button>
  )

  return (
    <div
      role="radiogroup"
      aria-label="Profile mode"
      onKeyDown={key}
      tabIndex={0}
      className="mode-toggle"
      style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
    >
      <Button label="Engineer" value="engineer" />
      <Button label="AI Engineer" value="aiengineer" />
      <Button label="Leader" value="manager" />
    </div>
  )
}
