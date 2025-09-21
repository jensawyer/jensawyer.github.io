A cohesive, full‑stack RAG suite: a FastAPI backend (“Eldritch Oracle”) paired with a minimalist React + TypeScript web client
  (“The Miskatonic Messenger”). Together they demonstrate retrieval‑augmented generation over a curated Lovecraft corpus, with a
  production‑minded local dev story.

### What It Does

- Preprocesses and embeds texts, indexes vectors in Elasticsearch, and serves a simple chat API that retrieves relevant passages
  and grounds LLM responses.
- The web app provides an accessible chat UI that talks to the API. 

### Why It’s Interesting

- Privacy‑first by default: runs entirely on your machine (Elasticsearch + local LLM via an OpenAI‑compatible API like Ollama)
  but can swap to vLLM or a hosted service without code changes.
- Clean boundaries and simple, readable code focused on core RAG mechanics rather than heavy frameworks.

### How It’s Built

- Backend: Python 3.12, FastAPI, Elasticsearch (vector similarity with cosine via script_score), sentence‑transformers for
  embeddings, Hugging Face/Transformers for model tooling, JSON logging. CORS is explicit allowlist via env.
- Frontend: React 18 + TypeScript + Vite, Tailwind for styling, Vitest + Testing Library for unit tests.
- Ops: Makefile automation, uv for Python, Kubernetes manifests (StatefulSet/Service/PVC/Secret) for local cluster deployment;
  optional vLLM service. All versions have been properly pinned so this should always work.