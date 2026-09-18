'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RotateCcw, Sparkles, Mail, Heart, Send } from 'lucide-react';

export default function PostMailboxAnimation({ senderName = '', onReset }) {
  // Animation timeline phases:
  // 'walking' -> 'inspecting' -> 'opening' -> 'inserting' -> 'closing' -> 'flag_flip' -> 'salute' -> 'complete'
  const [phase, setPhase] = useState('walking');

  useEffect(() => {
    // Stage timer sequence
    const t1 = setTimeout(() => setPhase('inspecting'), 1600);
    const t2 = setTimeout(() => setPhase('opening'), 2300);
    const t3 = setTimeout(() => setPhase('inserting'), 2900);
    const t4 = setTimeout(() => setPhase('closing'), 3700);
    const t5 = setTimeout(() => setPhase('flag_flip'), 4200);
    const t6 = setTimeout(() => setPhase('salute'), 4800);
    const t7 = setTimeout(() => setPhase('complete'), 5400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, []);

  const isComplete = phase === 'complete' || phase === 'salute';

  return (
    <div className="postman-success-card">
      <style>{`
        .postman-success-card {
          width: 100%;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
          background: linear-gradient(180deg, #0B1120 0%, #151F32 50%, #0F172A 100%);
          border-radius: 24px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        :root[data-theme='light'] .postman-success-card {
          background: linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 60%, #CBD5E1 100%);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 15px 30px rgba(0, 0, 0, 0.08);
        }

        .postman-scene-stage {
          position: relative;
          width: 100%;
          max-width: 460px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .postman-bg-landscape {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .postman-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--olive-rgb, 226, 255, 111), 0.12);
          border: 1.5px solid rgba(var(--olive-rgb, 226, 255, 111), 0.4);
          color: var(--color-primary, #E2FF6F);
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 10px;
          box-shadow: 0 0 20px rgba(var(--olive-rgb, 226, 255, 111), 0.2);
        }

        :root[data-theme='light'] .postman-status-badge {
          background: rgba(37, 99, 235, 0.1);
          border-color: rgba(37, 99, 235, 0.35);
          color: #2563EB;
          box-shadow: 0 0 16px rgba(37, 99, 235, 0.12);
        }

        .postman-delivery-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-text, #FAF6F0);
          margin: 0 0 8px 0;
          letter-spacing: -0.025em;
        }

        :root[data-theme='light'] .postman-delivery-title {
          color: #0F172A;
        }

        .postman-delivery-desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary, rgba(250, 246, 240, 0.85));
          margin: 0 0 20px 0;
          line-height: 1.55;
          max-width: 380px;
        }

        :root[data-theme='light'] .postman-delivery-desc {
          color: #475569;
        }

        .postman-reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--olive-rgb, 226, 255, 111), 0.12);
          border: 1.5px solid rgba(var(--olive-rgb, 226, 255, 111), 0.45);
          color: var(--color-text, #FAF6F0);
          padding: 10px 24px;
          border-radius: 14px;
          font-size: 0.86rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :root[data-theme='light'] .postman-reset-btn {
          color: #0F172A;
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.25);
        }

        .postman-reset-btn:hover {
          background: rgba(var(--olive-rgb, 226, 255, 111), 0.24);
          border-color: var(--color-primary, #E2FF6F);
          color: var(--color-primary, #E2FF6F);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), 0 0 20px rgba(var(--olive-rgb, 226, 255, 111), 0.25);
        }

        :root[data-theme='light'] .postman-reset-btn:hover {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
        }
      `}</style>

      {/* Stage Container */}
      <div className="postman-scene-stage">
        {/* Dynamic SVG Viewport with Full Environment & Character */}
        <svg
          width="440"
          height="250"
          viewBox="0 0 440 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E293B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="grassHill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            <linearGradient id="pathPaving" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            <linearGradient id="pmanJacket" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            <linearGradient id="pmanSkin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FDBA74" />
            </linearGradient>

            <linearGradient id="pmanCap" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>

            <linearGradient id="pmanSatchel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>

            <linearGradient id="boxBarrel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="boxGoldGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E2FF6F" />
              <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>

            <linearGradient id="redFlag" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>

            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>

            <filter id="brightGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ────────────────── BACKGROUND ENVIRONMENT ────────────────── */}
          {/* Drifting Sky Clouds */}
          <g id="sky-clouds" opacity="0.4">
            <motion.path
              d="M 20 40 Q 35 25 50 40 Q 65 25 80 40 Q 90 40 90 50 Q 90 60 20 60 Z"
              fill="#94A3B8"
              animate={{ x: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 260 25 Q 275 10 290 25 Q 305 10 320 25 Q 330 25 330 35 Q 330 45 260 45 Z"
              fill="#94A3B8"
              animate={{ x: [0, -30, 0] }}
              transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
            />
          </g>

          {/* Rolling Lawn Hill & Paved Path */}
          <path d="M -10 200 Q 150 185 450 205 L 450 260 L -10 260 Z" fill="url(#grassHill)" opacity="0.9" />
          <path d="M 0 220 C 120 215, 240 210, 440 225 L 440 255 L 0 255 Z" fill="url(#pathPaving)" />

          {/* Decorative Wooden Fence Posts on Left Background */}
          <g id="fence-posts" opacity="0.6" transform="translate(10, 160)">
            <rect x="10" y="0" width="8" height="40" rx="2" fill="#78350F" />
            <polygon points="10,0 14,-5 18,0" fill="#92400E" />
            <rect x="35" y="5" width="8" height="35" rx="2" fill="#78350F" />
            <polygon points="35,5 39,0 43,5" fill="#92400E" />
            <line x1="5" y1="12" x2="48" y2="14" stroke="#92400E" strokeWidth="2.5" />
            <line x1="5" y1="26" x2="48" y2="28" stroke="#92400E" strokeWidth="2.5" />
          </g>

          {/* ────────────────── 3D MAILBOX & STAND ────────────────── */}
          <g id="mailbox-assembly" transform="translate(300, 60)">
            {/* Ground Base Shadow */}
            <ellipse cx="45" cy="164" rx="38" ry="7" fill="rgba(0,0,0,0.5)" filter="url(#softShadow)" />

            {/* Stand Pole & Ground Anchor */}
            <rect x="38" y="90" width="14" height="74" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
            <rect x="22" y="160" width="46" height="8" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />

            {/* Mailbox Barrel Body */}
            <path
              d="M 5 25 C 5 -5, 85 -5, 85 25 L 98 25 C 104 25, 108 32, 108 40 L 108 80 C 108 90, 98 96, 85 96 L 5 96 C -12 96, -12 25, 5 25 Z"
              fill="url(#boxBarrel)"
              stroke="url(#boxGoldGlow)"
              strokeWidth="2"
            />

            {/* Dark Interior Slot Chamber */}
            <path
              d="M 5 25 C -8 25, -8 96, 5 96 C 14 96, 14 25, 5 25 Z"
              fill="#030712"
              stroke="rgba(226, 255, 111, 0.4)"
              strokeWidth="1.5"
            />
            <ellipse cx="5" cy="60.5" rx="5" ry="28" fill="rgba(226, 255, 111, 0.25)" />

            {/* Red Postal Flag */}
            <motion.g
              id="postal-flag"
              style={{ transformOrigin: '88px 70px' }}
              initial={{ rotate: 85 }}
              animate={{
                rotate: phase === 'flag_flip' || phase === 'salute' || phase === 'complete' ? 0 : 85
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            >
              <rect x="86" y="28" width="5" height="44" rx="2.5" fill="url(#redFlag)" stroke="#7F1D1D" strokeWidth="0.8" />
              <path d="M 88 28 L 114 28 C 117 28, 118 31, 116 33 L 109 41 L 116 49 C 118 51, 117 54, 114 54 L 88 54 Z" fill="url(#redFlag)" />
              <circle cx="88.5" cy="70" r="4.5" fill="#E2FF6F" stroke="#0F172A" strokeWidth="1.5" />
            </motion.g>

            {/* Front Door Flap (Swings Open Downward & Closes Shut) */}
            <motion.g
              id="mailbox-door"
              style={{ transformOrigin: '5px 96px' }}
              initial={{ rotate: 0 }}
              animate={{
                rotate: phase === 'opening' || phase === 'inserting' ? 75 : 0
              }}
              transition={{
                type: 'spring',
                stiffness: phase === 'closing' || phase === 'flag_flip' || phase === 'salute' || phase === 'complete' ? 340 : 190,
                damping: phase === 'closing' || phase === 'flag_flip' || phase === 'salute' || phase === 'complete' ? 14 : 20
              }}
            >
              <path
                d="M 5 25 C -8 25, -8 96, 5 96 C 18 96, 18 25, 5 25 Z"
                fill="url(#boxBarrel)"
                stroke="url(#boxGoldGlow)"
                strokeWidth="2"
              />
              <circle cx="11" cy="60.5" r="4.5" fill="#E2FF6F" filter="url(#brightGlow)" />
              <path d="M 0 54 L 6 60.5 L 12 54" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" fill="none" />
            </motion.g>
          </g>

          {/* ────────────────── 3D POSTMAN CHARACTER ────────────────── */}
          <motion.g
            id="postman-character"
            initial={{ x: -100, y: 15 }}
            animate={{
              x: phase === 'walking'
                ? 135
                : phase === 'inspecting'
                ? 145
                : phase === 'opening' || phase === 'inserting'
                ? 172
                : phase === 'closing' || phase === 'flag_flip'
                ? 180
                : 155, // Step slightly back to salute viewer
              y: phase === 'walking' ? [15, 12, 15] : 15
            }}
            transition={{
              x: { duration: phase === 'walking' ? 1.5 : 0.5, ease: 'easeInOut' },
              y: { duration: 0.4, repeat: phase === 'walking' ? Infinity : 0 }
            }}
          >
            {/* Postman Ground Shadow */}
            <ellipse cx="45" cy="195" rx="28" ry="6" fill="rgba(0,0,0,0.4)" filter="url(#softShadow)" />

            {/* Left Leg */}
            <motion.g
              style={{ transformOrigin: '40px 145px' }}
              animate={{
                rotate: phase === 'walking' ? [24, -24, 24] : 0
              }}
              transition={{ repeat: phase === 'walking' ? Infinity : 0, duration: 0.48, ease: 'easeInOut' }}
            >
              <rect x="36" y="145" width="10" height="42" rx="4" fill="#1E3A8A" />
              <path d="M 33 183 L 50 183 C 52 183, 54 186, 52 189 L 33 189 Z" fill="#0F172A" />
            </motion.g>

            {/* Right Leg */}
            <motion.g
              style={{ transformOrigin: '50px 145px' }}
              animate={{
                rotate: phase === 'walking' ? [-24, 24, -24] : 0
              }}
              transition={{ repeat: phase === 'walking' ? Infinity : 0, duration: 0.48, ease: 'easeInOut' }}
            >
              <rect x="46" y="145" width="10" height="42" rx="4" fill="#1D4ED8" />
              <path d="M 43 183 L 60 183 C 62 183, 64 186, 62 189 L 43 189 Z" fill="#0F172A" />
            </motion.g>

            {/* Torso & Uniform Jacket */}
            <rect x="32" y="85" width="28" height="62" rx="8" fill="url(#pmanJacket)" stroke="#1D4ED8" strokeWidth="1" />
            <path d="M 38 85 L 46 102 L 54 85" fill="#E2FF6F" />
            {/* Golden Buttons */}
            <circle cx="46" cy="110" r="2.2" fill="#FBBF24" />
            <circle cx="46" cy="122" r="2.2" fill="#FBBF24" />
            <circle cx="46" cy="134" r="2.2" fill="#FBBF24" />

            {/* Leather Satchel Bag on Hip */}
            <path d="M 28 88 L 62 130" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
            <rect x="22" y="118" width="23" height="22" rx="4" fill="url(#pmanSatchel)" stroke="#451A03" strokeWidth="1.2" />
            <rect x="30" y="125" width="7" height="9" rx="1.5" fill="#FBBF24" />
            {/* Postal Envelope Symbol on Bag */}
            <path d="M 25 122 L 33.5 128 L 42 122" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

            {/* Head & Facial Animations */}
            <motion.g
              animate={{
                rotate: phase === 'inspecting' ? [0, 8, -4, 0] : phase === 'salute' || phase === 'complete' ? [0, -5, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <circle cx="46" cy="65" r="16" fill="url(#pmanSkin)" />
              {/* Eye with Blink Animation */}
              <motion.circle
                cx="53"
                cy="63"
                r="2"
                fill="#1E293B"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ repeat: Infinity, duration: 3.5, repeatDelay: 2 }}
              />
              {/* Smiling Mouth Expression */}
              <path
                d={
                  isComplete
                    ? 'M 48 68 Q 53 77 58 68 Z' // Joyful open smile when finished!
                    : 'M 49 69 Q 53 74 57 69'
                }
                fill={isComplete ? '#EF4444' : 'none'}
                stroke={isComplete ? '#B91C1C' : '#9A3412'}
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              {/* Ear */}
              <circle cx="38" cy="65" r="3" fill="#FDBA74" />

              {/* Official Postal Cap */}
              <path d="M 28 62 C 28 46, 64 46, 64 62 Z" fill="url(#pmanCap)" />
              <path d="M 44 58 L 68 58 C 70 58, 69 62, 66 63 L 44 62 Z" fill="#0F172A" />
              {/* Gold Emblem Badge */}
              <circle cx="46" cy="51" r="3.5" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
            </motion.g>

            {/* Left Arm (Holds Bag Strap / Reaches to Postal Flag) */}
            <motion.g
              style={{ transformOrigin: '36px 90px' }}
              animate={{
                rotate:
                  phase === 'walking'
                    ? [-20, 20, -20]
                    : phase === 'flag_flip'
                    ? -75 // Reaching up to flip the flag lever!
                    : phase === 'salute' || phase === 'complete'
                    ? -45 // Proud stance
                    : -10
              }}
              transition={{ duration: 0.4 }}
            >
              <rect x="28" y="90" width="9" height="38" rx="4.5" fill="#1E40AF" />
              <circle cx="32.5" cy="130" r="5" fill="url(#pmanSkin)" />
            </motion.g>

            {/* Right Arm (Carries letter -> Inspects -> Opens flap -> Inserts -> Salutes/Hat Tip!) */}
            <motion.g
              style={{ transformOrigin: '54px 90px' }}
              animate={{
                rotate:
                  phase === 'walking'
                    ? [20, -20, 20]
                    : phase === 'inspecting'
                    ? -35 // Holds letter up to inspect address
                    : phase === 'opening'
                    ? -60 // Pulls door handle
                    : phase === 'inserting'
                    ? -45 // Inserts deep inside slot
                    : phase === 'salute' || phase === 'complete'
                    ? -125 // Tips cap with polite salute!
                    : 0,
                x: phase === 'inserting' ? 22 : 0,
                y: phase === 'inserting' ? -8 : 0
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <rect x="52" y="90" width="9" height="36" rx="4.5" fill="#2563EB" />
              <circle cx="56.5" cy="128" r="5" fill="url(#pmanSkin)" />

              {/* 💌 THE ENVELOPE (Glides cleanly into slot during insertion phase) */}
              {phase !== 'closing' && phase !== 'flag_flip' && phase !== 'salute' && phase !== 'complete' && (
                <motion.g
                  id="delivery-envelope"
                  initial={{ scale: 1, opacity: 1, x: 50, y: 108 }}
                  animate={{
                    x:
                      phase === 'inspecting'
                        ? 40
                        : phase === 'inserting'
                        ? 104
                        : 50,
                    y:
                      phase === 'inspecting'
                        ? 75
                        : phase === 'inserting'
                        ? 78
                        : 108,
                    scale: phase === 'inserting' ? 0.4 : 1,
                    opacity: phase === 'inserting' ? 0 : 1
                  }}
                  transition={{ duration: phase === 'inserting' ? 0.75 : 0.45, ease: 'easeInOut' }}
                >
                  <rect x="0" y="0" width="34" height="22" rx="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.2" filter="url(#brightGlow)" />
                  <path d="M 0 0 L 17 12 L 34 0" stroke="#94A3B8" strokeWidth="1" fill="#F8FAFC" />
                  {/* Glowing Red Wax Seal */}
                  <circle cx="17" cy="12" r="3.5" fill="#EF4444" />
                  <path d="M 15.5 12 L 17 13.5 L 19 10.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
                </motion.g>
              )}
            </motion.g>
          </motion.g>

          {/* ────────────────── CELEBRATION EFFECTS & PARTICLES ────────────────── */}
          {isComplete && (
            <motion.g
              id="celebration-particles"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Confetti & Stars */}
              <motion.circle cx="370" cy="35" r="4.5" fill="#E2FF6F" animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 1.4 }} />
              <motion.circle cx="410" cy="75" r="3.5" fill="#2DD4BF" animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 1.7 }} />
              <motion.circle cx="340" cy="25" r="3" fill="#FBBF24" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.1 }} />
              <motion.circle cx="150" cy="30" r="4" fill="#3B82F6" animate={{ y: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 1.9 }} />

              {/* Floating Heart Burst from Mailbox */}
              <motion.g
                initial={{ y: 85, opacity: 0, scale: 0.5 }}
                animate={{ y: 20, opacity: [0, 1, 0.9, 0], scale: [0.6, 1.3, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.4 }}
              >
                <path
                  d="M 370 30 C 370 25, 365 20, 360 23 C 355 27, 370 37, 370 37 C 370 37, 385 27, 380 23 C 375 20, 370 25, 370 30 Z"
                  fill="#EF4444"
                  filter="url(#brightGlow)"
                />
              </motion.g>
            </motion.g>
          )}
        </svg>
      </div>

      {/* Delivery Confirmation Card & Actions */}
      <motion.div
        className="postman-delivery-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isComplete ? 1 : 0.25, y: isComplete ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="postman-status-badge">
          <Check size={14} strokeWidth={3} />
          <span>Postal Delivery Confirmed</span>
        </div>

        <h3 className="postman-delivery-title">Message Safely Delivered!</h3>
        <p className="postman-delivery-desc">
          {senderName ? (
            <>Thank you, <strong>{senderName}</strong>! The postman has inspected your letter and safely placed it inside Vimal's mailbox. I'll read your message and reply soon!</>
          ) : (
            <>The postman has safely placed your letter inside Vimal's mailbox. I'll read your note and get back to you soon!</>
          )}
        </p>

        <button
          type="button"
          onClick={onReset}
          className="postman-reset-btn"
        >
          <RotateCcw size={15} />
          <span>Send Another Message</span>
        </button>
      </motion.div>
    </div>
  );
}
