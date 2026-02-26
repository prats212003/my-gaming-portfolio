import "./Projects.css";

const projects = [
  {
    title: "Pixel Quest RPG",
    xp: 15,
    desc: "A retro-style RPG game built with React and Canvas API",
    tags: ["React", "Canvas", "Game"]
  },
  {
    title: "AI Chat Bot",
    xp: 20,
    desc: "Smart chatbot powered by latest AI models",
    tags: ["AI", "Node.js", "API"]
  },
  {
    title: "E-Commerce Platform",
    xp: 25,
    desc: "Full-stack shopping experience with payment integration",
    tags: ["Full-Stack", "Stripe", "MongoDB"]
  },
  {
    title: "Weather Dashboard",
    xp: 10,
    desc: "Real-time weather data visualization",
    tags: ["React", "API", "Charts"]
  },
  {
    title: "Task Manager Pro",
    xp: 18,
    desc: "Collaborative project management tool",
    tags: ["React", "WebSocket", "Firebase"]
  },
  {
    title: "Portfolio Generator",
    xp: 22,
    desc: "Automated portfolio site builder",
    tags: ["Next.js", "CMS", "Deploy"]
  }
];

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
                🪙 {p.xp}
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
