"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  Code2,
  Cloud,
  BarChart2,
  Briefcase,
  Mail,
  Gamepad2,
  RotateCcw,
  ArrowLeft,
  Database,
  Terminal,
  Server,
  Layers,
  Cpu,
  Globe,
  FileCode,
  Box,
  Layout,
  Flame,
  Coffee,
  GitBranch,
  Trash2
} from 'lucide-react';

/**
 * High-Definition Tech Logo Badges with Custom Brand Icons & Vibrant Colors
 */
const TechLogoBadge = ({ name, color }) => {
  switch (name) {
    case 'React':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="3.5" fill="#61DAFB" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="2" transform="rotate(30 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="2" transform="rotate(90 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="2" transform="rotate(150 16 16)" />
        </svg>
      );
    case 'Python':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M15.8 4C10.2 4 10.5 6.4 10.5 6.4V8.9H16V9.7H8.3C8.3 9.7 4 9.2 4 14.8C4 20.4 7.7 20.1 7.7 20.1H9.3V17.5C9.3 14.8 11.6 12.5 14.3 12.5H19.7C22.4 12.5 24 10.8 24 8.2C24 5.6 21.4 4 15.8 4Z" fill="#3776AB" />
          <path d="M16.2 28C21.8 28 21.5 25.6 21.5 25.6V23.1H16V22.3H23.7C23.7 22.3 28 22.8 28 17.2C28 11.6 24.3 11.9 24.3 11.9H22.7V14.5C22.7 17.2 20.4 19.5 17.7 19.5H12.3C9.6 19.5 8 21.2 8 23.8C8 26.4 10.6 28 16.2 28Z" fill="#FFD43B" />
          <circle cx="13.2" cy="6.6" r="1.2" fill="#FFFFFF" />
          <circle cx="18.8" cy="25.4" r="1.2" fill="#FFFFFF" />
        </svg>
      );
    case 'JavaScript':
      return (
        <div style={{ background: '#F7DF1E', width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000', fontWeight: 900, fontSize: 14, fontFamily: 'monospace' }}>
          JS
        </div>
      );
    case 'Node.js':
      return (
        <div style={{ background: 'rgba(51, 153, 51, 0.25)', border: '1.5px solid #339933', width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#66CC66', fontWeight: 900, fontSize: 11 }}>
          Node
        </div>
      );
    case 'AWS':
      return <Cloud size={28} color="#FF9900" />;
    case 'Docker':
      return <Box size={28} color="#2496ED" />;
    case 'GitHub':
      return (
        <div style={{ background: '#FFFFFF', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000', fontWeight: 900, fontSize: 15 }}>
          🐙
        </div>
      );
    case 'PostgreSQL':
      return <Database size={28} color="#4169E1" />;
    case 'MongoDB':
      return <Flame size={28} color="#47A248" />;
    case 'Power BI':
      return <BarChart2 size={28} color="#F2C811" />;
    case 'Linux':
      return <Terminal size={28} color="#FCC624" />;
    case 'SQL':
      return <Server size={28} color="#00758F" />;
    case 'HTML5':
      return (
        <div style={{ background: '#E34F26', width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 900, fontSize: 13 }}>
          H5
        </div>
      );
    case 'CSS3':
      return (
        <div style={{ background: '#1572B6', width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 900, fontSize: 13 }}>
          C3
        </div>
      );
    case 'Java':
      return <Coffee size={28} color="#ED8B00" />;
    case 'Git':
      return <GitBranch size={28} color="#F05032" />;
    case 'Vue.js':
      return <Layout size={28} color="#4FC08D" />;
    case 'TypeScript':
      return (
        <div style={{ background: '#3178C6', width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 900, fontSize: 14, fontFamily: 'monospace' }}>
          TS
        </div>
      );
    case 'Angular':
      return (
        <div style={{ background: '#DD0031', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 900, fontSize: 14 }}>
          A
        </div>
      );
    case 'Tailwind':
      return <Globe size={28} color="#06B6D4" />;
    case 'Redshift':
      return <Cpu size={28} color="#8C4FFF" />;
    case 'Sass':
      return <FileCode size={28} color="#CC6699" />;
    case 'Figma':
      return <Layers size={28} color="#F24E1E" />;
    case 'Android':
      return <Bot size={28} color="#3DDC84" />;
    default:
      return <Code2 size={28} color={color || '#a3e635'} />;
  }
};

/**
 * 16 Tech Logos for the Binary Mind-Reading Game
 */
const GAME_LOGOS = [
  { id: 0, name: 'React', color: '#61DAFB' },
  { id: 1, name: 'Python', color: '#3776AB' },
  { id: 2, name: 'JavaScript', color: '#F7DF1E' },
  { id: 3, name: 'Node.js', color: '#339933' },
  { id: 4, name: 'AWS', color: '#FF9900' },
  { id: 5, name: 'Docker', color: '#2496ED' },
  { id: 6, name: 'GitHub', color: '#FFFFFF' },
  { id: 7, name: 'PostgreSQL', color: '#4169E1' },
  { id: 8, name: 'MongoDB', color: '#47A248' },
  { id: 9, name: 'Power BI', color: '#F2C811' },
  { id: 10, name: 'Linux', color: '#FCC624' },
  { id: 11, name: 'SQL', color: '#00758F' },
  { id: 12, name: 'HTML5', color: '#E34F26' },
  { id: 13, name: 'CSS3', color: '#1572B6' },
  { id: 14, name: 'Java', color: '#ED8B00' },
  { id: 15, name: 'Git', color: '#F05032' },
];

/**
 * Decoy extra logos to keep the 12-logo illusion grid
 */
const DECOY_LOGOS = [
  { name: 'Vue.js', color: '#4FC08D' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Redshift', color: '#8C4FFF' },
  { name: 'Sass', color: '#CC6699' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Android', color: '#3DDC84' },
];

export default function AIChatbot({ ownerName = 'Vimal Kansotia', theme = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hey, I'm Vimal 👋 Well, an interactive AI version of me. Ask me anything—my work, my tech stack, AWS leadership, or even play a game! What do you want to know?`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Mind Reading Game State
  const [gameStep, setGameStep] = useState('idle'); // idle -> pick -> round -> reveal
  const [currentRound, setCurrentRound] = useState(0); // 0, 1, 2, 3
  const [binaryAnswers, setBinaryAnswers] = useState([]);
  const [guessedLogo, setGuessedLogo] = useState(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, gameStep, currentRound, isOpen]);

  // Clear Chat Handler
  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'ai',
        text: `Chat cleared! Ask me anything about my projects, skills, AWS leadership, or click Play a game!`,
      },
    ]);
    setGameStep('idle');
    setCurrentRound(0);
    setBinaryAnswers([]);
    setGuessedLogo(null);
  };

  // Handle Quick Prompt Click
  const handleQuickPrompt = (promptText) => {
    if (promptText === 'Play a game') {
      startLogoGame();
      return;
    }
    sendMessage(promptText);
  };

  // Chat Response Generator
  const sendMessage = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let aiText = getAIResponse(query);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'ai', text: aiText },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const getAIResponse = (input) => {
    const trimmed = input.trim();
    const lower = trimmed.toLowerCase();
    const timeGreeting = getTimeBasedGreeting();

    // Check for user introduction / greeting (e.g. "hi, I'm Rahul", "I am Rahul", "my name is Rahul", "hello")
    const nameMatch =
      trimmed.match(/(?:hi|hello|hey)?\s*,?\s*(?:i'?m|i am|my name is|this is)\s+([a-zA-Z]+)/i);

    const nonNameWords = ['what', 'why', 'how', 'who', 'tell', 'show', 'play', 'projects', 'skills', 'contact', 'hire', 'game', 'aws', 'python', 'sql', 'react', 'there', 'you'];

    if (
      lower.startsWith('hi') ||
      lower.startsWith('hello') ||
      lower.startsWith('hey') ||
      lower.includes("i'm") ||
      lower.includes("i am") ||
      lower.includes("my name is") ||
      lower.includes("this is")
    ) {
      if (nameMatch && nameMatch[1] && !nonNameWords.includes(nameMatch[1].toLowerCase())) {
        const name = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1).toLowerCase();
        return `Hello ${name}! ${timeGreeting} 🌅 Nice to meet you! How can I help you explore Vimal's portfolio today?`;
      }
      return `Hello! ${timeGreeting} 👋 Welcome to Vimal Kansotia's AI portfolio! How can I assist you today?`;
    }

    // Top Priority: If sentence mentions "talk" or "communication" or "contact"
    if (
      lower.includes('talk') ||
      lower.includes('communication') ||
      lower.includes('communicate') ||
      lower.includes('contact') ||
      lower.includes('reach') ||
      lower.includes('email') ||
      lower.includes('linkedin') ||
      lower.includes('connect') ||
      lower.includes('speak') ||
      lower.includes('call')
    ) {
      return `I'd love to connect with you! 🚀 You can reach Vimal Kansotia directly via:
📧 Email: kansotiavimal4@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/vimal-kansotia-586665231/
🐙 GitHub: github.com/vimal-kansotia
Or feel free to leave a message in the Contact section at the bottom of the page!`;
    }

    if (lower.includes('project') || lower.includes('work')) {
      return `I've built several high-impact projects! Highlights include:
1. ☁️ AWS Cloud Data Engineering Pipeline (S3, Glue, Athena, Redshift).
2. 📊 AI-Powered Data Analytics Dashboard (Python, Streamlit, Scikit-Learn).
3. ⚡ Production Full-Stack Web Applications (React, Next.js, Node.js).
Check out the Projects section below for live links and code repos!`;
    }

    if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech')) {
      return `My core tech stack covers:
• Languages: Python, SQL, JavaScript, C++, R, Java.
• Cloud & Data: AWS (S3, Glue, Lambda, Athena, Redshift), Apache Parquet, Data Lakes.
• Databases: MySQL, MongoDB, PostgreSQL, Amazon RDS.
• Analytics & Dev: Power BI, Pandas, Scikit-learn, Docker, Git, Linux.`;
    }

    // Specific Leadership Queries
    if (lower.includes('placement') || lower.includes('training') || lower.includes('t&p')) {
      return `🎓 Training & Development Coordinator — Placement Cell, B.K. Birla College:
I coordinated campus recruitment drives, organized technical skill enhancement workshops, conducted resume building & mock interview sessions, and bridged student talents with industry recruiters to boost college placements.`;
    }

    if (lower.includes('mpower') || lower.includes('mental health') || lower.includes('wellness')) {
      return `💚 MPower Core Team Member (3 Years) — B.K. Birla College:
Served 3 years on the core leadership team of MPower, advocating youth mental health awareness, spearheading campus wellness initiatives, organizing peer support sessions, and hosting college-wide awareness campaigns.`;
    }

    if (lower.includes('astronomical') || lower.includes('astronomy') || lower.includes('stargazing') || lower.includes('class representative') || lower.includes('cr')) {
      return `🌟 Class Representative (3 Years) & Head of Astronomical Club — B.K. Birla College:
• Served as Class Representative (CR) for 3 consecutive years, representing student interests to college faculty.
• Headed the Astronomical Club, organizing stargazing camps, astrophysics seminars, and hosting major intercollegiate and intracollegiate events.`;
    }

    if (lower.includes('aws student') || lower.includes('aws builder') || lower.includes('cloud builder')) {
      return `☁️ AWS Student Builder Group — Core Team Lead:
Led a 100+ member cloud student community, organized hands-on AWS workshops (S3, Glue, Lambda, Redshift), mentored peers on cloud data architectures, and hosted tech hackathons.`;
    }

    // General Leadership Query (lists ALL 4 leadership roles)
    if (lower.includes('leadership') || lower.includes('leader') || lower.includes('role') || lower.includes('position') || lower.includes('community') || lower.includes('birla')) {
      return `🏆 Here are all my 4 key leadership & coordinator roles at B.K. Birla College:

1. ☁️ AWS Student Builder Group — Core Team Lead (100+ members, mentoring & cloud workshops)
2. 🎓 Training & Development Coordinator — Placement Cell (Campus recruitment drives & interview prep)
3. 💚 MPower Core Team Member (3 Years driving youth mental health & wellness campaigns)
4. 🌟 Class Representative (3 Years) & Head of Astronomical Club (Stargazing camps & intercollegiate events)

Feel free to ask me specifically about any of these roles!`;
    }

    if (lower.includes('hire') || lower.includes('why')) {
      return `You should hire me because I combine strong Cloud Architecture (AWS) & Data Engineering skills with production-ready web development. I focus on building scalable, data-driven applications that deliver real business value fast!`;
    }

    if (lower.includes('game') || lower.includes('play')) {
      startLogoGame();
      return `Let's play the Mind Reading Logo Game! 🎯`;
    }

    return `Thanks for asking! I'm passionate about Cloud Architecture, Data Engineering, and Full-Stack Development. Feel free to explore my portfolio sections or click any of the prompt chips below!`;
  };

  // --- LOGO GAME LOGIC ---
  const startLogoGame = () => {
    setGameStep('pick');
    setCurrentRound(0);
    setBinaryAnswers([]);
    setGuessedLogo(null);
  };

  const handleGotOne = () => {
    setGameStep('round');
    setCurrentRound(0);
    setBinaryAnswers([]);
  };

  const handleRoundAnswer = (answerYes) => {
    const newAnswers = [...binaryAnswers, answerYes ? 1 : 0];
    setBinaryAnswers(newAnswers);

    if (currentRound < 3) {
      setCurrentRound(currentRound + 1);
    } else {
      const logoIndex =
        newAnswers[0] * 1 +
        newAnswers[1] * 2 +
        newAnswers[2] * 4 +
        newAnswers[3] * 8;

      const target = GAME_LOGOS.find((l) => l.id === logoIndex) || GAME_LOGOS[0];
      setGuessedLogo(target);
      setGameStep('reveal');
    }
  };

  // Generate 12 logos for current round
  const getRoundGrid = (roundBit) => {
    const matchingLogos = GAME_LOGOS.filter((l) => (l.id & (1 << roundBit)) !== 0);
    const fillerCount = 12 - matchingLogos.length;
    const fillers = DECOY_LOGOS.slice(0, fillerCount);
    return [...matchingLogos, ...fillers];
  };

  return (
    <>
      {/* Floating Action Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="chatbot-launcher-btn"
        aria-label="Ask me anything"
      >
        <div className={`chatbot-launcher-inner ${theme}`}>
          <Bot size={22} style={{ color: 'var(--color-primary)' }} />
          <span className={`chatbot-launcher-text ${theme}`}>Ask me anything</span>
          <span className={`chatbot-pulse-dot ${theme}`} />
        </div>
      </button>

      {/* Full Modal Chatbot Overlay */}
      {isOpen && (
        <div className="chatbot-modal-overlay">
          <div className={`chatbot-modal-card glass card-3d ${theme}`}>
            {/* Modal Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-left">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="chatbot-close-icon-btn"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="chatbot-avatar-box">
                  <img
                    src="/Assets/profile-formal.png"
                    alt={ownerName}
                    className="chatbot-avatar-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="chatbot-avatar-fallback">VK</div>
                </div>
                <div className="chatbot-title-box">
                  <h3 className="chatbot-title">Vimal Kansotia</h3>
                  <p className="chatbot-subtitle">Ask me anything</p>
                </div>
              </div>

              <div className="chatbot-header-right">
                {/* Clear Chat Button (Icon Only) */}
                <button
                  type="button"
                  onClick={handleClearChat}
                  className="chatbot-clear-btn"
                  title="Clear Chat"
                >
                  <Trash2 size={16} />
                </button>

                <span className="chatbot-model-badge">
                  <svg width="18" height="18" viewBox="0 0 50 50" fill="none" className="mr-1.5 text-[var(--color-accent)]">
                    <path fillRule="evenodd" clipRule="evenodd" d="M42.27 21.05a10.96 10.96 0 00-.95-9.01 11.08 11.08 0 00-11.93-5.32 11.12 11.12 0 00-8.23-3.66A10.97 10.97 0 0013.82 8.4a11.08 11.08 0 00-7.33 5.32 10.96 10.96 0 001.36 13 10.96 10.96 0 00.95 9.01 11.08 11.08 0 0011.93 5.32 11.12 11.12 0 008.23 3.66 10.97 10.97 0 007.34-5.34 11.08 11.08 0 007.33-5.32 10.96 10.96 0 00-1.36-13zm-17.27 23.9a8.47 8.47 0 01-4.88-1.53l.26-.15 8.76-5.06a1.45 1.45 0 00.72-1.25v-12.36l3.7 2.14a.13.13 0 01.07.1v10.24a8.53 8.53 0 01-8.56 8.56l.33-.69zm-17.72-7.58a8.45 8.45 0 01-1.01-5.51l.26.15 8.76 5.06a1.45 1.45 0 001.46 0l10.7-6.18v4.28a.15.15 0 01-.06.11l-8.87 5.12a8.52 8.52 0 01-11.24-3.03zm-2.25-19.28a8.47 8.47 0 014.28-3.61l-.01.3v10.12a1.45 1.45 0 00.72 1.25l10.7 6.18-3.7 2.14a.14.14 0 01-.13.02l-8.87-5.12a8.52 8.52 0 01-3.0-11.28l.02-.01zm30.43 5.61l-10.7-6.18 3.7-2.14a.14.14 0 01.13-.02l8.87 5.12a8.52 8.52 0 011.29 14.85v-10.38a1.45 1.45 0 00-.71-1.25zm4.49-5.61a8.47 8.47 0 01-1.01 5.51l-.26-.15-8.76-5.06a1.45 1.45 0 00-1.46 0l-10.7 6.18v-4.28a.15.15 0 01.06-.11l8.87-5.12a8.52 8.52 0 0112.56 8.56l-.3.47zm-21.71-13.78a8.47 8.47 0 015.28 1.91l-.26.15-8.76 5.06a1.45 1.45 0 00-.72 1.25v12.36l-3.7-2.14a.13.13 0 01-.07-.1V12.92a8.53 8.53 0 018.23-8.52z" fill="currentColor"/>
                  </svg>
                  OpenAI
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="chatbot-body">
              {/* Chat Messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chatbot-msg-row ${msg.sender === 'user' ? 'user' : 'ai'}`}
                >
                  <div className={`chatbot-msg-bubble ${msg.sender === 'user' ? 'user' : 'ai'}`}>
                    <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chatbot-msg-row ai">
                  <div className="chatbot-msg-bubble ai typing">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </div>
              )}

              {/* QUICK PROMPT CHIPS */}
              {gameStep === 'idle' && (
                <div className="chatbot-quick-section">
                  <span className="chatbot-quick-label">TRY ASKING:</span>
                  <div className="chatbot-chips-grid">
                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('What projects have you worked on?')}
                      className="chatbot-chip-btn"
                    >
                      <Code2 size={15} className="text-[#a3e635]" />
                      <span>What projects have you worked on?</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Tell me about your technical skills.')}
                      className="chatbot-chip-btn"
                    >
                      <BarChart2 size={15} className="text-[#E2FF6F]" />
                      <span>Tell me about your technical skills.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Tell me about your AWS leadership.')}
                      className="chatbot-chip-btn"
                    >
                      <Cloud size={15} className="text-[#a3e635]" />
                      <span>Tell me about your AWS leadership.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Why should I hire you?')}
                      className="chatbot-chip-btn"
                    >
                      <Briefcase size={15} className="text-[#E2FF6F]" />
                      <span>Why should I hire you?</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('How can I reach you?')}
                      className="chatbot-chip-btn"
                    >
                      <Mail size={15} className="text-[#a3e635]" />
                      <span>How can I reach you?</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Play a game')}
                      className={`chatbot-chip-btn game-highlight ${theme}`}
                    >
                      <Gamepad2 size={18} className="game-icon animate-pulse" />
                      <span className="game-text font-bold">🎮 Play a game</span>
                    </button>
                  </div>
                </div>
              )}

              {/* --- MIND READING LOGO GAME ENGINE (Compact Sleek Design) --- */}
              {gameStep !== 'idle' && (
                <div className="chatbot-game-card compact">
                  {/* Exit Game Close (X) Button */}
                  <button
                    type="button"
                    onClick={() => setGameStep('idle')}
                    className="chatbot-game-exit-x-btn"
                    title="Exit Game"
                  >
                    <X size={16} />
                  </button>

                  {/* GAME STEP 1: INITIAL 16-LOGO PICK SELECTION */}
                  {gameStep === 'pick' && (
                    <>
                      <div className="chatbot-game-header">
                        <span className="chatbot-game-badge">✨ Guess the logo</span>
                        <p className="chatbot-game-prompt">
                          Pick one logo and keep it in your head. Don't tell me.
                        </p>
                      </div>

                      <div className="chatbot-logos-grid compact">
                        {GAME_LOGOS.map((logo) => (
                          <div key={logo.id} className="chatbot-logo-item compact">
                            <div className="chatbot-logo-icon-box">
                              <TechLogoBadge name={logo.name} color={logo.color} />
                            </div>
                            <span className="chatbot-logo-name compact">{logo.name}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={handleGotOne}
                        className="chatbot-game-primary-btn"
                      >
                        Got one, read my mind ➔
                      </button>
                    </>
                  )}

                  {/* GAME STEP 2: BINARY SEARCH ROUNDS (1 to 4) */}
                  {gameStep === 'round' && (
                    <>
                      <div className="chatbot-game-header">
                        <div className="flex items-center justify-between">
                          <span className="chatbot-game-badge">✨ Guess the logo</span>
                          <span className="chatbot-round-pill">Round {currentRound + 1} of 4</span>
                        </div>
                        <p className="chatbot-game-prompt">Is your logo in here?</p>
                      </div>

                      <div className="chatbot-logos-grid compact">
                        {getRoundGrid(currentRound).map((logo, idx) => (
                          <div key={idx} className="chatbot-logo-item compact">
                            <div className="chatbot-logo-icon-box">
                              <TechLogoBadge name={logo.name} color={logo.color} />
                            </div>
                            <span className="chatbot-logo-name compact">{logo.name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="chatbot-game-binary-btns">
                        <button
                          type="button"
                          onClick={() => handleRoundAnswer(true)}
                          className="chatbot-game-yes-btn"
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRoundAnswer(false)}
                          className="chatbot-game-nope-btn"
                        >
                          Nope
                        </button>
                      </div>
                    </>
                  )}

                  {/* GAME STEP 3: THE MIND-READING REVEAL */}
                  {gameStep === 'reveal' && guessedLogo && (
                    <div className="chatbot-game-reveal-box">
                      <Sparkles size={32} className="text-[#E2FF6F] animate-pulse mx-auto mb-1" />
                      <h4 className="chatbot-reveal-title">I Read Your Mind! 🧠</h4>
                      <p className="chatbot-reveal-subtitle">You were thinking of:</p>

                      <div className="chatbot-reveal-logo-card compact">
                        <div className="chatbot-reveal-icon-box mb-1">
                          <TechLogoBadge name={guessedLogo.name} color={guessedLogo.color} />
                        </div>
                        <h3 className="chatbot-reveal-name">{guessedLogo.name}</h3>
                      </div>

                      <div className="chatbot-game-action-btns">
                        <button
                          type="button"
                          onClick={startLogoGame}
                          className="chatbot-game-retry-btn"
                        >
                          <RotateCcw size={14} className="mr-1" /> Play Again
                        </button>
                        <button
                          type="button"
                          onClick={() => setGameStep('idle')}
                          className="chatbot-game-exit-btn"
                        >
                          Back to Chat
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="chatbot-input-bar"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="chatbot-input-field"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="chatbot-send-btn"
              >
                <Send size={16} />
              </button>
            </form>

            <div className="chatbot-footer-disclaimer">
              <span>AI assistant tuned for Vimal Kansotia's Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
