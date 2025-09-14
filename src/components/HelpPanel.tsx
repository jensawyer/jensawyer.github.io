import type { Mode } from "../App"
import Markdown from "./Markdown"
import aboutEngineer from "../content/about.engineer.md?raw"
import aboutAIEngineer from "../content/about.aiengineer.md?raw"
import aboutManager from "../content/about.manager.md?raw"

type Props = { mode: Mode }

export default function HelpPanel({ mode }: Props) {
  const source = mode === "engineer"
    ? aboutEngineer
    : mode === "aiengineer"
      ? aboutAIEngineer
      : aboutManager

  return (
    <div className="card card-opaque help-card" style={{ padding: "1rem" }}>
      <Markdown source={source} className="prose" />
    </div>
  )
}
