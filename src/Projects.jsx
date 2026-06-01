import "./Projects.css";
import { projects } from "./projectsData.jsx";

export default function Projects() {
  return (
    <section className="projects-section" id="Projects">
      <h2 className="projects-title">QUEST LOG</h2>
      <p className="projects-subtitle">Epic projects completed on the journey</p>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{p.title}</h3>

              <div className="project-coin">
                {"\u{1FA99}"} {p.xp}
              </div>
            </div>

            <p className="project-desc">{p.desc}</p>

            <div className="project-tags">
              {p.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
