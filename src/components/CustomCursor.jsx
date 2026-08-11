"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor - Celestial Neon Energy Dragon Engine
 * 
 * Fixed: JS transform safely combines translate3d(x,y,0) with scale(s) so hovering over 
 * leadership cards, view project buttons, or contact cards NEVER wipes translate3d or 
 * flings the dot/ring to the top-left of the screen!
 */
export default function CustomCursor({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [hoverText, setHoverText] = useState('');
  const [isHoveredState, setIsHoveredState] = useState(false);
  const [isMouseDownState, setIsMouseDownState] = useState(false);
  const [isVisibleState, setIsVisibleState] = useState(false);

  // Refs for animation state (prevents re-render teardown bugs)
  const isHoveredRef = useRef(false);
  const isMouseDownRef = useRef(false);
  const isVisibleRef = useRef(false);

  // Position Refs
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef(null);

  // Processed Transparent Canvas Sprites
  const headSpriteRef = useRef(null);
  const bodySpriteRef = useRef(null);
  const clawSpriteRef = useRef(null);
  const spritesReadyRef = useRef(false);

  // Dragon Spine (65 nodes for long serpentine movement)
  const NUM_POINTS = 65;
  const SEGMENT_DIST = 14;
  const dragonSpineRef = useRef(null);
  const particlesRef = useRef([]);

  if (!dragonSpineRef.current) {
    const spine = [];
    for (let i = 0; i < NUM_POINTS; i++) {
      spine.push({
        x: -100,
        y: -100,
        angle: 0,
      });
    }
    dragonSpineRef.current = spine;
  }

  // In-Memory Chroma-Keyer: Removes black background pixels safely
  const createTransparentSprite = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      img.onload = () => {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = img.width;
        offCanvas.height = img.height;
        const offCtx = offCanvas.getContext('2d');
        offCtx.drawImage(img, 0, 0);

        const imgData = offCtx.getImageData(0, 0, img.width, img.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const brightness = (r + g + b) / 3;

          if (brightness < 45) {
            data[i + 3] = 0;
          } else {
            data[i + 3] = Math.min(255, (brightness / 255) * 280);
          }
        }

        offCtx.putImageData(imgData, 0, 0);
        resolve(offCanvas);
      };
      img.onerror = () => resolve(null);
    });
  };

  // Preload dragon textures
  useEffect(() => {
    if (typeof window === 'undefined') return;

    Promise.all([
      createTransparentSprite('/dragon/head.png'),
      createTransparentSprite('/dragon/body.png'),
      createTransparentSprite('/dragon/claw.png'),
    ]).then(([headCanvas, bodyCanvas, clawCanvas]) => {
      if (headCanvas) headSpriteRef.current = headCanvas;
      if (bodyCanvas) bodySpriteRef.current = bodyCanvas;
      if (clawCanvas) clawSpriteRef.current = clawCanvas;
      spritesReadyRef.current = true;
    });
  }, []);

  // Main Render Effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      posRef.current = { x, y };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisibleState(true);

        const spine = dragonSpineRef.current;
        if (spine && spine[0].x === -100) {
          for (let i = 0; i < spine.length; i++) {
            spine[i].x = x;
            spine[i].y = y;
          }
          ringPosRef.current = { x, y };
        }
      }

      if (Math.random() < 0.5) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5 - 0.8,
          size: Math.random() * 3 + 1.2,
          life: 1,
          decay: Math.random() * 0.04 + 0.02,
        });
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactiveEl = target.closest(
        'a, button, input, textarea, select, [role="button"], .project-card, .skill-card, .stat-card, .glass-card, .hero-cta, .social-icon-btn, .theme-toggle, .contact-card, .form-input, .contact-template, .leadership-card'
      );

      if (interactiveEl) {
        isHoveredRef.current = true;
        setIsHoveredState(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        if (customText) setHoverText(customText);
      } else {
        isHoveredRef.current = false;
        setIsHoveredState(false);
        setHoverText('');
      }
    };

    const handleMouseDown = () => {
      isMouseDownRef.current = true;
      setIsMouseDownState(true);
    };
    const handleMouseUp = () => {
      isMouseDownRef.current = false;
      setIsMouseDownState(false);
    };
    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisibleState(false);
    };
    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisibleState(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let time = 0;

    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const targetX = posRef.current.x;
      const targetY = posRef.current.y;

      if (targetX === -100 && targetY === -100) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      ringPosRef.current.x += (targetX - ringPosRef.current.x) * 0.25;
      ringPosRef.current.y += (targetY - ringPosRef.current.y) * 0.25;

      // Safely combine translate3d and scale in inline style to keep cursor sleek and minimal
      const dotScale = isHoveredRef.current ? (isMouseDownRef.current ? 0.7 : 1.25) : (isMouseDownRef.current ? 0.7 : 1.0);
      const ringScale = isHoveredRef.current ? (isMouseDownRef.current ? 0.85 : 1.15) : (isMouseDownRef.current ? 0.85 : 1.0);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) scale(${ringScale})`;
      }

      // --- 1. IK Dragon Physics ---
      const spine = dragonSpineRef.current;
      if (spine && spine.length > 0) {
        const head = spine[0];
        const dxHead = targetX - head.x;
        const dyHead = targetY - head.y;
        const distHead = Math.hypot(dxHead, dyHead);

        if (distHead > 1) {
          head.x += dxHead * 0.65;
          head.y += dyHead * 0.65;
          head.angle = Math.atan2(dyHead, dxHead);
        }

        for (let i = 1; i < spine.length; i++) {
          const prev = spine[i - 1];
          const curr = spine[i];
          const dx = prev.x - curr.x;
          const dy = prev.y - curr.y;
          const angle = Math.atan2(dy, dx);
          curr.angle = angle;

          curr.x = prev.x - Math.cos(angle) * SEGMENT_DIST;
          curr.y = prev.y - Math.sin(angle) * SEGMENT_DIST;
        }

        const getRadius = (index) => {
          const t = index / (NUM_POINTS - 1);
          let baseR = 18;
          if (t < 0.1) baseR = 18 + t * 40;
          else if (t < 0.7) baseR = 22 - (t - 0.1) * 10;
          else baseR = Math.max(2, 16 * (1 - (t - 0.7) / 0.3));
          return baseR * (isHoveredRef.current ? 1.2 : 1.0);
        };

        const isDark = theme === 'dark';
        const jadeNeon = isDark ? '#a3e635' : '#6A8C1A';
        const eyeColor = isDark ? '#E2FF6F' : '#A3E635';

        ctx.save();

        // --- 2. Render Inner Hyper-Bright Spinal Laser Core ---
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(spine[0].x, spine[0].y);
        for (let i = 1; i < spine.length - 1; i++) {
          const xc = (spine[i].x + spine[i + 1].x) / 2;
          const yc = (spine[i].y + spine[i + 1].y) / 2;
          ctx.quadraticCurveTo(spine[i].x, spine[i].y, xc, yc);
        }
        ctx.strokeStyle = isDark ? '#E2FF6F' : '#415B06';
        ctx.lineWidth = 4;
        ctx.shadowColor = jadeNeon;
        ctx.shadowBlur = isDark ? 16 : 8;
        ctx.stroke();
        ctx.restore();

        // --- 3. Render Intricate Dragon Scale Rings & Ribs ---
        ctx.save();
        for (let i = 1; i < spine.length - 2; i++) {
          const pt = spine[i];
          const r = getRadius(i);

          ctx.save();
          ctx.translate(pt.x, pt.y);
          ctx.rotate(pt.angle);

          ctx.beginPath();
          ctx.ellipse(0, 0, r * 0.4, r, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${isDark ? '163, 230, 53' : '65, 91, 6'}, ${(1 - i / NUM_POINTS) * 0.85})`;
          ctx.lineWidth = 1.6;
          ctx.shadowColor = jadeNeon;
          ctx.shadowBlur = 4;
          ctx.stroke();

          if (i % 2 === 0) {
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.8);
            ctx.lineTo(r * 0.2, 0);
            ctx.lineTo(-r * 0.5, r * 0.8);
            ctx.strokeStyle = `rgba(${isDark ? '226, 255, 111' : '106, 140, 26'}, ${(1 - i / NUM_POINTS) * 0.7})`;
            ctx.lineWidth = 1.4;
            ctx.stroke();
          }

          ctx.restore();
        }
        ctx.restore();

        // --- 4. Render Dragon Dorsal Spine Spikes ---
        ctx.save();
        for (let i = 2; i < spine.length - 4; i += 2) {
          const pt = spine[i];
          const r = getRadius(i);
          const finAngle = pt.angle - Math.PI / 2;
          const finLen = 14 + Math.sin(time * 3 + i) * 4;

          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.lineTo(
            pt.x + Math.cos(finAngle) * (r + finLen),
            pt.y + Math.sin(finAngle) * (r + finLen)
          );
          ctx.lineTo(
            pt.x - Math.cos(pt.angle) * 10,
            pt.y - Math.sin(pt.angle) * 10
          );
          ctx.fillStyle = jadeNeon;
          ctx.shadowColor = jadeNeon;
          ctx.shadowBlur = 6;
          ctx.fill();
        }
        ctx.restore();

        // --- 5. Render Ethereal Spirit Flame Ribbons Along Body ---
        ctx.save();
        for (let i = 4; i < spine.length - 8; i += 6) {
          const pt = spine[i];
          const r = getRadius(i);
          const wave = Math.sin(time * 3.5 + i) * 12;

          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.quadraticCurveTo(
            pt.x - Math.cos(pt.angle) * 20 + Math.sin(pt.angle) * (r + 15),
            pt.y - Math.sin(pt.angle) * 20 - Math.cos(pt.angle) * (r + 15),
            pt.x - Math.cos(pt.angle) * 40 + wave,
            pt.y - Math.sin(pt.angle) * 40 - wave
          );
          ctx.strokeStyle = `rgba(${isDark ? '163, 230, 53' : '65, 91, 6'}, 0.5)`;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        }
        ctx.restore();

        // --- 6. Render Dragon Claws ---
        const clawIndices = [10, 26, 42, 56];
        for (const idx of clawIndices) {
          if (idx < spine.length) {
            const pt = spine[idx];

            if (spritesReadyRef.current && clawSpriteRef.current) {
              ctx.save();
              ctx.translate(pt.x, pt.y);
              ctx.rotate(pt.angle + Math.PI / 2 + 0.4);
              ctx.shadowColor = jadeNeon;
              ctx.shadowBlur = 6;
              ctx.drawImage(clawSpriteRef.current, 0, -20, 50, 40);
              ctx.restore();

              ctx.save();
              ctx.translate(pt.x, pt.y);
              ctx.rotate(pt.angle - Math.PI / 2 - 0.4);
              ctx.scale(1, -1);
              ctx.shadowColor = jadeNeon;
              ctx.shadowBlur = 6;
              ctx.drawImage(clawSpriteRef.current, 0, -20, 50, 40);
              ctx.restore();
            }
          }
        }

        // --- 7. Render Crisp Dragon Head (140px, Transparent) ---
        if (spritesReadyRef.current && headSpriteRef.current) {
          ctx.save();
          ctx.translate(head.x, head.y);
          ctx.rotate(head.angle);

          ctx.shadowColor = jadeNeon;
          ctx.shadowBlur = isDark ? 6 : 2;
          ctx.drawImage(headSpriteRef.current, -55, -70, 140, 140);

          ctx.beginPath();
          ctx.arc(26, -15, 5, 0, Math.PI * 2);
          ctx.arc(26, 15, 5, 0, Math.PI * 2);
          ctx.fillStyle = eyeColor;
          ctx.shadowColor = eyeColor;
          ctx.shadowBlur = 8;
          ctx.fill();

          const w1 = Math.sin(time * 3) * 10;
          const w2 = Math.cos(time * 3) * 10;
          ctx.beginPath();
          ctx.moveTo(50, -8);
          ctx.bezierCurveTo(75, -28, 90 + w1, -40, 120 + w1, -30);
          ctx.moveTo(50, 8);
          ctx.bezierCurveTo(75, 28, 90 + w2, 40, 120 + w2, 30);
          ctx.strokeStyle = `rgba(${isDark ? '226, 255, 111' : '65, 91, 6'}, 0.95)`;
          ctx.lineWidth = 2.8;
          ctx.stroke();

          ctx.restore();
        }

        ctx.restore();
      }

      // --- 8. Dragon Ember Particles ---
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);

        const isDark = theme === 'dark';
        const particleColor = isDark
          ? `rgba(226, 255, 111, ${p.life * 0.9})`
          : `rgba(65, 91, 6, ${p.life * 0.8})`;

        ctx.fillStyle = particleColor;
        ctx.shadowColor = isDark ? '#a3e635' : '#415B06';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [theme]);

  return (
    <>
      {/* Dragon Canvas Layer — Positioned BEHIND cards & content (z-index: 2) */}
      <canvas
        ref={canvasRef}
        className={`laser-canvas-behind ${isVisibleState ? 'visible' : ''} ${theme}`}
      />

      {/* Foreground Custom Cursor (Precision Dot + Magnetic Ring) (z-index: 99999) */}
      <div className={`custom-cursor-container ${isVisibleState ? 'visible' : ''} ${theme}`}>
        {/* Outer Spring Follower Ring */}
        <div
          ref={ringRef}
          className={`cursor-ring ${isHoveredState ? 'hovered' : ''} ${isMouseDownState ? 'pressed' : ''}`}
        >
          {hoverText && <span className="cursor-text">{hoverText}</span>}
        </div>

        {/* Inner Precision Core Dot */}
        <div
          ref={dotRef}
          className={`cursor-dot ${isHoveredState ? 'hovered' : ''} ${isMouseDownState ? 'pressed' : ''}`}
        />
      </div>
    </>
  );
}
