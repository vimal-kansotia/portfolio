import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LeadershipSection() {
  const points = [
    "Led AWS learning initiatives across campus",
    "Organized interactive cloud computing & data workshops",
    "Mentored students in cloud architecture & data engineering",
    "Supported a growing community of 100+ aspiring tech students"
  ];

  return (
    <section id="leadership" className="section leadership-template">
      {/* Section Header */}
      <div className="leadership-section-header">
        <div className="leadership-header-row">
          <span className="leadership-eyebrow-label">COMMUNITY & GROWTH</span>
          <div className="leadership-heading-wrapper">
            <h2 className="leadership-section-title">
              Leadership & <span className="text-gradient-shimmer">Mentorship</span>
            </h2>
            <div className="leadership-heading-line" />
          </div>
        </div>
        <p className="leadership-heading-subtitle">
          Empowering the next generation of cloud developers through community initiatives, technical workshops, and mentorship.
        </p>
      </div>

      {/* Leadership Card Container */}
      <div className="leadership-card glass card-3d">
        <div className="leadership-card-top">
          <div className="leadership-card-title-group">
            <div className="leadership-icon-box">
              <ShieldCheck size={26} className="text-[#82A626]" />
            </div>
            <div>
              <h3 className="leadership-role-title">
                AWS Student Builder Group Vice Chairman
              </h3>
              <p className="leadership-role-subtitle">
                Vice Chairman & Mentor • AWS Student Community
              </p>
            </div>
          </div>

          <div className="leadership-badge-pill">
            100+ Community Members
          </div>
        </div>

        <div className="leadership-divider" />

        {/* 2-Column Grid of Accomplishment Points */}
        <div className="leadership-points-grid">
          {points.map((point, idx) => (
            <div key={idx} className="leadership-point-item">
              <CheckCircle2 size={20} className="text-[#82A626] shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
