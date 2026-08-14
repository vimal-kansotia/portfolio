"use client";

import React, { useState } from 'react';
import { Scan, RefreshCw, ShieldCheck } from 'lucide-react';

const PROFILE_PHOTOS = [
  { src: '/Assets/profile-outdoors.png', caption: 'Outdoors Portrait' },
  { src: '/Assets/profile-thumbsup.png', caption: 'Engineering Pose' },
  { src: '/Assets/hero-avatar.jpg', caption: 'Classic Headshot' },
];

export default function InteractiveProfilePhoto({ profileName = 'Vimal Kansotia' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPhoto = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PROFILE_PHOTOS.length);
      setIsFlipping(false);
    }, 280);
  };

  const activePhoto = PROFILE_PHOTOS[currentIndex];

  return (
    <div
      className="interactive-profile-card glass card-3d"
      onClick={handleNextPhoto}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '340px',
        overflow: 'hidden',
        borderRadius: '1rem',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      title="Click to flip photo"
    >
      {/* 1. Photo Container with 3D Flip Morph Animation */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
          transform: isFlipping ? 'scale(0.95) rotateY(15deg)' : 'scale(1) rotateY(0deg)',
          opacity: isFlipping ? 0.4 : 1,
        }}
      >
        <img
          src={activePhoto.src}
          alt={`${profileName} - ${activePhoto.caption}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </div>

      {/* 2. Biometric Sci-Fi Scanner Laser Beam Sweep */}
      <div
        className="biometric-scanner-beam"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
          boxShadow: '0 0 14px var(--color-primary), 0 0 24px var(--color-primary)',
          pointerEvents: 'none',
          zIndex: 5,
          animation: 'scanSweep 4s ease-in-out infinite alternate',
        }}
      />

      {/* 3. Sci-Fi HUD Corner Brackets */}
      <div style={{ position: 'absolute', top: '12px', left: '12px', width: '16px', height: '16px', borderTop: '2px solid var(--color-primary)', borderLeft: '2px solid var(--color-primary)', pointerEvents: 'none', zIndex: 6 }} />
      <div style={{ position: 'absolute', top: '12px', right: '12px', width: '16px', height: '16px', borderTop: '2px solid var(--color-primary)', borderRight: '2px solid var(--color-primary)', pointerEvents: 'none', zIndex: 6 }} />
      <div style={{ position: 'absolute', bottom: '12px', left: '12px', width: '16px', height: '16px', borderBottom: '2px solid var(--color-primary)', borderLeft: '2px solid var(--color-primary)', pointerEvents: 'none', zIndex: 6 }} />
      <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '16px', height: '16px', borderBottom: '2px solid var(--color-primary)', borderRight: '2px solid var(--color-primary)', pointerEvents: 'none', zIndex: 6 }} />

      {/* 4. Top-Left Biometric ID Badge */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          borderRadius: '9999px',
          background: 'rgba(20, 17, 13, 0.8)',
          border: '1px solid rgba(var(--olive-rgb), 0.35)',
          backdropFilter: 'blur(8px)',
          color: 'var(--color-primary)',
          fontFamily: 'monospace',
          fontSize: '0.7rem',
          fontWeight: 700,
          zIndex: 6,
        }}
      >
        <Scan size={12} />
        <span>BIOMETRIC ID: VK-2026</span>
      </div>

      {/* 5. Top-Right Flip Indicator Badge */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          padding: '4px 10px',
          borderRadius: '9999px',
          background: 'rgba(20, 17, 13, 0.8)',
          border: '1px solid rgba(var(--olive-rgb), 0.35)',
          backdropFilter: 'blur(8px)',
          color: '#FFFFFF',
          fontSize: '0.7rem',
          fontWeight: 600,
          zIndex: 6,
        }}
      >
        <RefreshCw size={11} className={isFlipping ? 'animate-spin' : ''} style={{ color: 'var(--color-primary)' }} />
        <span>{currentIndex + 1} / {PROFILE_PHOTOS.length}</span>
      </div>

      {/* 6. Bottom Glass Caption & Status Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          right: '16px',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          padding: '8px 14px',
          borderRadius: '0.75rem',
          background: 'rgba(20, 17, 13, 0.82)',
          border: '1px solid rgba(var(--olive-rgb), 0.3)',
          backdropFilter: 'blur(12px)',
          zIndex: 6,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} style={{ color: 'var(--color-primary)' }} />
          <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.82rem' }}>
            {activePhoto.caption}
          </span>
        </div>
        <span style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.7rem', fontFamily: 'monospace' }}>
          CLICK TO FLIP ➔
        </span>
      </div>

      {/* Keyframes style tag for scanner beam animation */}
      <style jsx>{`
        @keyframes scanSweep {
          0% {
            top: 0%;
            opacity: 0.2;
          }
          50% {
            opacity: 0.95;
          }
          100% {
            top: 96%;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
