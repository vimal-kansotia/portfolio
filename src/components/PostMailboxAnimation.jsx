import { useState, useEffect } from 'react';
import { Check, RotateCcw } from 'lucide-react';

export default function PostMailboxAnimation({ senderName = '', onReset }) {
  const [animationStep, setAnimationStep] = useState(0); // 0: flying, 1: closed, 2: confirmed

  useEffect(() => {
    // Step 1: Envelope flies into mailbox, door snaps shut at 1.8s
    const timer1 = setTimeout(() => {
      setAnimationStep(1);
    }, 1800);

    // Step 2: Confirmation card & sparkles fade in at 2.3s
    const timer2 = setTimeout(() => {
      setAnimationStep(2);
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="mailbox-success-card">
      <style>{`
        .mailbox-success-card {
          width: 100%;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 1rem;
          position: relative;
          overflow: hidden;
          text-align: center;
          animation: cardFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        .mailbox-scene-wrap {
          position: relative;
          width: 260px;
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        /* Flight path of the envelope */
        .mailbox-flying-envelope {
          position: absolute;
          top: 30px;
          left: 45px;
          width: 68px;
          height: 44px;
          z-index: 5;
          transform-origin: center center;
          animation: mailFlight 2.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes mailFlight {
          0% {
            opacity: 0;
            transform: translate(-70px, -80px) scale(0.6) rotate(-24deg);
          }
          20% {
            opacity: 1;
            transform: translate(-30px, -50px) scale(1.05) rotate(-12deg);
          }
          48% {
            opacity: 1;
            transform: translate(12px, -20px) scale(0.9) rotate(6deg);
          }
          72% {
            opacity: 1;
            transform: translate(38px, 12px) scale(0.55) rotate(0deg);
          }
          86% {
            opacity: 0;
            transform: translate(44px, 24px) scale(0.2) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translate(44px, 24px) scale(0.1) rotate(0deg);
          }
        }

        /* Door closing with mechanical spring bounce */
        .mailbox-door-hinge {
          transform-origin: 95px 148px;
          animation: mailboxDoorClose 2.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes mailboxDoorClose {
          0%, 68% {
            /* Open wide downwards */
            transform: rotate(64deg);
            opacity: 0.95;
          }
          84% {
            /* Snaps shut with spring overshoot */
            transform: rotate(-7deg);
            opacity: 1;
          }
          92% {
            transform: rotate(2.5deg);
          }
          100% {
            /* Locked shut */
            transform: rotate(0deg);
            opacity: 1;
          }
        }

        /* Red postal flag pops upright when mail arrives */
        .mailbox-flag-pivot {
          transform-origin: 209px 109px;
          animation: postalFlagPop 2.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes postalFlagPop {
          0%, 75% {
            /* Flag is down */
            transform: rotate(86deg);
          }
          86% {
            /* Pops up with joyful bounce */
            transform: rotate(-14deg);
          }
          93% {
            transform: rotate(4deg);
          }
          100% {
            /* Upright */
            transform: rotate(0deg);
          }
        }

        /* Celebration sparkles */
        .mailbox-sparkles-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          animation: sparklesCelebrate 2.4s ease-out forwards;
        }

        @keyframes sparklesCelebrate {
          0%, 78% {
            opacity: 0;
            transform: scale(0.5);
          }
          88% {
            opacity: 1;
            transform: scale(1.15);
          }
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }

        /* Delivery confirmation texts */
        .mailbox-delivery-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: infoFadeUp 2.5s ease-out forwards;
        }

        @keyframes infoFadeUp {
          0%, 80% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mailbox-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(var(--olive-rgb, 226, 255, 111), 0.14);
          border: 1px solid rgba(var(--olive-rgb, 226, 255, 111), 0.4);
          color: var(--color-primary, #E2FF6F);
          font-family: var(--font-mono, monospace);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 10px;
          box-shadow: 0 0 14px rgba(var(--olive-rgb, 226, 255, 111), 0.18);
        }

        .mailbox-delivery-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-text, #FAF6F0);
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        :root[data-theme='light'] .mailbox-delivery-title {
          color: #0F172A;
        }

        .mailbox-delivery-desc {
          font-size: 0.88rem;
          color: var(--color-text-secondary, rgba(250, 246, 240, 0.8));
          margin: 0 0 18px 0;
          line-height: 1.5;
          max-width: 320px;
        }

        :root[data-theme='light'] .mailbox-delivery-desc {
          color: #475569;
        }

        .mailbox-reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--olive-rgb, 226, 255, 111), 0.08);
          border: 1.5px solid rgba(var(--olive-rgb, 226, 255, 111), 0.35);
          color: var(--color-text, #FAF6F0);
          padding: 9px 18px;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :root[data-theme='light'] .mailbox-reset-btn {
          color: #0F172A;
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.2);
        }

        .mailbox-reset-btn:hover {
          background: rgba(var(--olive-rgb, 226, 255, 111), 0.18);
          border-color: var(--color-primary, #E2FF6F);
          color: var(--color-primary, #E2FF6F);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35), 0 0 16px rgba(var(--olive-rgb, 226, 255, 111), 0.22);
        }

        :root[data-theme='light'] .mailbox-reset-btn:hover {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
        }
      `}</style>

      <div className="mailbox-scene-wrap">
        {/* Post Mailbox SVG */}
        <svg width="260" height="210" viewBox="0 0 260 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mbBodyGrad" x1="60" y1="40" x2="210" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2D3342" />
              <stop offset="50%" stopColor="#1C212D" />
              <stop offset="100%" stopColor="#0F1219" />
            </linearGradient>

            <linearGradient id="mbDoorGrad" x1="70" y1="50" x2="110" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B4459" />
              <stop offset="100%" stopColor="#181D28" />
            </linearGradient>

            <linearGradient id="mbAccentGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E2FF6F" />
              <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>

            <linearGradient id="mbFlagGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
          </defs>

          {/* Stand Pole & Ground Anchor */}
          <rect x="145" y="138" width="16" height="58" rx="3" fill="#141822" stroke="#2B3342" strokeWidth="1.5" />
          <rect x="120" y="192" width="66" height="8" rx="4" fill="#0C0F16" stroke="#2B3342" strokeWidth="1.5" />
          <ellipse cx="153" cy="200" rx="48" ry="6" fill="rgba(0,0,0,0.55)" />

          {/* Mailbox Barrel (Tunnel Body) */}
          <path
            d="M 95 62
               C 95 36, 185 36, 185 62
               L 208 62
               C 218 62, 224 72, 224 84
               L 224 124
               C 224 138, 208 148, 192 148
               L 95 148
               C 78 148, 78 62, 95 62 Z"
            fill="url(#mbBodyGrad)"
            stroke="url(#mbAccentGlow)"
            strokeWidth="1.8"
          />

          {/* Mailbox Interior Tunnel (Visible before door snaps shut) */}
          <path
            d="M 95 62
               C 76 62, 76 148, 95 148
               C 108 148, 112 62, 95 62 Z"
            fill="#06080D"
            stroke="rgba(226, 255, 111, 0.45)"
            strokeWidth="1.5"
          />
          {/* Glowing Mail Reception Chamber */}
          <ellipse cx="95" cy="105" rx="8" ry="36" fill="rgba(226, 255, 111, 0.1)" />

          {/* Red Postal Flag (Pops up when message enters) */}
          <g className="mailbox-flag-pivot">
            {/* Flag Staff */}
            <rect x="207" y="64" width="5" height="48" rx="2.5" fill="url(#mbFlagGrad)" stroke="#991B1B" strokeWidth="0.8" />
            {/* Flag Banner */}
            <path
              d="M 209 64 L 238 64 C 241 64, 242 67, 240 69 L 232 78 L 240 87 C 242 89, 241 92, 238 92 L 209 92 Z"
              fill="url(#mbFlagGrad)"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.45))"
            />
            {/* Flag Pivot Cap */}
            <circle cx="209.5" cy="109.5" r="4.5" fill="#E2FF6F" stroke="#0E121A" strokeWidth="1.5" />
          </g>

          {/* Mailbox Front Door Flap (Swings closed with bounce) */}
          <g className="mailbox-door-hinge">
            <path
              d="M 95 62
                 C 78 62, 78 148, 95 148
                 C 112 148, 112 62, 95 62 Z"
              fill="url(#mbDoorGrad)"
              stroke="url(#mbAccentGlow)"
              strokeWidth="1.8"
            />
            {/* Metallic Door Pull Handle */}
            <rect x="104" y="98" width="6" height="15" rx="3" fill="#E2FF6F" filter="drop-shadow(0 0 3px #E2FF6F)" />
            {/* Embossed Letter Icon on Door */}
            <path d="M 90 98 L 98 105 L 106 98" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" fill="none" />
          </g>

          {/* Mailbox Top Curved Highlight */}
          <path d="M 95 62 C 135 53, 180 53, 208 62" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* The Animated Envelope (Glides inside) */}
        <div className="mailbox-flying-envelope">
          <svg width="68" height="44" viewBox="0 0 68 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.65))' }}>
            <rect x="1" y="1" width="66" height="42" rx="5" fill="#F8FAFC" stroke="#E2FF6F" strokeWidth="1.5" />
            <path d="M 2 42 L 26 22 L 2 2" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M 66 42 L 42 22 L 66 2" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M 2 42 L 66 42" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M 2 2 L 34 26 L 66 2 Z" fill="#F1F5F9" stroke="#E2FF6F" strokeWidth="1.2" />
            {/* Glowing Seal */}
            <circle cx="34" cy="25" r="5.5" fill="#E2FF6F" stroke="#059669" strokeWidth="1" />
            <path d="M 32 25 L 33.5 26.5 L 36.5 23.5" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Celebration Particle Sparks */}
        <div className="mailbox-sparkles-layer">
          <svg width="260" height="210" viewBox="0 0 260 210" fill="none">
            <circle cx="55" cy="48" r="3" fill="#E2FF6F" />
            <circle cx="225" cy="42" r="2.5" fill="#2DD4BF" />
            <circle cx="210" cy="170" r="3" fill="#E2FF6F" />
            <circle cx="42" cy="135" r="2" fill="#FBBF24" />
            <path d="M 130 18 L 132 23 L 137 25 L 132 27 L 130 32 L 128 27 L 123 25 L 128 23 Z" fill="#E2FF6F" />
            <path d="M 240 115 L 241.5 118.5 L 245 120 L 241.5 121.5 L 240 125 L 238.5 121.5 L 235 120 L 238.5 118.5 Z" fill="#2DD4BF" />
          </svg>
        </div>
      </div>

      {/* Confirmation Text & Button */}
      <div className="mailbox-delivery-info">
        <div className="mailbox-status-pill">
          <Check size={12} strokeWidth={3} />
          <span>Placed In Vimal's Mailbox</span>
        </div>

        <h3 className="mailbox-delivery-title">Message Delivered!</h3>
        <p className="mailbox-delivery-desc">
          {senderName ? (
            <>Thank you, <strong>{senderName}</strong>! Your envelope has been safely delivered. I'll get back to you shortly!</>
          ) : (
            <>Your letter has been placed in my mailbox. I'll read your note and get back to you soon!</>
          )}
        </p>

        <button
          type="button"
          onClick={onReset}
          className="mailbox-reset-btn"
        >
          <RotateCcw size={14} />
          <span>Send Another Message</span>
        </button>
      </div>
    </div>
  );
}
