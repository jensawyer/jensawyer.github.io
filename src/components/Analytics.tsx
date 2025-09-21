import { useEffect } from "react"
import { useLocation } from "react-router-dom"

type Props = { id: string }

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function Analytics({ id }: Props) {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return
    // Track SPA navigation by sending the new path
    window.gtag("config", id, { page_path: pathname + search })
  }, [id, pathname, search])

  return null
}

