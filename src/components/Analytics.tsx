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
    // Track SPA navigation with richer page data
    const page_path = pathname + search
    const page_title = document.title
    const page_location = window.location.href
    window.gtag("config", id, { page_path, page_title, page_location })
  }, [id, pathname, search])

  return null
}
