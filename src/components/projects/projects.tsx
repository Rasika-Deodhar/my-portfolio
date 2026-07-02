import { FC, useState, useEffect } from "react";
import "./projects.css";

type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
};

const sampleProjects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    short: "Personal portfolio built with React + TypeScript",
    description:
      "A responsive portfolio site showcasing projects, experience, and contact details. Built with React, TypeScript and CSS custom properties. Includes an interactive terminal emulator, physics-based skills visualization, and a live code playground.",
    tags: ["React", "TypeScript", "CSS"],
    repo: "https://github.com/Rasika-Deodhar/my-portfolio",
    live: "https://www.rasikadeodhar.com",
  },
  {
    id: "p2",
    title: "Documigo",
    short: "RAG-powered document summarizer",
    description:
      "A web application that allows users to upload documents and generate concise summaries using Retrieval-Augmented Generation (RAG) techniques. Built with React for the frontend; backend uses Python + LangChain + vector search.",
    tags: ["RAG", "LangChain", "React", "Python"],
    repo: "https://github.com/Rasika-Deodhar/documigo",
    live: "https://documigo.rasikadeodhar.com/",
  },
];

const Projects: FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="pf-projects pf-section">
      <div className="pf-inner">
        <p className="pf-section-label">Projects</p>
        <h2 className="pf-section-title">Things I've built</h2>
        <p className="pf-section-sub">A selection of side projects and experiments.</p>

        <div className="pf-proj__grid">
          {sampleProjects.map((p) => (
            <button
              key={p.id}
              className="pf-proj__card"
              onClick={() => setSelected(p)}
              aria-haspopup="dialog"
              aria-label={`Open ${p.title} details`}
            >
              <div className="pf-proj__thumb" aria-hidden="true" />
              <div className="pf-proj__body">
                <h3 className="pf-proj__title">{p.title}</h3>
                <p className="pf-proj__short">{p.short}</p>
                <div className="pf-proj__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="pf-chip">{t}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}

          <div className="pf-proj__wip">
            <p>More projects coming soon ☕</p>
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="pf-proj__modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} details`}
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <div className="pf-proj__panel">
            <header className="pf-proj__panel-header">
              <h3>{selected.title}</h3>
              <button
                className="pf-proj__close"
                onClick={() => setSelected(null)}
                aria-label="Close project details"
              >
                ×
              </button>
            </header>
            <div className="pf-proj__panel-body">
              <p className="pf-proj__desc">{selected.description}</p>
              <div className="pf-proj__tags" style={{ marginBottom: "20px" }}>
                {selected.tags.map((t) => (
                  <span key={t} className="pf-chip">{t}</span>
                ))}
              </div>
              <div className="pf-proj__links">
                {selected.repo && (
                  <a href={selected.repo} target="_blank" rel="noreferrer" className="pf-btn pf-btn--ghost">
                    View repo ↗
                  </a>
                )}
                {selected.live && (
                  <a href={selected.live} target="_blank" rel="noreferrer" className="pf-btn pf-btn--primary">
                    Live demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
