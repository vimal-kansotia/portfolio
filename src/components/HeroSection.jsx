function StatCard({ value, label }) {
  return (
    <div className="glass stat-card card-3d reveal-scale">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function HeroSection({ hero, resumeUrl }) {
  return (
    <section id="home" className="section section-hero">
      <div className="hero-grid hero-centered">
        <div className="hero-copy">
          <p className="hero-eyebrow reveal-up">{hero.eyebrow}</p>

          <h1 className="hero-title animate-float reveal-up delay-1">
            <span className="text-gradient-shimmer">{hero.name}</span>
            <br />
            <span className="hero-role-title">{hero.title}</span>
          </h1>

          <p className="hero-subtitle reveal-up delay-2">
            {hero.subtitle}
          </p>

          <div className="hero-buttons reveal-up delay-3">
            <a href="#projects" className="btn btn-primary">
              {hero.buttons.primaryLabel}
            </a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
              {hero.buttons.secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}