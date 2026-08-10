"use client";

import React, { useState, useMemo } from 'react';
import {
  Code2,
  Cloud,
  Layers,
  HardDrive,
  BarChart3,
  Terminal,
  Sparkles,
  Cpu,
  Database
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

// Category icon background colors
const ICON_BG_COLORS = {
  programming: 'bg-[#E1F0FA] text-[#0284C7]',
  cloud: 'bg-[#FEF3C7] text-[#D97706]',
  'data-engineering': 'bg-[#F3E8FF] text-[#9333EA]',
  databases: 'bg-[#E0E7FF] text-[#4F46E5]',
  analytics: 'bg-[#DCFCE7] text-[#16A34A]',
  devops: 'bg-[#FCE7F3] text-[#DB2777]',
  default: 'bg-[#ECE4D8] text-[#415B06]'
};

export default function SkillsSection({ skillsData }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Default skills categories for Vimal Kansotia
  const categories = skillsData?.categories || [
    {
      id: 'programming',
      title: 'Programming',
      icon: 'code',
      skills: ['Python', 'SQL', 'R', 'Java', 'C++']
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
      skills: ['Power BI', 'Excel', 'Minitab', 'Streamlit', 'Plotly']
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: 'terminal',
      skills: ['Git', 'Linux', 'CI/CD Fundamentals', 'Docker']
    }
  ];

  // Full Tech Stack for Vimal Kansotia
  const techStack = skillsData?.techStack || [
    { id: 't1', name: 'Python', category: 'Programming' },
    { id: 't2', name: 'SQL', category: 'Programming' },
    { id: 't3', name: 'AWS', category: 'Cloud' },
    { id: 't4', name: 'S3', category: 'Cloud' },
    { id: 't5', name: 'Glue', category: 'Cloud' },
    { id: 't6', name: 'Athena', category: 'Cloud' },
    { id: 't7', name: 'Redshift', category: 'Cloud' },
    { id: 't8', name: 'Lambda', category: 'Cloud' },
    { id: 't9', name: 'MySQL', category: 'Databases' },
    { id: 't10', name: 'MongoDB', category: 'Databases' },
    { id: 't11', name: 'Git', category: 'DevOps' },
    { id: 't12', name: 'Linux', category: 'DevOps' },
    { id: 't13', name: 'Power BI', category: 'Analytics' },
    { id: 't14', name: 'Streamlit', category: 'Analytics' },
    { id: 't15', name: 'DuckDB', category: 'Data Engineering' },
    { id: 't16', name: 'Apache Parquet', category: 'Data Engineering' },
    { id: 't17', name: 'ETL / ELT', category: 'Data Engineering' },
    { id: 't18', name: 'Data Pipelines', category: 'Data Engineering' },
    { id: 't19', name: 'R', category: 'Programming' },
    { id: 't20', name: 'PostgreSQL', category: 'Databases' },
    { id: 't21', name: 'Docker', category: 'DevOps' },
    { id: 't22', name: 'Plotly', category: 'Analytics' },
    { id: 't23', name: 'Excel', category: 'Analytics' },
    { id: 't24', name: 'Scikit-learn', category: 'Analytics' }
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

  // Filtered tech stack items based on selected category pill
  const filteredTechStack = useMemo(() => {
    return techStack.filter(item => {
      return (
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    });
  }, [techStack, selectedCategory]);

  return (
    <section id="skills" className="skills-container section">
      {/* Section Header */}
      <div className="skills-section-header">
        <div className="skills-header-row">
          <span className="skills-eyebrow-label">TECHNICAL MASTERY</span>
          <div className="skills-heading-wrapper">
            <h2 className="skills-section-title">
              Skills & <span className="text-gradient-shimmer">Tech Stack</span>
            </h2>
            <div className="skills-heading-line" />
          </div>
        </div>
        <p className="skills-heading-subtitle">
          Technologies, Frameworks, Cloud Platforms & Data Tools I leverage to build scalable data applications.
        </p>
      </div>

      {/* Top Grid: Categorized Skill Cards */}
      <div className="skills-top-grid">
        {categories.map((cat, idx) => {
          const IconComp = CATEGORY_ICONS[cat.id] || CATEGORY_ICONS.default;
          const iconBgClass = ICON_BG_COLORS[cat.id] || ICON_BG_COLORS.default;

          return (
            <div key={cat.id || idx} className="skills-category-card glass card-3d">
              <div className="skills-category-header">
                <div className={`p-2 rounded-xl flex items-center justify-center ${iconBgClass}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="category-card-title">
                  {cat.title}
                </h3>
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

      {/* Bottom Container: Interactive Tech Stack */}
      <div className="interactive-stack-box">
        {/* Header Row: Title & Filter Pills */}
        <div className="interactive-stack-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles className="w-5 h-5" style={{ color: '#82A626' }} />
            <h3 className="interactive-stack-title">
              Interactive Tech Stack
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills-row scrollbar-none">
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

        {/* Tech Stack Cards Grid */}
        <div className="tech-cards-grid">
          {filteredTechStack.map((tech) => (
            <div key={tech.id || tech.name} className="tech-card">
              {/* Top Center Green Dot */}
              <div className="tech-dot" />

              {/* Tech Name */}
              <span className="tech-title">
                {tech.name}
              </span>

              {/* Category Subtitle */}
              <span className="tech-subtitle">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
