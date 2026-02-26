import "./Skills.css";

const randomColor = () => {
    const colors = [
        "#22c55e", // green
        "#3b82f6", // blue
        "#f97316", // orange
        "#a855f7", // purple
        "#ec4899", // pink
        "#eab308", // yellow
        "#14b8a6", // teal
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};


const skills = [
    { name: "React", level: 8, xp: 80, color: randomColor() },
    { name: "JavaScript", level: 9, xp: 90, color: randomColor() },
    { name: "Python", level: 7, xp: 70, color: randomColor() },
    { name: "Data Analysis", level: 8, xp: 85, color: randomColor() },
    { name: "SQL", level: 7, xp: 75, color: randomColor() },
    { name: "Machine Learning", level: 6, xp: 60, color: randomColor() }
];


export default function Skills() {
    return (
        <section className="skills-section" id="Skills">
            <h2 className="skills-title">PLAYER STATUS</h2>
            <p className="skills-subtitle">Current abilities & power levels</p>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-header">
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="skill-level">LV {skill.level}</div>
                        </div>

                        <div className="xp-bar">
                            <div
                                className="xp-fill"
                                style={{
                                    width: `${skill.xp}%`,
                                    background: skill.color
                                }}
                            ></div>

                        </div>

                        <p className="xp-text">{skill.xp} XP</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
