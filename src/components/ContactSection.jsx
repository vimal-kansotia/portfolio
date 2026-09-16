import { useState, useRef, useEffect } from 'react';
import { Linkedin, Mail, Phone, MapPin, Github, ExternalLink, Sparkles, ArrowUpRight, Send, Check, Copy } from 'lucide-react';

function SectionHeading({ children, className = '' }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

const INSPIRATIONAL_QUOTES = [
  "Data engineering is the bridge that connects broad business goals with detailed technical implementation.",
  "Data engineering does not have an end state, but it's a continual process of collecting, storing, processing, and analyzing data.",
  "Data that is loved tends to survive.",
  "Data engineering is about questioning existing data practices and innovating better solutions.",
  "In the world of data, the engineer is the architect of the future."
];

function QuoteCard() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % INSPIRATIONAL_QUOTES.length);
        setFade(true);
      }, 350);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="contact-quote-card">
      <div className="quote-icon-box">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="quote-svg-icon">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="quote-text" style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.35s ease' }}>
        "{INSPIRATIONAL_QUOTES[index]}"
      </p>
    </div>
  );
}

/* ─── Live Animated Logos for Contact Cards ─── */

function LinkedInLiveIcon() {
  return (
    <div className="live-logo-container linkedin-live">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="live-svg">
        <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" stroke="currentColor" strokeWidth="1.8" className="li-box" />
        <line x1="7.2" y1="10.5" x2="7.2" y2="17.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="7.2" cy="6.8" r="1.4" fill="currentColor" className="li-dot-bouncing" />
        <path
          d="M11.5 17.2V11.2C11.5 11.2 12.5 10.2 14.5 10.2C16.5 10.2 17 11.5 17 13.5V17.2"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="li-n-stem"
        />
        <line x1="11.5" y1="10.5" x2="11.5" y2="17.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function EmailLiveIcon() {
  return (
    <div className="live-logo-container email-live">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="live-svg email-svg">
        {/* Sliding Letter Paper */}
        <g className="env-letter">
          <rect x="5.5" y="4.5" width="13" height="7.5" rx="1.5" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.2" />
          <line x1="8" y1="7.5" x2="16" y2="7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
          <line x1="8" y1="9.8" x2="13.5" y2="9.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
        </g>
        {/* Envelope Base Body */}
        <rect x="2.5" y="6.5" width="19" height="13.5" rx="3" stroke="currentColor" strokeWidth="1.8" className="env-body" />
        {/* Inner Creases */}
        <path d="M3.2 19.5L9.5 13.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
        <path d="M20.8 19.5L14.5 13.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
        {/* Animated Opening Flap */}
        <path
          d="M3 7L12 13.8L21 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="env-flap"
        />
      </svg>
    </div>
  );
}

function GitHubLiveIcon() {
  return (
    <div className="live-logo-container github-live">
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="live-svg github-svg">
        {/* Cat Silhouette with Ears */}
        <path
          d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.198 8.839 21.52C9.339 21.611 9.52 21.303 9.52 21.037C9.52 20.798 9.511 19.99 9.507 19.152C6.726 19.756 6.139 17.812 6.139 17.812C5.685 16.657 5.03 16.35 5.03 16.35C4.122 15.73 5.099 15.742 5.099 15.742C6.102 15.813 6.63 16.772 6.63 16.772C7.522 18.298 8.966 17.859 9.537 17.603C9.628 16.956 9.887 16.516 10.173 16.265C7.953 16.013 5.62 15.155 5.62 11.328C5.62 10.237 6.01 9.345 6.65 8.647C6.547 8.395 6.204 7.378 6.748 6.002C6.748 6.002 7.587 5.733 9.496 7.027C10.293 6.805 11.147 6.694 12 6.69C12.853 6.694 13.708 6.805 14.506 7.027C16.413 5.733 17.25 6.002 17.25 6.002C17.796 7.378 17.453 8.395 17.351 8.647C17.993 9.345 18.379 10.237 18.379 11.328C18.379 15.166 16.041 16.009 13.814 16.257C14.172 16.566 14.491 17.177 14.491 18.113C14.491 19.458 14.479 20.542 14.479 20.87C14.479 21.139 14.657 21.452 15.167 21.352C19.138 20.024 22 16.273 22 12.017C22 6.484 17.523 2 12 2Z"
          fill="currentColor"
          className="octo-body"
        />

        {/* Articulated Waving Cat Paw */}
        <g className="octo-waving-paw">
          <path
            d="M17.2 7.5C18.9 5.8 20.9 5.4 21.6 6.1C22.3 6.8 21.7 8.8 20 10.3C19.1 11.1 18 11.4 17.1 10.9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="currentColor"
            fillOpacity="0.35"
          />
          <circle cx="20.6" cy="7.2" r="0.9" fill="#FFFFFF" />
          <circle cx="19.4" cy="6.4" r="0.6" fill="#FFFFFF" />
          <circle cx="21.3" cy="8.4" r="0.6" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}

function LocationLiveIcon() {
  return (
    <div className="live-logo-container location-live">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="live-svg location-svg">
        {/* Expanding Radar Sonar Waves beneath the pin tip */}
        <ellipse cx="12" cy="20.5" rx="5.5" ry="2" className="loc-radar-wave wave-1" />
        <ellipse cx="12" cy="20.5" rx="3.5" ry="1.2" className="loc-radar-wave wave-2" />

        {/* Buoyant Animated Map Pin */}
        <g className="loc-pin-group">
          <path
            d="M12 2C8.134 2 5 5.134 5 9C5 14.25 12 20.5 12 20.5C12 20.5 19 14.25 19 9C19 5.134 15.866 2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loc-pin-body"
          />
          {/* Pulsing Beacon Core */}
          <circle cx="12" cy="9" r="2.5" fill="currentColor" className="loc-pin-core" />
        </g>
      </svg>
    </div>
  );
}

function SendAirplaneLogo({ isSubmitting }) {
  return (
    <span className={`send-airplane-logo ${isSubmitting ? 'is-launching' : ''}`} aria-hidden="true">
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        className="airplane-svg"
      >
        {/* Main Aerodynamic Paper Wing */}
        <polygon
          points="22,2 15,22 11,13 2,9"
          fill="currentColor"
          opacity="0.95"
        />
        {/* Shaded Underwing Crease */}
        <polygon
          points="22,2 11,13 2,9"
          fill="rgba(0, 0, 0, 0.22)"
        />
        {/* Center Spine Line */}
        <line
          x1="22"
          y1="2"
          x2="11"
          y2="13"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}

const LIVE_ICON_MAP = {
  linkedin: LinkedInLiveIcon,
  mail: EmailLiveIcon,
  github: GitHubLiveIcon,
  'map-pin': LocationLiveIcon,
};

const CONTACT_ICON_MAP = {
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
  github: Github,
  'external-link': ExternalLink,
};

const ICON_COLOR_MAP = {
  linkedin: 'cyan',
  mail: 'cyan',
  phone: 'purple',
  'map-pin': 'pink',
  github: 'cyan',
  'external-link': 'purple',
};

const DEFAULT_CONTACT_LINKS = [
  { id: 'link-linkedin', title: 'LinkedIn', text: 'vimal-kansotia-586665231', href: 'https://www.linkedin.com/in/vimal-kansotia-586665231/', iconKey: 'linkedin' },
  { id: 'link-email', title: 'Email Me', text: 'kansotiavimal4@gmail.com', href: 'mailto:kansotiavimal4@gmail.com', iconKey: 'mail' },
  { id: 'link-github', title: 'GitHub', text: 'vimal-kansotia', href: 'https://github.com/vimal-kansotia', iconKey: 'github' },
  { id: 'link-location', title: 'Location', text: 'Mumbai, Maharashtra, India', href: '', iconKey: 'map-pin' }
];

export default function ContactSection({ contact }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ kind: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const contactFormRef = useRef(null);

  const contactLinks = (contact && Array.isArray(contact.links) && contact.links.length > 0)
    ? contact.links
    : DEFAULT_CONTACT_LINKS;

  const copyEmailToClipboard = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ kind: '', message: '' });

    const formData = new FormData(contactFormRef.current);

    try {
      const response = await fetch('https://formspree.io/f/xzepedjy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ kind: 'success', message: "Thanks! I'll get back to you soon." });
        contactFormRef.current?.reset();
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setStatus({ kind: 'error', message: data.errors.map(error => error.message).join(', ') });
        } else {
          setStatus({ kind: 'error', message: 'Message failed to send. Please try email or LinkedIn directly.' });
        }
      }
    } catch (error) {
      setStatus({ kind: 'error', message: 'Message failed to send. Please try email or LinkedIn directly.' });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-template">
      <div className="contact-template-header">
        <div className="contact-eyebrow-container">
          <span className="contact-eyebrow-pill">
            <Sparkles size={13} className="contact-eyebrow-icon" />
            <span className="contact-eyebrow">{contact?.eyebrow || 'Get in Touch'}</span>
          </span>
        </div>
        <SectionHeading>
          <span className="text-gradient-shimmer">{contact?.title || 'Get In Touch'}</span>
        </SectionHeading>
        <p className="contact-template-subtitle">
          {contact?.subtitle || "Let's connect and build something amazing together."}
        </p>
      </div>

      <div className="contact-template-grid">
        <div className="contact-template-info">
          {contactLinks.map((link) => {
            const LiveIconComp = LIVE_ICON_MAP[link.iconKey] || CONTACT_ICON_MAP[link.iconKey] || Mail;
            const isClickable = link.href && link.href !== '#contact';
            const isEmail = link.iconKey === 'mail' || link.href?.startsWith('mailto:');
            const isLocation = link.iconKey === 'map-pin';

            const cardContent = (
              <>
                <div className="contact-icon-wrapper">
                  <LiveIconComp />
                </div>
                <div className="contact-card-info-content">
                  <div className="contact-card-header-row">
                    <h3 className="contact-card-title">{link.title}</h3>
                    {isLocation && (
                      <span className="contact-status-badge">
                        <span className="contact-status-dot" />
                        Available
                      </span>
                    )}
                  </div>
                  <p className="contact-card-text">{link.text}</p>
                </div>

                {isEmail && (
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={(e) => copyEmailToClipboard(e, link.text)}
                    aria-label="Copy email address"
                    title={copiedEmail ? "Copied!" : "Copy email to clipboard"}
                  >
                    {copiedEmail ? <Check size={16} className="contact-copy-success" /> : <Copy size={16} />}
                  </button>
                )}

                {isClickable && !isEmail && (
                  <ArrowUpRight size={18} className="contact-card-arrow" />
                )}
              </>
            );

            if (isClickable) {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="glass contact-card card-3d"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={link.id} className="glass contact-card card-3d">
                {cardContent}
              </div>
            );
          })}

          {/* Dynamic Inspirational Tech Quote Card */}
          <QuoteCard />
        </div>

        <form
          ref={contactFormRef}
          onSubmit={handleSubmit}
          className="glass-strong contact-form contact-template-form"
        >
          <h4 className="github-linkout-style">🤝 SAY HELLO</h4>

          <div className="form-group">
            <label className="form-label" htmlFor="from_name">Your Name</label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              required
              placeholder="Your name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="from_email">Your Email</label>
            <input
              id="from_email"
              type="email"
              name="from_email"
              required
              placeholder="your@gmail.com"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="What's on your mind?"
              className="form-input"
              style={{ resize: 'none' }}
            />
          </div>

          {status.message && (
            <div className={`form-status ${status.kind}`}>
              {status.message}
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-submit">
            <SendAirplaneLogo isSubmitting={isSubmitting} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}