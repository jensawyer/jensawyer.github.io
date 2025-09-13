import type { ProjectGroupData } from "../types/projects"

export const projectGroups: ProjectGroupData[] = [
  {
    title: "Eldritch-Oracle Suite",
    stack: ["Python", "FastAPI", "ES", "SpaCy", "Kubernetes", "Ollama", "vLLM"],
    desc:
      "A barebones RAG agent showing the simplest possible implementation one could start from. Includes the backend deployment, basic processing of a corpus of H.P. Lovecraft's works, and frontend client that's much more fun than calling the API with curl.",
    glyph: "EO",
    cards: [
      {
        title: "Corpus of Cthulhu",
        description: "A corpus of H.P. Lovecraft's works.",
        link: "https://github.com/jensawyer/corpus_of_cthulhu",
        linkText: "Github",
      },
      {
        title: "Agent API",
        description:
          "Elasticsearch as vector store on your local K8s, optional choice of Ollama or local vLLM if you have the GPU, data preprocessing and ingestion, and an agent wrapped in a FastAPI service. Just follow the basic steps in the README to run the project locally.",
        link: "https://github.com/jensawyer/eldritch-oracle",
        linkText: "Github",
      },
      {
        title: "UI Demo",
        description:
          "React client built with Vite, Tailwind, and Typescript to aid in your arcane requests.",
        link: "https://github.com/jensawyer/eldritch-oracle-web",
        linkText: "Github",
      },
    ],
  },
]

