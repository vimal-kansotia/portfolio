import { Award, GraduationCap, Shield } from 'lucide-react';

function SectionHeading({ children, className = '' }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

export default function AboutSection({ about, skillBars, education, certifications, heroImage }) {
  const skillTags = skillBars.map((skill) => skill.label);

  return (
    <section id="about" className="section about-template">
      <div className="about-template-header">
        <SectionHeading>
          About <span className="text-gradient-shimmer">Me</span>
        </SectionHeading>
      </div>

      <div className="about-template-grid">
        <article className="about-tile about-tile-profile glass card-3d">
          <p className="about-tile-eyebrow">Profile</p>
          <h3 className="about-tile-title">{about.profileName}</h3>
          <p className="about-tile-subtitle">{about.profileTitle}</p>
          <p className="about-tile-bio">
            {about.bio}
          </p>
          <div className="about-pill-row">
            <span className="about-pill-glow">
              <span className="w-2 h-2 rounded-full bg-[#82A626] animate-pulse shrink-0" />
              {about.location}
            </span>
            <span className="about-pill-glow">
              <span className="w-2 h-2 rounded-full bg-[#82A626] animate-pulse shrink-0" />
              {about.availability}
            </span>
          </div>
        </article>

        <article className="about-tile about-tile-craft glass card-3d">
          <h3 className="about-tile-heading">Technical Focus</h3>
          <p className="about-tile-text">
            {about.technicalFocus}
          </p>
          <div className="about-pill-row about-pill-row-wrap">
            {skillTags.map((tag) => (
              <span key={tag} className="about-pill about-pill-outline">
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="about-tile about-tile-education glass card-3d">
          <div className="about-header-row">
            <GraduationCap size={22} className="text-[#82A626]" />
            <h3 className="about-tile-heading" style={{ margin: 0 }}>Education</h3>
          </div>
          <div className="education-cards-list">
            {education.map((item, idx) => {
              let statusText = item.status || '';
              if (item.title.toLowerCase().includes('m.sc') || statusText.toLowerCase().includes('pursuing')) {
                statusText = 'Pursuing';
              } else if (item.title.toLowerCase().includes('b.sc') || statusText.toLowerCase().includes('completed')) {
                statusText = 'Completed (CGPA: 8.3+)';
              }
              return (
                <div key={idx} className="education-subitem">
                  <h4 className="education-item-title">{item.title}</h4>
                  <p className="education-item-place">{item.place}</p>
                  {statusText ? (
                    <span className="education-pill-tag">
                      {statusText}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </article>

        <article className="about-tile about-tile-center">
          <img
            src="/Assets/profile-outdoors.png"
            alt={`${about.profileName} portrait`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </article>

        <article className="about-tile about-tile-location">
          <iframe
            className="about-location-map"
            title={`${about.locationCity || 'Location'} map`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={about.mapUrl}
          />
          <div className="about-location-overlay" />
          <div className="about-location-content">
            <p className="about-location-city">{about.locationCity}</p>
            <p className="about-location-subtitle">{about.timezone}</p>
          </div>
        </article>

        <article className="about-tile about-tile-mindset glass card-3d">
          <div className="about-header-row">
            <Award size={22} className="text-[#82A626]" />
            <h3 className="about-tile-heading" style={{ margin: 0 }}>Certifications</h3>
          </div>
          <div className="cert-cards-list">
            {[
              { title: 'AWS Academy Graduate — Data Engineering (Training Badge)', issuer: 'AWS Certified' },
              { title: 'Certificate of Completion: Introduction to Subagents', issuer: 'AI & Agents Certified' },
              { title: 'Introduction to Model Context Protocol', issuer: 'MCP & LLM Certified' },
              { title: 'Claude Code in Action', issuer: 'Anthropic Certified' },
              { title: 'J.P. Morgan — Quantitative Research Job Simulation', issuer: 'Forage Certified' },
              { title: 'Deloitte Australia — Data Analytics Job Simulation', issuer: 'Forage Certified' },
              { title: 'BCG — Data Science Job Simulation', issuer: 'Forage Certified' },
              { title: 'MS-Office 2019 (Specialization in Excel, Access, Outlook)', issuer: 'Microsoft Certified' },
              { title: 'Designing Stories in SAP Analytics Cloud', issuer: 'SAP Certified' },
              { title: 'On-Premise Data Warehouse using SAP BW/4HANA', issuer: 'SAP Certified' }
            ].map((cert, idx) => (
              <div key={idx} className="cert-subcard">
                <div className="cert-icon-box">
                  <Shield size={16} className="text-[#82A626]" />
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}