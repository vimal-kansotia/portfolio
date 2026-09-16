import { Code2, Download, ArrowUpRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/smoothScroll';

export default function HeroSection({ hero, resumeUrl }) {
  return (
    <section id="home" className="section section-hero">
      <div className="hero-grid hero-centered">
        <div className="hero-copy">
          {/* Eyebrow Capsule */}
          <div className="hero-eyebrow-container reveal-up">
            <span className="hero-eyebrow-pill">
              <Sparkles className="hero-eyebrow-icon" size={14} />
              <span className="hero-eyebrow">{hero.eyebrow}</span>
            </span>
          </div>

          {/* Main Hero Name & Role Titles */}
          <h1 className="hero-title animate-float reveal-up delay-1">
            <span className="text-gradient-shimmer hero-name-text">{hero.name}</span>
            <br />
            <span className="hero-role-title text-gradient-shimmer">{hero.title}</span>
          </h1>

          {/* Sleek Editorial Typography Layout */}
          <div className="hero-editorial-container reveal-up delay-2">
            {/* Primary Vision Statement with gentle radiant text accents */}
            <p className="hero-editorial-lead">
              I build <span className="hero-text-accent">data-driven solutions</span> and{' '}
              <span className="hero-text-accent">scalable architectures</span> using machine learning, big data,
              cloud technologies, and bioinformatics to turn complex data into meaningful insights.
            </p>

            {/* Refined Data Engineering Callout with Left Radiant Accent Line */}
            <div className="hero-editorial-callout">
              <div className="hero-editorial-line" aria-hidden="true" />
              <p className="hero-editorial-desc">
                As a <span className="hero-role-highlight">Data Engineer</span>, I design high-throughput distributed pipelines and resilient data lakes with{' '}
                <span className="hero-tech-highlight">Apache Spark</span>,{' '}
                <span className="hero-tech-highlight">Hadoop</span>,{' '}
                <span className="hero-tech-highlight">Kafka</span>, and{' '}
                <span className="hero-tech-highlight">AWS</span> to empower high-velocity analytical decision making.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons reveal-up delay-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="btn-hero-action btn-hero-primary"
            >
              <span className="btn-hero-content">
                <Code2 size={18} className="btn-icon-start" />
                <span>{hero?.buttons?.primaryLabel || 'View Projects'}</span>
                <ArrowUpRight size={17} className="btn-icon-arrow" />
              </span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-action btn-hero-resume"
            >
              <span className="btn-hero-content">
                <Download size={17} className="btn-icon-start" />
                <span>{hero?.buttons?.secondaryLabel || 'Download Resume'}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}