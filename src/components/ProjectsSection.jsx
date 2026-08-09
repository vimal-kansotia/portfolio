import { ExternalLink, Dna, Activity, HeartPulse, Mic, BarChart3, Cloud, FileText } from 'lucide-react';

const PROJECT_ICON_MAP = {
  dna: Dna,
  activity: Activity,
  'heart-pulse': HeartPulse,
  mic: Mic,
  'bar-chart': BarChart3,
  cloud: Cloud,
  'file-text': FileText,
};

function SectionHeading({ children, className = '' }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

export default function ProjectsSection({ projects }) {
  const githubUrl = 'https://github.com/vimal-kansotia?tab=repositories';

  return (
    <section id="projects" className="section projects-template">
      <div className="projects-template-background" aria-hidden="true">
        <div className="projects-orb projects-orb-left" />
        <div className="projects-orb projects-orb-right" />
      </div>

      <div className="projects-template-header">
        <span className="projects-template-eyebrow">Selected work</span>
        <SectionHeading className="projects-template-title">
          Featured <span className="text-gradient-shimmer">Projects</span>
        </SectionHeading>
        <p className="projects-template-subtitle">
          A curated selection of AI, data, and full-stack builds with real-world impact.
        </p>
      </div>

      <div className="projects-template-grid">
        {projects.map((project, index) => {
          const Icon = PROJECT_ICON_MAP[project.iconKey] || FileText;
          const delayClass = index < 6 ? `delay-${index + 1}` : '';

          // Only render image container if project.image exists, is not empty, and is NOT your profile picture
          const hasValidProjectImage = project.image &&
            project.image.trim() !== '' &&
            project.image !== '/profile.png';

          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-template-link"
            >
              <article
                className={`project-template-card accent-${project.accent} card-3d reveal-up ${delayClass}`}
              >
                <div className="project-template-top">
                  <div className="project-template-icon">
                    <Icon size={22} />
                  </div>
                  <ExternalLink size={18} className="project-template-external" />
                </div>

                {hasValidProjectImage ? (
                  <div className="project-template-media" aria-hidden="true">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ) : null}

                <h3 className="project-template-title-text">{project.title}</h3>
                <p className="project-template-desc">{project.description}</p>

                <div className="project-template-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-template-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          );
        })}
      </div>

      <div className="projects-template-footer">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="projects-template-linkout">
          See all projects on GitHub
        </a>
      </div>
    </section>
  );
}