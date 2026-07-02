import { FC, useState, useRef, useEffect, KeyboardEvent } from "react";
import "./hero.css";

type TermLine = { type: "input" | "output" | "info"; text: string };

const PROMPT = "rasika@portfolio · ~  ";

const INITIAL_LINES: TermLine[] = [
  { type: "info", text: "Rasika Deodhar — full-stack + AI engineer" },
  { type: "output", text: "" },
  { type: "output", text: "Type a command to explore. Start with 'help'." },
];

function runCommand(cmd: string): { lines: TermLine[]; clear?: boolean } {
  const c = cmd.trim().toLowerCase();
  const out = (text: string): TermLine => ({ type: "output", text });

  switch (c) {
    case "help":
      return {
        lines: [
          out("Available commands:"),
          out("  about       — who I am"),
          out("  skills      — tech I work with"),
          out("  projects    — things I've built"),
          out("  experience  — where I've worked"),
          out("  coffee      — ☕"),
          out("  clear       — reset terminal"),
        ],
      };
    case "about":
      return {
        lines: [
          out("Software engineer & AI builder based in St. Paul, MN."),
          out("Diverse background across full-stack, GenAI, and product."),
          out("Currently: AI Program Management Intern @ Qlik"),
        ],
      };
    case "skills":
      return {
        lines: [
          out("Languages:   Python · TypeScript · JavaScript · Java"),
          out("Frameworks:  React · Angular · Spring Boot · Node.js"),
          out("AI / LLM:    LangChain · OpenAI · n8n · RAG · Pinecone"),
          out("Cloud:       AWS · Docker · GitHub Actions · Jenkins"),
          out("Data:        SQL · MongoDB · PostgreSQL · Vector DBs"),
        ],
      };
    case "projects":
      return {
        lines: [
          out("→ Portfolio Website"),
          out("   github.com/Rasika-Deodhar/my-portfolio"),
          out("→ Documigo — RAG document summarizer"),
          out("   documigo.rasikadeodhar.com"),
        ],
      };
    case "experience":
      return {
        lines: [
          out("→ AI Program Management Intern @ Qlik (Jun 2026 – Present)"),
          out("→ Applications Developer @ MMC Innovation Lab (Oct 2022 – Jul 2024)"),
          out("→ Technology Analyst @ Citi (Sep 2020 – Oct 2022)"),
          out("→ Software Developer Intern @ Informatica (Jun 2020 – Sep 2020)"),
        ],
      };
    case "contact":
      return {
        lines: [
          out("Email:    rasikadeodhar95.12@gmail.com"),
          out("LinkedIn: linkedin.com/in/rasika-deodhar/"),
          out("GitHub:   github.com/Rasika-Deodhar"),
          out("X:        x.com/MoodLearner"),
        ],
      };
    case "whoami":
      return {
        lines: [
          out("Rasika Deodhar — Software Engineer | AI Builder | Coffee Enthusiast"),
          out("Currently: AI Program Management Intern @ Qlik · St. Paul, MN"),
        ],
      };
    case "coffee":
      return { lines: [out("☕ ☕ ☕ ☕"), out("Brewing... productivity loading (40%)")] };
    case "clear":
      return { lines: [], clear: true };
    case "":
      return { lines: [] };
    default:
      return { lines: [out(`command not found: ${cmd}  (try 'help')`)] };
  }
}

const QUICK_CMDS = ["about", "skills", "projects", "experience", "coffee", "clear"];

const Hero: FC = () => {
  const [lines, setLines] = useState<TermLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const fire = (cmd: string) => {
    const { lines: result, clear } = runCommand(cmd);
    if (clear) {
      setLines([]);
    } else {
      const next: TermLine[] = [
        ...lines,
        ...(cmd ? [{ type: "input" as const, text: cmd }] : []),
        ...result,
      ];
      setLines(next);
    }
    if (cmd.trim()) setHistory((h) => [cmd, ...h].slice(0, 50));
    setHistIdx(-1);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { fire(input); return; }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : history[next]);
    }
  };

  return (
    <section id="terminal" className="pf-hero pf-section">
      <div className="pf-hero__inner pf-inner">
        {/* ---- Text side ---- */}
        <div className="pf-hero__text">
          <div className="pf-hero__badge">
            <span className="pf-hero__badge-dot" aria-hidden="true" />
            currently · AI Program Mgmt Intern @ Qlik
          </div>

          <h1 className="pf-hero__name">
            I build with code,<br />
            <em className="pf-hero__name-em">brew</em> ideas with AI.
          </h1>

          <p className="pf-hero__sub">
            Rasika Deodhar: full-stack engineer shipping React, Python &amp; LLM-powered
            systems, now growing into the product &amp; program side of the work.
          </p>

          <div className="pf-hero__actions">
            <a
              href="#playground"
              className="pf-btn pf-btn--primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Run my code →
            </a>
            <a
              href="/resume.pdf"
              className="pf-btn pf-btn--ghost"
              target="_blank"
              rel="noreferrer"
            >
              Résumé (PDF)
            </a>
          </div>
        </div>

        {/* ---- Terminal side ---- */}
        <div
          className="pf-term"
          onClick={() => inputRef.current?.focus()}
          role="region"
          aria-label="Interactive terminal"
        >
          <div className="pf-term__bar">
            <span className="pf-term__dot pf-term__dot--red" />
            <span className="pf-term__dot pf-term__dot--yellow" />
            <span className="pf-term__dot pf-term__dot--green" />
            <span className="pf-term__bar-title">rasika@portfolio · ~</span>
          </div>

          <div className="pf-term__body" ref={bodyRef}>
            {lines.map((line, i) => (
              <div key={i} className={`pf-term__line pf-term__line--${line.type}`}>
                {line.type === "input" && (
                  <span className="pf-term__prompt">{PROMPT}</span>
                )}
                <span className="pf-term__text">
                  {line.text.split("\n").map((l, j) => (
                    <span key={j}>{j > 0 && <br />}{l}</span>
                  ))}
                </span>
              </div>
            ))}

            <div className="pf-term__input-row">
              <span className="pf-term__prompt">{PROMPT}</span>
              <input
                ref={inputRef}
                className="pf-term__input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal input"
                placeholder="type a command. (try: help)"
              />
            </div>
          </div>

          {/* Quick command chips */}
          <div className="pf-term__chips">
            {QUICK_CMDS.map((cmd) => (
              <button
                key={cmd}
                className="pf-term__chip"
                onClick={() => fire(cmd)}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
