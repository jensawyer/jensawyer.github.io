import type { MouseEventHandler } from "react"

export type HamburgerButtonProps = {
  open: boolean
  onToggle: MouseEventHandler<HTMLButtonElement>
  controlsId: string
}

export default function HamburgerButton({ open, onToggle, controlsId }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      className="hamburger"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls={controlsId}
      onClick={onToggle}
    >
      <span className="hamburger__bars" aria-hidden="true" />
    </button>
  )
}

