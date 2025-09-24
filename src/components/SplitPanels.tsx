import type { ReactNode } from "react"

export type SplitPanelsProps = {
  left: ReactNode
  right: ReactNode
  className?: string
}

export default function SplitPanels({ left, right, className }: SplitPanelsProps) {
  return (
    <div className={`split-panels${className ? ` ${className}` : ""}`}>
      {left}
      {right}
    </div>
  )
}

