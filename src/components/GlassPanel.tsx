import type { PropsWithChildren } from "react"

type GlassPanelProps = PropsWithChildren<{
  className?: string
  variant?: "light" | "dark"
}>

export default function GlassPanel({ className, children, variant = "light" }: GlassPanelProps) {
  const variantClass = variant === "dark" ? "glass-panel--dark" : ""
  return (
    <div className={`glass-panel ${variantClass} ${className ?? ""}`}>
      <div className="glass-panel__backdrop" aria-hidden />
      <div className="glass-panel__edge" aria-hidden />
      {children}
    </div>
  )
}

