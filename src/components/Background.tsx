import { useEffect, useMemo, useState } from "react"

const modules = import.meta.glob("../assets/bg/*.{webp,jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>

const backgrounds = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

// Cache across route changes so we don't re-pick or re-fade within the SPA lifecycle.
// Do NOT persist across page refresh — refreshing should pick a new random image.
let cachedChosen: string | null = null
let cachedLoaded = false

export default function Background() {
  const [loaded, setLoaded] = useState<boolean>(cachedLoaded)
  const chosen = useMemo(() => {
    // Keep the same image across route changes, but pick a new one on full refresh
    if (cachedChosen) return cachedChosen
    if (backgrounds.length === 0) return ""
    const i = Math.floor(Math.random() * backgrounds.length)
    cachedChosen = backgrounds[i]
    return cachedChosen
  }, [])

  useEffect(() => {
    try {
      document.documentElement.style.setProperty("--app-bg-image", `url(${chosen})`)
    } catch {
      // ignore if not available
    }
  }, [chosen])

  useEffect(() => {
    if (!chosen || loaded) return
    const img = new Image()
    const handleLoad = () => {
      cachedLoaded = true
      setLoaded(true)
    }
    img.addEventListener("load", handleLoad)
    img.src = chosen
    if (img.complete) handleLoad()
    return () => img.removeEventListener("load", handleLoad)
  }, [chosen, loaded])


  const layerStyle: React.CSSProperties = { position: "fixed", inset: 0, zIndex: 0 }
  return (
    <>
      <div aria-hidden style={{ ...layerStyle, backgroundColor: "#121212" }} />
      {chosen ? (
        <div
          aria-hidden
          style={{
            ...layerStyle,
            backgroundImage: `url(${chosen})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1200ms ease-in-out",
          }}
        />
      ) : null}
    </>
  )
}
