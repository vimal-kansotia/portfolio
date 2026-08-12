import { useState, useRef, useEffect } from 'react';
import { Linkedin, Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % INSPIRATIONAL_QUOTES.length);
        setIsTransitioning(false);
      }, 500); // 500ms quantum shimmer morph transition
    }, 7000); // 7 Seconds per quote
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`glass contact-quote-card card-3d ${isTransitioning ? 'quantum-morphing' : ''}`}>
      <div className="quote-icon-box">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="quote-svg-icon">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className={`quote-text ${isTransitioning ? 'quantum-out' : 'quantum-in'}`}>
        "{INSPIRATIONAL_QUOTES[index]}"
      </p>
    </div>
  );
}

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
  const contactFormRef = useRef(null);

  const contactLinks = (contact && Array.isArray(contact.links) && contact.links.length > 0)
    ? contact.links
    : DEFAULT_CONTACT_LINKS;

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
        <span className="contact-template-eyebrow">{contact?.eyebrow || 'Get in Touch'}</span>
        <SectionHeading>
          {contact?.title ? contact.title.split(' ').slice(0, -1).join(' ') : 'Contact'}{' '}
          <span className="text-gradient-shimmer">{contact?.title ? contact.title.split(' ').slice(-1)[0] : 'Me'}</span>
        </SectionHeading>
        <p className="contact-template-subtitle">
          {contact?.subtitle || "Let's connect and build something amazing together."}
        </p>
      </div>

      <div className="contact-template-grid">
        <div className="contact-template-info">
          {contactLinks.map((link) => {
            const IconComp = CONTACT_ICON_MAP[link.iconKey] || Mail;
            const colorClass = ICON_COLOR_MAP[link.iconKey] || 'cyan';
            const isClickable = link.href && link.href !== '#contact';

            const cardContent = (
              <>
                <div className={`contact-icon-wrapper ${colorClass}`}>
                  <IconComp style={{ width: 24, height: 24 }} />
                </div>
                <div>
                  <h3 className="contact-card-title">{link.title}</h3>
                  <p className="contact-card-text">{link.text}</p>
                </div>
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
          className="glass-strong contact-form contact-template-form reveal-right"
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
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}