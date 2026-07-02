import { FC } from "react";
import "./about.css";
import aboutImage from "../../images/about-image.png";

const CORE_STACK = [
  "React", "Python", "TypeScript", "Node.js",
  "LangChain", "RAG", "Docker",
];

const About: FC = () => {
  return (
    <section id="about" className="pf-about pf-section">
      <div className="pf-about__inner pf-inner">
        <div className="pf-about__illustration" aria-hidden="true">
          <img src={aboutImage} alt="" className="pf-about__img" />
        </div>

        <div className="pf-about__content">
          <p className="pf-section-label">01 · About</p>
          <h2 className="pf-about__heading">
            Software engineer by day &amp;{" "}
            <em className="pf-about__heading-em">a lot of it</em>{" "}
            by night.
          </h2>

          <p className="pf-about__bio">
            I'm a software developer with a diverse background working across a range of
            technologies and frameworks. Having worn many hats in different teams, I'm known
            for being a dependable and versatile team member. I enjoy connecting with fellow
            tech professionals and actively participate in tech meetups and networking events.
          </p>

          <div className="pf-about__stack">
            <p className="pf-about__stack-label">Core Stack</p>
            <div className="pf-about__chips">
              {CORE_STACK.map((s) => (
                <span key={s} className="pf-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
