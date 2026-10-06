import "./nav.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/admission", label: "Admission" },
  { to: "/programmes", label: "Programmes" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/donation", label: "Donate" },
  { to: "/contacts", label: "Contact Us" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="site-nav" aria-label="Main navigation">
        <ul className="site-nav__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="site-nav__menu-button"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu" onClick={closeMenu}>
          <div
            className="mobile-menu__panel"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="mobile-menu__close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              ×
            </button>
            <ul>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end={to === "/"} onClick={closeMenu}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
