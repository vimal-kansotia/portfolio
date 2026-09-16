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

/**
 * ============================================================
 * 1. RETRO NEON SNAKE GAME COMPONENT
 * ============================================================
 */
const SnakeGame = ({ onBack, onClose }) => {
  const canvasRef = useRef(null);
  const GRID_SIZE = 15;
  const CELL_SIZE = 18; // 270 x 270 px
  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const snakeRef = useRef([
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 7, y: 9 },
  ]);
  const dirRef = useRef({ x: 0, y: -1 }); // Initial direction: UP
  const nextDirRef = useRef({ x: 0, y: -1 });
  const foodRef = useRef({ x: 7, y: 3 });
  const isGameOverRef = useRef(false);
  const isPausedRef = useRef(false);

  // Sync high score with localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_snake_hs');
      if (saved) setHighScore(parseInt(saved, 10) || 0);
    } catch (e) {}
  }, []);

  const spawnFood = (currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const onSnake = currentSnake.some((seg) => seg.x === newFood.x && seg.y === newFood.y);
      if (!onSnake) break;
    }
    return newFood;
  };

  const resetGame = () => {
    snakeRef.current = [
      { x: 7, y: 7 },
      { x: 7, y: 8 },
      { x: 7, y: 9 },
    ];
    dirRef.current = { x: 0, y: -1 };
    nextDirRef.current = { x: 0, y: -1 };
    foodRef.current = spawnFood(snakeRef.current);
    isGameOverRef.current = false;
    setIsGameOver(false);
    setIsPaused(false);
    isPausedRef.current = false;
    setScore(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(key)) {
        e.preventDefault();
      }

      if (key === ' ' || key === 'p' || key === 'P') {
        setIsPaused((prev) => {
          isPausedRef.current = !prev;
          return !prev;
        });
        return;
      }

      const cur = dirRef.current;
      if ((key === 'ArrowUp' || key === 'w' || key === 'W') && cur.y === 0) {
        nextDirRef.current = { x: 0, y: -1 };
      } else if ((key === 'ArrowDown' || key === 's' || key === 'S') && cur.y === 0) {
        nextDirRef.current = { x: 0, y: 1 };
      } else if ((key === 'ArrowLeft' || key === 'a' || key === 'A') && cur.x === 0) {
        nextDirRef.current = { x: -1, y: 0 };
      } else if ((key === 'ArrowRight' || key === 'd' || key === 'D') && cur.x === 0) {
        nextDirRef.current = { x: 1, y: 0 };
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDpad = (direction) => {
    const cur = dirRef.current;
    if (direction === 'UP' && cur.y === 0) nextDirRef.current = { x: 0, y: -1 };
    if (direction === 'DOWN' && cur.y === 0) nextDirRef.current = { x: 0, y: 1 };
    if (direction === 'LEFT' && cur.x === 0) nextDirRef.current = { x: -1, y: 0 };
    if (direction === 'RIGHT' && cur.x === 0) nextDirRef.current = { x: 1, y: 0 };
  };

  // Game Loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (isGameOverRef.current || isPausedRef.current) return;

      dirRef.current = nextDirRef.current;
      const head = {
        x: snakeRef.current[0].x + dirRef.current.x,
        y: snakeRef.current[0].y + dirRef.current.y,
      };

      // Wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        isGameOverRef.current = true;
        setIsGameOver(true);
        return;
      }

      // Self collision
      if (snakeRef.current.some((seg) => seg.x === head.x && seg.y === head.y)) {
        isGameOverRef.current = true;
        setIsGameOver(true);
        return;
      }

      const newSnake = [head, ...snakeRef.current];

      // Food collision
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        setScore((prev) => {
          const newScore = prev + 10;
          setHighScore((h) => {
            if (newScore > h) {
              try { localStorage.setItem('portfolio_snake_hs', newScore); } catch (e) {}
              return newScore;
            }
            return h;
          });
          return newScore;
        });
        foodRef.current = spawnFood(newSnake);
      } else {
        newSnake.pop();
      }

      snakeRef.current = newSnake;

      // Render to Canvas
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Dark background
      ctx.fillStyle = '#0f0d0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= GRID_SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * CELL_SIZE);
        ctx.lineTo(canvas.width, i * CELL_SIZE);
        ctx.stroke();
      }

      // Glowing food
      const food = foodRef.current;
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(
        food.x * CELL_SIZE + CELL_SIZE / 2,
        food.y * CELL_SIZE + CELL_SIZE / 2,
        CELL_SIZE / 2 - 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.shadowBlur = 0;

      // Snake body & head
      newSnake.forEach((seg, index) => {
        if (index === 0) {
          // Head
          ctx.fillStyle = '#E2FF6F';
          ctx.shadowColor = '#E2FF6F';
          ctx.shadowBlur = 8;
        } else {
          // Alternating segments
          ctx.fillStyle = index % 2 === 0 ? '#6a8c1a' : '#8cb030';
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.roundRect(
          seg.x * CELL_SIZE + 1.5,
          seg.y * CELL_SIZE + 1.5,
          CELL_SIZE - 3,
          CELL_SIZE - 3,
          4
        );
        ctx.fill();
      });
      ctx.shadowBlur = 0;
    }, 125);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="arcade-game-container">
      <div className="arcade-header">
        <button type="button" onClick={onBack} className="arcade-back-btn">
          <ArrowLeft size={13} /> Arcade
        </button>
        <span className="arcade-title">🐍 Neon Snake</span>
        <button type="button" onClick={onClose} className="chatbot-game-exit-x-btn" title="Exit Game">
          <X size={15} />
        </button>
      </div>

      <div className="arcade-score-bar">
        <span>Score: <strong>{score}</strong></span>
        <span>Best: <strong>{highScore}</strong></span>
        <button
          type="button"
          onClick={() => setIsPaused((p) => { isPausedRef.current = !p; return !p; })}
          className="arcade-pause-btn"
        >
          {isPaused ? '▶ Resume' : '⏸ Pause'}
        </button>
      </div>

      <div className="arcade-canvas-box">
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="arcade-canvas"
        />

        {isGameOver && (
          <div className="arcade-overlay">
            <h4 className="arcade-over-title">GAME OVER</h4>
            <p className="arcade-over-score">Final Score: <strong>{score}</strong></p>
            <button
              type="button"
              onClick={resetGame}
              className="chatbot-game-primary-btn"
              style={{ width: 'auto', padding: '6px 18px' }}
            >
              <RotateCcw size={14} style={{ display: 'inline', marginRight: 6 }} /> Play Again
            </button>
          </div>
        )}

        {isPaused && !isGameOver && (
          <div className="arcade-overlay">
            <h4 className="arcade-title" style={{ fontSize: '1.2rem', marginBottom: 8 }}>PAUSED</h4>
            <button
              type="button"
              onClick={() => { setIsPaused(false); isPausedRef.current = false; }}
              className="chatbot-game-primary-btn"
              style={{ width: 'auto', padding: '6px 18px' }}
            >
              Resume Game
            </button>
          </div>
        )}
      </div>

      {/* On-screen touch D-Pad */}
      <div className="arcade-dpad-container">
        <div className="arcade-dpad-row">
          <button type="button" onClick={() => handleDpad('UP')} className="dpad-btn" aria-label="Up">▲</button>
        </div>
        <div className="arcade-dpad-row">
          <button type="button" onClick={() => handleDpad('LEFT')} className="dpad-btn" aria-label="Left">◀</button>
          <button type="button" onClick={() => handleDpad('DOWN')} className="dpad-btn" aria-label="Down">▼</button>
          <button type="button" onClick={() => handleDpad('RIGHT')} className="dpad-btn" aria-label="Right">▶</button>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================
 * 2. RETRO CYBER TETRIS GAME COMPONENT
 * ============================================================
 */
const TETROMINOES = {
  I: { shape: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], color: '#06b6d4' },
  J: { shape: [[1,0,0],[1,1,1],[0,0,0]], color: '#3b82f6' },
  L: { shape: [[0,0,1],[1,1,1],[0,0,0]], color: '#f97316' },
  O: { shape: [[1,1],[1,1]], color: '#eab308' },
  S: { shape: [[0,1,1],[1,1,0],[0,0,0]], color: '#22c55e' },
  T: { shape: [[0,1,0],[1,1,1],[0,0,0]], color: '#a855f7' },
  Z: { shape: [[1,1,0],[0,1,1],[0,0,0]], color: '#ef4444' }
};

const TETRIS_KEYS = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
const TETRIS_COLS = 10;
const TETRIS_ROWS = 18;
const TETRIS_CELL = 16; // 160 x 288 px

const TetrisGame = ({ onBack, onClose }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const gridRef = useRef(
    Array.from({ length: TETRIS_ROWS }, () => Array(TETRIS_COLS).fill(0))
  );

  const getRandomPiece = () => {
    const key = TETRIS_KEYS[Math.floor(Math.random() * TETRIS_KEYS.length)];
    const def = TETROMINOES[key];
    return {
      shape: def.shape,
      color: def.color,
      x: Math.floor((TETRIS_COLS - def.shape[0].length) / 2),
      y: 0,
    };
  };

  const pieceRef = useRef(null);
  const isGameOverRef = useRef(false);
  const isPausedRef = useRef(false);
  const levelRef = useRef(1);

  // Initialize piece on mount
  useEffect(() => {
    pieceRef.current = getRandomPiece();
  }, []);

  const checkCollision = (shape, posX, posY, grid) => {
    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (shape[r][c]) {
          const newX = posX + c;
          const newY = posY + r;
          if (newX < 0 || newX >= TETRIS_COLS || newY >= TETRIS_ROWS) return true;
          if (newY >= 0 && grid[newY][newX]) return true;
        }
      }
    }
    return false;
  };

  const rotateMatrix = (matrix) => {
    const N = matrix.length;
    const result = Array.from({ length: N }, () => Array(N).fill(0));
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        result[c][N - 1 - r] = matrix[r][c];
      }
    }
    return result;
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas background
    ctx.fillStyle = '#0f0d0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle neon grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let c = 0; c <= TETRIS_COLS; c++) {
      ctx.beginPath();
      ctx.moveTo(c * TETRIS_CELL, 0);
      ctx.lineTo(c * TETRIS_CELL, canvas.height);
      ctx.stroke();
    }
    for (let r = 0; r <= TETRIS_ROWS; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * TETRIS_CELL);
      ctx.lineTo(canvas.width, r * TETRIS_CELL);
      ctx.stroke();
    }

    const grid = gridRef.current;
    // Draw locked blocks
    for (let r = 0; r < TETRIS_ROWS; r++) {
      for (let c = 0; c < TETRIS_COLS; c++) {
        if (grid[r][c]) {
          drawBlock(ctx, c, r, grid[r][c]);
        }
      }
    }

    // Active piece & ghost piece
    const p = pieceRef.current;
    if (p) {
      // Calculate ghost landing position
      let ghostY = p.y;
      while (!checkCollision(p.shape, p.x, ghostY + 1, grid)) {
        ghostY++;
      }

      // Draw ghost piece outline
      if (ghostY !== p.y) {
        for (let r = 0; r < p.shape.length; r++) {
          for (let c = 0; c < p.shape[r].length; c++) {
            if (p.shape[r][c]) {
              const drawX = (p.x + c) * TETRIS_CELL;
              const drawY = (ghostY + r) * TETRIS_CELL;
              ctx.strokeStyle = p.color;
              ctx.lineWidth = 1.5;
              ctx.strokeRect(drawX + 1.5, drawY + 1.5, TETRIS_CELL - 3, TETRIS_CELL - 3);
            }
          }
        }
      }

      // Draw active falling piece
      for (let r = 0; r < p.shape.length; r++) {
        for (let c = 0; c < p.shape[r].length; c++) {
          if (p.shape[r][c]) {
            drawBlock(ctx, p.x + c, p.y + r, p.color);
          }
        }
      }
    }
  };

  const drawBlock = (ctx, col, row, color) => {
    const x = col * TETRIS_CELL;
    const y = row * TETRIS_CELL;
    ctx.fillStyle = color;
    ctx.fillRect(x + 1, y + 1, TETRIS_CELL - 2, TETRIS_CELL - 2);

    // Bevel highlights for retro 3D feel
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.fillRect(x + 1, y + 1, TETRIS_CELL - 2, 2);
    ctx.fillRect(x + 1, y + 1, 2, TETRIS_CELL - 2);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.fillRect(x + 1, y + TETRIS_CELL - 3, TETRIS_CELL - 2, 2);
    ctx.fillRect(x + TETRIS_CELL - 3, y + 1, 2, TETRIS_CELL - 2);
  };

  const lockPiece = () => {
    const p = pieceRef.current;
    if (!p) return;
    const grid = gridRef.current;

    for (let r = 0; r < p.shape.length; r++) {
      for (let c = 0; c < p.shape[r].length; c++) {
        if (p.shape[r][c]) {
          const gridY = p.y + r;
          const gridX = p.x + c;
          if (gridY < 0) {
            isGameOverRef.current = true;
            setIsGameOver(true);
            return;
          }
          grid[gridY][gridX] = p.color;
        }
      }
    }

    // Line clearing
    let cleared = 0;
    for (let r = TETRIS_ROWS - 1; r >= 0; r--) {
      if (grid[r].every((cell) => cell !== 0)) {
        grid.splice(r, 1);
        grid.unshift(Array(TETRIS_COLS).fill(0));
        cleared++;
        r++;
      }
    }

    if (cleared > 0) {
      const lineScores = [0, 100, 300, 500, 800];
      const addedScore = (lineScores[cleared] || 800) * levelRef.current;
      setScore((s) => s + addedScore);
      setLines((l) => {
        const newLines = l + cleared;
        const newLvl = Math.floor(newLines / 5) + 1;
        setLevel(newLvl);
        levelRef.current = newLvl;
        return newLines;
      });
    }

    // Spawn next piece
    const nextP = getRandomPiece();
    if (checkCollision(nextP.shape, nextP.x, nextP.y, grid)) {
      isGameOverRef.current = true;
      setIsGameOver(true);
    } else {
      pieceRef.current = nextP;
    }
  };

  const moveLeft = () => {
    if (isGameOverRef.current || isPausedRef.current) return;
    const p = pieceRef.current;
    if (!p) return;
    if (!checkCollision(p.shape, p.x - 1, p.y, gridRef.current)) {
      p.x -= 1;
      draw();
    }
  };

  const moveRight = () => {
    if (isGameOverRef.current || isPausedRef.current) return;
    const p = pieceRef.current;
    if (!p) return;
    if (!checkCollision(p.shape, p.x + 1, p.y, gridRef.current)) {
      p.x += 1;
      draw();
    }
  };

  const rotatePiece = () => {
    if (isGameOverRef.current || isPausedRef.current) return;
    const p = pieceRef.current;
    if (!p) return;
    const rotated = rotateMatrix(p.shape);
    const kicks = [0, -1, 1, -2, 2];
    for (let kick of kicks) {
      if (!checkCollision(rotated, p.x + kick, p.y, gridRef.current)) {
        p.shape = rotated;
        p.x += kick;
        draw();
        return;
      }
    }
  };

  const softDrop = () => {
    if (isGameOverRef.current || isPausedRef.current) return;
    const p = pieceRef.current;
    if (!p) return;
    if (!checkCollision(p.shape, p.x, p.y + 1, gridRef.current)) {
      p.y += 1;
      setScore((s) => s + 1);
      draw();
    } else {
      lockPiece();
      draw();
    }
  };

  const hardDrop = () => {
    if (isGameOverRef.current || isPausedRef.current) return;
    const p = pieceRef.current;
    if (!p) return;
    let dropDist = 0;
    while (!checkCollision(p.shape, p.x, p.y + 1, gridRef.current)) {
      p.y += 1;
      dropDist++;
    }
    setScore((s) => s + dropDist * 2);
    lockPiece();
    draw();
  };

  const resetGame = () => {
    gridRef.current = Array.from({ length: TETRIS_ROWS }, () => Array(TETRIS_COLS).fill(0));
    pieceRef.current = getRandomPiece();
    isGameOverRef.current = false;
    setIsGameOver(false);
    setIsPaused(false);
    isPausedRef.current = false;
    setScore(0);
    setLines(0);
    setLevel(1);
    levelRef.current = 1;
    draw();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(key)) {
        e.preventDefault();
      }

      if (key === 'p' || key === 'P') {
        setIsPaused((prev) => {
          isPausedRef.current = !prev;
          return !prev;
        });
        return;
      }

      if (isGameOverRef.current || isPausedRef.current) return;

      if (key === 'ArrowLeft' || key === 'a' || key === 'A') moveLeft();
      else if (key === 'ArrowRight' || key === 'd' || key === 'D') moveRight();
      else if (key === 'ArrowUp' || key === 'w' || key === 'W') rotatePiece();
      else if (key === 'ArrowDown' || key === 's' || key === 'S') softDrop();
      else if (key === ' ') hardDrop();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Piece drop interval
  useEffect(() => {
    const tickSpeed = Math.max(120, 600 - (level - 1) * 60);
    const timer = setInterval(() => {
      if (isGameOverRef.current || isPausedRef.current) return;
      const p = pieceRef.current;
      if (!p) return;

      if (!checkCollision(p.shape, p.x, p.y + 1, gridRef.current)) {
        p.y += 1;
      } else {
        lockPiece();
      }
      draw();
    }, tickSpeed);

    return () => clearInterval(timer);
  }, [level]);

  // Initial draw
  useEffect(() => {
    draw();
  }, []);

  return (
    <div className="arcade-game-container">
      <div className="arcade-header">
        <button type="button" onClick={onBack} className="arcade-back-btn">
          <ArrowLeft size={13} /> Arcade
        </button>
        <span className="arcade-title">🧱 Cyber Tetris</span>
        <button type="button" onClick={onClose} className="chatbot-game-exit-x-btn" title="Exit Game">
          <X size={15} />
        </button>
      </div>

      <div className="arcade-score-bar" style={{ maxWidth: 220 }}>
        <span>Score: <strong>{score}</strong></span>
        <span>Lines: <strong>{lines}</strong></span>
        <span>Lvl: <strong>{level}</strong></span>
        <button
          type="button"
          onClick={() => setIsPaused((p) => { isPausedRef.current = !p; return !p; })}
          className="arcade-pause-btn"
        >
          {isPaused ? '▶' : '⏸'}
        </button>
      </div>

      <div className="arcade-canvas-box">
        <canvas
          ref={canvasRef}
          width={TETRIS_COLS * TETRIS_CELL}
          height={TETRIS_ROWS * TETRIS_CELL}
          className="arcade-canvas"
        />

        {isGameOver && (
          <div className="arcade-overlay">
            <h4 className="arcade-over-title">GAME OVER</h4>
            <p className="arcade-over-score">Score: <strong>{score}</strong> | Lines: <strong>{lines}</strong></p>
            <button
              type="button"
              onClick={resetGame}
              className="chatbot-game-primary-btn"
              style={{ width: 'auto', padding: '6px 18px' }}
            >
              <RotateCcw size={14} style={{ display: 'inline', marginRight: 6 }} /> Play Again
            </button>
          </div>
        )}

        {isPaused && !isGameOver && (
          <div className="arcade-overlay">
            <h4 className="arcade-title" style={{ fontSize: '1.2rem', marginBottom: 8 }}>PAUSED</h4>
            <button
              type="button"
              onClick={() => { setIsPaused(false); isPausedRef.current = false; }}
              className="chatbot-game-primary-btn"
              style={{ width: 'auto', padding: '6px 18px' }}
            >
              Resume Game
            </button>
          </div>
        )}
      </div>

      {/* On-Screen Touch Controls */}
      <div className="tetris-controls-row">
        <button type="button" onClick={moveLeft} className="tetris-action-btn">◀ Left</button>
        <button type="button" onClick={rotatePiece} className="tetris-action-btn">↻ Rotate</button>
        <button type="button" onClick={moveRight} className="tetris-action-btn">Right ▶</button>
        <button type="button" onClick={softDrop} className="tetris-action-btn">▼ Soft</button>
        <button type="button" onClick={hardDrop} className="tetris-action-btn" style={{ color: 'var(--color-accent)' }}>⚡ Drop</button>
      </div>
    </div>
  );
};

/**
 * ============================================================
 * 3. THE REAL AKINATOR (THE ALL-KNOWING WEB GENIE)
 * Guesses ANY character: Anime, Gaming, Movies, Sports, Music,
 * Superheroes, Cartoons, Celebrities, History, Tech & Animals!
 * ============================================================
 */
const AKINATOR_CHARACTERS = [
  // --- ANIME & MANGA ---
  {
    id: 'goku',
    name: 'Son Goku',
    category: 'Anime & Manga',
    title: 'Super Saiyan Hero of Earth (Dragon Ball)',
    avatar: '🥋',
    traits: {
      isReal: -1,
      isAnime: 1,
      isDragonBall: 1,
      isSuperpowers: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'naruto',
    name: 'Naruto Uzumaki',
    category: 'Anime & Manga',
    title: 'The 7th Hokage of the Hidden Leaf Village',
    avatar: '🍥',
    traits: {
      isReal: -1,
      isAnime: 1,
      isNinja: 1,
      isMale: 1,
      isOrangeClothes: 1,
      isFictional: 1,
    },
  },
  {
    id: 'luffy',
    name: 'Monkey D. Luffy',
    category: 'Anime & Manga',
    title: 'Captain of the Straw Hat Pirates (One Piece)',
    avatar: '👒',
    traits: {
      isReal: -1,
      isAnime: 1,
      isStrawHatPirate: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'gojo',
    name: 'Satoru Gojo',
    category: 'Anime & Manga',
    title: 'The Strongest Jujutsu Sorcerer (Infinity & Blindfold)',
    avatar: '🕶️',
    traits: {
      isReal: -1,
      isAnime: 1,
      isBlindfoldSorcerer: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'levi',
    name: 'Levi Ackerman',
    category: 'Anime & Manga',
    title: "Humanity's Strongest Soldier (Attack on Titan)",
    avatar: '⚔️',
    traits: {
      isReal: -1,
      isAnime: 1,
      isAttackOnTitan: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'sailormoon',
    name: 'Sailor Moon (Usagi Tsukino)',
    category: 'Anime & Manga',
    title: 'Pretty Guardian of Love and Justice',
    avatar: '🌙',
    traits: {
      isReal: -1,
      isAnime: 1,
      isFemale: 1,
      isMagicalGirl: 1,
      isFictional: 1,
    },
  },
  {
    id: 'light',
    name: 'Light Yagami (Kira)',
    category: 'Anime & Manga',
    title: 'Genius High Schooler with the Death Note',
    avatar: '📓',
    traits: {
      isReal: -1,
      isAnime: 1,
      isDeathNote: 1,
      isMale: 1,
      isFictional: 1,
    },
  },

  // --- SUPERHEROES & COMICS ---
  {
    id: 'spiderman',
    name: 'Spider-Man (Peter Parker)',
    category: 'Superheroes & Comics',
    title: 'Friendly Neighborhood Wall-Crawler (Marvel)',
    avatar: '🕷️',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isMarvel: 1,
      isSpiderWebs: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'batman',
    name: 'Batman (Bruce Wayne)',
    category: 'Superheroes & Comics',
    title: 'The Dark Knight of Gotham City (DC)',
    avatar: '🦇',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isDC: 1,
      isBatCostumeGotham: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'ironman',
    name: 'Iron Man (Tony Stark)',
    category: 'Superheroes & Comics',
    title: 'Genius Billionaire Playboy Philanthropist (Marvel)',
    avatar: '🤖',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isMarvel: 1,
      isArmorSuitTony: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'superman',
    name: 'Superman (Clark Kent)',
    category: 'Superheroes & Comics',
    title: 'The Man of Steel from Krypton (DC)',
    avatar: '🦸‍♂️',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isDC: 1,
      isCapeFlyKrypton: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'joker',
    name: 'The Joker',
    category: 'Superheroes & Comics',
    title: "Gotham's Clown Prince of Crime (DC)",
    avatar: '🃏',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isDC: 1,
      isClownSmile: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'deadpool',
    name: 'Deadpool (Wade Wilson)',
    category: 'Superheroes & Comics',
    title: 'The Merc with a Mouth (Breaks the 4th Wall)',
    avatar: '⚔️',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isMarvel: 1,
      isRedSuitFourthWall: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'thanos',
    name: 'Thanos',
    category: 'Superheroes & Comics',
    title: 'The Mad Titan with the Infinity Gauntlet (Marvel)',
    avatar: '🧤',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isMarvel: 1,
      isInfinityGauntlet: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'wonderwoman',
    name: 'Wonder Woman (Princess Diana)',
    category: 'Superheroes & Comics',
    title: 'Amazonian Warrior Princess of Themyscira (DC)',
    avatar: '⚔️',
    traits: {
      isReal: -1,
      isSuperhero: 1,
      isDC: 1,
      isFemale: 1,
      isFictional: 1,
    },
  },

  // --- GAMING LEGENDS ---
  {
    id: 'mario',
    name: 'Super Mario',
    category: 'Video Games',
    title: "Nintendo's Iconic Italian Plumber with Red Cap",
    avatar: '🍄',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isNintendo: 1,
      isRedCapMustache: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'sonic',
    name: 'Sonic the Hedgehog',
    category: 'Video Games',
    title: "The World's Fastest Blue Hedgehog (SEGA)",
    avatar: '🦔',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isAnimalCreature: 1,
      isBlueHedgehogFast: 1,
      isFictional: 1,
    },
  },
  {
    id: 'pikachu',
    name: 'Pikachu',
    category: 'Video Games',
    title: 'The Electric Mouse Pokemon (#025)',
    avatar: '⚡',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isAnimalCreature: 1,
      isYellowPokemonElectric: 1,
      isNintendo: 1,
      isFictional: 1,
    },
  },
  {
    id: 'link',
    name: 'Link',
    category: 'Video Games',
    title: 'The Hero of Time (The Legend of Zelda)',
    avatar: '🗡️',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isNintendo: 1,
      isZeldaSwordShield: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'kratos',
    name: 'Kratos',
    category: 'Video Games',
    title: 'The Ghost of Sparta / God of War (PlayStation)',
    avatar: '🪓',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isGodOfWarSparta: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'masterchief',
    name: 'Master Chief (Spartan-117)',
    category: 'Video Games',
    title: 'Legendary Super-Soldier of Humanity (Halo / Xbox)',
    avatar: '🛡️',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isHaloSpartanHelmet: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'steve',
    name: 'Steve',
    category: 'Video Games',
    title: 'The Blocky Protagonist of Minecraft',
    avatar: '⛏️',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isMinecraftPixelBlock: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'pacman',
    name: 'Pac-Man',
    category: 'Video Games',
    title: 'The Iconic Yellow Dot-Chomping Arcade Pioneer',
    avatar: '🟡',
    traits: {
      isReal: -1,
      isVideoGame: 1,
      isYellowDotEater: 1,
      isFictional: 1,
    },
  },

  // --- MOVIES, TV & FANTASY ---
  {
    id: 'harrypotter',
    name: 'Harry Potter',
    category: 'Movies & Literature',
    title: 'The Boy Who Lived (Gryffindor Wizard at Hogwarts)',
    avatar: '⚡',
    traits: {
      isReal: -1,
      isMoviesOrSeries: 1,
      isMagicHogwartsWand: 1,
      isLightningScar: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'darthvader',
    name: 'Darth Vader (Anakin Skywalker)',
    category: 'Movies & Sci-Fi',
    title: 'Dark Lord of the Sith (Star Wars)',
    avatar: '🖤',
    traits: {
      isReal: -1,
      isMoviesOrSeries: 1,
      isStarWarsLightsaber: 1,
      isBlackHelmetBreathing: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'jacksparrow',
    name: 'Captain Jack Sparrow',
    category: 'Movies & Cinema',
    title: 'Pirate Lord of the Caribbean (Black Pearl)',
    avatar: '🏴‍☠️',
    traits: {
      isReal: -1,
      isMoviesOrSeries: 1,
      isPiratesCaribbean: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'walterwhite',
    name: 'Walter White (Heisenberg)',
    category: 'TV Series',
    title: 'Chemistry Teacher Turned Drug Kingpin (Breaking Bad)',
    avatar: '🧪',
    traits: {
      isReal: -1,
      isMoviesOrSeries: 1,
      isBreakingBadHeisenberg: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'sherlock',
    name: 'Sherlock Holmes',
    category: 'Literature & Mystery',
    title: 'Master Consulting Detective of 221B Baker Street',
    avatar: '🕵️‍♂️',
    traits: {
      isReal: -1,
      isDetectiveBakerStreet: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'gandalf',
    name: 'Gandalf the Grey',
    category: 'Movies & Fantasy',
    title: 'The Great Wizard of Middle-earth (Lord of the Rings)',
    avatar: '🧙‍♂️',
    traits: {
      isReal: -1,
      isMoviesOrSeries: 1,
      isLordOfRingsWizard: 1,
      isMale: 1,
      isFictional: 1,
    },
  },

  // --- CARTOONS & POP CULTURE ---
  {
    id: 'spongebob',
    name: 'SpongeBob SquarePants',
    category: 'Cartoons & Animation',
    title: 'Yellow Sea Sponge Living in a Pineapple Under the Sea',
    avatar: '🧽',
    traits: {
      isReal: -1,
      isCartoon: 1,
      isYellowPineappleSea: 1,
      isFictional: 1,
    },
  },
  {
    id: 'mickey',
    name: 'Mickey Mouse',
    category: 'Cartoons & Disney',
    title: "Disney's Global Mascot with Big Round Ears",
    avatar: '🐭',
    traits: {
      isReal: -1,
      isCartoon: 1,
      isDisneyMouseRoundEars: 1,
      isAnimalCreature: 1,
      isFictional: 1,
    },
  },
  {
    id: 'homer',
    name: 'Homer Simpson',
    category: 'Cartoons & TV',
    title: 'Donut-Loving Nuclear Safety Inspector (The Simpsons)',
    avatar: '🍩',
    traits: {
      isReal: -1,
      isCartoon: 1,
      isSimpsonsYellowDonut: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'shrek',
    name: 'Shrek',
    category: 'Cartoons & DreamWorks',
    title: 'The Big Lovable Green Ogre from the Swamp',
    avatar: '🧅',
    traits: {
      isReal: -1,
      isCartoon: 1,
      isGreenOgreSwamp: 1,
      isMale: 1,
      isFictional: 1,
    },
  },
  {
    id: 'rick',
    name: 'Rick Sanchez',
    category: 'Cartoons & Adult Swim',
    title: 'Genius Dimension-Traveling Scientist (Rick and Morty)',
    avatar: '🛸',
    traits: {
      isReal: -1,
      isCartoon: 1,
      isCrazyPortalScientist: 1,
      isMale: 1,
      isFictional: 1,
    },
  },

  // --- SPORTS SUPERSTARS ---
  {
    id: 'messi',
    name: 'Lionel Messi',
    category: 'Sports & Football',
    title: "8-time Ballon d'Or Winner & World Cup Champion (Argentina)",
    avatar: '⚽',
    traits: {
      isReal: 1,
      isLiving: 1,
      isAthleteSports: 1,
      isFootballSoccer: 1,
      isArgentinaWorldCup: 1,
      isMale: 1,
    },
  },
  {
    id: 'ronaldo',
    name: 'Cristiano Ronaldo',
    category: 'Sports & Football',
    title: 'CR7 / All-Time Top Goalscorer in Football History',
    avatar: '⚽',
    traits: {
      isReal: 1,
      isLiving: 1,
      isAthleteSports: 1,
      isFootballSoccer: 1,
      isPortugalCR7: 1,
      isMale: 1,
    },
  },
  {
    id: 'jordan',
    name: 'Michael Jordan',
    category: 'Sports & Basketball',
    title: '6-time NBA Champion & Basketball GOAT (Chicago Bulls #23)',
    avatar: '🏀',
    traits: {
      isReal: 1,
      isLiving: 1,
      isAthleteSports: 1,
      isBasketball: 1,
      isChicagoBulls23: 1,
      isMale: 1,
    },
  },
  {
    id: 'lebron',
    name: 'LeBron James',
    category: 'Sports & Basketball',
    title: 'King James / NBA All-Time Scoring Leader (Lakers)',
    avatar: '👑',
    traits: {
      isReal: 1,
      isLiving: 1,
      isAthleteSports: 1,
      isBasketball: 1,
      isLakersKingJames: 1,
      isMale: 1,
    },
  },
  {
    id: 'kohli',
    name: 'Virat Kohli',
    category: 'Sports & Cricket',
    title: 'King Kohli / Modern Cricket Master & Run Machine (India)',
    avatar: '🏏',
    traits: {
      isReal: 1,
      isLiving: 1,
      isAthleteSports: 1,
      isCricket: 1,
      isIndiaCricketKing: 1,
      isMale: 1,
    },
  },
  {
    id: 'bolt',
    name: 'Usain Bolt',
    category: 'Sports & Athletics',
    title: 'The Fastest Human in History (100m & 200m World Records)',
    avatar: '⚡',
    traits: {
      isReal: 1,
      isLiving: 1,
      isAthleteSports: 1,
      isSprintWorldRecordFast: 1,
      isMale: 1,
    },
  },
  {
    id: 'ali',
    name: 'Muhammad Ali',
    category: 'Sports & Boxing',
    title: 'The Greatest Heavyweight Boxing Legend of All Time',
    avatar: '🥊',
    traits: {
      isReal: 1,
      isLiving: -1,
      isAthleteSports: 1,
      isBoxingGreatest: 1,
      isMale: 1,
    },
  },

  // --- MUSIC & POP ICONS ---
  {
    id: 'taylorswift',
    name: 'Taylor Swift',
    category: 'Music & Pop Culture',
    title: 'Global Pop Icon (Record-Breaking Eras Tour & Grammys)',
    avatar: '🎤',
    traits: {
      isReal: 1,
      isLiving: 1,
      isMusicSinger: 1,
      isFemale: 1,
      isErasTourPop: 1,
    },
  },
  {
    id: 'michaeljackson',
    name: 'Michael Jackson',
    category: 'Music & Pop Culture',
    title: 'The King of Pop (Thriller, Billie Jean, Moonwalk)',
    avatar: '🧤',
    traits: {
      isReal: 1,
      isLiving: -1,
      isMusicSinger: 1,
      isMoonwalkKingOfPop: 1,
      isMale: 1,
    },
  },
  {
    id: 'eminem',
    name: 'Eminem (Marshall Mathers)',
    category: 'Music & Hip-Hop',
    title: 'Slim Shady / The Rap God (Lose Yourself, 8 Mile)',
    avatar: '🎙️',
    traits: {
      isReal: 1,
      isLiving: 1,
      isMusicSinger: 1,
      isHipHopRapGod: 1,
      isMale: 1,
    },
  },
  {
    id: 'freddiemercury',
    name: 'Freddie Mercury',
    category: 'Music & Rock',
    title: 'Legendary Lead Singer of Queen (Bohemian Rhapsody)',
    avatar: '👑',
    traits: {
      isReal: 1,
      isLiving: -1,
      isMusicSinger: 1,
      isQueenBohemianRhapsody: 1,
      isMale: 1,
    },
  },
  {
    id: 'beyonce',
    name: 'Beyoncé',
    category: 'Music & Pop Culture',
    title: 'Queen Bey / 32-time Grammy-Winning Superstar',
    avatar: '🐝',
    traits: {
      isReal: 1,
      isLiving: 1,
      isMusicSinger: 1,
      isFemale: 1,
      isQueenBeyGrammy: 1,
    },
  },
  {
    id: 'billieeilish',
    name: 'Billie Eilish',
    category: 'Music & Pop',
    title: 'Grammy & Oscar-Winning Singer-Songwriter (Bad Guy)',
    avatar: '💚',
    traits: {
      isReal: 1,
      isLiving: 1,
      isMusicSinger: 1,
      isFemale: 1,
      isBadGuyGreenHair: 1,
    },
  },

  // --- HOLLYWOOD & CINEMA ---
  {
    id: 'dicaprio',
    name: 'Leonardo DiCaprio',
    category: 'Cinema & Hollywood',
    title: 'Oscar-Winning Actor (Titanic, Inception, Wolf of Wall St)',
    avatar: '🏆',
    traits: {
      isReal: 1,
      isLiving: 1,
      isActorHollywood: 1,
      isTitanicInception: 1,
      isMale: 1,
    },
  },
  {
    id: 'tomcruise',
    name: 'Tom Cruise',
    category: 'Cinema & Hollywood',
    title: 'Global Action Megastar (Top Gun, Mission: Impossible)',
    avatar: '🛩️',
    traits: {
      isReal: 1,
      isLiving: 1,
      isActorHollywood: 1,
      isTopGunMissionImpossible: 1,
      isMale: 1,
    },
  },
  {
    id: 'keanu',
    name: 'Keanu Reeves',
    category: 'Cinema & Hollywood',
    title: "Beloved Action Hero (The Matrix, John Wick, Speed)",
    avatar: '🕶️',
    traits: {
      isReal: 1,
      isLiving: 1,
      isActorHollywood: 1,
      isMatrixJohnWick: 1,
      isMale: 1,
    },
  },
  {
    id: 'therock',
    name: 'Dwayne The Rock Johnson',
    category: 'Cinema & Entertainment',
    title: 'WWE Champion Turned Hollywood Blockbuster Star',
    avatar: '💪',
    traits: {
      isReal: 1,
      isLiving: 1,
      isActorHollywood: 1,
      isWWEActionHero: 1,
      isMale: 1,
    },
  },
  {
    id: 'zendaya',
    name: 'Zendaya',
    category: 'Cinema & Fashion',
    title: 'Emmy-Winning Actress & Global Icon (Euphoria, Dune)',
    avatar: '✨',
    traits: {
      isReal: 1,
      isLiving: 1,
      isActorHollywood: 1,
      isFemale: 1,
      isEuphoriaDune: 1,
    },
  },

  // --- YOUTUBERS & INTERNET ---
  {
    id: 'mrbeast',
    name: 'MrBeast (Jimmy Donaldson)',
    category: 'YouTube & Internet',
    title: '#1 Most Subscribed YouTuber in the World (Philanthropy & Challenges)',
    avatar: '🍫',
    traits: {
      isReal: 1,
      isLiving: 1,
      isInternetYouTuber: 1,
      isMrBeastPhilanthropy: 1,
      isMale: 1,
    },
  },
  {
    id: 'pewdiepie',
    name: 'PewDiePie (Felix Kjellberg)',
    category: 'YouTube & Internet',
    title: 'Legendary Gaming YouTuber & Internet Pioneer (Brofist)',
    avatar: '👊',
    traits: {
      isReal: 1,
      isLiving: 1,
      isInternetYouTuber: 1,
      isPewDiePieBrofist: 1,
      isMale: 1,
    },
  },
  {
    id: 'speed',
    name: 'IShowSpeed (Darren Watkins Jr.)',
    category: 'Streaming & Internet',
    title: 'Viral Live Streamer & Cristiano Ronaldo Superfan',
    avatar: '⚡',
    traits: {
      isReal: 1,
      isLiving: 1,
      isInternetYouTuber: 1,
      isSpeedStreamerBarks: 1,
      isMale: 1,
    },
  },

  // --- SCIENCE, HISTORY & WORLD LEADERS ---
  {
    id: 'einstein',
    name: 'Albert Einstein',
    category: 'Science & History',
    title: 'Theoretical Physicist (Theory of Relativity / E=mc²)',
    avatar: '⚛️',
    traits: {
      isReal: 1,
      isLiving: -1,
      isSciencePhysics: 1,
      isEinsteinRelativityHair: 1,
      isMale: 1,
    },
  },
  {
    id: 'newton',
    name: 'Sir Isaac Newton',
    category: 'Science & History',
    title: 'Father of Classical Physics, Calculus & Laws of Motion (Gravity)',
    avatar: '🍏',
    traits: {
      isReal: 1,
      isLiving: -1,
      isSciencePhysics: 1,
      isNewtonAppleGravity: 1,
      isMale: 1,
    },
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    category: 'Science & Engineering',
    title: 'Pioneer of Alternating Current (AC) & Electrical Engineering',
    avatar: '⚡',
    traits: {
      isReal: 1,
      isLiving: -1,
      isSciencePhysics: 1,
      isTeslaAlternatingCurrent: 1,
      isMale: 1,
    },
  },
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    category: 'History & World Leaders',
    title: 'Pioneer of Non-Violent Freedom Movement (Father of India)',
    avatar: '🕊️',
    traits: {
      isReal: 1,
      isLiving: -1,
      isLeaderHistory: 1,
      isGandhiNonViolenceIndia: 1,
      isMale: 1,
    },
  },
  {
    id: 'lincoln',
    name: 'Abraham Lincoln',
    category: 'History & Presidents',
    title: '16th US President who Abolished Slavery and Preserved the Union',
    avatar: '🎩',
    traits: {
      isReal: 1,
      isLiving: -1,
      isLeaderHistory: 1,
      isLincolnUSPresidentTopHat: 1,
      isMale: 1,
    },
  },
  {
    id: 'cleopatra',
    name: 'Cleopatra VII',
    category: 'Ancient History',
    title: 'Last Active Pharaoh of Ptolemaic Ancient Egypt',
    avatar: '👑',
    traits: {
      isReal: 1,
      isLiving: -1,
      isLeaderHistory: 1,
      isFemale: 1,
      isAncientEgyptPharaoh: 1,
    },
  },
  {
    id: 'trump',
    name: 'Donald Trump',
    category: 'Presidents & Politics',
    title: '45th & 47th President of the United States and Business Tycoon',
    avatar: '🇺🇸',
    traits: {
      isReal: 1,
      isLiving: 1,
      isLeaderHistory: 1,
      isTrumpPresidentBillionaire: 1,
      isMale: 1,
    },
  },
  {
    id: 'queenelizabeth',
    name: 'Queen Elizabeth II',
    category: 'Royalty & History',
    title: 'Longest-Reigning Monarch in British History (70 Years)',
    avatar: '👑',
    traits: {
      isReal: 1,
      isLiving: -1,
      isLeaderHistory: 1,
      isFemale: 1,
      isQueenBritishMonarch: 1,
    },
  },

  // --- TECH PIONEERS & BILLIONAIRES ---
  {
    id: 'elon',
    name: 'Elon Musk',
    category: 'Technology & Space',
    title: 'CEO of Tesla, SpaceX, xAI & Owner of X (Twitter)',
    avatar: '🚀',
    traits: {
      isReal: 1,
      isLiving: 1,
      isTechOrBusiness: 1,
      isTeslaSpaceXRockets: 1,
      isMale: 1,
    },
  },
  {
    id: 'jobs',
    name: 'Steve Jobs',
    category: 'Technology & Business',
    title: 'Visionary Co-Founder of Apple Inc. (iPhone, Macintosh)',
    avatar: '🍎',
    traits: {
      isReal: 1,
      isLiving: -1,
      isTechOrBusiness: 1,
      isAppleIPhoneCoFounder: 1,
      isMale: 1,
    },
  },
  {
    id: 'gates',
    name: 'Bill Gates',
    category: 'Technology & Philanthropy',
    title: 'Co-Founder of Microsoft, Windows Architect & Philanthropist',
    avatar: '🪟',
    traits: {
      isReal: 1,
      isLiving: 1,
      isTechOrBusiness: 1,
      isMicrosoftWindowsGates: 1,
      isMale: 1,
    },
  },
  {
    id: 'zuck',
    name: 'Mark Zuckerberg',
    category: 'Technology & Social Media',
    title: 'Founder & CEO of Meta (Facebook, Instagram, WhatsApp)',
    avatar: '👓',
    traits: {
      isReal: 1,
      isLiving: 1,
      isTechOrBusiness: 1,
      isMetaFacebookFounder: 1,
      isMale: 1,
    },
  },
  {
    id: 'jensen',
    name: 'Jensen Huang',
    category: 'Technology & AI',
    title: 'Founder & CEO of NVIDIA (AI GPU Revolution)',
    avatar: '⚡',
    traits: {
      isReal: 1,
      isLiving: 1,
      isTechOrBusiness: 1,
      isNvidiaLeatherJacketGPU: 1,
      isMale: 1,
    },
  },
  {
    id: 'altman',
    name: 'Sam Altman',
    category: 'Technology & AI',
    title: 'CEO of OpenAI (Creators of ChatGPT & Generative AI)',
    avatar: '🤖',
    traits: {
      isReal: 1,
      isLiving: 1,
      isTechOrBusiness: 1,
      isOpenAIChatGPTAltman: 1,
      isMale: 1,
    },
  },

  // --- ANIMALS & CREATURES ---
  {
    id: 'dog',
    name: 'A Dog / Puppy',
    category: 'Animals & Pets',
    title: "Man's Best Friend (Barking, Loyal Canine Companion)",
    avatar: '🐕',
    traits: {
      isReal: 1,
      isAnimalCreature: 1,
      isDogBarksCanine: 1,
      isPetHousehold: 1,
    },
  },
  {
    id: 'cat',
    name: 'A Cat / Kitten',
    category: 'Animals & Pets',
    title: 'Independent Purring Feline Pet with Whiskers',
    avatar: '🐈',
    traits: {
      isReal: 1,
      isAnimalCreature: 1,
      isCatMeowsFeline: 1,
      isPetHousehold: 1,
    },
  },
  {
    id: 'dragon',
    name: 'A Dragon',
    category: 'Mythology & Fantasy',
    title: 'Legendary Giant Fire-Breathing Winged Monster',
    avatar: '🐉',
    traits: {
      isReal: -1,
      isAnimalCreature: 1,
      isDragonFireWings: 1,
      isFictional: 1,
    },
  },
  {
    id: 'trex',
    name: 'Tyrannosaurus Rex (T-Rex)',
    category: 'Prehistoric Creatures',
    title: 'King of the Prehistoric Dinosaurs (Apex Predator)',
    avatar: '🦖',
    traits: {
      isReal: 1,
      isLiving: -1,
      isAnimalCreature: 1,
      isTRexDinosaurExtinct: 1,
    },
  },

  // --- PORTFOLIO CREATOR ---
  {
    id: 'vimal',
    name: 'Vimal Kansotia',
    category: 'Portfolio Creator',
    title: 'Data Engineer & Creator of this AI Portfolio Website!',
    avatar: '🎓',
    traits: {
      isReal: 1,
      isLiving: 1,
      isPortfolioAuthor: 1,
      isDataEngineer: 1,
      isMale: 1,
    },
  },
];

/**
 * Universal 100-Question Pool
 * Covers Identity, Form, Media, Professions, Sports, Physical Features,
 * Superpowers, Weapons/Items, Eras/Nations, Music, Cinema, Tech & Animals!
 */
const AKINATOR_QUESTIONS = [
  // 1-10: Fundamental Reality & Form
  { key: 'isReal', text: 'Is your character a real person who exists (or existed) in the real world?' },
  { key: 'isLiving', text: 'Is your character still alive today?' },
  { key: 'isFemale', text: 'Is your character female?' },
  { key: 'isAnimalCreature', text: 'Is your character an animal, pet, or non-human creature?' },
  { key: 'isHumanoid', text: 'Does your character have a normal human body shape?' },
  { key: 'isChildOrTeen', text: 'Is your character a child or teenager?' },
  { key: 'isElderly', text: 'Is your character considered an old man or elderly person?' },
  { key: 'isFictional', text: 'Is your character entirely fictional or from a story/myth?' },
  { key: 'isVillain', text: 'Is your character an evil villain, antagonist, or criminal?' },
  { key: 'isSuperhero', text: 'Is your character a comic book superhero or hero with a secret identity?' },

  // 11-20: Media & Genres
  { key: 'isAnime', text: 'Does your character originate from Japanese anime or manga?' },
  { key: 'isVideoGame', text: 'Is your character primarily from a video game franchise?' },
  { key: 'isCartoon', text: 'Is your character from an animated cartoon show (e.g. SpongeBob, Simpsons, Disney)?' },
  { key: 'isMoviesOrSeries', text: 'Is your character from a live-action movie or TV series?' },
  { key: 'isLiteratureBook', text: 'Did your character originally originate from a famous novel or book?' },
  { key: 'isMarvel', text: 'Is your character part of the Marvel Universe (Avengers, X-Men)?' },
  { key: 'isDC', text: 'Is your character part of DC Comics (Justice League, Gotham City)?' },
  { key: 'isStarWars', text: 'Is your character from the Star Wars saga?' },
  { key: 'isHarryPotter', text: 'Is your character part of the Harry Potter wizarding world?' },
  { key: 'isLordOfRings', text: 'Is your character from The Lord of the Rings or Middle-earth?' },

  // 21-30: Professions & Careers
  { key: 'isAthleteSports', text: 'Is your character a professional sports athlete?' },
  { key: 'isMusicSinger', text: 'Is your character a famous singer, musician, or rapper?' },
  { key: 'isActorHollywood', text: 'Is your character a famous movie actor or actress?' },
  { key: 'isInternetYouTuber', text: 'Is your character a YouTuber, streamer, or internet celebrity?' },
  { key: 'isSciencePhysics', text: 'Is your character a famous historical scientist, mathematician, or physicist?' },
  { key: 'isLeaderHistory', text: 'Is your character a president, prime minister, monarch, or political leader?' },
  { key: 'isTechOrBusiness', text: 'Is your character a famous tech founder, CEO, or business billionaire?' },
  { key: 'isDoctorMedic', text: 'Is your character a doctor, surgeon, or medical scientist?' },
  { key: 'isDetectiveCop', text: 'Is your character a detective, police officer, or crime investigator?' },
  { key: 'isPirate', text: 'Is your character a pirate sailing the seas?' },

  // 31-40: Sports Specifics
  { key: 'isFootballSoccer', text: 'Does your character play football (soccer)?' },
  { key: 'isBasketball', text: 'Is your character an NBA basketball player?' },
  { key: 'isCricket', text: 'Is your character a superstar in cricket?' },
  { key: 'isBoxingCombat', text: 'Is your character a professional boxer, fighter, or wrestler?' },
  { key: 'isSprintAthletics', text: 'Is your character a track and field runner or sprinter?' },
  { key: 'isArgentina', text: 'Is your character from Argentina?' },
  { key: 'isPortugal', text: 'Is your character from Portugal?' },
  { key: 'isBallonDorWinner', text: 'Has your character won the FIFA Ballon d\'Or award?' },
  { key: 'isWorldCupChampion', text: 'Has your character won the FIFA World Cup trophy?' },
  { key: 'isNBAChampion', text: 'Has your character won NBA championship rings?' },

  // 41-50: Physical Features & Appearance
  { key: 'isGlassesOrSunglasses', text: 'Does your character wear eyeglasses or sunglasses?' },
  { key: 'isBeardOrMustache', text: 'Does your character have facial hair (beard or mustache)?' },
  { key: 'isBaldOrShaved', text: 'Is your character bald or have a shaved head?' },
  { key: 'isBlondeHair', text: 'Does your character have blonde or yellow hair?' },
  { key: 'isWhiteGreyHair', text: 'Does your character have white or grey hair?' },
  { key: 'isMaskOrHelmet', text: 'Does your character wear a mask or helmet covering part of their face?' },
  { key: 'isHatOrCap', text: 'Does your character wear a hat, cap, or headwear?' },
  { key: 'isCapeOrCloak', text: 'Does your character wear a flowing cape or cloak?' },
  { key: 'isArmorSuit', text: 'Does your character wear metal armor or a powered robotic suit?' },
  { key: 'isYellowSkin', text: 'Is your character or their skin yellow in color?' },

  // 51-60: Superpowers & Magic
  { key: 'isSuperpowers', text: 'Does your character possess superhuman powers or abilities?' },
  { key: 'isMagicWand', text: 'Does your character cast spells using a magic wand or incantations?' },
  { key: 'isFlyAbility', text: 'Can your character fly through the sky under their own power?' },
  { key: 'isSuperSpeed', text: 'Can your character run at super-speed or faster than sound?' },
  { key: 'isSpiderAbilities', text: 'Can your character climb walls and shoot spider webs?' },
  { key: 'isElectricLightning', text: 'Does your character produce electricity, lightning, or thunder?' },
  { key: 'isFireFlames', text: 'Does your character attack using fire or flames?' },
  { key: 'isSuperStrength', text: 'Is your character known for incredible, superhuman physical strength?' },
  { key: 'isImmortalAlien', text: 'Is your character from an alien planet or immortal?' },
  { key: 'isSuperSaiyan', text: 'Can your character transform into a golden-haired Super Saiyan?' },

  // 61-70: Weapons, Tools & Signature Items
  { key: 'isSwordBlade', text: 'Does your character fight with a sword, blade, or katana?' },
  { key: 'isGunFirearm', text: 'Does your character frequently use guns or firearms?' },
  { key: 'isLightsaber', text: 'Does your character wield an energy lightsaber in combat?' },
  { key: 'isInfinityGauntlet', text: 'Did your character wield the Infinity Gauntlet with cosmic stones?' },
  { key: 'isDeathNoteBook', text: 'Does your character possess a supernatural notebook that causes death?' },
  { key: 'isShieldOrAxe', text: 'Does your character wield a battle axe or combat shield?' },
  { key: 'isStrawHat', text: 'Is your character famous for wearing a straw sun-hat?' },
  { key: 'isRedCapM', text: 'Does your character wear a red cap with the letter "M"?' },
  { key: 'isPickaxeBlocks', text: 'Does your character use a pickaxe to mine cubes and craft blocks?' },
  { key: 'isPokeball', text: 'Is your character captured inside a red and white Pokéball?' },

  // 71-80: Geographies, Nations & Eras
  { key: 'isAmericanUSA', text: 'Is your character from the United States of America?' },
  { key: 'isBritishUK', text: 'Is your character from the United Kingdom (British / English)?' },
  { key: 'isJapanese', text: 'Is your character from Japan or deeply rooted in Japanese culture?' },
  { key: 'isIndianOrigin', text: 'Is your character from India or of Indian heritage?' },
  { key: 'isAncientHistory', text: 'Did your character live in ancient times (e.g. Ancient Egypt, Rome, Greece)?' },
  { key: 'is19thCenturyOrEarlier', text: 'Did your character live before the 20th century (before 1900)?' },
  { key: 'isRoyaltyKingQueen', text: 'Is your character a king, queen, prince, or princess?' },
  { key: 'isUSPresident', text: 'Was your character a President of the United States?' },
  { key: 'isNobelPrizeWinner', text: 'Did your character win a prestigious Nobel Prize?' },
  { key: 'isGrammyAwardWinner', text: 'Has your character won one or more Grammy music awards?' },

  // 81-90: Music, Pop Culture & Internet Icons
  { key: 'isPopMusic', text: 'Is your character famous for mainstream pop music?' },
  { key: 'isHipHopRap', text: 'Is your character a famous hip-hop or rap artist?' },
  { key: 'isRockMusic', text: 'Is your character famous for rock or metal music?' },
  { key: 'isErasTour', text: 'Is your character Taylor Swift, known for the record-breaking Eras Tour?' },
  { key: 'isMoonwalkDance', text: 'Is your character famous for the Moonwalk dance step?' },
  { key: 'isMrBeastPhilanthropy', text: 'Does your character give away huge sums of cash in viral YouTube challenge videos?' },
  { key: 'isGamingYouTuber', text: 'Did your character become famous playing video games on YouTube or Twitch?' },
  { key: 'isSpeedStreamer', text: 'Is your character IShowSpeed, known for energetic streams and barking?' },
  { key: 'isTitanicMovie', text: 'Did your character star in the movie Titanic?' },
  { key: 'isTopGunMissionImpossible', text: 'Is your character Tom Cruise, known for high-stakes action stunts?' },

  // 91-100: Tech, Science, Creatures & Unique Icons
  { key: 'isTeslaSpaceXRockets', text: 'Does your character run Tesla, build SpaceX rockets, and own X?' },
  { key: 'isAppleIPhone', text: 'Was your character the visionary co-founder of Apple Inc.?' },
  { key: 'isMicrosoftWindows', text: 'Did your character co-found Microsoft and develop Windows?' },
  { key: 'isMetaSocialMedia', text: 'Is your character the founder of Facebook and CEO of Meta?' },
  { key: 'isNvidiaLeatherJacket', text: 'Is your character the CEO of NVIDIA who wears a black leather jacket?' },
  { key: 'isOpenAIChatGPT', text: 'Is your character the CEO of OpenAI / connected to ChatGPT?' },
  { key: 'isPineappleSea', text: 'Does your character live in a pineapple under the sea?' },
  { key: 'isOgreSwamp', text: 'Is your character a big green ogre who lives in a swamp?' },
  { key: 'isBarksCaninePet', text: 'Does this creature bark, wag its tail, and fetch balls as man\'s best friend?' },
  { key: 'isPortfolioAuthor', text: 'Is your character Vimal Kansotia, the creator of this portfolio website?' }
];

const AkinatorGame = ({ onBack, onClose }) => {
  const [scores, setScores] = useState(() => {
    const init = {};
    AKINATOR_CHARACTERS.forEach((c) => { init[c.id] = 1.0; });
    return init;
  });
  const [askedKeys, setAskedKeys] = useState([]);
  const [currentQ, setCurrentQ] = useState(AKINATOR_QUESTIONS[0]); // Starts with "isReal"
  const [questionNum, setQuestionNum] = useState(1);
  const [confidence, setConfidence] = useState(0.08);
  const [dontKnowCount, setDontKnowCount] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isMysticGuess, setIsMysticGuess] = useState(false);
  const [topCharacter, setTopCharacter] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [userGuessInput, setUserGuessInput] = useState('');
  const [submittedCorrection, setSubmittedCorrection] = useState('');

  // Entropy-guided question selector
  const selectNextQuestion = (currentScores, currentAsked) => {
    const available = AKINATOR_QUESTIONS.filter((q) => !currentAsked.includes(q.key));
    if (available.length === 0) return null;

    let bestQ = available[0];
    let bestBalance = Infinity;

    available.forEach((q) => {
      let positiveWeight = 0;
      let negativeWeight = 0;
      AKINATOR_CHARACTERS.forEach((c) => {
        const val = c.traits[q.key] || 0;
        const weight = currentScores[c.id] || 0.01;
        if (val > 0) positiveWeight += weight;
        else if (val < 0) negativeWeight += weight;
        else {
          positiveWeight += weight * 0.5;
          negativeWeight += weight * 0.5;
        }
      });

      const diff = Math.abs(positiveWeight - negativeWeight);
      if (diff < bestBalance) {
        bestBalance = diff;
        bestQ = q;
      }
    });

    return bestQ;
  };

  const handleAnswer = (ansVal) => {
    if (isRevealing) return;
    const currentKey = currentQ.key;
    const newScores = { ...scores };

    // Track "Don't Know" clicks
    let newDontKnowCount = dontKnowCount;
    if (ansVal === 0.0) {
      newDontKnowCount = dontKnowCount + 1;
      setDontKnowCount(newDontKnowCount);
    }

    AKINATOR_CHARACTERS.forEach((c) => {
      const expected = c.traits[currentKey] !== undefined ? c.traits[currentKey] : 0;
      let similarity = 1 - Math.abs(ansVal - expected) / 2;
      similarity = Math.max(0.03, Math.pow(similarity, 1.85));
      newScores[c.id] = (newScores[c.id] || 1) * similarity;
    });

    const totalScore = Object.values(newScores).reduce((a, b) => a + b, 0);
    const sorted = [...AKINATOR_CHARACTERS].sort((a, b) => (newScores[b.id] || 0) - (newScores[a.id] || 0));
    const top = sorted[0];
    const topScore = newScores[top.id] || 0;
    const secondScore = sorted[1] ? newScores[sorted[1].id] || 0 : 0;
    const conf = totalScore > 0 ? topScore / totalScore : 0.5;

    const nextAsked = [...askedKeys, currentKey];
    setAskedKeys(nextAsked);
    setScores(newScores);
    setConfidence(conf);

    // SPECIAL HANDLING FOR "ALL DON'T KNOW":
    // If user answered "Don't Know" to 7+ questions, trigger the Mystic Intuition guess!
    if (newDontKnowCount >= 7) {
      setIsMysticGuess(true);
      setTopCharacter(top || AKINATOR_CHARACTERS[0]);
      setIsRevealing(true);
      return;
    }

    // Normal lead check:
    const hasClearLead = conf >= 0.70 || (topScore > secondScore * 3.5 && nextAsked.length >= 4);
    if ((hasClearLead && nextAsked.length >= 4) || nextAsked.length >= 10) {
      setTopCharacter(top);
      setIsRevealing(true);
    } else {
      const nextQ = selectNextQuestion(newScores, nextAsked);
      if (nextQ) {
        setCurrentQ(nextQ);
        setQuestionNum((n) => n + 1);
      } else {
        setTopCharacter(top);
        setIsRevealing(true);
      }
    }
  };

  const resetGame = () => {
    const init = {};
    AKINATOR_CHARACTERS.forEach((c) => { init[c.id] = 1.0; });
    setScores(init);
    setAskedKeys([]);
    setCurrentQ(AKINATOR_QUESTIONS[0]);
    setQuestionNum(1);
    setConfidence(0.08);
    setDontKnowCount(0);
    setIsRevealing(false);
    setIsMysticGuess(false);
    setTopCharacter(null);
    setFeedback(null);
    setUserGuessInput('');
    setSubmittedCorrection('');
  };

  const getGenieMood = () => {
    if (isRevealing) {
      if (isMysticGuess) return "You kept your character a mystery! Here is my psychic intuition 🔮";
      return "Behold! The All-Knowing Genie has read your mind! 🔮";
    }
    if (dontKnowCount >= 4) return "You don't know many clues! Shifting to deep psychic frequencies... 🌌";
    if (questionNum <= 2) return "Think of ANY character or person... connecting my psychic circuits 💭";
    if (questionNum <= 4) return "Fascinating... I can detect their aura in the cosmos! ⚡";
    if (questionNum <= 6) return "The possibilities are narrowing down rapidly... 🔍";
    return "I am almost 100% certain! One final check! 🎯";
  };

  return (
    <div className="akinator-container">
      <div className="arcade-header">
        <button type="button" onClick={onBack} className="arcade-back-btn">
          <ArrowLeft size={13} /> Arcade
        </button>
        <span className="arcade-title">🧞‍♂️ The Real Akinator</span>
        <button type="button" onClick={onClose} className="chatbot-game-exit-x-btn" title="Exit Game">
          <X size={15} />
        </button>
      </div>

      {/* Genie Profile Card */}
      <div className="akinator-genie-card">
        <div className="akinator-genie-avatar">🧞‍♂️</div>
        <div className="akinator-genie-speech">
          <div className="akinator-genie-title">The Real Akinator (All-Knowing Genie)</div>
          <p className="akinator-genie-mood">{getGenieMood()}</p>
        </div>
      </div>

      {/* Confidence Bar */}
      <div className="akinator-confidence-bar-wrap">
        <div className="akinator-confidence-label-row">
          <span>{isMysticGuess ? 'Psychic Intuition Meter' : 'Mind-Reading Confidence'}</span>
          <strong>{isMysticGuess ? '75%' : `${Math.min(99, Math.round(confidence * 100))}%`}</strong>
        </div>
        <div className="akinator-progress-track">
          <div
            className="akinator-progress-fill"
            style={{ width: isMysticGuess ? '75%' : `${Math.min(100, Math.max(8, Math.round(confidence * 100)))}%` }}
          />
        </div>
      </div>

      {!isRevealing ? (
        <>
          {/* Question Card */}
          <div className="akinator-question-card">
            <div className="akinator-question-counter">Question {questionNum} of 100</div>
            <p className="akinator-question-text">{currentQ.text}</p>
          </div>

          {/* 5 Response Buttons */}
          <div className="akinator-answers-grid">
            <button
              type="button"
              onClick={() => handleAnswer(1.0)}
              className="akinator-ans-btn yes"
            >
              ✓ Yes
            </button>
            <button
              type="button"
              onClick={() => handleAnswer(0.5)}
              className="akinator-ans-btn probably"
            >
              ~ Probably
            </button>
            <button
              type="button"
              onClick={() => handleAnswer(0.0)}
              className="akinator-ans-btn dont-know"
            >
              ? Don't Know
            </button>
            <button
              type="button"
              onClick={() => handleAnswer(-0.5)}
              className="akinator-ans-btn probably-not"
            >
              ~ Probably Not
            </button>
            <button
              type="button"
              onClick={() => handleAnswer(-1.0)}
              className="akinator-ans-btn no"
            >
              ✕ No
            </button>
          </div>
        </>
      ) : (
        /* Reveal Card */
        <div className="akinator-reveal-card">
          <Sparkles size={28} className="text-[#E2FF6F] animate-pulse mb-1" />

          {/* Special Mystic Guess Notice when user chose Don't Know to all questions */}
          {isMysticGuess && (
            <div style={{
              background: 'rgba(var(--olive-rgb), 0.25)',
              border: '1.5px solid var(--color-accent)',
              borderRadius: 12,
              padding: '8px 12px',
              marginBottom: 12,
              textAlign: 'center',
              width: '100%',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                🔮 MYSTIC PSYCHIC PREDICTION
              </span>
              <p style={{ margin: '4px 0 0 0', color: 'rgba(250, 246, 240, 0.88)', fontSize: '0.73rem', lineHeight: 1.4 }}>
                You selected <strong>"Don't Know"</strong> to almost every question, keeping your character shrouded in mystery! The Genie tapped into cosmic intuition to make this best psychic prediction:
              </p>
            </div>
          )}

          <div className="akinator-reveal-avatar">{topCharacter?.avatar || '🌟'}</div>
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
            {topCharacter?.category}
          </span>
          <h3 className="akinator-reveal-name">{topCharacter?.name}</h3>
          <p className="akinator-reveal-title">{topCharacter?.title}</p>

          {!feedback ? (
            <>
              <p style={{ fontSize: '0.82rem', color: '#FAF6F0', margin: '0 0 12px 0', fontWeight: 600 }}>
                {isMysticGuess ? 'Did my cosmic hunch manage to guess who you were thinking of?' : 'Did I guess who you were thinking of?'}
              </p>
              <div className="akinator-feedback-btns">
                <button
                  type="button"
                  onClick={() => setFeedback('correct')}
                  className="akinator-feedback-btn correct"
                >
                  🎉 Yes, you got it!
                </button>
                <button
                  type="button"
                  onClick={() => setFeedback('wrong')}
                  className="akinator-feedback-btn wrong"
                >
                  🤯 No, you're wrong!
                </button>
              </div>
            </>
          ) : (
            <div style={{ width: '100%' }}>
              <div className="akinator-outcome-box">
                {feedback === 'correct' ? (
                  <span style={{ color: '#4ade80' }}>
                    🏆 Victory! The All-Knowing Genie read your mind!
                  </span>
                ) : (
                  <span style={{ color: '#fca5a5' }}>
                    🤯 Incredible! You defeated the Genie!
                  </span>
                )}
              </div>

              {/* If wrong, allow user to input who they thought of (just like real Akinator) */}
              {feedback === 'wrong' && (
                <div style={{ marginTop: 12, padding: '10px 12px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: 10, textAlign: 'left' }}>
                  <p style={{ fontSize: '0.76rem', color: 'rgba(250, 246, 240, 0.85)', margin: '0 0 6px 0', fontWeight: 700 }}>
                    Who were you thinking of?
                  </p>
                  {!submittedCorrection ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!userGuessInput.trim()) return;
                        setSubmittedCorrection(userGuessInput.trim());
                      }}
                      style={{ display: 'flex', gap: 6 }}
                    >
                      <input
                        type="text"
                        value={userGuessInput}
                        onChange={(e) => setUserGuessInput(e.target.value)}
                        placeholder="e.g. Harry Potter, Messi, Batman..."
                        className="chatbot-input-field"
                        style={{ fontSize: '0.76rem', padding: '6px 10px', height: 'auto', flex: 1 }}
                      />
                      <button
                        type="submit"
                        disabled={!userGuessInput.trim()}
                        className="chatbot-game-primary-btn"
                        style={{ width: 'auto', padding: '6px 12px', fontSize: '0.74rem' }}
                      >
                        Teach Genie
                      </button>
                    </form>
                  ) : (
                    <p style={{ fontSize: '0.76rem', color: 'var(--color-accent)', margin: 0 }}>
                      ✨ Aha! <strong>{submittedCorrection}</strong>! The Genie has stored them in psychic memory! 🧞‍♂️
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <button
              type="button"
              onClick={resetGame}
              className="chatbot-game-primary-btn"
              style={{ width: 'auto', padding: '6px 16px' }}
            >
              <RotateCcw size={14} style={{ display: 'inline', marginRight: 6 }} /> Play Again
            </button>
            <button
              type="button"
              onClick={onBack}
              className="arcade-back-btn"
              style={{ padding: '6px 14px' }}
            >
              Arcade Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function AIChatbot({ ownerName = 'Vimal Kansotia', theme = 'dark', colorTheme = 'cyan' }) {
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

  // Active Arcade Game: 'none' | 'menu' | 'snake' | 'tetris' | 'logo'
  const [currentGame, setCurrentGame] = useState('none');

  // Mind Reading Logo Game State
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
  }, [messages, gameStep, currentRound, currentGame, isOpen]);

  // Clear Chat Handler
  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'ai',
        text: `Chat cleared! Ask me anything about my projects, skills, AWS leadership, or click Play a game!`,
      },
    ]);
    setCurrentGame('none');
    setGameStep('idle');
    setCurrentRound(0);
    setBinaryAnswers([]);
    setGuessedLogo(null);
  };

  // Handle Quick Prompt Click
  const handleQuickPrompt = (promptText) => {
    if (promptText === 'Play a game') {
      setCurrentGame('menu');
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

    // Check for user greeting or introduction
    const nameMatch =
      trimmed.match(/(?:hi|hello|hey)?\s*,?\s*(?:i'?m|i am|my name is|this is)\s+([a-zA-Z]+)/i);

    const nonNameWords = ['what', 'why', 'how', 'who', 'tell', 'show', 'play', 'projects', 'skills', 'contact', 'hire', 'game', 'aws', 'python', 'sql', 'react', 'there', 'you', 'spark', 'data'];

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
        return `Hello ${name}! ${timeGreeting} 👋 Nice to meet you! How can I help you explore Vimal's Data Engineering & Data Science background today?`;
      }
      return `Hello! ${timeGreeting} 👋 Welcome to Vimal Kansotia's AI portfolio! Ask me about his data engineering pipelines, machine learning models, cloud stack, or leadership roles!`;
    }

    // Contact & Reaching Out
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
Or feel free to send a message via the Contact form at the bottom of the page!`;
    }

    // Data Engineering & Big Data specific queries
    if (
      lower.includes('data engineer') ||
      lower.includes('big data') ||
      lower.includes('spark') ||
      lower.includes('hadoop') ||
      lower.includes('kafka') ||
      lower.includes('etl') ||
      lower.includes('pipeline') ||
      lower.includes('data lake') ||
      lower.includes('hdfs')
    ) {
      return `🛠️ Vimal's Data Engineering & Big Data Architecture Expertise:
• Distributed Frameworks: Apache Spark (PySpark), Apache Hadoop (HDFS, MapReduce), Apache Kafka, Hive.
• Cloud Data Lakehouse: AWS Glue (Crawler & ETL Jobs), Amazon Athena (serverless querying), Amazon Redshift, Amazon S3.
• Pipeline Orchestration & Storage: Partitioned Parquet, Delta Lake architecture, Docker containerization, and automated ETL/ELT workflows.
• Core Goal: Designing resilient, high-throughput architectures that turn massive, messy datasets into structured, real-time intelligence!`;
    }

    // Projects & Work
    if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
      return `🚀 Vimal's featured engineering & data science work includes:
1. ☁️ AWS Cloud Data Engineering Pipeline — End-to-end serverless ETL lakehouse with S3, Glue, Athena & Redshift.
2. 🏥 Healthcare & Diabetic Readmission Analytics — Predictive modeling with Random Forest, XGBoost & Scikit-Learn.
3. 🧬 Bioinformatics & Genomic Data Exploration — Computational biology workflows analyzing biological datasets.
4. 📊 High-Performance Business Dashboards — Streamlit, Power BI, and interactive SQL analytical systems.
Scroll down to the Projects section to explore them!`;
    }

    // Technical Skills & Tech Stack
    if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('tool')) {
      return `💻 Vimal's Core Technical Arsenal:
• Programming: Python, SQL (Advanced), JavaScript, C++, R, Java, Shell/Bash.
• Big Data & Cloud: Apache Spark, Hadoop, Kafka, AWS (S3, Glue, Athena, Redshift, Lambda).
• Machine Learning: Scikit-learn, Pandas, NumPy, Predictive Modeling, Feature Engineering, EDA.
• Databases: PostgreSQL, MySQL, MongoDB, Amazon RDS.
• DevOps & Analytics: Docker, Git, Linux/Unix, Power BI, Streamlit.`;
    }

    // Education, College & Academic CGPA
    if (
      lower.includes('education') ||
      lower.includes('college') ||
      lower.includes('cgpa') ||
      lower.includes('degree') ||
      lower.includes('study') ||
      lower.includes('university')
    ) {
      return `🎓 Academic Background:
• Degree: Bachelor of Science in Information Technology (B.Sc. IT).
• Institution: B.K. Birla College of Arts, Science & Commerce (Autonomous), Kalyan.
• Academic CGPA: 8.3+ with deep coursework in Distributed Computing, Data Science, Database Management, and Cloud Architectures.`;
    }

    // Specific Leadership Queries
    if (lower.includes('placement') || lower.includes('training') || lower.includes('t&p')) {
      return `🎓 Training & Development Coordinator — Placement Cell, B.K. Birla College:
Vimal coordinated campus recruitment drives, organized technical skill enhancement workshops, conducted resume building & mock interview sessions, and bridged student talents with industry recruiters to boost college placements.`;
    }

    if (lower.includes('mpower') || lower.includes('mental health') || lower.includes('wellness')) {
      return `💚 MPower Core Team Member (3 Years) — B.K. Birla College:
Served 3 years on the core leadership team of MPower, advocating youth mental health awareness, spearheading campus wellness initiatives, organizing peer support sessions, and hosting college-wide awareness campaigns.`;
    }

    if (lower.includes('astronomical') || lower.includes('astronomy') || lower.includes('stargazing') || lower.includes('class representative') || lower.includes('cr')) {
      return `🌟 Class Representative (3 Years) & Head of Astronomical Club — B.K. Birla College:
• Served as Class Representative (CR) for 3 consecutive years, representing student interests to college faculty.
• Headed the Astronomical Club, organizing stargazing camps, astrophysics seminars, and hosting major intercollegiate and intracollegiate events (which also inspired the 3D cosmic theme of this portfolio!).`;
    }

    if (lower.includes('aws student') || lower.includes('aws builder') || lower.includes('cloud builder')) {
      return `☁️ AWS Student Builder Group — Core Team Lead:
Led a 100+ member cloud student community, organized hands-on AWS workshops (S3, Glue, Lambda, Redshift), mentored peers on cloud data architectures, and hosted tech hackathons.`;
    }

    // General Leadership Query
    if (lower.includes('leadership') || lower.includes('leader') || lower.includes('role') || lower.includes('position') || lower.includes('community') || lower.includes('birla')) {
      return `🏆 Key Leadership & Community Roles at B.K. Birla College:
1. ☁️ AWS Student Builder Group — Core Team Lead (100+ members, cloud mentoring)
2. 🎓 Training & Development Coordinator — Placement Cell (Placement drives & interview workshops)
3. 💚 MPower Core Team Member (3 Years advocating youth mental health)
4. 🌟 Class Representative (3 Years) & Head of Astronomical Club (Stargazing expeditions & science seminars)
Feel free to ask about any specific role!`;
    }

    // Why Hire / Value Proposition
    if (lower.includes('hire') || lower.includes('why') || lower.includes('value')) {
      return `⭐ Why Hire Vimal Kansotia?
Vimal bridges the critical gap between Big Data Engineering and Machine Learning. He builds production-ready distributed data pipelines (Spark, AWS, Hadoop) that ensure data reliability, while applying ML models to solve real-world problems. His proven leadership (AWS Lead, Placement Coordinator) ensures exceptional teamwork and communication!`;
    }

    // Specific Game Triggers
    if (lower.includes('snake')) {
      setCurrentGame('snake');
      return `Starting Neon Snake! 🐍 Control with Arrow keys (or WASD) or the touch D-pad below. Eat the glowing dots to grow!`;
    }

    if (lower.includes('tetris')) {
      setCurrentGame('tetris');
      return `Starting Cyber Tetris! 🧱 Stack falling tetrominoes, clear lines, and beat your high score! Control with Arrow keys or the buttons below.`;
    }

    if (lower.includes('akinator') || lower.includes('genie') || lower.includes('guess character')) {
      setCurrentGame('akinator');
      return `Awakening The Real Akinator! 🧞‍♂️ Think of ANY person or character in the universe (real, fictional, anime, superheroes, gaming, sports, music, movies, history, or animals) and I will read your mind!`;
    }

    // Game Trigger
    if (lower.includes('game') || lower.includes('play') || lower.includes('arcade')) {
      setCurrentGame('menu');
      return `Welcome to the Retro Arcade Hub! 🕹️ Choose a game below to play directly inside the chatbot:`;
    }

    // STRICT DOMAIN FALLBACK (Error message when asked something outside training/domain)
    return `⚠️ I'm sorry, I don't have information on that topic in Vimal's verified portfolio database.

As Vimal's dedicated AI assistant, I am trained strictly on his professional background:
• 🛠️ Data Engineering & Big Data Pipelines (Spark, Hadoop, AWS, Kafka)
• 🤖 Machine Learning & Predictive Analytics (Python, Scikit-Learn)
• 🧬 Bioinformatics & Healthcare Data
• 🎓 Academic Records & CGPA (8.3+ at B.K. Birla College)
• 🏆 Leadership Roles (AWS Builder Lead, Astronomical Club Head, Placement Coordinator)
• 📬 Contact Details & Resume

Please ask me a question related to Vimal's work, or click one of the quick prompt buttons below!`;
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
              {currentGame === 'none' && gameStep === 'idle' && (
                <div className="chatbot-quick-section">
                  <span className="chatbot-quick-label">TRY ASKING:</span>
                  <div className="chatbot-chips-grid">
                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('What projects have you worked on?')}
                      className="chatbot-chip-btn"
                    >
                      <Code2 size={15} style={{ color: 'var(--color-primary)' }} />
                      <span>What projects have you worked on?</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Tell me about your technical skills.')}
                      className="chatbot-chip-btn"
                    >
                      <BarChart2 size={15} style={{ color: 'var(--color-accent)' }} />
                      <span>Tell me about your technical skills.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Tell me about your AWS leadership.')}
                      className="chatbot-chip-btn"
                    >
                      <Cloud size={15} style={{ color: 'var(--color-primary)' }} />
                      <span>Tell me about your AWS leadership.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Why should I hire you?')}
                      className="chatbot-chip-btn"
                    >
                      <Briefcase size={15} style={{ color: 'var(--color-accent)' }} />
                      <span>Why should I hire you?</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('How can I reach you?')}
                      className="chatbot-chip-btn"
                    >
                      <Mail size={15} style={{ color: 'var(--color-primary)' }} />
                      <span>How can I reach you?</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickPrompt('Play a game')}
                      className={`chatbot-chip-btn game-highlight ${theme}`}
                    >
                      <Gamepad2 size={16} className="game-icon" style={{ color: 'inherit' }} />
                      <span className="game-text">Play a game</span>
                    </button>
                  </div>
                </div>
              )}

              {/* --- RETRO ARCADE HUB MENU --- */}
              {currentGame === 'menu' && (
                <div className="arcade-menu-card">
                  <div className="arcade-header">
                    <span className="arcade-title">🕹️ Retro Arcade Hub</span>
                    <button
                      type="button"
                      onClick={() => setCurrentGame('none')}
                      className="chatbot-game-exit-x-btn"
                      title="Exit to Chat"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(250, 246, 240, 0.75)', margin: '4px 0 10px 0' }}>
                    Choose a game to play directly inside the chatbot:
                  </p>

                  <div className="arcade-games-grid">
                    {/* Snake Game Option */}
                    <div
                      className="arcade-game-choice-card"
                      onClick={() => setCurrentGame('snake')}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="arcade-game-icon">🐍</div>
                      <div className="arcade-game-info">
                        <div className="arcade-game-name">Neon Snake</div>
                        <p className="arcade-game-desc">Classic retro snake with glowing food & D-pad</p>
                      </div>
                      <span className="arcade-play-tag">Play ➔</span>
                    </div>

                    {/* Tetris Game Option */}
                    <div
                      className="arcade-game-choice-card"
                      onClick={() => setCurrentGame('tetris')}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="arcade-game-icon">🧱</div>
                      <div className="arcade-game-info">
                        <div className="arcade-game-name">Cyber Tetris</div>
                        <p className="arcade-game-desc">Falling tetrominoes, line clears, & level up</p>
                      </div>
                      <span className="arcade-play-tag">Play ➔</span>
                    </div>

                    {/* Akinator Game Option */}
                    <div
                      className="arcade-game-choice-card"
                      onClick={() => setCurrentGame('akinator')}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="arcade-game-icon">🧞‍♂️</div>
                      <div className="arcade-game-info">
                        <div className="arcade-game-name">The Real Akinator</div>
                        <p className="arcade-game-desc">Guesses ANY character: anime, movies, sports, celebs & more!</p>
                      </div>
                      <span className="arcade-play-tag">Play ➔</span>
                    </div>

                    {/* Mind Reading Logo Game Option */}
                    <div
                      className="arcade-game-choice-card"
                      onClick={() => {
                        setCurrentGame('logo');
                        startLogoGame();
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="arcade-game-icon">✨</div>
                      <div className="arcade-game-info">
                        <div className="arcade-game-name">Guess the Logo</div>
                        <p className="arcade-game-desc">Vimal's AI mind reader: think of a tech logo!</p>
                      </div>
                      <span className="arcade-play-tag">Play ➔</span>
                    </div>
                  </div>
                </div>
              )}

              {/* --- SNAKE GAME --- */}
              {currentGame === 'snake' && (
                <SnakeGame
                  onBack={() => setCurrentGame('menu')}
                  onClose={() => setCurrentGame('none')}
                />
              )}

              {/* --- TETRIS GAME --- */}
              {currentGame === 'tetris' && (
                <TetrisGame
                  onBack={() => setCurrentGame('menu')}
                  onClose={() => setCurrentGame('none')}
                />
              )}

              {/* --- AKINATOR GAME --- */}
              {currentGame === 'akinator' && (
                <AkinatorGame
                  onBack={() => setCurrentGame('menu')}
                  onClose={() => setCurrentGame('none')}
                />
              )}

              {/* --- MIND READING LOGO GAME ENGINE (Compact Sleek Design) --- */}
              {(currentGame === 'logo' || (currentGame === 'none' && gameStep !== 'idle')) && (
                <div className="chatbot-game-card compact">
                  {/* Exit Game Close (X) Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setGameStep('idle');
                      setCurrentGame('none');
                    }}
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
                          onClick={() => {
                            setGameStep('idle');
                            setCurrentGame('none');
                          }}
                          className="chatbot-game-exit-btn"
                          title="End game and return to chat"
                        >
                          Okay, End Game
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
