"use client";

import React, { useState, useMemo } from 'react';
import {
  Code2,
  Cloud,
  Layers,
  HardDrive,
  BarChart3,
  Terminal,
  Cpu,
  Database,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const CATEGORY_ICONS = {
  programming: Code2,
  cloud: Cloud,
  'data-engineering': Layers,
  databases: HardDrive,
  analytics: BarChart3,
  devops: Terminal,
  ai: Cpu,
  default: Database
};

// Metadata tags for individual tools & technologies
const SKILL_META = {
  'Python': { tag: 'Primary Language' },
  'SQL': { tag: 'Data Querying' },
  'R': { tag: 'Statistical Computing' },
  'Java': { tag: 'OOP Systems' },
  'C++': { tag: 'High Performance' },
  'HTML/CSS': { tag: 'UI Styling' },
  'JavaScript': { tag: 'Web Logic' },

  'AWS S3': { tag: 'Object Storage' },
  'AWS Glue': { tag: 'Serverless ETL' },
  'AWS Glue Studio': { tag: 'Visual Pipelines' },
  'Athena': { tag: 'Interactive Query' },
  'Lambda': { tag: 'Serverless Compute' },
  'Redshift': { tag: 'Cloud Warehouse' },
  'IAM': { tag: 'Cloud Security' },
  'CloudWatch': { tag: 'Monitoring & Metrics' },

  'ETL / ELT': { tag: 'Pipeline Pattern' },
  'Data Pipelines': { tag: 'Data Flow' },
  'Batch Processing': { tag: 'Bulk Engine' },
  'Data Ingestion': { tag: 'Stream & Batch' },
  'Apache Parquet': { tag: 'Columnar Storage' },
  'Schema Evolution': { tag: 'Data Modeling' },
  'Data Lake Architecture': { tag: 'Lakehouse Design' },

  'MySQL': { tag: 'Relational DB' },
  'MongoDB': { tag: 'Document NoSQL' },
  'Amazon RDS': { tag: 'Managed RDBMS' },
  'PostgreSQL': { tag: 'Advanced RDBMS' },
  'DuckDB': { tag: 'Analytical Engine' },

  'Power BI': { tag: 'BI Dashboards' },
  'Excel': { tag: 'Spreadsheet Analysis' },
  'Minitab': { tag: 'Statistical Tool' },
  'Streamlit': { tag: 'Data Apps' },
  'Plotly': { tag: 'Interactive Charts' },
  'Pandas': { tag: 'Data Wrangling' },
  'Scikit-learn': { tag: 'Machine Learning' },

  'Git': { tag: 'Version Control' },
  'Linux': { tag: 'OS & Terminal' },
  'CI/CD Fundamentals': { tag: 'Automation' },
  'Docker': { tag: 'Containerization' },
  'VS Code': { tag: 'Development IDE' }
};

// Category icon background colors with dual light/dark mode support and ambient glows
const ICON_BG_COLORS = {
  programming: 'bg-sky-100/90 text-sky-700 border border-sky-300/60 dark:bg-sky-950/60 dark:text-sky-400 dark:border-sky-500/30 dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]',
  cloud: 'bg-amber-100/90 text-amber-800 border border-amber-300/60 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-500/30 dark:shadow-[0_0_15px_rgba(251,191,36,0.25)]',
  'data-engineering': 'bg-purple-100/90 text-purple-800 border border-purple-300/60 dark:bg-purple-950/60 dark:text-purple-400 dark:border-purple-500/30 dark:shadow-[0_0_15px_rgba(192,132,252,0.25)]',
  databases: 'bg-indigo-100/90 text-indigo-800 border border-indigo-300/60 dark:bg-indigo-950/60 dark:text-indigo-400 dark:border-indigo-500/30 dark:shadow-[0_0_15px_rgba(129,140,248,0.25)]',
  analytics: 'bg-emerald-100/90 text-emerald-800 border border-emerald-300/60 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-500/30 dark:shadow-[0_0_15px_rgba(52,211,153,0.25)]',
  devops: 'bg-rose-100/90 text-rose-800 border border-rose-300/60 dark:bg-rose-950/60 dark:text-rose-400 dark:border-rose-500/30 dark:shadow-[0_0_15px_rgba(251,113,133,0.25)]',
  default: 'bg-lime-100/90 text-lime-800 border border-lime-300/60 dark:bg-lime-950/60 dark:text-lime-400 dark:border-lime-500/30 dark:shadow-[0_0_15px_rgba(163,230,53,0.25)]'
};

export default function SkillsSection({ skillsData }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Default skills categories for Vimal Kansotia
  const categories = skillsData?.categories || [
    {
      id: 'programming',
      title: 'Programming',
      icon: 'code',
      skills: ['Python', 'SQL', 'R', 'Java', 'C++', 'HTML/CSS', 'JavaScript']
    },
    {
      id: 'cloud',
      title: 'Cloud',
      icon: 'cloud',
      skills: ['AWS S3', 'AWS Glue', 'AWS Glue Studio', 'Athena', 'Lambda', 'Redshift', 'IAM', 'CloudWatch']
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      icon: 'database',
      skills: ['ETL / ELT', 'Data Pipelines', 'Batch Processing', 'Data Ingestion', 'Apache Parquet', 'Schema Evolution', 'Data Lake Architecture']
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: 'hard-drive',
      skills: ['MySQL', 'MongoDB', 'Amazon RDS', 'PostgreSQL', 'DuckDB']
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: 'bar-chart',
      skills: ['Power BI', 'Excel', 'Minitab', 'Streamlit', 'Plotly', 'Pandas', 'Scikit-learn']
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: 'terminal',
      skills: ['Git', 'Linux', 'CI/CD Fundamentals', 'Docker', 'VS Code']
    }
  ];

  // List of filter categories for the pills
  const filterCategories = useMemo(() => {
    const cats = ['All'];
    categories.forEach(cat => {
      if (!cats.includes(cat.title)) {
        cats.push(cat.title);
      }
    });
    return cats;
  }, [categories]);

  // Currently active single category if filtered
  const activeCategoryObj = useMemo(() => {
    if (selectedCategory === 'All') return null;
    return categories.find(cat => cat.title.toLowerCase() === selectedCategory.toLowerCase());
  }, [categories, selectedCategory]);

  return (
    <section id="skills" className="skills-container section">
      {/* Section Header */}
      <div className="skills-section-header">
        <div className="skills-header-row">
          <span className="skills-eyebrow-label">TECHNICAL MASTERY</span>
          <div className="skills-heading-wrapper">
            <h2 className="skills-section-title">
              <span className="text-gradient-shimmer">Skills & Tech Stack</span>
            </h2>
            <div className="skills-heading-line" />
          </div>
        </div>
        <p className="skills-heading-subtitle">
          Technologies, Frameworks, Cloud Platforms & Data Tools I leverage to build scalable data applications.
        </p>

        {/* Interactive Category Filter Tabs */}
        <div className="skills-filter-row scrollbar-none">
          {filterCategories.map((catName) => {
            const isActive = selectedCategory === catName;
            return (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`filter-btn ${isActive ? 'filter-btn-active' : 'filter-btn-inactive'}`}
              >
                {catName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Render either 3-Column Grid (when 'All' is selected) OR Futuristic Expanded Box (when a specific category is selected) */}
      {selectedCategory === 'All' ? (
        <div className="skills-top-grid">
          {categories.map((cat, idx) => {
            const IconComp = CATEGORY_ICONS[cat.id] || CATEGORY_ICONS.default;
            const iconBgClass = ICON_BG_COLORS[cat.id] || ICON_BG_COLORS.default;

            return (
              <div
                key={cat.id || idx}
                className="skills-category-card glass card-3d cursor-pointer"
                data-category={cat.id}
                onClick={() => setSelectedCategory(cat.title)}
              >
                <div className="skills-category-header">
                  <div className="skills-title-group">
                    <div className={`p-2 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${iconBgClass}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="category-card-title">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="category-skill-count">
                    {cat.skills?.length || 0} skills
                  </span>
                </div>

                <div className="skills-pill-wrap">
                  {cat.skills.map((skill, sIdx) => {
                    return (
                      <span
                        key={sIdx}
                        className="skill-pill skill-pill-normal"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : activeCategoryObj ? (
        /* Futuristic Tech Terminal Showcase Box for Single Selected Category */
        <div className="skills-expanded-card glass" data-category={activeCategoryObj.id}>
          <div className="skills-expanded-header">
            <div className="expanded-title-group">
              {(() => {
                const IconComp = CATEGORY_ICONS[activeCategoryObj.id] || CATEGORY_ICONS.default;
                const iconBgClass = ICON_BG_COLORS[activeCategoryObj.id] || ICON_BG_COLORS.default;
                return (
                  <div className={`p-3.5 rounded-2xl flex items-center justify-center ${iconBgClass}`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                );
              })()}
              <div>
                <h3 className="expanded-card-title">{activeCategoryObj.title}</h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  SHOWCASE DASHBOARD • {activeCategoryObj.skills?.length || 0} CORE TOOLS & FRAMEWORKS
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCategory('All')}
              className="expanded-reset-btn"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Categories
            </button>
          </div>

          {/* Interactive Tech Tiles Grid */}
          <div className="tech-tiles-grid">
            {activeCategoryObj.skills.map((skill, sIdx) => {
              const meta = SKILL_META[skill] || { tag: 'Technology' };
              return (
                <div key={sIdx} className="tech-tile-card">
                  <div className="tech-tile-top">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} className="shrink-0" />
                      <span className="tech-tile-name">{skill}</span>
                    </div>
                    <span className="tech-tile-dot" />
                  </div>
                  <div className="tech-tile-badge">
                    <span>{meta.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </section>
  );
}
