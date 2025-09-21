import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import ProjectsSection from "./components/ProjectsSection"
import BlogIndex from "./pages/BlogIndex"
import BlogPost from "./pages/BlogPost"
import Background from "./components/Background"
import Section from "./components/Section"
import RecommendationsCarousel from "./components/RecommendationsCarousel"
import AboutBodySection from "./components/AboutBodySection"
import ModeToggle from "./components/ModeToggle"
import HelpPanel from "./components/HelpPanel"
import ContactContent from "./components/ContactContent"
import Footer from "./components/Footer"
import ScrollToHash from "./components/ScrollToHash"
import Analytics from "./components/Analytics"


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
                {/* GA4 route tracking */}
                <Analytics id="G-TFVKNG7QWT" />
                <ScrollToHash />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                {/* About body only */}
                                <AboutBodySection />
                                {/* Help + Contact side-by-side */}
                                <Section glass={false}>
                                    <div className="split-panels">
                                        <div className="section-glass panel-padding panel-column">
                                            <h3 className="section-title" style={{ margin: 0 }}>How I can help you</h3>
                                            <p className="help-hint" style={{ margin: 0, marginBottom: "0.5rem" }}>
                                                Pick a mode to see how I show up in that role.
                                            </p>
                                            <div className="help-toggle-row">
                                                <ModeToggle mode={mode} setMode={setMode} />
                                            </div>
                                            <HelpPanel mode={mode} />
                                        </div>
                                        <div id="contact" className="section-glass panel-padding panel-column">
                                            <h3 className="section-title" style={{ margin: 0 }}>Contact</h3>
                                            <div className="card card-opaque contact-card stick-bottom">
                                                <ContactContent />
                                            </div>
                                        </div>
                                    </div>
                                </Section>
                                <ProjectsSection />
                                <Section id="recommendations" title="What Others Say">
                                    <RecommendationsCarousel />
                                </Section>
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
            <Footer />
            </div>
        </BrowserRouter>
    )
}
