import { ShieldCheck, CheckCircle2, Briefcase, HeartHandshake, Sparkles } from 'lucide-react';

export default function LeadershipSection() {
  const leadershipData = [
    {
      id: 'aws',
      icon: ShieldCheck,
      title: 'AWS Student Builder Group Core Team',
      subtitle: 'Core Team & Mentor • AWS Student Community',
      badge: '100+ Community Members',
      points: [
        'Led AWS learning initiatives across campus',
        'Organized interactive cloud computing & data workshops',
        'Mentored students in cloud architecture & data engineering',
        'Supported a growing community of 100+ aspiring tech students'
      ]
    },
    {
      id: 'placement',
      icon: Briefcase,
      title: 'Training & Development Coordinator — Placement Cell',
      subtitle: 'Placement Cell • B.K. Birla College',
      badge: 'Campus Placement Leadership',
      points: [
        'Spearheaded training sessions, resume-building workshops, and mock technical interview rounds',
        'Facilitated corporate liaisoning, guest lectures, and placement drive execution',
        'Mentored students in technical interview prep, aptitude skills, and corporate readiness',
        'Coordinated placement operations to drive campus recruitment success'
      ]
    },
    {
      id: 'mpower',
      icon: HeartHandshake,
      title: 'MPower Core Team Member',
      subtitle: 'Youth Mental Health & Wellness Initiative • B.K. Birla College (3 Years)',
      badge: '3 Years Core Leadership',
      points: [
        'Served in the executive core team for 3 consecutive years driving youth mental health awareness',
        'Organized campus-wide wellness workshops, peer-support drives, and destigmatization seminars',
        'Led event planning, student engagement campaigns, and interactive mental health awareness forums',
        'Cultivated a supportive campus environment prioritizing student mental health and emotional well-being'
      ]
    },
    {
      id: 'cr-astro',
      icon: Sparkles,
      title: 'Class Representative & Head of Astronomical Club',
      subtitle: 'Student Governance & Club Leadership • B.K. Birla College (3 Years)',
      badge: '3 Years CR & Club Head',
      points: [
        'Elected Class Representative (CR) for 3 consecutive years, serving as primary student-faculty liaison',
        'Headed the B.K. Birla Astronomical Club, leading night stargazing camps and astrophysics seminars',
        'Organized and hosted numerous intercollegiate and intracollegiate technical and cultural fests & events',
        'Anchored major campus events, managing team coordination, sponsorship outreach, and stage hosting'
      ]
    }
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
          Empowering student communities through technical mentorship, placement coordination, mental wellness drives, and campus event leadership.
        </p>
      </div>

      {/* Detailed Leadership Cards */}
      <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {leadershipData.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.id} className="leadership-card glass card-3d">
              <div className="leadership-card-top">
                <div className="leadership-card-title-group">
                  <div className="leadership-icon-box">
                    <IconComp size={26} className="text-[#82A626]" />
                  </div>
                  <div>
                    <h3 className="leadership-role-title">
                      {item.title}
                    </h3>
                    <p className="leadership-role-subtitle">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="leadership-badge-pill">
                  {item.badge}
                </div>
              </div>

              <div className="leadership-divider" />

              {/* 2-Column Grid of Accomplishment Points */}
              <div className="leadership-points-grid">
                {item.points.map((point, idx) => (
                  <div key={idx} className="leadership-point-item">
                    <CheckCircle2 size={20} className="text-[#82A626] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
