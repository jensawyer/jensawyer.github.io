import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import LogoMark from "./LogoMark"
import HamburgerButton from "./HamburgerButton"
import MobileMenu from "./MobileMenu"

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Close on Escape key for accessibility
    useEffect(() => {
        if (!menuOpen) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [menuOpen])

    return (
        <>
            <header className={`navbar${menuOpen ? " is-menu-open" : ""}`} role="banner">
                <div className="navbar-inner container">
                    <Link
                        to="/#home"
                        className="navbar-brand navbar-brand-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        <LogoMark />
                        <span className="navbar-name font-heading">jen sawyer</span>
                    </Link>
                    <nav className="nav-links" aria-label="Primary">
                        <Link className="nav-link" to="/#about">About</Link>
                        <Link className="nav-link" to="/#projects">Projects</Link>
                        <Link className="nav-link" to="/#recommendations">Recommendations</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </nav>
                    {/* Desktop CTA */}
                    <Link to="/#contact" className="btn btn-gradient navbar-cta">Hire me</Link>

                    {/* Mobile menu toggle */}
                    <HamburgerButton
                        open={menuOpen}
                        onToggle={() => setMenuOpen((v) => !v)}
                        controlsId="primary-navigation"
                    />
                </div>
            </header>
            {/* Mobile menu overlay as sibling so navbar remains unaffected */}
            <MobileMenu
                id="primary-navigation"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    )
}
