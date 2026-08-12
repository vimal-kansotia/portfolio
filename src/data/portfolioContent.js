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
      brand: 'JARVIS',
      ownerName: 'Ameya Ramteke',
      role: 'AI · Data · Web',
    },
    hero: {
      eyebrow: 'AI & Data Science',
      name: 'Ameya Ramteke',
      title: 'AI & DS Engineer',
      subtitle: 'Building intelligent solutions with Python, Machine Learning, and Cloud Architecture.',
      image: heroImage,
      resumeUrl,
      buttons: {
        primaryLabel: 'View Projects',
        secondaryLabel: 'Download Resume',
      },
      highlights: [
        'AI/ML and data analysis focus',
        'Cloud architecture and full-stack builds',
        'Open to internships and collaborations',
      ],
      stats: [
        { id: 'stat-projects', value: '4+', label: 'Major Projects' },
        { id: 'stat-certs', value: '5+', label: 'Certifications' },
        { id: 'stat-lead', value: 'Team', label: 'Lead & Rep' },
        { id: 'stat-specialty', value: 'AI/DS', label: 'Specialization' },
      ],
    },
    about: {
      profileName: 'Ameya Ramteke',
      profileTitle: 'AI & Data Science Engineer',
      bio: 'AI/DS engineer building ML pipelines, data products, and cloud-native apps that ship fast.',
      location: 'Nagpur, India',
      availability: 'Open to work',
      technicalFocus: 'Focused on AI/ML, analytics, and production-ready full-stack builds with a cloud-first mindset.',
      locationCity: 'Nagpur',
      timezone: 'GMT+5:30',
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=79.0506%2C21.1200%2C79.1106%2C21.1800&layer=mapnik&marker=21.150037219633752%2C79.08060139999999',
      skillBars: [
        createSkill('skill-python', 'Python & AI/ML', 90, 'cyan'),
        createSkill('skill-data', 'Data Analysis (SQL/EDA)', 85, 'purple'),
        createSkill('skill-web', 'Web Dev (HTML/CSS/JS)', 80, 'pink'),
        createSkill('skill-cloud', 'Cloud Architecture', 75, 'yellow'),
      ],
      education: [
        createEducation('edu-degree', 'B. Tech in AI & Data Science', 'Anjuman College of Engineering & Technology', 'Pursuing'),
        createEducation('edu-school', 'HSC & SSC', 'Sandipani School / Essence International School', ''),
      ],
      certifications: [
        createCertification('cert-tata', 'GenAI Powered Data Analytics (TATA)'),
        createCertification('cert-deloitte', 'Data Analytics Job Simulation (Deloitte)'),
        createCertification('cert-aws', 'Solutions Architecture (AWS)'),
        createCertification('cert-git', 'Git & GitHub Workshop (ACET)'),
        createCertification('cert-sql', 'SQL and Relational Databases 101 (Cognitive Class)'),
        createCertification('cert-prompt', 'Prompt Engineering for Everyone (Cognitive Class)'),
        createCertification('cert-claude', 'Claude 101 (Anthropic)'),
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
        'project-resume-checker',
        'Resume-Checker',
        'A system to parse, analyze, and score resumes, showing skills in data extraction and analysis.',
        ['Python', 'NLP'],
        'cyan',
        'file-text',
        'https://github.com/ameya-jarvis-07/Resume-Checker',
      ),
      createProject(
        'project-crime-analysis',
        'Crime-Analysis-Demo',
        'Crime dataset analysis to identify patterns and trends using Python and visualization techniques.',
        ['Data Viz', 'Pandas'],
        'purple',
        'bar-chart',
        'https://github.com/ameya-jarvis-07/Crime-Analysis-Demo',
      ),
      createProject(
        'project-account-management',
        'Account-Management',
        'Full-stack CRUD app for user account management, demonstrating database and UI skills.',
        ['Full Stack', 'SQL'],
        'green',
        'users',
        'https://github.com/ameya-jarvis-07/Account-Management-System',
      ),
      createProject(
        'project-hunger-bridge',
        'Hunger-Bridge',
        'A socially focused project that connects food donors with organizations to reduce food waste.',
        ['Social Good', 'Web App'],
        'yellow',
        'heart',
        'https://github.com/ameya-jarvis-07/Hunger-Bridge',
      ),
      createProject(
        'project-solar-explorer',
        'Solar-Explorer',
        'Interactive solar system exploration tool with real-time planetary data and 3D rendering.',
        ['3D Graphics', 'Web Dev'],
        'orange',
        'sun',
        'https://ameya-jarvis-07.github.io/Solar-Explorer/',
      ),
      createProject(
        'project-neuronet',
        'Neuro.Net',
        'Youth-driven workshops on psychology and artificial intelligence.',
        ['Education', 'Algorithms'],
        'blue',
        'book-open',
        'https://neuronet.co.in',
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
