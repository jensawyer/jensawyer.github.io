import { Link } from "react-router-dom"

export type MobileMenuProps = {
  id: string
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  if (!open) return null
  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
      <button className="mobile-menu__backdrop" aria-hidden="true" onClick={onClose} />
      <div className="mobile-menu__panel panel-padding" id={id} role="navigation" aria-label="Primary">
        <div className="container">
          <h2 id="mobile-menu-title" className="visually-hidden">Menu</h2>
          <ul className="mobile-menu__list" role="list">
            <li><Link className="mobile-menu__link" to="/#about" onClick={onClose}>About</Link></li>
            <li><Link className="mobile-menu__link" to="/#projects" onClick={onClose}>Projects</Link></li>
            <li><Link className="mobile-menu__link" to="/#recommendations" onClick={onClose}>Recommendations</Link></li>
            <li><Link className="mobile-menu__link" to="/blog" onClick={onClose}>Blog</Link></li>
          </ul>
          <div className="mobile-menu__cta-row">
            <Link to="/#contact" className="btn btn-gradient mobile-menu__cta" onClick={onClose}>Hire me</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
