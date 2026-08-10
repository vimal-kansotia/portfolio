import { useState, useRef } from 'react';
import { Linkedin, Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

function SectionHeading({ children, className = '' }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
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
  { id: 'link-linkedin', title: 'LinkedIn', text: 'vimal-kansotia', href: 'https://www.linkedin.com/in/vimal-kansotia/', iconKey: 'linkedin' },
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
        </div>

        <form
          ref={contactFormRef}
          onSubmit={handleSubmit}
          className="glass-strong contact-form contact-template-form reveal-right"
        >
          <h3 className="form-title">Send a Message</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="from_name">Your Name</label>
            <input id="from_name" type="text" name="from_name" required className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="from_email">Your Email</label>
            <input id="from_email" type="email" name="from_email" required className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required className="form-input" style={{ resize: 'vertical' }} />
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