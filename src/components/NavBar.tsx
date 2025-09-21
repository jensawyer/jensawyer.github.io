import { Link } from "react-router-dom"
import LogoMark from "./LogoMark"

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar-inner container">
                <div className="navbar-brand">
                    <LogoMark />
                    <span className="navbar-name font-heading">jen sawyer</span>
                </div>
                <nav className="nav-links">
                    <Link className="nav-link" to="/#about">About</Link>
                    <Link className="nav-link" to="/#projects">Projects</Link>
                    <Link className="nav-link" to="/#recommendations">Recommendations</Link>
                    <Link className="nav-link" to="/blog">Blog</Link>
                </nav>
                <Link to="/#contact" className="btn btn-gradient">Hire me</Link>
            </div>
        </header>
    )
}
