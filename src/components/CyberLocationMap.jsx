"use client";

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Radio } from 'lucide-react';

export default function CyberLocationMap({ locationCity = 'Mumbai, Maharashtra', timezone = 'GMT+5:30 (IST)' }) {
  const canvasRef = useRef(null);
  const [timeString, setTimeString] = useState('');

  // 1. Live Ticking IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Animated Cyber Radar Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrameId;
    let angle = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w * 0.55;
      const cy = h * 0.5;
      const maxRadius = Math.max(w, h) * 0.65;

      const computedStyle = getComputedStyle(document.documentElement);
      const rgbStr = computedStyle.getPropertyValue('--olive-rgb').trim() || '130, 166, 38';
      const primaryColor = computedStyle.getPropertyValue('--color-primary').trim() || '#82A626';

      ctx.clearRect(0, 0, w, h);

      // Dark Cosmic Tech Background
      const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, maxRadius);
      bgGrad.addColorStop(0, 'rgba(18, 14, 10, 0.95)');
      bgGrad.addColorStop(1, 'rgba(6, 5, 4, 0.98)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Grid Lines
      ctx.strokeStyle = `rgba(${rgbStr}, 0.08)`;
      ctx.lineWidth = 1;

      const gridSize = 35;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Radar Concentric Circles
      ctx.strokeStyle = `rgba(${rgbStr}, 0.18)`;
      for (let r = 40; r < maxRadius; r += 55) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshair Lines
      ctx.strokeStyle = `rgba(${rgbStr}, 0.25)`;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cx - maxRadius, cy);
      ctx.lineTo(cx + maxRadius, cy);
      ctx.moveTo(cx, cy - maxRadius);
      ctx.lineTo(cx, cy + maxRadius);
      ctx.stroke();
      ctx.setLineDash([]);

      // Sweeping Radar Scanner Beam
      angle += 0.02;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxRadius, angle - 0.45, angle);
      ctx.closePath();
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius);
      sweepGrad.addColorStop(0, `rgba(${rgbStr}, 0.35)`);
      sweepGrad.addColorStop(1, `rgba(${rgbStr}, 0)`);
      ctx.fillStyle = sweepGrad;
      ctx.fill();
      ctx.restore();

      // Pulsing Sonar Ring from Mumbai Pin
      const pulseR = (Date.now() % 2400) / 2400 * 65;
      const pulseAlpha = Math.max(0, 1 - pulseR / 65);
      ctx.beginPath();
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${rgbStr}, ${pulseAlpha * 0.8})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Central Location Pin Dot
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 16;
      ctx.fill();

      // Coordinates Watermark Text
      ctx.font = '10px monospace';
      ctx.fillStyle = `rgba(${rgbStr}, 0.5)`;
      ctx.fillText('19°07\'60" N  |  72°87\'77" E', 16, h - 16);
      ctx.fillText('MUMBAI RADAR NODE #01', 16, h - 30);

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="cyber-map-container" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '220px', overflow: 'hidden', borderRadius: '1rem' }}>
      {/* Background Radar Canvas */}
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Floating Glass Top Badges */}
      <div style={{ position: 'absolute', top: '16px', left: '16px', right: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        {/* City Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(20, 17, 13, 0.75)', border: '1px solid rgba(var(--olive-rgb), 0.3)', backdropFilter: 'blur(10px)', color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem', boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)' }}>
          <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
          <span>{locationCity}</span>
        </div>

        {/* Live Clock Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(20, 17, 13, 0.75)', border: '1px solid rgba(var(--olive-rgb), 0.3)', backdropFilter: 'blur(10px)', color: 'var(--color-primary)', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.82rem', boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)' }}>
          <Clock size={14} />
          <span>{timeString || '08:28:35 PM'}</span>
        </div>
      </div>

      {/* Floating Radar Center Marker */}
      <div style={{ position: 'absolute', top: '50%', left: '55%', transform: 'translate(-50%, -100%)', pointerEvents: 'none', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ padding: '4px 10px', borderRadius: '6px', background: 'var(--color-primary)', color: '#000000', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.05em', boxShadow: '0 0 16px var(--color-primary)', marginBottom: '4px' }}>
          MUMBAI HQ
        </div>
        <Radio size={20} className="animate-pulse" style={{ color: 'var(--color-primary)', filter: 'drop-shadow(0 0 8px var(--color-primary))' }} />
      </div>

      {/* Bottom Right Status Badge */}
      <div style={{ position: 'absolute', bottom: '16px', right: '16px', zIndex: 10 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', background: 'rgba(20, 17, 13, 0.8)', border: '1px solid rgba(var(--olive-rgb), 0.35)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(8px)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} className="animate-pulse" />
          <span>{timezone}</span>
        </div>
      </div>
    </div>
  );
}
