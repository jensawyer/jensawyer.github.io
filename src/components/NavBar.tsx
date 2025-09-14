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
                    <a className="nav-link" href="/#about">About</a>
                    <a className="nav-link" href="/#projects">Projects</a>
                    <a className="nav-link" href="/#recommendations">Recommendations</a>
                    <Link className="nav-link" to="/blog">Blog</Link>
                </nav>
                <a href="#consulting" className="btn btn-gradient">Hire me</a>
            </div>
        </header>
    )
}
