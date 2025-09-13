export type Testimonial = {
  name: string
  role?: string
  text: string
  source?: { label?: string; url: string }
}

// Replace with real recommendations; kept minimal for now.
export const testimonials: Testimonial[] = [
  {
    name: "Jane Colleague",
    role: "Senior Engineer, Acme Co.",
    text:
      "Jen brings clarity to ambiguous problems and consistently ships pragmatic solutions.",
    source: { label: "LinkedIn", url: "https://www.linkedin.com/in/jensawyer/" },
  },
  {
    name: "Alex Teammate",
    role: "ML Engineer",
    text:
      "Exceptional collaborator — balances research depth with real-world engineering constraints.",
    source: { label: "LinkedIn", url: "https://www.linkedin.com/in/jensawyer/" },
  },
]

