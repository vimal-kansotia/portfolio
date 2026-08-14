import { useState, useEffect } from 'react';
import { ExternalLink, CheckCircle2, Plus, X, Github, Dna, Activity, HeartPulse, Mic, BarChart3, Cloud, FileText } from 'lucide-react';

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
    category: 'BIOINFORMATICS & TRANSCRIPTOMICS',
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
    image: '/projects/hpa-explorer.png',
    link: 'https://vimalbio.streamlit.app/'
  },
  {
    id: 'project-hospital-los',
    title: 'Hospital Length of Stay (LOS) Dashboard',
    category: 'HEALTHCARE ANALYTICS & ML',
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
    image: '/projects/hospital-los.png',
    link: 'https://hospital-los.streamlit.app/'
  },
  {
    id: 'project-jarvis',
    title: 'Personalized Local AI Assistant (Jarvis)',
    category: 'LOCAL AI & LLM INFERENCE',
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
    image: '/projects/jarvis-ai.jpg',
    link: ''
  },
  {
    id: 'project-pneumo-ai',
    title: 'Pneumo-AI: Advanced Pneumonia Detection',
    category: 'MEDICAL DIAGNOSTICS & DL',
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
    image: '/projects/pneumo-ai.png',
    link: ''
  },
  {
    id: 'project-amazon-sales',
    title: 'Amazon End-to-End Sales Analytics Dashboard',
    category: 'SALES ANALYTICS & ETL',
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
    image: '/projects/amazon-sales.jpg',
    link: ''
  },
  {
    id: 'project-aqi',
    title: 'Real-time Air Quality Index (AQI) Dashboard',
    category: 'ENVIRONMENTAL MONITORING',
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
    image: '/projects/aqi-dashboard.png',
    link: ''
  }
];

function SectionHeading({ children, className = '' }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

export default function ProjectsSection({ projects = [] }) {
  const githubUrl = 'https://github.com/vimal-kansotia?tab=repositories';
  const projectList = DEFAULT_PROJECTS;
  const [selectedProject, setSelectedProject] = useState(null);

  // Duplicated list for continuous seamless infinite marquee loop (1..6 -> 1..6...)
  const marqueeProjects = [...projectList, ...projectList];

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="section projects-template">
      <div className="projects-template-background" aria-hidden="true">
        <div className="projects-orb projects-orb-left" />
        <div className="projects-orb projects-orb-right" />
      </div>

      <div className="projects-template-header">
        <span className="projects-template-eyebrow">Selected work</span>
        <SectionHeading className="projects-template-title">
          <span className="text-gradient-shimmer">Featured Projects</span>
        </SectionHeading>
        <p className="projects-template-subtitle">
          A continuous showcase of AI, data engineering, and full-stack analytics builds. Click the <strong>+</strong> button on any project to explore details.
        </p>
      </div>

      {/* Continuous Infinite Marquee Carousel (1..6 -> 1..6...) */}
      <div className="projects-marquee-wrapper">
        <div className="projects-marquee-track">
          {marqueeProjects.map((project, index) => {
            return (
              <div
                key={`${project.id}-${index}`}
                className="project-card-minimal glass card-3d"
                onClick={() => setSelectedProject(project)}
              >
                {/* 100% Fitted Image Wrapper (No cropping) */}
                <div className="project-card-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-cover-img"
                    loading="lazy"
                  />
                </div>

                {/* Frosted Bottom Bar: Category & Title Left, Plus Button Right */}
                <div className="project-card-bottom-bar">
                  <div className="project-card-info">
                    <span className="project-card-category">{project.category || 'PROJECT'}</span>
                    <h3 className="project-card-name" title={project.title}>{project.title}</h3>
                  </div>

                  <div className="project-card-actions">
                    <button
                      type="button"
                      className="project-plus-btn"
                      aria-label={`Open details for ${project.title}`}
                      title="View Full Details"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="projects-template-footer">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="projects-template-linkout">
          See all projects on GitHub ↗
        </a>
      </div>

      {/* Interactive Detail Pop-up Modal Overlay */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button (✕) */}
            <button
              type="button"
              className="project-modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              title="Close (ESC)"
            >
              <X size={22} />
            </button>

            {/* Modal Category Eyebrow */}
            <span className="project-modal-eyebrow">
              {selectedProject.category || 'FEATURED PROJECT'}
            </span>

            {/* Modal Title */}
            <h2 className="project-modal-title">{selectedProject.title}</h2>

            {/* Description */}
            <p className="project-modal-description">{selectedProject.description}</p>

            {/* Expanded Project Widescreen Banner Image */}
            {selectedProject.image && (
              <div className="project-modal-banner">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              </div>
            )}

            {/* Tech Stack Callout Box */}
            <div className="project-v2-tech-box mb-4">
              <span className="project-v2-tech-label">TECH STACK:</span>
              <span className="project-v2-tech-list">
                {(selectedProject.techStack || selectedProject.tags || []).join(' • ')}
              </span>
            </div>

            {/* Key Highlights */}
            <div className="project-v2-highlights-box">
              <span className="project-v2-highlights-title">KEY HIGHLIGHTS:</span>
              <ul className="project-v2-highlights-list">
                {(selectedProject.highlights || []).map((item, hIdx) => (
                  <li key={hIdx} className="project-v2-highlight-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} className="shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons: GitHub & Live App (Only for HPA Explorer & Hospital LOS Dashboard) */}
            {(selectedProject.id === 'project-hpa' || selectedProject.id === 'project-hospital-los') && (
              <div className="project-modal-footer-actions">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-modal-action-btn project-modal-btn-primary"
                  >
                    <ExternalLink size={18} />
                    <span>Open Live Demo ↗</span>
                  </a>
                )}

                <a
                  href={selectedProject.github || githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-modal-action-btn project-modal-btn-secondary"
                >
                  <Github size={18} />
                  <span>View Code on GitHub</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}