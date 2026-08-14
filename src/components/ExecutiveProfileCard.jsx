"use client";

import React, { useState, useRef } from 'react';

export default function ExecutiveProfileCard({ profileName = 'Vimal Santosh Kansotia' }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // subtle tilt max 6deg
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '360px',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, rgba(28, 24, 19, 0.9), rgba(12, 10, 8, 0.95))',
        border: '1px solid rgba(var(--olive-rgb), 0.25)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(var(--olive-rgb), 0.1)',
        transition: 'transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
        transform: transformStyle,
      }}
      className="executive-profile-card"
    >
      {/* High-Resolution Formal Executive Suit Portrait Photo */}
      <img
        src="/Assets/profile-formal.png"
        alt={profileName}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          display: 'block',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
        }}
        className="executive-portrait-img"
      />
    </div>
  );
}
