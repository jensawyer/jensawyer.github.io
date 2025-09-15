import { useEffect, useMemo, useState } from "react"

const modules = import.meta.glob("../assets/bg/*.{webp,jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>

const backgrounds = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

export default function Background() {
  const [loaded, setLoaded] = useState(false)
  const chosen = useMemo(() => {
    if (backgrounds.length === 0) return ""
    const i = Math.floor(Math.random() * backgrounds.length)
    return backgrounds[i]
  }, [])

  useEffect(() => {
    try {
      document.documentElement.style.setProperty("--app-bg-image", `url(${chosen})`)
    } catch {
      // ignore if not available
    }
  }, [chosen])

  useEffect(() => {
    if (!chosen) return
    const img = new Image()
    const handleLoad = () => setLoaded(true)
    img.addEventListener("load", handleLoad)
    img.src = chosen
    if (img.complete) setLoaded(true)
    return () => img.removeEventListener("load", handleLoad)
  }, [chosen])

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
