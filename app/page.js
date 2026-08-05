'use client'

import React, { useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, TrendingUp, Zap, Database } from 'lucide-react';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white font-sans overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Vimal
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#projects" className="text-sm hover:text-teal-400 transition">Projects</a>
            <a href="#skills" className="text-sm hover:text-teal-400 transition">Skills</a>
            <a href="#contact" className="text-sm hover:text-teal-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-sm text-teal-300">
              📊 Data Analytics Engineer + Product Architect
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turning Data Into
              <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Product Magic
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl">
              Master's in Big Data Analytics | ERP Product Engineer at Atomnik | AWS Certified. 
              I build data-driven products that scale—from bioinformatics dashboards to enterprise ERP systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="px-8 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition transform hover:scale-105 text-center">
                View Work
              </a>
              <button className="px-8 py-3 border border-slate-600 hover:border-teal-400 rounded-lg font-semibold transition">
                Download CV
              </button>
            </div>

            <div className="flex gap-6 pt-6">
              <a href="https://github.com" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vimal@example.com" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-slate-700/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 text-center">
                <div className="text-6xl">📈</div>
                <p className="text-slate-300">8.9 CGPA | AWS Certified | SAP Analytics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <div className="animate-bounce text-slate-400">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">Data analytics, ML models, and product architecture</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CosmikERP */}
          <div 
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-teal-500/50 transition cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(0)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">CosmikERP</h3>
                  <p className="text-teal-400 text-sm">Product @ Atomnik Technologies</p>
                </div>
                <Zap className="text-teal-400" size={24} />
              </div>
              
              <p className="text-slate-300">
                Built 5+ enterprise modules (CRM, Finance, HR, Sales, Task Management) using React + Node.js. 
                Designed natural language feature descriptions, AI-powered contact analysis, and Kanban/Gantt views.
              </p>

              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'AI Integration'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 text-teal-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <a href="#" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* HPA Gene Expression */}
          <div 
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">HPA Gene Explorer</h3>
                  <p className="text-blue-400 text-sm">Bioinformatics Dashboard</p>
                </div>
                <Database className="text-blue-400" size={24} />
              </div>
              
              <p className="text-slate-300">
                Built interactive Streamlit dashboard for gene expression analysis. Integrated DuckDB, Apache Parquet, 
                and Plotly for real-time visualization of multi-tissue protein expression patterns.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Streamlit', 'Python', 'DuckDB', 'Plotly', 'Pandas'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 text-blue-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm">
                  View Dashboard <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* ML Algorithms Comparison */}
          <div 
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-500/50 transition cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(2)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">ML Comparison Study</h3>
                  <p className="text-purple-400 text-sm">Research Paper (Lab 3)</p>
                </div>
                <TrendingUp className="text-purple-400" size={24} />
              </div>
              
              <p className="text-slate-300">
                Comprehensive analysis comparing 8+ ML algorithms on Titanic dataset. Published research paper 
                with accuracy, precision, recall metrics and cross-validation strategies.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Scikit-learn', 'Python', 'Statistical Analysis', 'XGBoost', 'Random Forest'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 text-purple-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <a href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm">
                  Read Paper <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Multi-Tissue Gene Profiling */}
          <div 
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-green-500/50 transition cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(3)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Multi-Tissue Profiling</h3>
                  <p className="text-green-400 text-sm">Advanced Analytics Project</p>
                </div>
                <Database className="text-green-400" size={24} />
              </div>
              
              <p className="text-slate-300">
                Built advanced gene expression profiling engine using DuckDB, Apache Parquet, and Plotly. 
                Visualized complex tissue-specific protein patterns with interactive filtering and comparison tools.
              </p>

              <div className="flex flex-wrap gap-2">
                {['DuckDB', 'Apache Parquet', 'Plotly', 'Python', 'Data Engineering'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 text-green-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <a href="#" className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm">
                  Explore <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Skills & Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-teal-400 font-bold mb-4 text-lg">Data & Analytics</h3>
            <div className="space-y-2 text-slate-300">
              <p>• Python (Pandas, NumPy, Scikit-learn)</p>
              <p>• SQL & Database Design</p>
              <p>• Power BI & Dashboards</p>
              <p>• Statistical Analysis</p>
              <p>• Big Data Technologies</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-blue-400 font-bold mb-4 text-lg">Product & Full-Stack</h3>
            <div className="space-y-2 text-slate-300">
              <p>• React & Next.js</p>
              <p>• Node.js & Express</p>
              <p>• Streamlit Applications</p>
              <p>• UI/UX Design Principles</p>
              <p>• Product Architecture</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-purple-400 font-bold mb-4 text-lg">Cloud & DevOps</h3>
            <div className="space-y-2 text-slate-300">
              <p>• AWS (EC2, S3, Lambda, RDS)</p>
              <p>• Google Cloud & ADK</p>
              <p>• SAP Analytics Cloud</p>
              <p>• Docker & Deployment</p>
              <p>• Git & Version Control</p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-teal-900/30 to-blue-900/30 border border-slate-700">
          <h3 className="font-bold mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
              <span>AWS Solutions Architect Associate</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>SAP Analytics Cloud Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-bold">Master's in Big Data Analytics</h3>
                <p className="text-teal-400">St. Xavier's College, Mumbai</p>
              </div>
              <span className="px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded text-sm text-teal-300 font-semibold mt-2 sm:mt-0">CGPA: 8.9</span>
            </div>
            <p className="text-slate-400 text-sm">Focused on statistical analysis, machine learning, big data technologies, and data-driven product development</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-xl font-bold mb-2">ERP Implementation & Customization</h3>
            <p className="text-blue-400">Atomnik Technologies (Internship)</p>
            <p className="text-slate-400 text-sm mt-2">Product engineering role focusing on CosmikERP module development, feature architecture, and AI integration</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-slate-300 mb-8">
            Whether it's building data-driven products, optimizing analytics pipelines, or architecting ERP solutions, 
            I'm open to interesting conversations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:vimal@example.com" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition">
              Send me an email
            </a>
            <a href="#" className="px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-teal-400 transition">
              Schedule a call
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vimal@example.com" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-6 text-center text-slate-500 text-sm">
        <p>Designed & built by Vimal • © 2024 • Inspired by data, driven by curiosity</p>
      </footer>
    </div>
  );
}
