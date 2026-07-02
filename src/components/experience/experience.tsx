import { FC } from "react";
import "./experience.css";

interface Job {
  company: string;
  role: string;
  dates: string;
  place: string;
  summary: string;
  tags: string[];
}

const JOBS: Job[] = [
  {
    company: "Qlik",
    role: "AI Program Management Intern",
    dates: "Jun 2026 – Present",
    place: "St. Paul, MN",
    summary:
      "Building AI agent workflows & automation pipelines in n8n + Salesforce to move post-sales support toward self-service, cutting dependency on live help-desk agents.",
    tags: ["n8n", "AI Agents", "Salesforce", "Automation"],
  },
  {
    company: "MMC Innovation Lab",
    role: "Applications Developer",
    dates: "Oct 2022 – Jul 2024",
    place: "Dublin, IE",
    summary:
      "Shipped company-wide GenAI: an LLM chatbot (LenAI) and RAG document-extraction that cut manual data entry 40%. Built PoCs on GPT + vector DBs and onboarded 100+ employees to the GenAI framework.",
    tags: ["RAG", "LangChain", "OpenAI", "Vector DB", "Apigee"],
  },
  {
    company: "Citi",
    role: "Technology Analyst",
    dates: "Sep 2020 – Oct 2022",
    place: "Dublin, IE",
    summary:
      "Full-stack features for a global issuer services platform in Java 8 / Spring Boot / Angular: ~20% throughput, ~40% page load via UI migration, 99.9% uptime on BAU + on-call.",
    tags: ["Java 8", "Spring Boot", "Angular", "Oracle"],
  },
  {
    company: "Informatica",
    role: "Software Developer Intern",
    dates: "Jun 2020 – Sep 2020",
    place: "Dublin, IE",
    summary:
      "Backend REST APIs (Java 8 / Spring Boot) and React frontend for a cloud-native data governance platform, with enterprise code reviews & CI/CD.",
    tags: ["Java", "React", "REST", "CI/CD"],
  },
];

const Experience: FC = () => {
  return (
    <section id="work" className="pf-exp pf-section">
      <div className="pf-inner">
        <p className="pf-section-label">03 · Track Record</p>
        <h2 className="pf-section-title">Six years, four teams, two continents.</h2>

        <div className="pf-exp__list">
          {JOBS.map((job, i) => (
            <article key={i} className="pf-exp__item">
              <div className="pf-exp__row">
                <div className="pf-exp__left">
                  <h3 className="pf-exp__company">{job.company}</h3>
                  <span className="pf-exp__role">{job.role}</span>
                </div>
                <div className="pf-exp__right">
                  <span className="pf-exp__dates">{job.dates}</span>
                  <span className="pf-exp__sep">·</span>
                  <span className="pf-exp__place">{job.place}</span>
                </div>
              </div>
              <p className="pf-exp__summary">{job.summary}</p>
              <div className="pf-exp__tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="pf-chip">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
