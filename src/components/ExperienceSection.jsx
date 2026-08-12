import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-section-header">
          <div className="skills-header-row">
            <Briefcase className="w-5 h-5" style={{ color: '#82A626' }} />
            <span className="skills-eyebrow-label">Professional Background</span>
          </div>
          <div className="skills-heading-wrapper">
            <h2 className="skills-section-title">
              Work <span className="text-gradient-shimmer">Experience</span>
            </h2>
            <div className="skills-heading-line" />
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-card-header">
                <div className="experience-role-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company-row">
                    <span className="experience-company">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="experience-badge">{exp.type}</span>
                  </div>
                </div>

                <div className="experience-meta-info">
                  <div className="experience-meta-item">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="experience-duration">({exp.duration})</span>
                  </div>
                  <div className="experience-meta-item">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span className="experience-work-type">• {exp.workplaceType}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities / Description */}
              {exp.description && exp.description.length > 0 && (
                <ul className="experience-bullet-list">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="experience-bullet-item">
                      <CheckCircle2 className="w-4 h-4 experience-bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Associated Skills */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="experience-skills-wrap">
                  <span className="experience-skills-label">Skills & Tech Applied:</span>
                  <div className="skills-pill-wrap">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill skill-pill-normal">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
