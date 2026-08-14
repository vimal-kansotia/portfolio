"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * BigBangIntro - Astronomical Taurus Constellation Link Opening Transition
 * 
 * Features:
 * - Exact astronomical map of Taurus (The Bull Constellation).
 * - Aldebaran (Alpha Tauri - Hyper-bright glowing gold giant eye of Taurus).
 * - Hyades V-Shape Face cluster & Horn Lines (Elnath & Tianguan).
 * - Pleiades Star Cluster (The Seven Sisters).
 * - Smooth portfolio reveal transition.
 */
const INTRO_COLOR_PALETTES = {
  gold: { primary: '#F59E0B', light: '#FBBF24', rgb: '245, 158, 11' },
  purple: { primary: '#A855F7', light: '#C084FC', rgb: '168, 85, 247' },
  cyan: { primary: '#06B6D4', light: '#22D3EE', rgb: '6, 182, 212' },
  teal: { primary: '#10B981', light: '#34D399', rgb: '16, 185, 129' },
  blue: { primary: '#3B82F6', light: '#60A5FA', rgb: '59, 130, 246' },
  indigo: { primary: '#6366F1', light: '#818CF8', rgb: '99, 102, 241' },
  lime: { primary: '#84CC16', light: '#A3E635', rgb: '132, 204, 22' },
  olive: { primary: '#82A626', light: '#a3e635', rgb: '130, 166, 38' },
  orange: { primary: '#F97316', light: '#FB923C', rgb: '249, 115, 22' },
  pink: { primary: '#EC4899', light: '#F472B6', rgb: '236, 72, 153' },
  red: { primary: '#EF4444', light: '#F87171', rgb: '239, 68, 68' },
};

export default function BigBangIntro({ onComplete, colorTheme = 'olive' }) {
  const canvasRef = useRef(null);
  const [isDone, setIsDone] = useState(false);
  const animFrameRef = useRef(null);
  const activePalette = INTRO_COLOR_PALETTES[colorTheme] || INTRO_COLOR_PALETTES.olive;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 3.6s Safety Fail-Safe
    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 3600);

    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const cx = () => canvas.width / 2;
    const cy = () => canvas.height / 2;

    let startTime = performance.now();

    // Exact Astronomical Node Coordinates of Taurus Constellation
    const taurusNodes = [
      { id: 'aldebaran', x: 10, y: 15, isAldebaran: true, delay: 0.1 },
      { id: 'ain', x: -15, y: -35, delay: 0.2 },
      { id: 'gamma_tau', x: -75, y: -15, delay: 0.3 },
      { id: 'delta_tau', x: -55, y: 20, delay: 0.4 },
      { id: 'theta_tau', x: -20, y: 35, delay: 0.5 },
      { id: 'horn_north_mid', x: 75, y: -65, delay: 0.6 },
      { id: 'elnath', x: 155, y: -115, isHornTip: true, label: 'ELNATH', delay: 0.7 },
      { id: 'horn_south_mid', x: 95, y: 55, delay: 0.8 },
      { id: 'tianguan', x: 175, y: 85, isHornTip: true, label: 'TIANGUAN', delay: 0.9 },
      { id: 'pleiades_main', x: -160, y: -85, isPleiades: true, delay: 1.0 },
      { id: 'pleiades_1', x: -180, y: -100, isPleiades: true, delay: 1.05 },
      { id: 'pleiades_2', x: -150, y: -110, isPleiades: true, delay: 1.1 },
      { id: 'pleiades_3', x: -140, y: -75, isPleiades: true, delay: 1.15 },
      { id: 'pleiades_4', x: -170, y: -70, isPleiades: true, delay: 1.2 },
    ];

    const taurusNodeMap = {};
    taurusNodes.forEach(node => { taurusNodeMap[node.id] = node; });

    const taurusLines = [
      ['gamma_tau', 'delta_tau', 0.4],
      ['delta_tau', 'theta_tau', 0.5],
      ['theta_tau', 'aldebaran', 0.6],
      ['aldebaran', 'ain', 0.65],
      ['ain', 'gamma_tau', 0.35],
      ['ain', 'horn_north_mid', 0.65],
      ['horn_north_mid', 'elnath', 0.75],
      ['aldebaran', 'horn_south_mid', 0.85],
      ['horn_south_mid', 'tianguan', 0.95],
      ['gamma_tau', 'pleiades_main', 1.0],
      ['pleiades_main', 'pleiades_1', 1.05],
      ['pleiades_main', 'pleiades_2', 1.1],
      ['pleiades_main', 'pleiades_3', 1.15],
      ['pleiades_main', 'pleiades_4', 1.2],
    ];

    const bgStars = [];
    for (let i = 0; i < 70; i++) {
      bgStars.push({
        x: (Math.random() - 0.5) * window.innerWidth,
        y: (Math.random() - 0.5) * window.innerHeight,
        size: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.75 + 0.25,
      });
    }

    const render = (now) => {
      try {
        const elapsed = (now - startTime) / 1000;
        const width = canvas.width;
        const height = canvas.height;
        const centerx = cx();
        const centery = cy();

        ctx.clearRect(0, 0, width, height);

        // Pitch Black Space Background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        // Background Ambient Stars
        ctx.save();
        for (let i = 0; i < bgStars.length; i++) {
          const s = bgStars[i];
          const starAlpha = Math.min(1, elapsed * 1.5) * s.alpha;
          ctx.beginPath();
          ctx.arc(centerx + s.x, centery + s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(250, 246, 240, ${starAlpha})`;
          ctx.shadowColor = '#FAF6F0';
          ctx.shadowBlur = 4;
          ctx.fill();
        }
        ctx.restore();

        if (elapsed < 1.6) {
          // --- STEP 1: TAURUS CONSTELLATION LINK IN DEEP SPACE (0.0s - 1.6s) ---
          ctx.save();

          for (let i = 0; i < taurusLines.length; i++) {
            const [id1, id2, delay] = taurusLines[i];
            const n1 = taurusNodeMap[id1];
            const n2 = taurusNodeMap[id2];

            if (n1 && n2 && elapsed >= delay) {
              const lineProgress = Math.min(1, (elapsed - delay) / 0.15);
              const p1x = centerx + n1.x;
              const p1y = centery + n1.y;
              const p2x = centerx + n2.x;
              const p2y = centery + n2.y;

              const currX = p1x + (p2x - p1x) * lineProgress;
              const currY = p1y + (p2y - p1y) * lineProgress;

              ctx.beginPath();
              ctx.moveTo(p1x, p1y);
              ctx.lineTo(currX, currY);
              ctx.strokeStyle = `rgba(${activePalette.rgb}, 0.85)`;
              ctx.lineWidth = 2.0;
              ctx.shadowColor = activePalette.light;
              ctx.shadowBlur = 12;
              ctx.stroke();
            }
          }

          for (let i = 0; i < taurusNodes.length; i++) {
            const node = taurusNodes[i];
            if (elapsed >= node.delay) {
              const nodeGlow = Math.min(1, (elapsed - node.delay) / 0.15);
              const nx = centerx + node.x;
              const ny = centery + node.y;

              ctx.beginPath();
              if (node.isAldebaran) {
                ctx.arc(nx, ny, 8.0 * nodeGlow, 0, Math.PI * 2);
                ctx.fillStyle = activePalette.light;
                ctx.shadowColor = activePalette.light;
                ctx.shadowBlur = 28;
              } else if (node.isPleiades) {
                ctx.arc(nx, ny, 3.5 * nodeGlow, 0, Math.PI * 2);
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowColor = activePalette.light;
                ctx.shadowBlur = 14;
              } else {
                ctx.arc(nx, ny, 5.0 * nodeGlow, 0, Math.PI * 2);
                ctx.fillStyle = activePalette.light;
                ctx.shadowColor = activePalette.light;
                ctx.shadowBlur = 16;
              }
              ctx.fill();
            }
          }
          ctx.restore();

        } else if (elapsed < 2.6) {
          // --- STEP 2: TAURUS STAR GLOW & ALDEBARAN FLARE (1.6s - 2.6s) ---
          const glowT = (elapsed - 1.6) / 1.0;
          const pulse = 1.0 + Math.sin(glowT * Math.PI) * 0.3;

          ctx.save();

          for (let i = 0; i < taurusLines.length; i++) {
            const [id1, id2] = taurusLines[i];
            const n1 = taurusNodeMap[id1];
            const n2 = taurusNodeMap[id2];
            if (n1 && n2) {
              ctx.beginPath();
              ctx.moveTo(centerx + n1.x, centery + n1.y);
              ctx.lineTo(centerx + n2.x, centery + n2.y);
              ctx.strokeStyle = `rgba(${activePalette.rgb}, ${0.9 * pulse})`;
              ctx.lineWidth = 2.4 * pulse;
              ctx.shadowColor = activePalette.light;
              ctx.shadowBlur = 16 * pulse;
              ctx.stroke();
            }
          }

          for (let i = 0; i < taurusNodes.length; i++) {
            const node = taurusNodes[i];
            const nx = centerx + node.x;
            const ny = centery + node.y;

            ctx.beginPath();
            if (node.isAldebaran) {
              ctx.arc(nx, ny, 9.5 * pulse, 0, Math.PI * 2);
              ctx.fillStyle = activePalette.light;
              ctx.shadowColor = activePalette.light;
              ctx.shadowBlur = 32 * pulse;
            } else if (node.isPleiades) {
              ctx.arc(nx, ny, 4 * pulse, 0, Math.PI * 2);
              ctx.fillStyle = '#FFFFFF';
              ctx.shadowColor = activePalette.light;
              ctx.shadowBlur = 16 * pulse;
            } else {
              ctx.arc(nx, ny, 6.0 * pulse, 0, Math.PI * 2);
              ctx.fillStyle = activePalette.light;
              ctx.shadowColor = activePalette.light;
              ctx.shadowBlur = 22 * pulse;
            }
            ctx.fill();
          }
          ctx.restore();

        } else if (elapsed < 3.6) {
          // --- STEP 3: DISSOLVE & PORTFOLIO REVEAL (2.6s - 3.6s) ---
          const revealT = (elapsed - 2.6) / 1.0;
          const bgAlpha = Math.max(0, 1 - revealT);

          ctx.save();
          ctx.fillStyle = `rgba(0, 0, 0, ${bgAlpha})`;
          ctx.fillRect(0, 0, width, height);

          // Subtle Cosmic Shockwave Ring
          const shockRadius = revealT * Math.max(width, height) * 0.75;
          ctx.beginPath();
          ctx.arc(centerx, centery, Math.max(1, shockRadius), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${activePalette.rgb}, ${(1 - revealT) * 0.85})`;
          ctx.lineWidth = 6 * (1 - revealT);
          ctx.shadowColor = activePalette.light;
          ctx.shadowBlur = 20;
          ctx.stroke();

          ctx.restore();

        } else {
          setIsDone(true);
          if (onComplete) onComplete();
          return;
        }

        animFrameRef.current = requestAnimationFrame(render);
      } catch (err) {
        setIsDone(true);
        if (onComplete) onComplete();
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [onComplete, colorTheme]);

  if (isDone) return null;

  return (
    <div
      className="dragon-intro-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        backgroundColor: '#000000',
        pointerEvents: 'auto',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Skip Button */}
      <button
        type="button"
        onClick={handleSkip}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          padding: '8px 18px',
          borderRadius: '9999px',
          backgroundColor: `rgba(${activePalette.rgb}, 0.15)`,
          border: `1px solid rgba(${activePalette.rgb}, 0.45)`,
          color: activePalette.light,
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          fontWeight: 700,
          cursor: 'pointer',
          backdropFilter: 'blur(4px)',
          zIndex: 1000000,
          boxShadow: `0 0 16px rgba(${activePalette.rgb}, 0.3)`,
        }}
      >
        SKIP INTRO ➔
      </button>
    </div>
  );
}
