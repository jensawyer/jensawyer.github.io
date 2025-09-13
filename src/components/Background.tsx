import { useEffect, useMemo } from "react"
import img1 from "../assets/bg/Iceland-Myvatn.webp"
import img2 from "../assets/bg/lupin_patch_sweden.webp"

const backgrounds = [img1, img2]

export default function Background() {
  const chosen = useMemo(() => {
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

  const layerStyle: React.CSSProperties = { position: "fixed", inset: 0, zIndex: 0 }
  return (
    <>
      <div aria-hidden style={{ ...layerStyle, backgroundImage: `url(${chosen})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div aria-hidden className="bg-vignette" style={layerStyle} />
      <div aria-hidden className="bg-app-gradient" style={layerStyle} />
    </>
  )
}
