import { FC, useEffect, useState } from "react";
import "./navbar.css";
import { useTheme } from "../../context/ThemeContext";

const NAV_SECTIONS = [
  { id: "terminal", label: "terminal" },
  { id: "about",    label: "about" },
  { id: "skills",   label: "skills" },
  { id: "work",     label: "work" },
  { id: "playground", label: "playground" },
  { id: "contact",  label: "contact" },
];

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("terminal");
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`pf-nav${scrolled ? " pf-nav--scrolled" : ""}`} aria-label="Primary navigation">
      <div className="pf-nav__inner">
        <a
          href="#terminal"
          className="pf-nav__logo"
          onClick={(e) => { e.preventDefault(); scrollTo("terminal"); }}
          aria-label="rasika.dev — back to top"
        >
          ☕ rasika.dev
        </a>

        <ul className={`pf-nav__links${menuOpen ? " pf-nav__links--open" : ""}`}>
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "pf-nav__link pf-nav__link--active" : "pf-nav__link"}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="pf-nav__right">
          <button
            className="pf-theme-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="pf-theme-btn__icon">{isDark ? "☀" : "☾"}</span>
            <span className="pf-theme-btn__label">{isDark ? "light" : "dark"}</span>
          </button>

          <button
            className={`pf-nav__burger${menuOpen ? " pf-nav__burger--open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
