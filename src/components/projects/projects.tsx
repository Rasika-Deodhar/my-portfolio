import React, { FC, useState, useEffect } from "react";
import "./projects.css";

interface projectsProps {}

type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  img?: string;
  repo?: string;
  live?: string;
};

const sampleProjects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    short: "Personal portfolio built with React + TypeScript",
    description:
      "A responsive portfolio site showcasing projects, experience, and contact details. Built with React, TypeScript and styled-components. Includes animations and lazy-loaded sections.",
    img: undefined,
    repo: "https://github.com/Rasika-Deodhar/my-portfolio",
    live: "https://www.rasikadeodhar.com",
  },
  {
    id: "p2",
    title: "Documigo",
    short: "A small RAG to generate document summaries.",
    description:
      "A web application that allows users to upload documents and generate concise summaries using Retrieval-Augmented Generation (RAG) techniques. Built with React for the frontend and backend is a work-in-progress.",
    img: undefined,
    repo: "https://github.com/Rasika-Deodhar/documigo",
    live: "https://documigo.rasikadeodhar.com/",
  },
];

const Projects: FC<projectsProps> = () => {
  const [projects] = useState<Project[]>(sampleProjects);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="projects">

      <div className="projects_grid">
        {projects.map((p) => (
          <button
            key={p.id}
            className="project-card"
            onClick={() => setSelected(p)}
            aria-haspopup="dialog"
            aria-label={`Open ${p.title} details`}
          >
            <div className="project-card_thumb" />
            <div className="project-card_body">
              <h3 className="project-card_title">{p.title}</h3>
              <p className="project-card_short">{p.short}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} details`}
          onClick={(e) => {
            // close when clicking backdrop
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div className="project-modal_panel">
            <header className="project-modal_header">
              <h3>{selected.title}</h3>
              <button
                className="project-modal_close"
                onClick={() => setSelected(null)}
                aria-label="Close project details"
              >
                ×
              </button>
            </header>
            <div className="project-modal_content">
              <p className="project-modal_description">{selected.description}</p>
              <div className="project-modal_links">
                {selected.repo && (
                  <a href={selected.repo} target="_blank" rel="noreferrer">
                    View repo
                  </a>
                )}
                {selected.live && (
                  <a href={selected.live} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
       <center>
        <h4>This page is a work in progress. Stay tuned for updates!</h4>
      </center>
    </div>
  );
};

export default Projects;
