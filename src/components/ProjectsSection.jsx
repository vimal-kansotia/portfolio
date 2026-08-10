import { ExternalLink, CheckCircle2, Dna, Activity, HeartPulse, Mic, BarChart3, Cloud, FileText } from 'lucide-react';

const PROJECT_ICON_MAP = {
  dna: Dna,
  activity: Activity,
  'heart-pulse': HeartPulse,
  mic: Mic,
  'bar-chart': BarChart3,
  cloud: Cloud,
  'file-text': FileText,
};

const DEFAULT_PROJECTS = [
  {
    id: 'project-hpa',
    title: 'Human Protein Atlas (HPA) Gene Expression Explorer',
    description: 'End-to-end interactive web application built with Streamlit and Python for transcriptomic profiling and multi-omics data analysis across normal tissues and cancer cell lines.',
    techStack: ['Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Openpyxl', 'Python'],
    highlights: [
      'Dynamic Global Filtering by gene selections & expression thresholds',
      'Statistical Summary Hub for real-time metrics & frequency distribution',
      'Target Gene Profiling with bar charts & key statistical indicators',
      'Cross-Gene Comparative Analysis with multi-line trajectory charts',
      'Full Data Browser with custom sorting & direct CSV export'
    ],
    tags: ['Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Python'],
    iconKey: 'dna',
    link: 'https://vimalbio.streamlit.app/'
  },
  {
    id: 'project-hospital-los',
    title: 'Hospital Length of Stay (LOS) Dashboard',
    description: 'Comprehensive healthcare analytics platform for tracking patient hospitalization duration. Features interactive visualizations for bed capacity tracking, clinical workflow insights, and resource optimization.',
    techStack: ['Streamlit', 'Python', 'Power BI', 'Healthcare Analytics', 'Pandas'],
    highlights: [
      'Healthcare LOS prediction & operational metrics',
      'Bed capacity tracking & hospital resource optimization',
      'Interactive Streamlit & Power BI Analytics UI',
      'Patient duration predictors & trend analytics',
      'Clinical workflow & data-driven healthcare insights'
    ],
    tags: ['Streamlit', 'Python', 'Power BI', 'Healthcare Analytics'],
    iconKey: 'activity',
    link: 'https://hospital-los.streamlit.app/'
  },
  {
    id: 'project-jarvis',
    title: 'Personalized Local AI Assistant (Jarvis)',
    description: 'Voice-activated AI assistant running 100% locally on CachyOS (Linux) for total data privacy. Integrates Llama 3.2 via Ollama for local reasoning and OpenAI Whisper for real-time speech-to-text.',
    techStack: ['Llama 3.2', 'Ollama', 'Whisper', 'Linux (CachyOS)', 'Python'],
    highlights: [
      '100% On-Device Privacy Architecture (Zero cloud API dependency)',
      'Local Inference Engine executing Llama 3.2 1B via Ollama',
      'Real-time Voice Transcription with OpenAI Whisper STT',
      'Linux CachyOS System Optimization for Intel Ultra 5 CPU',
      'Custom Python Logic for time-based greetings & TTS logic'
    ],
    tags: ['LLMs', 'Ollama', 'Whisper', 'Linux', 'Python'],
    iconKey: 'mic',
    link: ''
  },
  {
    id: 'project-pneumo-ai',
    title: 'Pneumo-AI: Advanced Pneumonia Detection',
    description: 'AI-driven medical diagnostic interface to classify Chest X-rays into Normal vs. Pneumonia with 96% accuracy using Random Projection (Johnson-Lindenstrauss lemma) and Deep Learning.',
    techStack: ['CNN', 'SVM', 'Random Projection', 'Streamlit', 'Linux (CachyOS)'],
    highlights: [
      '96% Diagnostic Accuracy on Chest X-ray Classification',
      'Random Projection Feature Compression (Johnson-Lindenstrauss lemma)',
      'Explainable AI with Grad-CAM Heatmaps & K-Means Cluster Mapping',
      'Streamlit Web UI for real-time X-ray analysis & report generation',
      'High-performance ML execution environment on CachyOS Linux'
    ],
    tags: ['Deep Learning', 'CNN', 'Streamlit', 'Machine Learning', 'Linux'],
    iconKey: 'heart-pulse',
    link: ''
  },
  {
    id: 'project-amazon-sales',
    title: 'Amazon End-to-End Sales Analytics Dashboard',
    description: 'End-to-end sales dashboard analyzing 1.8 Lakh+ records. Processed raw data via SQL/Python for 100% integrity, tracking $2.18M YTD sales, profit margins, and regional category performance.',
    techStack: ['SQL', 'Power BI', 'Python', 'Excel', 'ETL'],
    highlights: [
      'Processed 180,000+ Raw Records with 100% Data Integrity',
      'Automated Data Cleaning & ETL via SQL and Python',
      'Tracks $2.18M YTD Sales, Profit Margins & Category Trends',
      'Interactive Power BI Dashboard with Regional Drill-down Metrics',
      'Actionable Insights for Inventory Management & Seasonal Demand'
    ],
    tags: ['Power BI', 'SQL', 'Python', 'ETL', 'Excel'],
    iconKey: 'bar-chart',
    link: ''
  },
  {
    id: 'project-aqi',
    title: 'Real-time Air Quality Index (AQI) Dashboard',
    description: 'Environmental monitoring platform connecting live REST APIs to fetch real-time pollution metrics (PM2.5, PM10, NO2). Visualizes time-series trends with dynamic location filtering in Power BI.',
    techStack: ['Power BI', 'API Integration', 'SQL', 'Excel', 'Python'],
    highlights: [
      'Live External API Data Ingestion for PM2.5, PM10 & NO2',
      'Hourly & Daily Time-Series Pollution Trend Analysis',
      'Interactive Power BI UI with Location-based Hazard Filtering',
      'Real-time Data Stream Monitoring Architecture',
      'Automated Data Refresh & Environmental Assessment Insights'
    ],
    tags: ['Power BI', 'API Integration', 'SQL', 'Python'],
    iconKey: 'cloud',
    link: ''
  }
];

function SectionHeading({ children, className = '' }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

export default function ProjectsSection({ projects = [] }) {
  const githubUrl = 'https://github.com/vimal-kansotia?tab=repositories';
  const projectList = DEFAULT_PROJECTS;

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
          A curated selection of AI, data engineering, and full-stack analytics builds with real-world impact.
        </p>
      </div>

      <div className="projects-template-grid">
        {projectList.map((project, index) => {
          const Icon = PROJECT_ICON_MAP[project.iconKey] || FileText;

          const techStackList = project.techStack || project.tags || [];
          const highlights = project.highlights || [
            "High-performance architecture",
            "Data-driven insights & analytics",
            "Scalable pipeline & web interface",
            "Optimized query performance"
          ];

          return (
            <article
              key={project.id || project.title || index}
              className={`project-card-v2 glass card-3d ${project.link ? 'cursor-pointer' : ''}`}
              onClick={project.link ? (e) => {
                // If user didn't click inside a child link, trigger top window open
                if (e.target.tagName !== 'A' && !e.target.closest('a')) {
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }
              } : undefined}
            >
              {/* Top Bar: Icon + External Link */}
              <div className="project-v2-top">
                <div className="project-v2-icon-box">
                  <Icon size={20} className="text-[#82A626]" />
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-v2-link-btn"
                    aria-label={`View live demo for ${project.title}`}
                    title="Open Live Streamlit App"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <span
                    className="project-v2-link-btn opacity-30 cursor-default"
                    title="Live Demo Unavailable"
                  >
                    <ExternalLink size={18} />
                  </span>
                )}
              </div>

              {/* Project Title */}
              {project.link ? (
                <h3 className="project-v2-title">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#82A626] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.title}
                  </a>
                </h3>
              ) : (
                <h3 className="project-v2-title">{project.title}</h3>
              )}

              {/* Tech Stack Callout Box */}
              <div className="project-v2-tech-box">
                <span className="project-v2-tech-label">TECH STACK:</span>
                <span className="project-v2-tech-list">
                  {techStackList.join(' • ')}
                </span>
              </div>

              {/* Project Description */}
              <p className="project-v2-description">{project.description}</p>

              {/* Key Highlights Container Box */}
              <div className="project-v2-highlights-box">
                <span className="project-v2-highlights-title">KEY HIGHLIGHTS:</span>
                <ul className="project-v2-highlights-list">
                  {highlights.map((item, hIdx) => (
                    <li key={hIdx} className="project-v2-highlight-item">
                      <CheckCircle2 size={16} className="text-[#82A626] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tag Pills */}
              <div className="project-v2-pills-row">
                {techStackList.map((tag, tIdx) => (
                  <span key={tIdx} className="project-v2-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="projects-template-footer">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="projects-template-linkout">
          See all projects on GitHub ↗
        </a>
      </div>
    </section>
  );
}