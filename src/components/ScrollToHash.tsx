import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.replace(/^#/, ""))

    // Try a couple of times in case content renders slightly after route change
    let attempts = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView()
      } else if (attempts < 3) {
        attempts += 1
        window.requestAnimationFrame(tryScroll)
      }
    }
    window.requestAnimationFrame(tryScroll)
  }, [location])

  return null
}

