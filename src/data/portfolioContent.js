export const STORAGE_KEYS = {
  content: 'portfolio-content-v1',
  credentials: 'portfolio-admin-credentials-v1',
  session: 'portfolio-admin-session-v1',
};

export const PROJECT_ICON_OPTIONS = [
  { value: 'file-text', label: 'File Text' },
  { value: 'bar-chart', label: 'Bar Chart' },
  { value: 'users', label: 'Users' },
  { value: 'heart', label: 'Heart' },
  { value: 'sun', label: 'Sun' },
  { value: 'book-open', label: 'Book Open' },
];

export const PROJECT_ACCENT_OPTIONS = [
  { value: 'cyan', label: 'Cyan' },
  { value: 'purple', label: 'Purple' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'orange', label: 'Orange' },
  { value: 'blue', label: 'Blue' },
];

export const SKILL_COLOR_OPTIONS = [
  { value: 'cyan', label: 'Cyan' },
  { value: 'purple', label: 'Purple' },
  { value: 'pink', label: 'Pink' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'orange', label: 'Orange' },
  { value: 'blue', label: 'Blue' },
];

export const CONTACT_ICON_OPTIONS = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'mail', label: 'Mail' },
  { value: 'phone', label: 'Phone' },
  { value: 'map-pin', label: 'Map Pin' },
  { value: 'github', label: 'GitHub' },
  { value: 'external-link', label: 'External Link' },
];

function createProject(id, title, description, tags, accent, iconKey, link, image = '') {
  return { id, title, description, tags, accent, iconKey, link, image };
}

function createSkill(id, label, value, color) {
  return { id, label, value, color };
}

function createEducation(id, title, place, status = '') {
  return { id, title, place, status };
}

function createCertification(id, label) {
  return { id, label };
}

function createContactLink(id, iconKey, title, text, href) {
  return { id, iconKey, title, text, href };
}

function createFooterLink(id, label, href) {
  return { id, label, href };
}

function createSocialLink(id, iconKey, label, href) {
  return { id, iconKey, label, href };
}

export function createDefaultPortfolioContent({ heroImage, resumeUrl }) {
  return {
    site: {
      brand: 'VIMAL KANSOTIA',
      ownerName: 'Vimal Santosh Kansotia',
      role: 'Data Science · Big Data · ML',
    },
    hero: {
      eyebrow: 'Data Science & Big Data Analytics',
      name: 'Vimal Santosh Kansotia',
      title: 'Big Data & Machine Learning Enthusiast',
      subtitle: 'I build data-driven solutions and scalable architectures using machine learning, big data, cloud technologies, and bioinformatics to turn complex data into meaningful insights. As a Data Engineer, I design high-throughput distributed pipelines and resilient data lakes with Apache Spark, Hadoop, Kafka, and AWS to empower high-velocity analytical decision making.',
      image: heroImage,
      resumeUrl,
      buttons: {
        primaryLabel: 'View Projects',
        secondaryLabel: 'Download Resume',
      },
      highlights: [
        'Turning Data into Actionable Insights',
        'Machine Learning & Predictive Analytics',
        'Big Data Analytics & Bioinformatics',
      ],
      stats: [
        { id: 'stat-cgpa', value: '8.3+', label: 'Academic CGPA' },
        { id: 'stat-projects', value: '6+', label: 'Data Science Projects' },
        { id: 'stat-skills', value: '35+', label: 'Technical Skills' },
        { id: 'stat-focus', value: 'Data', label: 'Core Focus' },
      ],
    },
    about: {
      profileName: 'Vimal Santosh Kansotia',
      profileTitle: 'Big Data & ML Engineer',
      bio: 'Data scientist and big data engineer building ML pipelines, interactive dashboards, and cloud-native solutions that transform complex datasets into actionable insights.',
      location: 'Mumbai, Maharashtra',
      availability: 'Open to opportunities',
      technicalFocus: 'Focused on Machine Learning, Data Analytics, Bioinformatics, and production-ready data applications with a cloud-first mindset.',
      locationCity: 'Mumbai',
      timezone: 'GMT+5:30',
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=72.7928%2C19.0144%2C72.9270%2C19.1760&layer=mapnik&marker=19.0760%2C72.8777',
      skillBars: [
        createSkill('skill-python', 'Python & Machine Learning', 90, 'cyan'),
        createSkill('skill-data', 'Data Analysis (SQL/EDA)', 85, 'purple'),
        createSkill('skill-viz', 'Data Visualization (Power BI/Streamlit)', 85, 'pink'),
        createSkill('skill-cloud', 'Cloud & Big Data (AWS/DuckDB)', 80, 'yellow'),
      ],
      education: [
        createEducation('edu-msc', 'M.Sc. Big Data Analytics', "St. Xavier's College, Mumbai", 'Pursuing'),
        createEducation('edu-bsc', 'B.Sc. Mathematics', 'B.K. Birla College, Kalyan', 'Completed (CGPA: 8.3+)'),
      ],
      certifications: [
        createCertification('lead-placement', 'Training & Development Coordinator — Placement Cell (B.K. Birla College)'),
        createCertification('lead-mpower', 'MPower Core Team Member - 3 Years (B.K. Birla College)'),
        createCertification('lead-cr-astro', 'Class Representative (3 Years) & Head of Astronomical Club (B.K. Birla College)'),
        createCertification('lead-aws', 'AWS Student Builder Group Core Team & Mentor (AWS Community)'),
        createCertification('cert-aws-de', 'AWS Academy Graduate - Data Engineering - Training Badge'),
        createCertification('cert-subagents', 'Certificate of completion: Introduction to subagents'),
        createCertification('cert-mcp', 'Introduction to Model Context Protocol'),
        createCertification('cert-claude', 'Claude Code in Action'),
        createCertification('cert-jpmorgan', 'J.P. Morgan - Quantitative Research Job Simulation'),
        createCertification('cert-deloitte', 'Deloitte Australia - Data Analytics Job Simulation'),
        createCertification('cert-bcg', 'BCG - Data Science Job Simulation'),
        createCertification('cert-msoffice', 'MS-Office 2019 (with Specialization in Excel, Access, and Outlook)'),
        createCertification('cert-sap-sac', 'Designing Stories in SAP Analytics Cloud - Course Completion'),
        createCertification('cert-sap-bw', 'Getting Started Building an On-Premise Data Warehouse using SAP BW/4HANA - Course Completion'),
      ],
    },
    skills: {
      eyebrow: 'Technical Expertise',
      title: 'Skills & Interactive Tech Stack',
      subtitle: 'Interactive breakdown of technologies, frameworks, cloud services, and tools I use to build data-driven solutions.',
      categories: [
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
      ],
      techStack: [
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
      ]
    },
    experiences: [
      {
        id: 'exp-atomnik-1',
        title: 'ERP Implementation and Customisation Engineer',
        company: 'Atomnik',
        type: 'Internship',
        period: 'Apr 20, 2026 - Jun 19, 2026',
        duration: '2 mos',
        location: 'Mumbai, Maharashtra, India',
        workplaceType: 'On-site',
        description: [
          'Assisting in the end-to-end implementation and customization of CRP solutions to align with specific business requirements.',
          'Configuring system modules and developing custom workflows to optimize resource allocation and operational efficiency.',
          'Collaborating with cross-functional teams to troubleshoot technical issues and ensure seamless data integration across cloud platforms.'
        ],
        skills: [
          'CRP',
          'Cloud Computing',
          'Business Analysis',
          'Project Management',
          'Troubleshooting'
        ]
      }
    ],
    projects: [
      createProject(
        'project-diabetic-readmission',
        'Diabetic 30-Day Readmission Predictor',
        'Built an end-to-end ML dashboard predicting 30-day hospital readmission risk for diabetic patients using XGBoost & CatBoost. Includes SHAP explainability, live risk predictor, and interactive EDA explorer on 101,766 patient encounters.',
        ['Streamlit', 'Plotly', 'XGBoost', 'CatBoost', 'SHAP', 'Scikit-learn', 'Pandas', 'NumPy', 'Python'],
        'cyan',
        'heart-pulse',
        'https://diabetic-readmission.streamlit.app/',
        '/projects/diabetic-readmission.png',
      ),
      createProject(
        'project-hpa',
        'Human Protein Atlas (HPA) Gene Expression Explorer',
        'End-to-end interactive web application built with Streamlit and Python for transcriptomic profiling and multi-omics data analysis across normal tissues and cancer cell lines.',
        ['Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Openpyxl', 'Python'],
        'cyan',
        'dna',
        'https://vimalbio.streamlit.app/',
        '/projects/hpa-explorer.png',
      ),
      createProject(
        'project-jarvis',
        'Personalized Local AI Assistant (Jarvis)',
        'Voice-activated AI assistant running 100% locally on CachyOS (Linux) for total data privacy. Integrates Llama 3.2 via Ollama for local reasoning and OpenAI Whisper for real-time speech-to-text.',
        ['LLMs', 'Ollama', 'Whisper', 'Linux', 'Python'],
        'yellow',
        'mic',
        'https://github.com/vimal-kansotia/Jarvis-AI',
        '/projects/jarvis-ai.jpg',
      ),
      createProject(
        'project-pneumo-ai',
        'Pneumo-AI: Advanced Pneumonia Detection',
        'AI-driven medical diagnostic interface to classify Chest X-rays into Normal vs. Pneumonia with 96% accuracy using Random Projection (Johnson-Lindenstrauss lemma) and Deep Learning.',
        ['Deep Learning', 'CNN', 'Streamlit', 'Machine Learning', 'Linux'],
        'green',
        'heart-pulse',
        'https://github.com/vimal-kansotia/Pneumo-AI',
        '/projects/pneumo-ai.png',
      ),
      createProject(
        'project-amazon-sales',
        'Amazon End-to-End Sales Analytics Dashboard',
        'End-to-end sales dashboard analyzing 1.8 Lakh+ records. Processed raw data via SQL/Python for 100% integrity, tracking $2.18M YTD sales, profit margins, and regional category performance.',
        ['Power BI', 'SQL', 'Python', 'ETL', 'Excel'],
        'orange',
        'bar-chart',
        'https://github.com/vimal-kansotia/Amazon-Sales-Analytics',
        '/projects/amazon-sales.jpg',
      ),
      createProject(
        'project-aqi',
        'Real-time Air Quality Index (AQI) Dashboard',
        'Environmental monitoring platform connecting live REST APIs to fetch real-time pollution metrics (PM2.5, PM10, NO2). Visualizes time-series trends with dynamic location filtering in Power BI.',
        ['Power BI', 'API Integration', 'SQL', 'Python'],
        'blue',
        'cloud',
        'https://github.com/vimal-kansotia/AQI-Dashboard',
        '/projects/aqi-dashboard.png',
      ),
      createProject(
        'project-hospital-los',
        'Hospital Length of Stay (LOS) Dashboard',
        'Comprehensive healthcare analytics platform for tracking patient hospitalization duration. Features interactive visualizations for bed capacity tracking, clinical workflow insights, and resource optimization.',
        ['Streamlit', 'Python', 'Power BI', 'Healthcare Analytics'],
        'purple',
        'heart-pulse',
        'https://hospital-los-dashboard.streamlit.app/',
        '/projects/hospital-los.png',
      ),
    ],
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Get In Touch',
      subtitle: 'Have a project in mind or looking for a collaborator? Send a message and I’ll reply soon.',
      links: [
        createContactLink('contact-linkedin', 'linkedin', 'LinkedIn', 'vimal-kansotia-586665231', 'https://www.linkedin.com/in/vimal-kansotia-586665231/'),
        createContactLink('contact-email', 'mail', 'Email Me', 'kansotiavimal4@gmail.com', 'mailto:kansotiavimal4@gmail.com'),
        createContactLink('contact-phone', 'phone', 'Call Me', '+91 9876543210', 'tel:+919876543210'),
        createContactLink('contact-location', 'map-pin', 'Location', 'Mumbai, Maharashtra, India', '#contact'),
      ],
      emailjs: {
        serviceId: 'service_tbdm0d2',
        templateId: 'template_pch5iiw',
        publicKey: 'CtQwEFyX5Kq-7gqmJ',
      },
    },
    footer: {
      brand: 'VIMAL',
      name: 'Vimal Kansotia',
      tagline: 'AI · Data · Web',
      quickLinks: [
        createFooterLink('footer-home', 'Home', '#home'),
        createFooterLink('footer-about', 'About', '#about'),
        createFooterLink('footer-projects', 'Projects', '#projects'),
        createFooterLink('footer-contact', 'Contact', '#contact'),
        createFooterLink('footer-resume', 'Resume', resumeUrl),
      ],
      socialLinks: [
        createSocialLink('social-email', 'mail', 'Email', 'mailto:kansotiavimal4@gmail.com'),
        createSocialLink('social-github', 'github', 'GitHub', 'https://github.com/vimal-kansotia'),
        createSocialLink('social-linkedin', 'linkedin', 'LinkedIn', 'https://www.linkedin.com/in/vimal-kansotia-586665231/'),
        createSocialLink('social-portfolio', 'external-link', 'Portfolio', 'https://vimal-kansotia.vercel.app/'),
      ],
    },
  };
}
