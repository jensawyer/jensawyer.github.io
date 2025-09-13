// src/components/ModeToggle.tsx
import type { Mode } from "../App"

export default function ModeToggle({
  mode,
  setMode,
}: {
  mode: Mode
  setMode: (m: Mode) => void
}) {
  const isManager = mode === "manager"

  function key(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault()
      setMode(isManager ? "engineer" : "manager")
    } else if (e.key === "Home") setMode("engineer")
    else if (e.key === "End") setMode("manager")
  }

  return (
    <div
      role="radiogroup"
      aria-label="Profile mode"
      onKeyDown={key}
      tabIndex={0}
      className={`mode-toggle ${isManager ? "mode-toggle--manager" : ""}`}
    >
      <span aria-hidden className="mode-toggle__thumb" />
      <button
        type="button"
        role="radio"
        aria-checked={!isManager}
        tabIndex={!isManager ? 0 : -1}
        onClick={() => setMode("engineer")}
        className={`mode-toggle__btn ${!isManager ? "is-active" : ""}`}
      >
        Engineer Mode
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={isManager}
        tabIndex={isManager ? 0 : -1}
        onClick={() => setMode("manager")}
        className={`mode-toggle__btn ${isManager ? "is-active" : ""}`}
      >
        Manager Mode
      </button>
    </div>
  )
}
