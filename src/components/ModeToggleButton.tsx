import type { Mode } from "../App"

export type ModeToggleButtonProps = {
  label: string
  value: Mode
  active: boolean
  onSelect: (m: Mode) => void
}

export default function ModeToggleButton({ label, value, active, onSelect }: ModeToggleButtonProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      tabIndex={active ? 0 : -1}
      onClick={() => onSelect(value)}
      className={`mode-toggle__btn ${active ? "is-active" : ""}`}
    >
      {label}
    </button>
  )
}

