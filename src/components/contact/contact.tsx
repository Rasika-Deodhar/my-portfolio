import { FC } from "react";
import "./contact.css";
import { useTheme } from "../../context/ThemeContext";

const NAV_LINKS = [
  { label: "terminal", id: "terminal" },
  { label: "about",    id: "about" },
  { label: "skills",   id: "skills" },
  { label: "work",     id: "work" },
  { label: "playground", id: "playground" },
  { label: "contact",  id: "contact" },
];

const CARDS = [
  {
    title: "Bragged-in",
    desc: "For all the subtle flex and self-promotion. 😎",
    platform: "LinkedIn",
    handle: "/in/rasika-deodhar",
    href: "https://www.linkedin.com/in/rasika-deodhar/",
  },
  {
    title: "Git-pit",
    desc: "Place where all abandoned projects fall into. 🤩",
    platform: "GitHub",
    handle: "/Rasika-Deodhar",
    href: "https://github.com/Rasika-Deodhar",
  },
  {
    title: "Xpresso",
    desc: "Caffeinated coders sharing thoughts. 🫣",
    platform: "X",
    handle: "@MoodLearner",
    href: "https://x.com/MoodLearner",
  },
];

const Contact: FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pf-contact">
      {/* ---- Main contact area ---- */}
      <div className="pf-contact__main pf-inner">
        <p className="pf-section-label">05 · Say Hello</p>
        <h2 className="pf-contact__heading">
          Let's grab a coffee &amp;<br />
          build something.
        </h2>

        <p className="pf-contact__sub">// yes, these are the real links</p>

        <div className="pf-contact__cards">
          {CARDS.map((card) => (
            <a
              key={card.href}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="pf-contact__card"
            >
              <div className="pf-contact__card-top">
                <h3 className="pf-contact__card-title">{card.title}</h3>
                <p className="pf-contact__card-desc">{card.desc}</p>
              </div>
              <div className="pf-contact__card-bottom">
                <span className="pf-contact__card-handle">
                  {card.platform} · {card.handle}
                </span>
                <span className="pf-contact__card-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ---- Footer bar ---- */}
      <div className="pf-footer">
        <div className="pf-footer__inner pf-inner">
          <div className="pf-footer__left">
            <a
              href="#terminal"
              className="pf-footer__logo"
              onClick={(e) => { e.preventDefault(); scrollTo("terminal"); }}
            >
              ☕ rasika.dev
            </a>
          </div>

          <nav className="pf-footer__nav" aria-label="Footer navigation">
            {NAV_LINKS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="pf-footer__nav-link"
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="pf-footer__right">
            <button
              className="pf-theme-btn"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="pf-theme-btn__icon">{isDark ? "☀" : "☾"}</span>
              <span className="pf-theme-btn__label">{isDark ? "light" : "dark"}</span>
            </button>
          </div>
        </div>

        {/* ---- Credit bar ---- */}
        <div className="pf-footer__credit">
          <div className="pf-footer__credit-inner pf-inner">
            <span>© {new Date().getFullYear()} Rasika Deodhar · St. Paul, MN</span>
            <span>Master's in Engineering Management · GPA 4.0 · St. Cloud State</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
