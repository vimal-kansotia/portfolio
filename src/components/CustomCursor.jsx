"use client";

import React, { useEffect, useRef, useState } from 'react';

const DRAGON_COLOR_PALETTES = {
  gold: { primary: '#D97706', light: '#FBBF24', headShade: '#FDE047', rgb: '245, 158, 11', hueFilter: 'hue-rotate(-45deg)' },
  purple: { primary: '#8B5CF6', light: '#C084FC', headShade: '#E9D5FF', rgb: '168, 85, 247', hueFilter: 'hue-rotate(180deg)' },
  cyan: { primary: '#0891B2', light: '#22D3EE', headShade: '#67E8F9', rgb: '6, 182, 212', hueFilter: 'hue-rotate(100deg)' },
  teal: { primary: '#059669', light: '#34D399', headShade: '#A7F3D0', rgb: '16, 185, 129', hueFilter: 'hue-rotate(60deg)' },
  blue: { primary: '#2563EB', light: '#60A5FA', headShade: '#93C5FD', rgb: '59, 130, 246', hueFilter: 'hue-rotate(140deg)' },
  indigo: { primary: '#4F46E5', light: '#818CF8', headShade: '#C7D2FE', rgb: '99, 102, 241', hueFilter: 'hue-rotate(160deg)' },
  lime: { primary: '#65A30D', light: '#A3E635', headShade: '#D9F99D', rgb: '132, 204, 22', hueFilter: 'hue-rotate(25deg)' },
  olive: { primary: '#6A8C1A', light: '#a3e635', headShade: '#BEF264', rgb: '130, 166, 38', hueFilter: 'none' },
  orange: { primary: '#EA580C', light: '#FB923C', headShade: '#FDBA74', rgb: '249, 115, 22', hueFilter: 'hue-rotate(-70deg)' },
  pink: { primary: '#DB2777', light: '#F472B6', headShade: '#FBCFE8', rgb: '236, 72, 153', hueFilter: 'hue-rotate(220deg)' },
  red: { primary: '#DC2626', light: '#F87171', headShade: '#FCA5A5', rgb: '239, 68, 68', hueFilter: 'hue-rotate(-100deg)' },
};

/**
 * CustomCursor - Celestial Neon Energy Dragon Engine
 */
export default function CustomCursor({ theme = 'dark', colorTheme = 'cyan' }) {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Deactivate completely on phones / mobile touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobileOrTouch =
        window.innerWidth <= 768 ||
        (window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches);

      setIsTouchDevice(isMobileOrTouch);
    }
  }, []);

  const activeColorPalette = DRAGON_COLOR_PALETTES[colorTheme] || DRAGON_COLOR_PALETTES.cyan;

  const [hoverText, setHoverText] = useState('');
  const [isHoveredState, setIsHoveredState] = useState(false);
  const [isMouseDownState, setIsMouseDownState] = useState(false);
  const [isVisibleState, setIsVisibleState] = useState(false);

  // Refs for animation state
  const isHoveredRef = useRef(false);
  const isMouseDownRef = useRef(false);
  const isVisibleRef = useRef(false);

  // Position Refs
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef(null);

  // Processed Transparent Canvas Sprites & Tinting Engine
  const headSpriteRef = useRef(null);
  const bodySpriteRef = useRef(null);
  const clawSpriteRef = useRef(null);
  const tintedHeadRef = useRef(null);
  const tintedClawRef = useRef(null);
  const spritesReadyRef = useRef(false);

  // Dynamic Dragon Spine
  const isMobileRef = useRef(false);
  const dragonSpineRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);
      isMobileRef.current = isMobile;
      const numPoints = isMobile ? 26 : 58;

      const spine = [];
      for (let i = 0; i < numPoints; i++) {
        spine.push({ x: -100, y: -100, angle: 0 });
      }
      dragonSpineRef.current = spine;
    }
  }, []);

  // In-Memory Chroma-Keyer
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

  const getTintedSprite = (rawCanvas, colorHex) => {
    if (!rawCanvas || !colorHex) return rawCanvas;
    const off = document.createElement('canvas');
    off.width = rawCanvas.width;
    off.height = rawCanvas.height;
    const ctx = off.getContext('2d');
    
    ctx.drawImage(rawCanvas, 0, 0);
    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = colorHex;
    ctx.fillRect(0, 0, off.width, off.height);
    
    return off;
  };

  const rawHeadRef = useRef(null);
  const rawClawRef = useRef(null);

  const applySpriteTint = (headCanvas, clawCanvas, themeKey) => {
    if (!headCanvas || !clawCanvas) return;
    const palette = DRAGON_COLOR_PALETTES[themeKey] || DRAGON_COLOR_PALETTES.cyan;
    tintedHeadRef.current = getTintedSprite(headCanvas, palette.headShade || palette.light);
    tintedClawRef.current = getTintedSprite(clawCanvas, palette.primary);
  };

  // Preload dragon textures & generate tinted sprites (Desktop only)
  useEffect(() => {
    if (typeof window === 'undefined' || isTouchDevice) return;

    Promise.all([
      createTransparentSprite('/dragon/head.png'),
      createTransparentSprite('/dragon/body.png'),
      createTransparentSprite('/dragon/claw.png'),
    ]).then(([head, body, claw]) => {
      rawHeadRef.current = head;
      rawClawRef.current = claw;
      headSpriteRef.current = head;
      bodySpriteRef.current = body;
      clawSpriteRef.current = claw;
      spritesReadyRef.current = true;

      applySpriteTint(head, claw, colorTheme);
    });
  }, [isTouchDevice, colorTheme]);

  useEffect(() => {
    if (!rawHeadRef.current || !rawClawRef.current) return;
    applySpriteTint(rawHeadRef.current, rawClawRef.current, colorTheme);
  }, [colorTheme]);

  // Main Render Effect
  useEffect(() => {
    if (typeof window === 'undefined' || isTouchDevice) return; 

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const updatePointerPos = (clientX, clientY) => {
      posRef.current = { x: clientX, y: clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisibleState(true);

        const spine = dragonSpineRef.current;
        if (spine && spine[0].x === -100) {
          for (let i = 0; i < spine.length; i++) {
            spine[i].x = clientX;
            spine[i].y = clientY;
          }
          ringPosRef.current = { x: clientX, y: clientY };
        }
      }
    };

    const handleMouseMove = (e) => updatePointerPos(e.clientX, e.clientY);
    const handleTouchMove = (e) => { if (e.touches && e.touches[0]) updatePointerPos(e.touches[0].clientX, e.touches[0].clientY); };
    const handleTouchStart = (e) => { if (e.touches && e.touches[0]) updatePointerPos(e.touches[0].clientX, e.touches[0].clientY); };
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const interactiveEl = target.closest('a, button, input, textarea, select, [role="button"], .project-card, .skill-card, .stat-card, .glass-card, .hero-cta, .social-icon-btn, .theme-toggle, .contact-card, .form-input, .contact-template, .leadership-card');
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

    const handleMouseDown = () => { isMouseDownRef.current = true; setIsMouseDownState(true); };
    const handleMouseUp = () => { isMouseDownRef.current = false; setIsMouseDownState(false); };
    const handleMouseLeave = () => { isVisibleRef.current = false; setIsVisibleState(false); };
    const handleMouseEnter = () => { isVisibleRef.current = true; setIsVisibleState(true); };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let time = 0;

    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = theme === 'dark';

      const targetX = posRef.current.x;
      const targetY = posRef.current.y;

      if (targetX === -100 && targetY === -100) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      // Snappier magnetic ring follow (low latency)
      ringPosRef.current.x += (targetX - ringPosRef.current.x) * 0.45;
      ringPosRef.current.y += (targetY - ringPosRef.current.y) * 0.45;

      const dotScale = isHoveredRef.current ? (isMouseDownRef.current ? 0.7 : 1.25) : (isMouseDownRef.current ? 0.7 : 1.0);
      const ringScale = isHoveredRef.current ? (isMouseDownRef.current ? 0.85 : 1.15) : (isMouseDownRef.current ? 0.85 : 1.0);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) scale(${ringScale})`;
      }

      const spine = dragonSpineRef.current;
      if (spine && spine.length > 0) {
        const head = spine[0];
        const dxHead = targetX - head.x;
        const dyHead = targetY - head.y;
        const distHead = Math.hypot(dxHead, dyHead);

        if (distHead > 0.1) {
          // Responsive follow: high tracking speed with micro-damping to eliminate lag
          head.x += dxHead * 0.95;
          head.y += dyHead * 0.95;

          // Smooth rotational articulation without snapping
          const targetAngle = Math.atan2(dyHead, dxHead);
          let diff = targetAngle - head.angle;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          head.angle += diff * 0.55;
        }

        const SEGMENT_DIST = isMobileRef.current ? 13 : 16.5;

        for (let i = 1; i < spine.length; i++) {
          const prev = spine[i - 1];
          const curr = spine[i];
          const dx = prev.x - curr.x;
          const dy = prev.y - curr.y;
          const targetAngle = Math.atan2(dy, dx);
          
          let diff = targetAngle - curr.angle;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          curr.angle += diff * 0.85;

          curr.x = prev.x - Math.cos(curr.angle) * SEGMENT_DIST;
          curr.y = prev.y - Math.sin(curr.angle) * SEGMENT_DIST;
        }

        const getRadius = (index) => {
          const t = index / (spine.length - 1);
          let baseR = isMobileRef.current ? 14 : 22;
          if (t < 0.18) baseR = (isMobileRef.current ? 14 : 22) + t * 30;
          else if (t < 0.65) baseR = (isMobileRef.current ? 17 : 26) - (t - 0.18) * 10;
          else baseR = Math.max(3, (isMobileRef.current ? 12 : 18) * (1 - (t - 0.65) / 0.35));
          return baseR * (isHoveredRef.current ? 1.2 : 1.0);
        };

        const rgbStr = activeColorPalette.rgb;
        const eyeColor = isDark ? activeColorPalette.light : activeColorPalette.primary;

        // 1. Render Spinal Laser Core: dual stroke for glow (zero shadowBlur GPU penalty)
        ctx.beginPath();
        ctx.moveTo(spine[0].x, spine[0].y);
        for (let i = 1; i < spine.length - 1; i++) {
          const xc = (spine[i].x + spine[i + 1].x) / 2;
          const yc = (spine[i].y + spine[i + 1].y) / 2;
          ctx.quadraticCurveTo(spine[i].x, spine[i].y, xc, yc);
        }
        // Outer soft glow stroke
        ctx.strokeStyle = isDark ? `rgba(${rgbStr}, 0.3)` : `rgba(${rgbStr}, 0.22)`;
        ctx.lineWidth = isMobileRef.current ? 8 : 13;
        ctx.stroke();

        // Inner intense core stroke
        ctx.strokeStyle = activeColorPalette.primary;
        ctx.lineWidth = isMobileRef.current ? 3.0 : 4.5;
        ctx.stroke();

        // 2. Render Intricate Dragon Scale Rings & Ribs
        for (let i = 1; i < spine.length - 2; i++) {
          const pt = spine[i];
          const r = getRadius(i);
          const alphaVal = 1 - i / spine.length;
          ctx.save();
          ctx.translate(pt.x, pt.y);
          ctx.rotate(pt.angle);
          ctx.beginPath();
          ctx.ellipse(0, 0, r * 0.4, r, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${rgbStr}, ${alphaVal * (isDark ? 0.85 : 0.75)})`;
          ctx.lineWidth = isDark ? 1.6 : 2.0;
          ctx.stroke();

          if (i % 2 === 0) {
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.8);
            ctx.lineTo(r * 0.2, 0);
            ctx.lineTo(-r * 0.5, r * 0.8);
            ctx.strokeStyle = `rgba(${rgbStr}, ${alphaVal * (isDark ? 0.75 : 0.65)})`;
            ctx.lineWidth = isDark ? 1.4 : 1.7;
            ctx.stroke();
          }
          ctx.restore();
        }

        // 3. Render Dragon Dorsal Spine Spikes / Fins
        for (let i = 3; i < spine.length - 8; i += 2) {
          const pt = spine[i];
          const r = getRadius(i);
          const finAngle = pt.angle - Math.PI / 2;
          const finLen = (isMobileRef.current ? 10 : 16) + Math.sin(time * 3 + i) * 4;

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
          ctx.fillStyle = isDark ? `rgba(${rgbStr}, 0.85)` : activeColorPalette.primary;
          ctx.fill();
        }

        // 4. Render Ethereal Spirit Flame Ribbons
        for (let i = 4; i < spine.length - 8; i += 6) {
          const pt = spine[i];
          const r = getRadius(i);
          const wave = Math.sin(time * 3.5 + i) * 12;
          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.quadraticCurveTo(
            pt.x - Math.cos(pt.angle) * 22 + Math.sin(pt.angle) * (r + 15),
            pt.y - Math.sin(pt.angle) * 22 - Math.cos(pt.angle) * (r + 15),
            pt.x - Math.cos(pt.angle) * 36 + Math.sin(pt.angle) * (r + 24 + wave),
            pt.y - Math.sin(pt.angle) * 36 - Math.cos(pt.angle) * (r + 24 + wave)
          );
          ctx.strokeStyle = `rgba(${rgbStr}, ${isDark ? 0.8 : 0.7})`;
          ctx.lineWidth = isDark ? 1.8 : 2.2;
          ctx.stroke();
        }

        // 5. Render Dragon Claws (Fast rasterization without blur penalty)
        const clawIndices = isMobileRef.current ? [6, 14, 20] : [9, 21, 33, 46];
        const clawCanvas = tintedClawRef.current || clawSpriteRef.current;
        const headCanvas = tintedHeadRef.current || headSpriteRef.current;

        if (spritesReadyRef.current && clawCanvas) {
          for (const idx of clawIndices) {
            if (idx < spine.length) {
              const pt = spine[idx];
              // Left claw
              ctx.save();
              ctx.translate(pt.x, pt.y);
              ctx.rotate(pt.angle + Math.PI / 2 + 0.35);
              ctx.drawImage(clawCanvas, 0, -22, 54, 43);
              ctx.restore();

              // Right claw
              ctx.save();
              ctx.translate(pt.x, pt.y);
              ctx.rotate(pt.angle - Math.PI / 2 - 0.35);
              ctx.scale(1, -1);
              ctx.drawImage(clawCanvas, 0, -22, 54, 43);
              ctx.restore();
            }
          }
        }

        // 6. Render Crisp Dragon Head (Upgraded to 148px)
        if (spritesReadyRef.current && headCanvas) {
          ctx.save();
          ctx.translate(head.x, head.y);
          ctx.rotate(head.angle);
          ctx.drawImage(headCanvas, -56, -72, 148, 148);
          
          // Glowing Eyes
          ctx.beginPath();
          ctx.arc(27, -15, 5.2, 0, Math.PI * 2);
          ctx.arc(27, 15, 5.2, 0, Math.PI * 2);
          ctx.fillStyle = eyeColor;
          ctx.fill();

          // Dynamic Whiskers
          const w1 = Math.sin(time * 3.5) * 9;
          const w2 = Math.cos(time * 3.5) * 9;
          ctx.beginPath();
          ctx.moveTo(52, -9);
          ctx.bezierCurveTo(78, -28, 95 + w1, -42, 126 + w1, -30);
          ctx.moveTo(52, 9);
          ctx.bezierCurveTo(78, 28, 95 + w2, 42, 126 + w2, 30);
          ctx.strokeStyle = `rgba(${rgbStr}, 0.95)`;
          ctx.lineWidth = 3.0;
          ctx.stroke();

          ctx.restore();
        }

        // 6. Spawn Dragon Ember Particles during active movement (rate-limited)
        if (distHead > 2.5 && particlesRef.current.length < 24 && Math.random() < 0.3) {
          particlesRef.current.push({
            x: head.x + (Math.random() - 0.5) * 14,
            y: head.y + (Math.random() - 0.5) * 14,
            vx: (Math.random() - 0.5) * 1.8 - Math.cos(head.angle) * 1.2,
            vy: (Math.random() - 0.5) * 1.8 - Math.sin(head.angle) * 1.2,
            size: Math.random() * 2.5 + 1.0,
            life: 1,
            decay: Math.random() * 0.04 + 0.025,
          });
        }
      }

      // --- 7. Dragon Ember Particles (Batch rendered in single path) ---
      const particles = particlesRef.current;
      if (particles.length > 0) {
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;

          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${activeColorPalette.rgb}, ${p.life * 0.8})`;
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [theme, colorTheme, isTouchDevice]);

  if (isTouchDevice) return null;

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
