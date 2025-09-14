import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import BlogIndex from "./pages/BlogIndex"
import BlogPost from "./pages/BlogPost"
import Background from "./components/Background"
import AboutSection from "./components/AboutSection"
import Section from "./components/Section"
import RecommendationsCarousel from "./components/RecommendationsCarousel"


export type Mode = "engineer" | "aiengineer" | "manager"

export default function App() {
   const [mode, setMode] = useState<Mode>(()=> {
       const saved = localStorage.getItem("mode") as Mode | null
       return saved === "manager" ? "manager" : "engineer"
   })
    useEffect(() => { localStorage.setItem("mode", mode)}, [mode])
    return (
        <BrowserRouter>
            <Background />
            <div className="app-content">
            <NavBar />
            <main className="main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <AboutSection mode={mode} setMode={setMode} />
                                <ProjectsSection />
                                <Section id="recommendations" title="Recommendations">
                                    <RecommendationsCarousel />
                                </Section>
                                <ContactSection />
                                <footer className="footer">
                                    <div className="footer-inner">
                                        © {new Date().getFullYear()} Jen Sawyer
                                    </div>
                                </footer>
                            </>
                        }
                    />
                    <Route path="/blog" element={<BlogIndex />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    {/* Optional: 404 */}
                    <Route path="*" element={
                        <div className="container" style={{ paddingBlock: "4rem" }}>
                            <h1 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Not Found</h1>
                            <p style={{ marginTop: "0.5rem" }}><Link className="link" to="/">Go home</Link></p>
                        </div>
                    }/>
                </Routes>
            </main>
            </div>
        </BrowserRouter>
    )
}
