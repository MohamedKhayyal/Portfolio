import { useEffect } from "react";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "Firebase", "SQL"],
  },
  {
    title: "Workflow",
    items: ["Git/GitHub"],
  },
];

const projects = [
  {
    name: "Medico",
    description:
      "Medical web application focused on clean UI and practical healthcare workflows.",
    stack: "React | Firebase",
    link: "https://medico-brown-six.vercel.app/",
  },
  {
    name: "Games4U",
    description:
      "Gaming platform with complete MERN architecture and dynamic full-stack features.",
    stack: "MongoDB | Express | React | Node.js",
    link: "https://github.com/MohamedKhayyal/Games4U",
  },
  {
    name: "CLYNK",
    description:
      "Graduation project with backend services and relational data management.",
    stack: "Express | SQL",
    link: "https://github.com/MohamedKhayyal/CLYNK",
  },
];

const aboutHighlights = [
  "Build full-stack web apps from idea to deployment.",
  "Focus on clean UI, performance, and scalable backend design.",
  "Comfortable with MERN, Firebase integrations, and SQL data modeling.",
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="navbar">
        <a href="#home" className="brand">
          Mohamed Khayal
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow reveal delay-1">FULL STACK MERN DEVELOPER</p>
            <h1 className="hero-title reveal delay-2">
              Building modern, fast, and scalable web applications.
            </h1>
            <p className="lead reveal delay-3">
              I design and develop end-to-end products using MongoDB, Express,
              React, and Node.js with a strong focus on performance and user
              experience.
            </p>
            <div className="hero-actions reveal delay-3">
              <a
                href="https://github.com/MohamedKhayyal"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Hire Me
              </a>
            </div>
            <div className="quick-stats">
              <article className="reveal delay-1">
                <h3>20+</h3>
                <p>Completed Projects</p>
              </article>
              <article className="reveal delay-2">
                <h3>1+</h3>
                <p>Years Experience</p>
              </article>
              <article className="reveal delay-3">
                <h3>100%</h3>
                <p>Client Focus</p>
              </article>
            </div>
          </div>

          <div className="hero-visual reveal delay-2">
            <div className="image-shell">
              <img
                src="/profile.jpg"
                alt="Developer portrait"
                onError={(event) => {
                  event.currentTarget.src = "../user-2.jpeg";
                }}
              />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-tag reveal">About</p>
          <h2 className="section-title reveal delay-1">About Me</h2>
          <div className="about-panel reveal delay-2">
            <p>
              I am Mohamed Khayal, a full stack developer specialized in MERN
              stack applications. I enjoy building products that solve real
              problems with solid architecture and a modern user experience.
            </p>
            <ul className="about-list">
              {aboutHighlights.map((item, index) => (
                <li className={`reveal delay-${(index % 3) + 1}`} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-tag reveal">Skills</p>
          <h2 className="section-title reveal delay-1">
            MERN + Modern Tooling
          </h2>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article
                className={`skill-card reveal delay-${(index % 3) + 1}`}
                key={group.title}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-tag reveal">Portfolio</p>
          <h2 className="section-title reveal delay-1">
            Selected Full Stack Work
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-live reveal delay-${(index % 3) + 1}`}
                key={project.name}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>{project.stack}</span>
                <p>
                  <a
                    className="project-link btn btn-secondary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-tag reveal">Contact</p>
          <h2 className="section-title reveal delay-1">
            Let&apos;s build your next product
          </h2>
          <p className="reveal delay-2">
            Available for freelance and full-time roles in frontend, backend,
            and complete MERN web app development.
          </p>
          <a
            className="btn btn-primary reveal delay-3"
            href="mailto:khayyalmohamed5@gmail.com"
          >
            khayyalmohamed5@gmail.com
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
