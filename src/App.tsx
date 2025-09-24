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
import SplitPanels from "./components/SplitPanels"
import HelpSection from "./components/HelpSection"
import ContactSection from "./components/ContactSection"
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
                                    <SplitPanels left={<HelpSection mode={mode} setMode={setMode} />} right={<ContactSection />} />
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
