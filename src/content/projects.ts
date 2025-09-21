import type { ProjectGroupData } from "../types/projects"
import eldritchGroupDesc from "./projects/necronomichat.md?raw"
import indexServiceDesc from "./projects/indexservice.md?raw"

export const projectGroups: ProjectGroupData[] = [
    {
        title: "Index Service",
        stack: ["Scala", "DSL", "Lucene", "Docker"],
        descMd: indexServiceDesc,
        glyph: "IS",
        cards: [
            {
                title: "Index Service",
                description: "Small interview project with DSL and Lucene to index and search \"recipes\".",
                link: "https://github.com/jensawyer/indexService",
                linkText: "Github",
            }
        ]
    },
    {
    title: "The NecronomiChat",
    stack: ["Python", "FastAPI", "ElasticSearch", "SpaCy", "Kubernetes", "Ollama", "vLLM", "React", "Tailwind", "TypeScript"],
    descMd: eldritchGroupDesc,
    glyph: "NC",
    cards: [
      {
        title: "Corpus of Cthulhu",
        description: "A corpus of H.P. Lovecraft's works that I made for fun in grad school where I was focused on expressive and personable natural language generation.",
        link: "https://github.com/jensawyer/corpus_of_cthulhu",
        linkText: "Github",
      },
      {
        title: "Eldritch Oracle - RAG Agent API",
        description:
          "This very simple to run RAG agent uses Elasticsearch as vector store on your local K8s, optional choice of Ollama or local vLLM if you have the GPU, data preprocessing and ingestion, and an agent wrapped in a FastAPI service. Just follow the basic steps in the README to run the project locally. Nearly all of the setup is automated.",
        link: "https://github.com/jensawyer/eldritch-oracle",
        linkText: "Github",
      },
      {
        title: "The Miskatonic Messenger - UI Demo",
        description:
          "React client built with Vite, Tailwind, and Typescript to aid in your arcane requests to the Eldritch Oracle.",
        link: "https://github.com/jensawyer/miskatonic_messenger",
        linkText: "Github",
      },
    ],
  },
]
